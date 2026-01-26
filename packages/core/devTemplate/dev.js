// Dev template JavaScript
// Handles config URL params, visualization reloading, and sidebar

// Apply config override from ?config= URL parameter (must happen before React loads)
const params = new URLSearchParams(window.location.search)
const configParam = params.get('config')
if (configParam) {
  document.querySelector('.react-container').setAttribute('data-config', configParam)
}

// Load the visualization component
await import('./src/index')

// Reload visualization without page refresh
window.reloadVisualization = async configUrl => {
  const wrapper = document.getElementById('viz-wrapper')
  wrapper.innerHTML = `<div class="react-container" data-config="${configUrl}"></div>`
  await import(/* @vite-ignore */ `./src/index?t=${Date.now()}`)
}

// Initialize sidebar by default (hide with ?sidebar=false, or for editor package)
// __COVE_PACKAGE_NAME__ is injected by Vite's define option in generateViteConfig.js
const sidebarDisabled = params.get('sidebar') === 'false' || __COVE_PACKAGE_NAME__ === 'CdcEditor'
if (!sidebarDisabled) {
  document.body.classList.add('has-sidebar')

  // Fetch examples list
  const response = await fetch('/__examples')
  const examples = await response.json()

  // Get current config
  const currentConfig = configParam || '/examples/default.json'

  // Build sidebar HTML
  const sidebarRoot = document.getElementById('dev-sidebar-root')

  // Group files by directory
  const tree = { files: [], dirs: {} }
  examples.forEach(file => {
    const parts = file.split('/')
    if (parts.length === 1) {
      tree.files.push(file)
    } else {
      const dir = parts[0]
      if (!tree.dirs[dir]) tree.dirs[dir] = []
      tree.dirs[dir].push(parts.slice(1).join('/'))
    }
  })

  const caseInsensitiveSort = (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })

  let html = '<nav class="dev-sidebar"><div class="dev-sidebar-header">Examples</div><div class="dev-sidebar-tree">'

  // Render root files
  tree.files.sort(caseInsensitiveSort).forEach(file => {
    const configPath = '/examples/' + file
    const isActive = configPath === currentConfig ? ' active' : ''
    html += `<button class="dev-sidebar-item${isActive}" data-config="${configPath}">${file}</button>`
  })

  // Render directories
  Object.keys(tree.dirs)
    .sort(caseInsensitiveSort)
    .forEach(dir => {
      const isOpen = currentConfig.includes('/examples/' + dir + '/') ? ' open' : ''
      html += `<div class="dev-sidebar-folder${isOpen}">${dir}</div><div class="dev-sidebar-folder-contents">`
      tree.dirs[dir].sort(caseInsensitiveSort).forEach(file => {
        const configPath = '/examples/' + dir + '/' + file
        const isActive = configPath === currentConfig ? ' active' : ''
        html += `<button class="dev-sidebar-item${isActive}" data-config="${configPath}">${file}</button>`
      })
      html += '</div>'
    })

  html += '</div></nav>'
  sidebarRoot.innerHTML = html

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
}
