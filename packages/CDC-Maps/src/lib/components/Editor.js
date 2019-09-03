import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
const ReactTags = require('react-tag-autocomplete');

class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.headerColors = ['theme-blue','theme-purple','theme-brown','theme-teal','theme-pink','theme-orange','theme-slate','theme-indigo','theme-cyan','theme-green','theme-amber']
  }

  render() {

    const sortableItemStyles = {
      display:"block",
      boxSizing:"border-box",
      border:"1px solid #D1D1D1",
      borderRadius:"2px",
      background:"#F1F1F1",
      padding:".4em .6em",
      fontSize:".8em",
      marginRight:".3em",
      marginBottom:".3em",
      cursor:"move",
      zIndex:"999"
    }

    const SortableItem = SortableElement(({value, index}) => <li style={sortableItemStyles}>{value}</li>);

    const SortableList = SortableContainer(({items}) => {
      if(undefined === items) {
        return (<div></div>)
      }

      return (
          <ul className="sort-list">
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
          </ul>
      )
    });


    // Generate all columns available by looping through the data - add a blank value at the top
    const columnsInData = [""]

    this.props.state.data.forEach( (row) => {

      Object.keys(row).forEach( (columnName) => {
        if(false === columnsInData.includes(columnName)) {
          columnsInData.push(columnName)
        }
      })

    } )

    const columnsOptions = columnsInData.map( (name) => {

      if("" === name) {
        return (<option value="" key={"Select Option"}>- Select Option -</option>)
      }

      return (<option value={name} key={name}>{name}</option>)
    })


    const specialClasses = []

    if("" !== this.props.state.legend.specialClasses[0]) {
      this.props.state.legend.specialClasses.forEach( (specialClass, index) => {
        specialClasses.push({id: index, name: specialClass})
      })
    }

    const additionalColumns = Object.keys(this.props.state.columns).filter( (value) => {
      if( value === "geo" || value === "navigate" || value === "primary" ) {
        return false
      }
      return true
    })

    const filters = this.props.state.filters.map( (filter, index) => {
      return (
          <fieldset className="edit-block">
            <button className="remove-column" onClick={(event) => { event.preventDefault(); this.props.changeFilter(index, "remove")}}>Remove</button>
            <label>
              <span className="edit-label column-heading">Filter</span>
              <select value={filter.columnName} onChange={(event) => { this.props.changeFilter(index, "columnName", event.target.value) }}>
                {columnsOptions}
              </select>
            </label>
            <label>
              <span className="edit-label">Label</span>
              <input type="text" value={filter.label} onChange={(event) => { this.props.changeFilter(index, "label", event.target.value) }} />
            </label>
          </fieldset>
    )
    })

    return (
        <section className={this.props.state.editor.expanded ? 'editor-sidebar' : 'hidden editor-sidebar'}>
        <h2>Map Editor <button className="editor-toggle" title="Collapse Editor" onClick={() => { this.props.toggleEditor() }}></button></h2>
        <form>
          <Accordion>
            <AccordionItem> {/* Data */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  Data
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ul className="data-toggle">
                  <li className={ this.props.state.editor.dataSource === "local" ? "active" : ""} onClick={ (event) => { this.props.handleEditorChanges("toggleDataSource", "local") } }>
                    <label>
                      <span className="edit-label column-heading">Local File</span>
                      <input type="file"
                             ref={this.fileInput}
                             id="file" name="file"
                             onChange={() => {

                               const file = this.fileInput.current.files[0];

                               const extension = file.name.split('.').pop().toLowerCase()

                               if(false === ['csv','json'].includes(extension)) {
                                 alert("Wrong file type! File must be a .csv or .json file.");
                               }

                               const reader = new FileReader();

                               reader.readAsText(file, "UTF-8");

                               reader.onload = (evt) => {
                                 this.props.handleEditorChanges("loadFileData", [evt.target.result, extension])
                               }

                             }}
                             />
                    </label>
                  </li>
                  <li className={ this.props.state.editor.dataSource === "url" ? "active" : ""} onClick={ (event) => { this.props.handleEditorChanges("toggleDataSource", "url") } }>
                    <label>
                      <span className="edit-label column-heading">URL</span>
                      <input type="text" placeholder="http://" value={this.props.state.dataUrl || ''} onChange={(event) => { this.props.handleEditorChanges("editorDataUrl", event.target.value) }} />
                    </label>
                    <label className="checkbox">
                      <input type="checkbox" checked={ this.props.state.editor.keepUrl || false } onChange={(event) => { this.props.handleEditorChanges("editorKeepUrl", event.target.checked) }} />
                      <span className="edit-label">Always fetch from url</span>
                    </label>
                  </li>
                </ul>
                <button className="blue-block" onClick={(e) => { e.preventDefault(); this.props.editorLoadData()}}>Load Data</button>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem> {/* General */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  General
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <label>
                  <span className="edit-label">Title</span>
                  <input type="text" value={this.props.state.general.title || ""} onChange={(event) => { this.props.handleEditorChanges("title", event.target.value) }} />
                </label>
                <label>
                  <span className="edit-label">Subtext</span>
                  <textarea value={this.props.state.general.subtext || ""} onChange={(event) => { this.props.handleEditorChanges("subtext", event.target.value) }} />
                </label>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem> {/* Columns */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  Columns
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <label className="edit-block geo">
                  <span className="edit-label column-heading">Geography*</span>
                  <select value={this.props.state.columns.geo ? this.props.state.columns.geo.name : columnsOptions[0] } onChange={(event) => { this.props.editColumn("geo", "name", event.target.value) }}>
                    {columnsOptions}
                  </select>
                </label>
                <label className="edit-block navigate column-heading">
                  <span className="edit-label column-heading">Navigation</span>
                  <select value={this.props.state.columns.navigate ? this.props.state.columns.navigate.name : columnsOptions[0] } onChange={(event) => { this.props.editColumn("navigate", "name", event.target.value) }}>
                    {columnsOptions}
                  </select>
                </label>
                <fieldset className="primary-fieldset edit-block">
                  <label>
                    <span className="edit-label column-heading">Primary*</span>
                    <select value={this.props.state.columns.primary ? this.props.state.columns.primary.name : columnsOptions[0] } onChange={(event) => { this.props.editColumn("primary", "name", event.target.value) }}>
                      {columnsOptions}
                    </select>
                  </label>
                  <label>
                    <span className="edit-label">Label</span>
                    <input type="text" value={this.props.state.columns.primary.label || ""} onChange={(event) => { this.props.editColumn("primary", "label", event.target.value) }} />
                  </label>
                  <ul className="column-edit">
                    <li className="three-col">
                      <label className="prefix">
                        <span className="edit-label">Prefix</span>
                        <input type="text" value={this.props.state.columns.primary.prefix || ""} onChange={(event) => { this.props.editColumn("primary", "prefix", event.target.value) }} />
                      </label>
                      <label className="suffix">
                        <span className="edit-label">Suffix</span>
                        <input type="text" value={this.props.state.columns.primary.suffix || ""} onChange={(event) => { this.props.editColumn("primary", "suffix", event.target.value) }} />
                      </label>
                      <label className="round">
                        <span className="edit-label">Round</span>
                        <input type="number" min="0" value={this.props.state.columns.primary.hasOwnProperty('roundToPlace') ? this.props.state.columns.primary.roundToPlace : "" } onChange={(event) => { this.props.editColumn("primary", "roundToPlace", event.target.value.length === 0 ? "None" : parseFloat( event.target.value ) ) }} />
                      </label>
                    </li>
                    <li>
                      <label className="checkbox">
                        <input type="checkbox" checked={ this.props.state.columns.primary.dataTable || false} onChange={(event) => { this.props.editColumn("primary", "dataTable", event.target.checked) }} />
                        <span className="edit-label">Display in Data Table</span>
                      </label>
                    </li>
                    <li>
                      <label className="checkbox">
                        <input type="checkbox" checked={ this.props.state.columns.primary.tooltip || false} onChange={(event) => { this.props.editColumn("primary", "tooltip", event.target.checked) }} />
                        <span className="edit-label">Display in Tooltips</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <span className="edit-label">Special Classes</span>
                      </label>
                        <ReactTags
                            placeholder="Separate by comma"
                            delimiters={[188,9,13]}
                            allowNew={true}
                            minQueryLength={1}
                            tags={specialClasses}
                            handleDelete={(event) => { this.props.editColumn("primary", "specialClassDelete", event) }}
                            handleAddition={(value) => { this.props.editColumn("primary", "specialClassAdd", value) }}
                        />
                    </li>
                  </ul>
                </fieldset>
                {additionalColumns.map((val) => (
                    <fieldset className="edit-block" key={val}>
                      <button className="remove-column" onClick={(event) => { event.preventDefault(); this.props.removeAdditionalColumn(val)}}>Remove</button>
                      <label>
                        <span className="edit-label column-heading">Column</span>
                        <select value={this.props.state.columns[val] ? this.props.state.columns[val].name : columnsOptions[0] } onChange={(event) => { this.props.editColumn(val, "name", event.target.value) }}>
                          {columnsOptions}
                        </select>
                      </label>
                      <label>
                        <span className="edit-label">Label</span>
                        <input type="text" value={this.props.state.columns[val].label} onChange={(event) => { this.props.editColumn(val, "label", event.target.value) }} />
                      </label>
                      <ul className="column-edit">
                        <li className="three-col">
                          <label className="prefix">
                            <span className="edit-label">Prefix</span>
                            <input type="text" value={this.props.state.columns[val].prefix} onChange={(event) => { this.props.editColumn(val, "prefix", event.target.value) }} />
                          </label>
                          <label className="suffix">
                            <span className="edit-label">Suffix</span>
                            <input type="text" value={this.props.state.columns[val].suffix} onChange={(event) => { this.props.editColumn(val, "suffix", event.target.value) }} />
                          </label>
                          <label className="round">
                            <span className="edit-label">Round</span>
                            <input type="number" min="0" value={this.props.state.columns[val].hasOwnProperty('roundToPlace') ? this.props.state.columns[val].roundToPlace : "" } onChange={(event) => { this.props.editColumn(val, "roundToPlace", event.target.value.length === 0 ? "None" : parseFloat( event.target.value ) ) }} />
                          </label>
                        </li>
                        <li>
                          <label className="checkbox">
                            <input type="checkbox" checked={ this.props.state.columns[val].dataTable } onChange={(event) => { this.props.editColumn(val, "dataTable", event.target.checked) }} />
                            <span className="edit-label">Display in Data Table</span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox">
                            <input type="checkbox" checked={ this.props.state.columns[val].tooltip } onChange={(event) => { this.props.editColumn(val, "tooltip", event.target.checked) }} />
                            <span className="edit-label">Display in Tooltips</span>
                          </label>
                        </li>
                      </ul>
                    </fieldset>
                ))}
                <button className={"blue-block"} onClick={(event) => {event.preventDefault(); this.props.addAdditionalColumn(additionalColumns.length + 1)}}>Add Column</button>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem> {/* Filters */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  Filters
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {filters.length > 0 ? filters : (<p style={{textAlign: "center"}}>There are currently no filters.</p>) }
                <button className={"blue-block"} onClick={(event) => {event.preventDefault(); this.props.changeFilter(null, "addNew")}}>Add Filter</button>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem> {/* Legend */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  Legend
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <label>
                  <span className="edit-label">Legend Type</span>
                  <select value={this.props.state.legend.type} onChange={(event) => { this.props.handleEditorChanges("legendType", event.target.value) }}>
                    <option value="equalnumber">Equal Number</option>
                    <option value="equalinterval">Equal Interval</option>
                    <option value="category">Categorical</option>
                   </select>
                </label>
                {"category" !== this.props.state.legend.type &&
                  <label>
                    <span className="edit-label">Number of Items</span>
                    <select value={this.props.state.legend.numberOfItems} onChange={(event) => { this.props.handleEditorChanges("legendNumber", event.target.value) }}>
                      {[...Array(8).keys()].map( (num) => {
                        return (<option value={num + 1} key={num + 1}>{num + 1}</option>)
                      })}
                    </select>
                  </label>
                }
                {"category" === this.props.state.legend.type &&
                  <React.Fragment>
                    <label>
                      <span className="edit-label">Category Order</span>
                    </label>
                    <SortableList items={this.props.state.legend.categoryValuesOrder} onSortEnd={(obj) => {  this.props.handleEditorChanges("categoryOrder", [obj.oldIndex, obj.newIndex]) }} />
                  </React.Fragment>
                }
                <label>
                  <span>Legend Title</span>
                  <input type="text" value={this.props.state.legend.title || ""} onChange={(event) => { this.props.handleEditorChanges("legendTitle", event.target.value) }} />
                </label>
                <label>
                  <span>Legend Description</span>
                  <textarea value={this.props.state.legend.description || ""} onChange={(event) => { this.props.handleEditorChanges("legendDescription", event.target.value) }} />
                </label>
                {"side" === this.props.state.legend.position && (
                    <label className="checkbox">
                      <input type="checkbox" checked={ this.props.state.legend.singleColumn || false } onChange={(event) => { this.props.handleEditorChanges("singleColumnLegend", event.target.checked) }} />
                      <span className="edit-label">Single Column Legend</span>
                    </label>)}
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem> {/* Visual */}
              <AccordionItemHeading>
                <AccordionItemButton>
                  Visual
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <label className="header">
                  <span className="edit-label">Header Theme</span>
                  <ul className="color-palette">
                    {this.headerColors.map( (palette) => {

                      return (
                          <li title={ palette } key={ palette } onClick={ () => { this.props.handleEditorChanges("headerColor", palette) }} className={ this.props.state.general.headerColor === palette ? "selected " + palette : palette}>
                          </li>
                      )
                    })}
                  </ul>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={ this.props.state.general.expandDataTable || false } onChange={(event) => { this.props.handleEditorChanges("expandDataTable", event.target.checked) }} />
                  <span className="edit-label">Expand Data Table</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={ this.props.state.general.showTitle || false } onChange={(event) => { this.props.handleEditorChanges("showTitle", event.target.checked) }} />
                  <span className="edit-label">Show Title</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={ this.props.state.general.showSidebar || false } onChange={(event) => { this.props.handleEditorChanges("showSidebar", event.target.checked) }} />
                  <span className="edit-label">Show Sidebar</span>
                </label>
                <label>
                  <span className="edit-label">Sidebar Position</span>
                  <select value={this.props.state.legend.position || false } onChange={(event) => { this.props.handleEditorChanges("sidebarPosition", event.target.value) }}>
                    <option value="side">Side</option>
                    <option value="bottom">Bottom</option>
                  </select>
                </label>
                <label>
                  <span className="edit-label">Background Color</span>
                  <select value={this.props.state.general.backgroundColor || false } onChange={(event) => { this.props.handleEditorChanges("backgroundColor", event.target.value) }}>
                    <option value="#f5f5f5">Gray (Default)</option>
                    <option value="#FFF">White</option>
                  </select>
                </label>
                <label>
                  <span className="edit-label">Border Color</span>
                  <select value={this.props.state.general.geoBorderColor || false } onChange={(event) => { this.props.handleEditorChanges("geoBorderColor", event.target.value) }}>
                    <option value="darkGray">Dark Gray (Default)</option>
                    <option value="white">White</option>
                  </select>
                </label>
                <label>
                  <span className="edit-label">Map Color Palette</span>
                </label>
                <h5>Quantitative</h5>
                <ul className="color-palette">
                  {Object.keys(this.props.colorPalettes).filter((name) => !name.includes('qualitative')).map( (palette) => {

                    const colorOne = {
                      backgroundColor: this.props.colorPalettes[palette][2]
                    }

                    const colorTwo = {
                      backgroundColor: this.props.colorPalettes[palette][4]
                    }

                    const colorThree = {
                      backgroundColor: this.props.colorPalettes[palette][6]
                    }

                    return (
                        <li title={ palette } key={ palette } onClick={ () => { this.props.handleEditorChanges("color", palette) }} className={ this.props.state.color === palette ? "selected" : ""}>
                          <span style={colorOne}></span>
                          <span  style={colorTwo}></span>
                          <span  style={colorThree}></span>
                        </li>
                    )
                  })}
                </ul>
                <h5>Qualitative</h5>
                <ul className="color-palette">
                  {Object.keys(this.props.colorPalettes).filter((name) => name.includes('qualitative')).map( (palette) => {

                    const colorOne = {
                      backgroundColor: this.props.colorPalettes[palette][2]
                    }

                    const colorTwo = {
                      backgroundColor: this.props.colorPalettes[palette][4]
                    }

                    const colorThree = {
                      backgroundColor: this.props.colorPalettes[palette][6]
                    }

                    return (
                        <li title={ palette } key={ palette } onClick={ () => { this.props.handleEditorChanges("color", palette) }} className={ this.props.state.color === palette ? "selected" : ""}>
                          <span style={colorOne}></span>
                          <span  style={colorTwo}></span>
                          <span  style={colorThree}></span>
                        </li>
                    )
                  })}
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <section className="confirmation-area">
            <button onClick={ (e) => { e.preventDefault(); this.props.createConfig() } } className="blue-block">Create Configuration JSON</button>
            {this.props.state.jsonConfigString.length > 0 && (
              <React.Fragment>
                <p>Copy the configuration json below and save to a file. Refer to the documentation for more information on how to implement this configuration file into your project.</p>
                <textarea className="json-config" onFocus={(event) => event.target.select()} value={this.props.state.jsonConfigString}></textarea>
              </React.Fragment>
            )}
          </section>
        </form>
      </section>
  );
  }
}

export default Editor
