import type { Meta } from '@storybook/react'
import { mapColorPalettesV2, colorPalettesChartV2, twoColorPalette, sequentialPalettes } from '../../../data/colorPalettes'

// Get the v2 palettes for consistency
const twoColorPaletteV2 = twoColorPalette.v2

const meta: Meta = {
  title: 'Components/Atoms/Colors',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '20px' }}>
          <h1>Color Palettes</h1>
          <p>This guide showcases all available color palettes in the CDC Open Viz system.</p>

          <h2>Qualitative Palettes</h2>
          <p>These palettes are designed for categorical data where each color represents a different category.</p>

          <h3>Chart Palettes</h3>
          {Object.entries(colorPalettesChartV2).map(([name, colors]) => (
            <div key={name} style={{ marginBottom: '20px' }}>
              <h4 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{name.replace(/-/g, ' ')}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex' }}>
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: color,
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        color: index < 3 ? '#000' : '#fff'
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <code style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                  {colors.join(', ')}
                </code>
              </div>
            </div>
          ))}

          <h3>Sequential Palettes</h3>
          <p>These palettes are designed for ordered data that progresses from low to high values.</p>
          {Object.entries(sequentialPalettes).map(([name, colors]) => (
            <div key={name} style={{ marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>{name}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex' }}>
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: color,
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        color: index < colors.length / 2 ? '#000' : '#fff'
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <code style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                  {colors.join(', ')}
                </code>
              </div>
            </div>
          ))}

          <h3>Two-Color Palettes</h3>
          <p>These palettes are designed for paired comparisons and side-by-side visualizations.</p>
          {Object.entries(twoColorPaletteV2).map(([name, colors]) => (
            <div key={name} style={{ marginBottom: '20px' }}>
              <h4 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{name.replace(/-/g, ' ')}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex' }}>
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: '60px',
                        height: '40px',
                        backgroundColor: color,
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        color: '#fff',
                        textShadow: '1px 1px 1px rgba(0,0,0,0.7)'
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <code style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
                  {colors.join(', ')}
                </code>
              </div>
            </div>
          ))}

          <h2>Map Palettes</h2>
          <p>These palettes are primarily used for geographic visualizations and maps.</p>
          {Object.entries(mapColorPalettesV2).map(([name, colors]) => (
            <div key={name} style={{ marginBottom: '20px' }}>
              <h4 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex' }}>
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: '30px',
                        height: '40px',
                        backgroundColor: color,
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '8px',
                        color: index < colors.length / 2 ? '#000' : '#fff'
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <code style={{ marginLeft: '10px', fontSize: '11px', color: '#666' }}>
                  [{colors.slice(0, 3).join(', ')}...] ({colors.length} colors)
                </code>
              </div>
            </div>
          ))}

          <h2>Usage Guidelines</h2>
          <ul>
            <li><strong>Accessibility</strong>: All palettes are designed to meet WCAG accessibility guidelines</li>
            <li><strong>Color Blind Friendly</strong>: The "colorblindsafe" palette is specifically designed for color blind users</li>
            <li><strong>Sequential Data</strong>: Use sequential palettes for ordered data (low to high values)</li>
            <li><strong>Categorical Data</strong>: Use qualitative palettes for distinct categories</li>
            <li><strong>Comparisons</strong>: Use two-color palettes for side-by-side comparisons</li>
            <li><strong>Geographic Data</strong>: Use map palettes for choropleth and geographic visualizations</li>
          </ul>

          <h2>Implementation</h2>
          <p>Import color palettes in your components:</p>
          <pre><code>{`import { mapColorPalettesV2, colorPalettesChartV2, twoColorPalette, sequentialPalettes } from '@cdc/core/data/colorPalettes'

// Use in your visualization
const colors = colorPalettesChartV2['qualitative-bold']
const twoColors = twoColorPalette.v2['divergent-blue-orange']
const mapColors = mapColorPalettesV2.sequential_blue`}</code></pre>
        </div>
      )
    }
  }
}

