// Dev template JavaScript
// Handles config URL params, visualization reloading, and sidebar

// Apply config override from ?config= URL parameter (must happen before React loads)
const params = new URLSearchParams(window.location.search)
const configParam = params.get('config')
let editorEnabled = params.get('editor') === 'true'
const previewEnabled = params.get('preview') === 'true'
const sectionGapParam = params.get('sectionGap')

if (sectionGapParam) {
  const numericGap = Number(sectionGapParam)
  if (!Number.isNaN(numericGap) && numericGap >= 0) {
    document.documentElement.style.setProperty('--cove-visualization-section-gap', `${numericGap}px`)
  }
}

window.addEventListener('message', event => {
  const { data } = event
  if (!data || data.type !== 'cove:setSectionGap') return

  const numericGap = Number(data.value)
  if (Number.isNaN(numericGap) || numericGap < 0) return

  document.documentElement.style.setProperty('--cove-visualization-section-gap', `${numericGap}px`)
})

if (configParam) {
  document.querySelector('.react-container').setAttribute('data-config', configParam)
}
if (editorEnabled) {
  document.querySelector('.react-container').setAttribute('data-editor', 'true')
}

// Load the visualization component
await import('./src/index')

// Reload visualization without page refresh
window.reloadVisualization = async configUrl => {
  const wrapper = document.getElementById('viz-wrapper')
  const editorAttr = editorEnabled ? ' data-editor="true"' : ''
  wrapper.innerHTML = `<div class="react-container" data-config="${configUrl}"${editorAttr}></div>`
  await import(/* @vite-ignore */ `./src/index?t=${Date.now()}`)
}

// Initialize sidebar by default (hide with ?sidebar=false, or for editor package)
// __COVE_PACKAGE_NAME__ is injected by Vite's define option in generateViteConfig.js
const sidebarDisabled = params.get('sidebar') === 'false' || __COVE_PACKAGE_NAME__ === 'CdcEditor'
if (sidebarDisabled) {
  // Remove sidebar margin (the inline script in the HTML template pre-allocates it for ?sidebar!=false,
  // but CdcEditor also disables the sidebar without that param)
  document.body.style.marginLeft = ''
}
if (!sidebarDisabled) {
  document.body.classList.add('has-sidebar')

  // Fetch examples list
  const response = await fetch('/__examples')
  const examples = await response.json()

  // Get current config
  const currentConfig = configParam || '/examples/default.json'

  // Build sidebar HTML
  const sidebarRoot = document.getElementById('dev-sidebar-root')

  // Build a recursive tree structure for arbitrary nesting depth
  const buildTree = files => {
    const tree = { files: [], dirs: {} }
    files.forEach(file => {
      const parts = file.split('/')
      if (parts.length === 1) {
        tree.files.push(file)
      } else {
        const dir = parts[0]
        if (!tree.dirs[dir]) tree.dirs[dir] = []
        tree.dirs[dir].push(parts.slice(1).join('/'))
      }
    })
    // Recursively build subtrees for each directory
    Object.keys(tree.dirs).forEach(dir => {
      tree.dirs[dir] = buildTree(tree.dirs[dir])
    })
    return tree
  }

  const tree = buildTree(examples)

  const caseInsensitiveSort = (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })

  // Recursive function to render tree at any depth
  const renderTree = (node, pathPrefix) => {
    let html = ''

    // Render files at this level
    node.files.sort(caseInsensitiveSort).forEach(file => {
      const configPath = pathPrefix + file
      const isActive = configPath === currentConfig ? ' active' : ''
      html += `<button class="dev-sidebar-item${isActive}" data-config="${configPath}">${file}</button>`
    })

    // Render subdirectories recursively
    Object.keys(node.dirs)
      .sort(caseInsensitiveSort)
      .forEach(dir => {
        const dirPath = pathPrefix + dir + '/'
        const isOpen = currentConfig.startsWith(dirPath) ? ' open' : ''
        html += `<div class="dev-sidebar-folder${isOpen}" data-folder-path="${dirPath}">${dir}</div>`
        html += '<div class="dev-sidebar-folder-contents">'
        html += renderTree(node.dirs[dir], dirPath)
        html += '</div>'
      })

    return html
  }

  // Format package name for display (e.g., "CdcChart" -> "Chart", "CdcMap" -> "Map")
  const formatPackageName = name => {
    if (!name) return ''
    return name
      .replace(/^Cdc/, '')
      .replace(/([A-Z])/g, ' $1')
      .trim()
  }
  const packageDisplayName = formatPackageName(__COVE_PACKAGE_NAME__)

  const editorToggleClass = editorEnabled ? ' active' : ''
  const previewToggleClass = previewEnabled ? ' active' : ''
  let html = '<nav class="dev-sidebar">'
  html += `<div class="dev-sidebar-header"><span>${packageDisplayName} Examples</span><div class="dev-sidebar-toggles"><button class="dev-sidebar-toggle${previewToggleClass}" id="dev-preview-toggle" title="Toggle CDC Page Preview"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 1.5h7l3.5 3.5V14a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5z"/><path d="M10 1.5V5h3.5"/></svg></button><button class="dev-sidebar-toggle dev-sidebar-editor-toggle${editorToggleClass}" id="dev-editor-toggle" title="Toggle Editor">⚙</button></div></div>`
  html +=
    '<div class="dev-sidebar-search"><input type="text" id="dev-sidebar-search-input" placeholder="Search examples..." /></div>'
  html += '<div class="dev-sidebar-tree">'
  html += renderTree(tree, '/examples/')
  html += '</div></nav>'
  sidebarRoot.innerHTML = html

  // Search functionality
  const searchInput = document.getElementById('dev-sidebar-search-input')
  searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase()
    const items = sidebarRoot.querySelectorAll('.dev-sidebar-item')
    const folders = sidebarRoot.querySelectorAll('.dev-sidebar-folder')

    if (!query) {
      // Reset: show all items, collapse folders (except those with active item)
      items.forEach(item => (item.style.display = ''))
      folders.forEach(folder => {
        folder.style.display = ''
        if (!folder.nextElementSibling?.querySelector('.active')) {
          folder.classList.remove('open')
        }
      })
      return
    }

    // Split query into tokens - all must match (in any order)
    const tokens = query.split(/\s+/).filter(t => t)
    const matchesAllTokens = text => tokens.every(token => text.includes(token))

    // First pass: find folders that match the query
    const matchingFolderPaths = new Set()
    folders.forEach(folder => {
      const folderName = folder.textContent.toLowerCase()
      if (matchesAllTokens(folderName)) {
        matchingFolderPaths.add(folder.dataset.folderPath)
      }
    })

    // Filter items: show if item matches OR is inside a matching folder
    items.forEach(item => {
      const configPath = item.dataset.config
      const itemMatches = matchesAllTokens(item.textContent.toLowerCase())
      const inMatchingFolder = [...matchingFolderPaths].some(folderPath => configPath.startsWith(folderPath))
      item.style.display = itemMatches || inMatchingFolder ? '' : 'none'
    })

    // Show/hide folders based on whether they match or have visible children
    folders.forEach(folder => {
      const folderPath = folder.dataset.folderPath
      const folderMatches = matchingFolderPaths.has(folderPath)
      const contents = folder.nextElementSibling
      const hasVisibleChildren = contents?.querySelector('.dev-sidebar-item:not([style*="display: none"])')
      folder.style.display = folderMatches || hasVisibleChildren ? '' : 'none'
      if (folderMatches || hasVisibleChildren) {
        folder.classList.add('open')
      }
    })
  })

  // Click handlers for files
  sidebarRoot.querySelectorAll('.dev-sidebar-item').forEach(btn => {
    btn.addEventListener('click', async () => {
      const configPath = btn.dataset.config

      // Update active state
      sidebarRoot.querySelectorAll('.dev-sidebar-item').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      // Update URL without reload - keep clean if selecting default
      const url = new URL(window.location)
      if (configPath === '/examples/default.json') {
        url.searchParams.delete('config')
      } else {
        url.searchParams.set('config', configPath)
      }
      history.pushState({}, '', url.toString().replace(/%2F/g, '/'))

      // Reload visualization
      await window.reloadVisualization(configPath)
    })
  })

  // Click handlers for folders
  sidebarRoot.querySelectorAll('.dev-sidebar-folder').forEach(folder => {
    folder.addEventListener('click', () => {
      folder.classList.toggle('open')
    })
  })

  // Editor toggle handler
  const editorToggle = document.getElementById('dev-editor-toggle')
  editorToggle.addEventListener('click', async () => {
    editorEnabled = !editorEnabled
    editorToggle.classList.toggle('active', editorEnabled)

    // Update URL
    const url = new URL(window.location)
    if (editorEnabled) {
      url.searchParams.set('editor', 'true')
    } else {
      url.searchParams.delete('editor')
    }
    history.pushState({}, '', url.toString().replace(/%2F/g, '/'))

    // Reload visualization with new editor state
    const currentConfig =
      document.querySelector('.react-container')?.getAttribute('data-config') || '/examples/default.json'
    await window.reloadVisualization(currentConfig)
  })

  // Preview toggle handler - full page reload since server needs to serve different HTML
  const previewToggle = document.getElementById('dev-preview-toggle')
  previewToggle.addEventListener('click', () => {
    const url = new URL(window.location)
    if (previewEnabled) {
      url.searchParams.delete('preview')
    } else {
      url.searchParams.set('preview', 'true')
    }
    window.location.href = url.toString().replace(/%2F/g, '/')
  })
}