export default meta

export const Guide = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h1>Color Palettes</h1>
      <p>This guide showcases all available color palettes in the CDC Open Viz system.</p>

      <h2>Qualitative Palettes</h2>
      <p>These palettes are designed for categorical data where each color represents a different category.</p>

      <h3>Chart Palettes</h3>
      {Object.entries(colorPalettesChartV2).map(([name, colors]) => (
        <div key={name} style={{ marginBottom: '20px' }}>
          <h4 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{name.replace(/-/g, ' ')}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: index < 3 ? '#000' : '#fff'
                  }}
                  title={color}
                />
              ))}
            </div>
            <code style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
              {colors.join(', ')}
            </code>
          </div>
        </div>
      ))}

      <h3>Sequential Palettes</h3>
      <p>These palettes are designed for ordered data that progresses from low to high values.</p>
      {Object.entries(sequentialPalettes).map(([name, colors]) => (
        <div key={name} style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px' }}>{name}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: index < colors.length / 2 ? '#000' : '#fff'
                  }}
                  title={color}
                />
              ))}
            </div>
            <code style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
              {colors.join(', ')}
            </code>
          </div>
        </div>
      ))}

      <h3>Two-Color Palettes</h3>
      <p>These palettes are designed for paired comparisons and side-by-side visualizations.</p>
      {Object.entries(twoColorPaletteV2).map(([name, colors]) => (
        <div key={name} style={{ marginBottom: '20px' }}>
          <h4 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{name.replace(/-/g, ' ')}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '60px',
                    height: '40px',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: '#fff',
                    textShadow: '1px 1px 1px rgba(0,0,0,0.7)'
                  }}
                  title={color}
                />
              ))}
            </div>
            <code style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}>
              {colors.join(', ')}
            </code>
          </div>
        </div>
      ))}

      <h2>Map Palettes</h2>
      <p>These palettes are primarily used for geographic visualizations and maps.</p>
      {Object.entries(mapColorPalettesV2).map(([name, colors]) => (
        <div key={name} style={{ marginBottom: '20px' }}>
          <h4 style={{ textTransform: 'capitalize', marginBottom: '10px' }}>{name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '30px',
                    height: '40px',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '8px',
                    color: index < colors.length / 2 ? '#000' : '#fff'
                  }}
                  title={color}
                />
              ))}
            </div>
            <code style={{ marginLeft: '10px', fontSize: '11px', color: '#666' }}>
              [{colors.slice(0, 3).join(', ')}...] ({colors.length} colors)
            </code>
          </div>
        </div>
      ))}

      <h2>Usage Guidelines</h2>
      <ul>
        <li><strong>Accessibility</strong>: All palettes are designed to meet WCAG accessibility guidelines</li>
        <li><strong>Color Blind Friendly</strong>: The "colorblindsafe" palette is specifically designed for color blind users</li>
        <li><strong>Sequential Data</strong>: Use sequential palettes for ordered data (low to high values)</li>
        <li><strong>Categorical Data</strong>: Use qualitative palettes for distinct categories</li>
        <li><strong>Comparisons</strong>: Use two-color palettes for side-by-side comparisons</li>
        <li><strong>Geographic Data</strong>: Use map palettes for choropleth and geographic visualizations</li>
      </ul>

      <h2>Implementation</h2>
      <p>Import color palettes in your components:</p>
      <pre><code>{`import { mapColorPalettesV2, colorPalettesChartV2, twoColorPalette, sequentialPalettes } from '@cdc/core/data/colorPalettes'

// Use in your visualization
const colors = colorPalettesChartV2['qualitative-bold']
const twoColors = twoColorPalette.v2['divergent-blue-orange']
const mapColors = mapColorPalettesV2.sequential_blue`}</code></pre>
    </div>
  )
}