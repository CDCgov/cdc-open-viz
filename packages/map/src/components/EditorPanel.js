import React, { useState, useEffect, useCallback } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from 'react-accessible-accordion';
import ReactTooltip from 'react-tooltip';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDebounce } from 'use-debounce';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import Waiting from '@cdc/core/components/Waiting';

import MapIcon from '../images/map-folded.svg';
import UsaGraphic from '@cdc/core/assets/usa-graphic.svg';
import WorldGraphic from '@cdc/core/assets/world-graphic.svg';
import AlabamaGraphic from '@cdc/core/assets/alabama-graphic.svg';
import colorPalettes from '../../../core/data/colorPalettes';
import worldDefaultConfig from '../../examples/default-world.json';
import usaDefaultConfig from '../../examples/default-usa.json';
import countyDefaultConfig from '../../examples/default-county.json';
import QuestionIcon from '@cdc/core/assets/question-circle.svg';

import { supportedStatesFipsCodes } from '../data/supported-geos';
import { GET_PALETTE,useColorPalette } from '../hooks/useColorPalette';
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox';
import InputToggle from '@cdc/core/components/inputs/InputToggle';
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

const ReactTags = require('react-tag-autocomplete'); // Future: Lazy

const TextField = ({
	label,
	section = null,
	subsection = null,
	fieldName,
	updateField,
	value: stateValue,
	type = 'input',
	tooltip,
	...attributes
}) => {
	const [value, setValue] = useState(stateValue);

	const [debouncedValue] = useDebounce(value, 500);

	useEffect(() => {
		if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
			updateField(section, subsection, fieldName, debouncedValue);
		}
	}, [debouncedValue]);

	let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`;

	const onChange = (e) => setValue(e.target.value);

	let formElement = <input type='text' name={name} onChange={onChange} {...attributes} value={value} />;

	if ('textarea' === type) {
		formElement = <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>;
	}

	if ('number' === type) {
		formElement = <input type='number' name={name} onChange={onChange} {...attributes} value={value} />;
	}

	return (
		<label>
			<span className='edit-label column-heading'>
				{label}{tooltip}
			</span>
			{formElement}
		</label>
	);
};

const EditorPanel = (props) => {
	const {
		state,
		columnsInData = [],
		loadConfig,
		setState,
		isDashboard,
		setParentConfig,
		setRuntimeFilters,
		runtimeFilters,
		runtimeLegend,
	} = props;

	const { general, columns, legend, dataTable, tooltips } = state;

	const [requiredColumns, setRequiredColumns] = useState(null); // Simple state so we know if we need more information before parsing the map

	const [configTextboxValue, setConfigTextbox] = useState({});

	const [loadedDefault, setLoadedDefault] = useState(false);

	const [displayPanel, setDisplayPanel] = useState(true);

	const [advancedToggle, setAdvancedToggle] = useState(false);

	const [activeFilterValueForDescription, setActiveFilterValueForDescription] = useState([0, 0]);

	const {filteredPallets,filteredQualitative,isPaletteReversed,paletteName} = useColorPalette(colorPalettes,state);


	const [editorCatOrder, setEditorCatOrder] = useState(state.legend.categoryValuesOrder || []);

	const headerColors = [
		'theme-blue',
		'theme-purple',
		'theme-brown',
		'theme-teal',
		'theme-pink',
		'theme-orange',
		'theme-slate',
		'theme-indigo',
		'theme-cyan',
		'theme-green',
		'theme-amber',
	];

	const categoryMove = (idx1, idx2) => {
		let categoryValuesOrder = [...editorCatOrder];

		let [movedItem] = categoryValuesOrder.splice(idx1, 1);

		categoryValuesOrder.splice(idx2, 0, movedItem);

		setEditorCatOrder(categoryValuesOrder);

		setState({
			...state,
			legend: {
				...state.legend,
				categoryValuesOrder,
			},
		});
	};


	const handleFilterOrder = (idx1, idx2, filterIndex, filter) => {

		let filterOrder = filter.values;
		let [movedItem] = filterOrder.splice(idx1, 1);
		filterOrder.splice(idx2, 0, movedItem);
		let filters = [...runtimeFilters]
		let filterItem= { ...runtimeFilters[filterIndex] };
		filterItem.active = filter.values[0]
		filterItem.values = filterOrder;
		filterItem.order = 'cust'
		filters[filterIndex] = filterItem

		setState({
			...state,
			filters
		});

	};


	const DynamicDesc = ({ label, fieldName, value: stateValue, type = 'input', ...attributes }) => {
		const [value, setValue] = useState(stateValue);

		const [debouncedValue] = useDebounce(value, 500);

		useEffect(() => {
			if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
				handleEditorChanges('changeLegendDescription', [
					String(activeFilterValueForDescription),
					debouncedValue,
				]);
			}
		}, [debouncedValue]);

		const onChange = (e) => setValue(e.target.value);

		return <textarea onChange={onChange} {...attributes} value={value}></textarea>;
	};

	const handleEditorChanges = async (property, value) => {
		switch (property) {
			case 'hideGeoColumnInTooltip':
				setState({
					...state,
					general: {
						...state.general,
						[property]: value
					}
				})
				break;
			case 'hidePrimaryColumnInTooltip':
				setState({
					...state,
					general: {
						...state.general,
						[property]: value
					}
				})
				break;
			case 'showTitle':
				setState({
					...state,
					general: {
						...state.general,
						showTitle: value,
					},
				});
				break;
			case 'showSidebar':
				setState({
					...state,
					general: {
						...state.general,
						showSidebar: value,
					},
				});
				break;
			case 'fullBorder':
				setState({
					...state,
					general: {
						...state.general,
						fullBorder: value,
					},
				});
				break;
			case 'expandDataTable':
				setState({
					...state,
					general: {
						...state.general,
						expandDataTable: value,
					},
				});
				break;
			case 'color':
				setState({
					...state,
					color: value,
				});
				break;
			case 'sidebarPosition':
				setState({
					...state,
					legend: {
						...state.legend,
						position: value,
					},
				});
				break;
			case 'geoBorderColor':
				setState({
					...state,
					general: {
						...state.general,
						geoBorderColor: value,
					},
				});
				break;
			case 'headerColor':
				setState({
					...state,
					general: {
						...state.general,
						headerColor: value,
					},
				});
				break;
			case 'navigateColumn':
				setState({
					...state,
					columns: {
						...state.columns,
						navigate: {
							...state.columns.navigate,
							name: value,
						},
					},
				});
				break;
			case 'legendDescription':
				setState({
					...state,
					legend: {
						...state.legend,
						description: value,
					},
				});
				break;
			case 'legendType':

				let testForType = typeof state.data[0][state.columns.primary.name];
				let hasValue = state.data[0][state.columns.primary.name];
				let messages = [];

				if(!hasValue) {
					messages.push(`There appears to be values missing for data in the primary column ${state.columns.primary.name}`);
				}

				if (testForType === 'string' && value !== 'category') {
					messages.push( 'Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to categorical.' );
				} else {
					messages = []
				}

				setState({
					...state,
					legend: {
						...state.legend,
						type: value,
					},
					runtime: {
						...state.runtime,
						editorErrorMessage: messages
					}
				});
				break;
			case 'legendNumber':
				setState({
					...state,
					legend: {
						...state.legend,
						numberOfItems: parseInt(value),
					},
				});
				break;
			case 'changeActiveFilterValue':
				const arrVal = value.split(',');

				setActiveFilterValueForDescription(arrVal);
				break;
			case 'unifiedLegend':
				setState({
					...state,
					legend: {
						...state.legend,
						unified: value,
					},
				});
				break;
			case 'separateZero':
				setState({
					...state,
					legend: {
						...state.legend,
						separateZero: value,
					},
				});
				break;
			case 'toggleDownloadButton':
				setState({
					...state,
					general: {
						...state.general,
						showDownloadButton: !state.general.showDownloadButton,
					},
				});
				break;
			case 'toggleDownloadMediaButton':
				setState({
					...state,
					general: {
						...state.general,
						showDownloadMediaButton: !state.general.showDownloadMediaButton,
					},
				});
				break;
			case 'displayAsHex':
				setState({
					...state,
					general: {
						...state.general,
						displayAsHex: value,
					},
				});
				break;
			case 'editorMapType':
				switch (value) {
					case 'data':
						setState({
							...state,
							general: {
								...state.general,
								showSidebar: true,
								type: 'data',
							},
						});
						break;
					case 'navigation':
						setState({
							...state,
							general: {
								...state.general,
								showSidebar: false,
								type: 'navigation',
							},
							tooltips: {
								...state.tooltips,
								appearanceType: 'hover',
							},
						});
						break;
					default:
						console.warn('Map type not set');
						break;
				}
				break;
			case 'geoType':
				// If we're still working with default data, switch to the world default to show it as an example
				if (true === loadedDefault && 'world' === value) {
					loadConfig(worldDefaultConfig);
					ReactTooltip.rebuild();
					break;
				}

				if (true === loadedDefault && 'us' === value) {
					loadConfig(usaDefaultConfig);
					ReactTooltip.rebuild();
					break;
				}

				if (true === loadedDefault && 'us-county' === value) {
					loadConfig(countyDefaultConfig);
					ReactTooltip.rebuild();
					break;
				}

				switch (value) {
					case 'us':
						setState({
							...state,
							general: {
								...state.general,
								geoType: 'us',
							},
							dataTable: {
								...state.dataTable,
								forceDisplay: true,
							},
						});
						ReactTooltip.rebuild();
						break;
					case 'world':
						setState({
							...state,
							general: {
								...state.general,
								geoType: 'world',
							},
							dataTable: {
								...state.dataTable,
								forceDisplay: true,
							},
						});
						break;
					case 'us-county':
						setState({
							...state,
							general: {
								...state.general,
								geoType: 'us-county',
								expandDataTable: false,
							},
							dataTable: {
								...state.dataTable,
								forceDisplay: true,
							},
						});
						break;
					case 'single-state':
						setState({
							...state,
							general: {
								...state.general,
								geoType: 'single-state',
								expandDataTable: false,
							},
							dataTable: {
								...state.dataTable,
								forceDisplay: true,
							},
						});
						break;
					default:
						break;
				}

				ReactTooltip.rebuild();
				break;
			case 'singleColumnLegend':
				setState({
					...state,
					legend: {
						...state.legend,
						singleColumn: !state.legend.singleColumn,
					},
				});
				break;
			case 'dynamicDescription':
				setState({
					...state,
					editor: {
						...state.editor,
						activeFilterValueForDescription: value,
					},
					legend: {
						...state.legend,
						dynamicDescription: !state.legend.dynamicDescription,
					},
				});
				break;
			case 'changeLegendDescription':
				const [filterValKey, filterValDesc] = value;
				setState({
					...state,
					legend: {
						...state.legend,
						descriptions: {
							...state.legend.descriptions,
							[filterValKey]: [filterValDesc],
						},
					},
				});
				break;
			case 'appearanceType':
				setState({
					...state,
					tooltips: {
						...state.tooltips,
						appearanceType: value,
					},
				});
				break;
			case 'linkLabel':
				setState({
					...state,
					tooltips: {
						...state.tooltips,
						linkLabel: value,
					},
				});
				break;
			case 'displayStateLabels':
				setState({
					...state,
					general: {
						...state.general,
						displayStateLabels: !state.general.displayStateLabels,
					},
				});
				break;
			case 'capitalizeLabels':
				setState({
					...state,
					tooltips: {
						...state.tooltips,
						capitalizeLabels: value,
					},
				});
				break;
			case 'showDataTable':
				setState({
					...state,
					dataTable: {
						...state.dataTable,
						forceDisplay: value,
					},
				});
				break;
			case 'limitDataTableHeight':
				setState({
					...state,
					dataTable: {
						...state.dataTable,
						limitHeight: value
					}
				});
				break;
			case 'chooseState':
				let fipsCode = Object.keys(supportedStatesFipsCodes).find(
					(key) => supportedStatesFipsCodes[key] === value
				);
				let stateName = value;
				let stateData = { fipsCode, stateName };

				setState({
					...state,
					general: {
						...state.general,
						statePicked: stateData,
					},
				});
				break;
			case "classificationType":
				setState({
				...state,
				legend: {
					...state.legend,
					type: value,
				},
				});
				break;
			default:
				console.warn(`Did not recognize editor property.`);
				break;
		}
	};

	const columnsRequiredChecker = useCallback(() => {
		let columnList = [];

		// Geo is always required
		if ('' === state.columns.geo.name) {
			columnList.push('Geography');
		}

		// Primary is required if we're on a data map or a point map
		if ('navigation' !== state.general.type && '' === state.columns.primary.name) {
			columnList.push('Primary');
		}

		// Navigate is required for navigation maps
		if (
			'navigation' === state.general.type &&
			('' === state.columns.navigate.name || undefined === state.columns.navigate)
		) {
			columnList.push('Navigation');
		}

		if (columnList.length === 0) columnList = null;

		setRequiredColumns(columnList);
	}, [state.columns, state.general.type]);

	const editColumn = async (columnName, editTarget, value) => {
		let newSpecialClasses;

		switch (editTarget) {
			case 'specialClassEdit':
				newSpecialClasses = Array.from(legend.specialClasses);

				newSpecialClasses[value.index][value.prop] = value.value;

				setState({
					...state,
					legend: {
						...state.legend,
						specialClasses: newSpecialClasses,
					},
				});
				break;
			case 'specialClassDelete':
				newSpecialClasses = Array.from(legend.specialClasses);

				newSpecialClasses.splice(value, 1);

				setState({
					...state,
					legend: {
						...state.legend,
						specialClasses: newSpecialClasses,
					},
				});
				break;
			case 'specialClassAdd':
				newSpecialClasses = legend.specialClasses;

				newSpecialClasses.push(value);

				setState({
					...state,
					legend: {
						...state.legend,
						specialClasses: newSpecialClasses,
					},
				});
				break;
			case 'name':
				setState({
					...state,
					columns: {
						...state.columns,
						[columnName]: {
							...state.columns[columnName],
							[editTarget]: value,
						},
					},
				});

				break;
			default:
				setState({
					...state,
					columns: {
						...state.columns,
						[columnName]: {
							...state.columns[columnName],
							[editTarget]: value,
						},
					},
				});
				break;
		}
	};

	const changeFilter = async (idx, target, value) => {

		let newFilters = [...state.filters];

		switch (target) {
			case 'addNew':
				newFilters.push({
					label: '',
					values: [],
				});
				break;
			case 'remove':

				if(newFilters.length === 1) {
					newFilters = []
				} else {
					newFilters.splice(idx, 1);
				}
				break;
			case 'columnName':
				newFilters[idx] = { ...newFilters[idx] };
				newFilters[idx].columnName = value;
				newFilters[idx].values = [] // when a column name changes knock the previous values out
				break;
			case 'filterOrder':
				if(value === 'desc') {
					newFilters[idx] = { ...runtimeFilters[idx]}
					delete newFilters[idx].active;
					newFilters[idx].order = 'desc';
				}
				if(value === 'asc') {
					newFilters[idx] = { ...runtimeFilters[idx] }
					delete newFilters[idx].active;
					newFilters[idx].order = 'asc'
				}
				if(value === 'cust') {
					newFilters[idx] = { ...runtimeFilters[idx] }
					newFilters[idx].order = 'cust'
				}
				break;
			default:
				newFilters[idx][target] = value;
				break;
		}

		setState({
			...state,
			filters: newFilters,
		});

	};

	const addAdditionalColumn = (number) => {
		const columnKey = `additionalColumn${number}`;

		setState({
			...state,
			columns: {
				...state.columns,
				[columnKey]: {
					label: 'New Column',
					dataTable: false,
					tooltips: false,
					prefix: '',
					suffix: '',
				},
			},
		});
	};

	const removeAdditionalColumn = (columnName) => {
		const newColumns = state.columns;

		delete newColumns[columnName];

		setState({
			...state,
			columns: newColumns,
		});
	};

	const displayFilterLegendValue = (arr) => {
		const filterName = state.filters[arr[0]].label || `Unlabeled Legend`;

		const filterValue = runtimeFilters[arr[0]];

		if (filterValue) {
			return filterName + ' - ' + filterValue.values[arr[1]];
		}
	};

	const sortableItemStyles = {
		display: 'block',
		boxSizing: 'border-box',
		border: '1px solid #D1D1D1',
		borderRadius: '2px',
		background: '#F1F1F1',
		padding: '.4em .6em',
		fontSize: '.8em',
		marginRight: '.3em',
		marginBottom: '.3em',
		cursor: 'move',
		zIndex: '999',
	};

	const convertStateToConfig = () => {
		let strippedState = JSON.parse(JSON.stringify(state)); // Deep copy

		// Strip ref
		delete strippedState[''];

		delete strippedState.newViz;

		// Remove the legend
		let strippedLegend = JSON.parse(JSON.stringify(state.legend));

		delete strippedLegend.disabledAmt;

		strippedState.legend = strippedLegend;

		// Remove default data marker if the user started this map from default data
		delete strippedState.defaultData;

		// Remove tooltips if they're active in the editor
		let strippedGeneral = JSON.parse(JSON.stringify(state.general));

		strippedState.general = strippedGeneral;

		// Add columns property back to data if it's there
		if (state.data.columns) {
			strippedState.data.columns = state.data.columns;
		}

		return strippedState;
	};

	useEffect(() => {
		setLoadedDefault(state.defaultData);

		columnsRequiredChecker();
	}, [state]);

	useEffect(() => {
		if ('category' === state.legend.type) {
			let arr = runtimeLegend.filter((item) => !item.special).map(({ value }) => value);

			setEditorCatOrder(arr);
		}
	}, [runtimeLegend]);


	// if no state choice by default show alabama
	useEffect(() => {
		if (!state.general.statePicked) {
			setState({
				...state,
				general: {
					...general,
					statePicked: {
						fipsCode: '01',
						stateName: 'Alabama',
					},
				},
			});
		}
	}, []);

	const columnsOptions = [
		<option value='' key={'Select Option'}>
			- Select Option -
		</option>,
	];

	columnsInData.map((colName) => {
		columnsOptions.push(
			<option value={colName} key={colName}>
				{colName}
			</option>
		);
	});

	let columnsByKey = {};
	state.data.forEach(datum => {
		Object.keys(datum).forEach(key => {
			columnsByKey[key] = columnsByKey[key] || [];
			const value = typeof datum[key] === 'number' ? datum[key].toString() : datum[key];

			if(columnsByKey[key].indexOf(value) === -1){
				columnsByKey[key].push(value);
			}
		});
	});

	let specialClasses = [];
	if(legend.specialClasses && legend.specialClasses.length && typeof legend.specialClasses[0] === 'string'){
		legend.specialClasses.forEach(specialClass => {
			specialClasses.push({
				key: state.columns.primary && state.columns.primary.name ? state.columns.primary.name : columnsInData[0],
				value: specialClass,
				label: specialClass
			});
		});
	} else {
		specialClasses = legend.specialClasses || [];
	}

	const additionalColumns = Object.keys(state.columns).filter((value) => {
		const defaultCols = ['geo', 'navigate', 'primary'];

		if (true === defaultCols.includes(value)) {
			return false;
		}
		return true;
	});

	const updateField = (section, subsection, fieldName, newValue) => {
		const isArray = Array.isArray(state[section]);
		let sectionValue = isArray ? [...state[section], newValue] : { ...state[section], [fieldName]: newValue };

		if (null !== subsection) {
			if (isArray) {
				sectionValue = [...state[section]];
				sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue };
			} else {
				sectionValue = {
					...state[section],
					[subsection]: { ...state[section][subsection], [fieldName]: newValue },
				};
			}
		}

		let updatedState = {
			...state,
			[section]: sectionValue,
		};

		setState(updatedState);
	};

	const onBackClick = () => {
		setDisplayPanel(!displayPanel);
	};

	const usedFilterColumns = {};

	const filtersJSX = state.filters.map((filter, index) => {
		if (filter.columnName) {
			usedFilterColumns[filter.columnName] = true;
		}

		const filterOptions = [
			{
				label: 'Ascending Alphanumeric',
				value: 'asc'
			},
			{
				label: 'Descending Alphanumeric',
				value: 'desc'
			},
			{
				label: 'Custom',
				value: 'cust'
			}
		]

		return (
			<fieldset className='edit-block' key={`filter-${index}`}>
				<button
					className='remove-column'
					onClick={(e) => {
						e.preventDefault();
						changeFilter(index, 'remove');
					}}
				>
					Remove
				</button>
				<TextField
					value={state.filters[index].label}
					section='filters'
					subsection={index}
					fieldName='label'
					label='Label'
					updateField={updateField}
				/>
				<label>
					<span className='edit-label column-heading'>
						Filter Column{' '}
            <Tooltip style={{textTransform: 'none'}}>
              <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
              <Tooltip.Content>
                <p>Selecting a column will add a dropdown menu below the map legend and allow users to filter based on the values in this column.</p>
              </Tooltip.Content>
            </Tooltip>
					</span>
					<select
						value={filter.columnName}
						onChange={(event) => {
							changeFilter(index, 'columnName', event.target.value);
						}}
					>
						{columnsOptions.filter(
							({ key }) => undefined === usedFilterColumns[key] || filter.columnName === key
						)}
					</select>
				</label>

				<label>
					<span className="edit-filterOrder column-heading">Filter Order</span>
					<select value={filter.order} onChange={ (e) => {
						changeFilter(index, 'filterOrder', e.target.value)
					}}>
						{filterOptions.map( (option, index) => {
							return <option value={option.value} key={`filter-${index}`}>{option.label}</option>
						})}
					</select>
				</label>

				{filter.order === 'cust' &&
					<DragDropContext
						onDragEnd={({ source, destination }) =>
							handleFilterOrder(source.index, destination.index, index, runtimeFilters[index])
						}>
						<Droppable droppableId='filter_order'>
							{(provided) => (
								<ul
									{...provided.droppableProps}
									className='sort-list'
									ref={provided.innerRef}
									style={{ marginTop: '1em' }}
									>
									{runtimeFilters[index]?.values.map( (value, index) => {
										return (
											<Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
												{(provided, snapshot) => (
													<li>
														<div className={snapshot.isDragging ? 'currently-dragging' : ''}
															style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}>
															{value}
														</div>
													</li>
												) }
											</Draggable>
										)
									})}
									{provided.placeholder}
								</ul>
							)}
						</Droppable>
					</DragDropContext>
				}

			</fieldset>
		);
	});

	const StateOptionList = () => {
		const arrOfArrays = Object.entries(supportedStatesFipsCodes);

		let sorted = arrOfArrays.sort((a, b) => {
			return a[0].localeCompare(b[0]);
		});

		let options = [];
		sorted.forEach((state) => {
			options.push(
				<option key={state[0]} value={state[1]}>
					{state[1]}
				</option>
			);
		});

		return options;
	};

	const filterValueOptionList = [];

	if (runtimeFilters.length > 0) {
		runtimeFilters.forEach((filter, index) => {
			runtimeFilters[index].values.forEach((value, valueNum) => {
				filterValueOptionList.push([index, valueNum]);
			});
		});
	}


	useEffect(()=>{
		if(paletteName) handleEditorChanges('color',paletteName)
	},[paletteName]) // dont add handleEditorChanges as a dependency even if it requires

	useEffect(() => {
		const parsedData = convertStateToConfig();
		const formattedData = JSON.stringify(parsedData, undefined, 2);

		setConfigTextbox(formattedData);
	}, [state]);

	useEffect(() => {
		// Pass up to Editor if needed
		if (setParentConfig) {
			const newConfig = convertStateToConfig();
			setParentConfig(newConfig);
		}

	}, [state]);


	let numberOfItemsLimit = 8;

	const getItemStyle = (isDragging, draggableStyle) => ({
		...draggableStyle,
	});

	const CategoryList = () => {
		return editorCatOrder.map((value, index) => (
			<Draggable key={value} draggableId={`item-${value}`} index={index}>
				{(provided, snapshot) => (
					<li style={{ position: 'relative' }}>
						<div
							className={snapshot.isDragging ? 'currently-dragging' : ''}
							style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							{value}
						</div>
					</li>
				)}
			</Draggable>
		));
	};

	const Error = () => {
		return (
			<section className="waiting">
				<section className="waiting-container">
					<h3>Error With Configuration</h3>
					<p>{state.runtime.editorErrorMessage}</p>
				</section>
			</section>
		);
	}

	return (
		<ErrorBoundary component='EditorPanel'>
			{state?.runtime?.editorErrorMessage.length > 0 && <Error />}
			{requiredColumns && (
				<Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
			)}
			<button
				className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`}
				title={displayPanel ? `Collapse Editor` : `Expand Editor`}
				onClick={onBackClick}
				data-html2canvas-ignore
			></button>
			
			<section className={displayPanel ? 'editor-panel cove' : 'hidden editor-panel cove'} data-html2canvas-ignore>
				<ReactTooltip html={true} multiline={true} />
				<span className='base-label'>Configure Map</span>
				<section className='form-container'>
					<form>
						<Accordion allowZeroExpanded={true}>
							<AccordionItem>
								{' '}
								{/* Type */}
								<AccordionItemHeading>
									<AccordionItemButton>Type</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									{/* Geography */}
									<label>
										<span className='edit-label column-heading'>
											<span>Geography</span>
										</span>
										<ul className='geo-buttons'>
											<li
												className={
													state.general.geoType === 'us' ||
													state.general.geoType === 'us-county'
														? 'active'
														: ''
												}
												onClick={() => handleEditorChanges('geoType', 'us')}
											>
												<UsaGraphic />
												<span>United States</span>
											</li>
											<li
												className={state.general.geoType === 'world' ? 'active' : ''}
												onClick={() => handleEditorChanges('geoType', 'world')}
											>
												<WorldGraphic />
												<span>World</span>
											</li>
											<li
												className={state.general.geoType === 'single-state' ? 'active' : ''}
												onClick={() => handleEditorChanges('geoType', 'single-state')}
											>
												<AlabamaGraphic />
												<span>U.S. State</span>
											</li>
										</ul>
									</label>
									{/* Select > State or County Map */}
									{(state.general.geoType === 'us' || state.general.geoType === 'us-county') && (
										<label>
											<span className='edit-label column-heading'>
                        Map Type
                        <Tooltip style={{textTransform: 'none'}}>
                          <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>Select "Data" to create a color-coded data map. To create a navigation-only map, select "Navigation."</p>
                          </Tooltip.Content>
                        </Tooltip>
                      </span>
											<select
												value={state.general.geoType}
												onChange={(event) => {
													handleEditorChanges('geoType', event.target.value);
												}}
											>
												<option value='us'>US State-Level</option>
												<option value='us-county'>US County-Level</option>
											</select>
										</label>
									)}
									{/* Type */}
									{/* Select > Filter a state */}
									{state.general.geoType === 'single-state' && (
										<label>
											<span className='edit-label column-heading'>State Selector</span>
											<select
												value={
													state.general.hasOwnProperty('statePicked')
														? state.general.statePicked.stateName
														: { fipsCode: '04', stateName: 'Alabama' }
												}
												onChange={(event) => {
													handleEditorChanges('chooseState', event.target.value);
												}}
											>
												<StateOptionList />
											</select>
										</label>
									)}
									{/* Type */}
									<label>
										<span className='edit-label column-heading'>Map Type</span>
										<select
											value={state.general.type}
											onChange={(event) => {
												handleEditorChanges('editorMapType', event.target.value);
											}}
										>
											<option value='data'>Data</option>
											<option value='navigation'>Navigation</option>
										</select>
									</label>
									{/* SubType */}
									{'us' === state.general.geoType && 'data' === state.general.type && (
										<label className='checkbox mt-4'>
											<input
												type='checkbox'
												checked={state.general.displayAsHex}
												onChange={(event) => {
													handleEditorChanges('displayAsHex', event.target.checked);
												}}
											/>
											<span className='edit-label'>Display As Hex Map</span>
										</label>
									)}
									{'us' === state.general.geoType &&
										'data' === state.general.type &&
										false === state.general.displayAsHex && (
											<label className='checkbox'>
												<input
													type='checkbox'
													checked={state.general.displayStateLabels}
													onChange={(event) => {
														handleEditorChanges('displayStateLabels', event.target.checked);
													}}
												/>
												<span className='edit-label'>Display state labels</span>
											</label>
										)}
								</AccordionItemPanel>
							</AccordionItem>
							<AccordionItem>
								{' '}
								{/* General */}
								<AccordionItemHeading>
									<AccordionItemButton>General</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<TextField
										value={state.general.title}
										updateField={updateField}
										section='general'
										fieldName='title'
										label='Title'
										placeholder='Map Title'
                    tooltip={
                      <Tooltip style={{textTransform: 'none'}}>
                        <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>For accessibility reasons, you should enter a title even if you are not planning on displaying it.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
									/>
									<TextField
										type='textarea'
										value={general.subtext}
										updateField={updateField}
										section='general'
										fieldName='subtext'
										label='Subtext'
                    tooltip={
                      <Tooltip style={{textTransform: 'none'}}>
                        <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
									/>
									{'us' === state.general.geoType && (
										<TextField
											value={general.territoriesLabel}
											updateField={updateField}
											section='general'
											fieldName='territoriesLabel'
											label='Territories Label'
											placeholder='Territories'
										/>
									)}
									<label>
                     <span className="edit-label">Data Classification Type</span>
                     <div>
                       <label>
                         <input
                           type="radio"
                           name="equalnumber"
                           value="equalnumber"
                           checked={state.legend.type === "equalnumber"}
                           onChange={(e) =>
                             handleEditorChanges(
                               "classificationType",
                               e.target.value
                             )
                           }
                         />
                         Numeric/Quantitative
                       </label>
                       <label>
                         <input
                           type="radio"
                           name="category"
                           value="category"
                           checked={state.legend.type === "category"}
                           onChange={(e) =>
                             handleEditorChanges(
                               "classificationType",
                               e.target.value
                             )
                           }
                         />
                         Categorical
                       </label>
                     </div>
                   </label>
									{/* <label className="checkbox mt-4">
                    <input type="checkbox" checked={ state.general.showDownloadMediaButton } onChange={(event) => { handleEditorChanges("toggleDownloadMediaButton", event.target.checked) }} />
                    <span className="edit-label">Enable Media Download</span>
                  </label> */}
								</AccordionItemPanel>
							</AccordionItem>
							<AccordionItem>
								{' '}
								{/* Columns */}
								<AccordionItemHeading>
									<AccordionItemButton>Columns</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<label className='edit-block geo'>
										<span className='edit-label column-heading'>
                      Geography
                      <Tooltip style={{textTransform: 'none'}}>
                        <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>Select the source column containing the map location names or, for county-level maps, the FIPS codes.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
										<select
											value={state.columns.geo ? state.columns.geo.name : columnsOptions[0]}
											onChange={(event) => {
												editColumn('geo', 'name', event.target.value);
											}}
										>
											{columnsOptions}
										</select>
									</label>

									{'navigation' !== state.general.type && (
                    <>
                      <fieldset className='primary-fieldset edit-block'>
                        <label>
												<span className='edit-label column-heading'>
                          Data Column
                          <Tooltip style={{textTransform: 'none'}}>
                            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                            <Tooltip.Content>
                              <p>Select the source column containing the categorical or numeric values to be mapped.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                          <select
                            value={
                              state.columns.primary
                                ? state.columns.primary.name
                                : columnsOptions[0]
                            }
                            onChange={(event) => {
                              editColumn('primary', 'name', event.target.value);
                            }}
                          >
                            {columnsOptions}
                          </select>
                        </label>
                        <TextField
                          value={columns.primary.label}
                          section='columns'
                          subsection='primary'
                          fieldName='label'
                          label='Label'
                          updateField={updateField}
                          tooltip={
                            <Tooltip style={{textTransform: 'none'}}>
                              <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                              <Tooltip.Content>
                                <p>Enter a data label for use in tooltips and the data table.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                        />
                        <ul className='column-edit'>
                          <li className='three-col'>
                            <TextField
                              value={columns.primary.prefix}
                              section='columns'
                              subsection='primary'
                              fieldName='prefix'
                              label='Prefix'
                              updateField={updateField}
                            />
                            <TextField
                              value={columns.primary.suffix}
                              section='columns'
                              subsection='primary'
                              fieldName='suffix'
                              label='Suffix'
                              updateField={updateField}
                            />
                            <TextField
                              type='number'
                              value={columns.primary.roundToPlace}
                              section='columns'
                              subsection='primary'
                              fieldName='roundToPlace'
                              label='Round'
                              updateField={updateField}
                            />
                          </li>
                          <li>
                            <label className='checkbox'>
                              <input
                                type='checkbox'
                                checked={state.columns.primary.useCommas}
                                onChange={(event) => {
                                  editColumn(
                                    'primary',
                                    'useCommas',
                                    event.target.checked
                                  );
                                }}
                              />
                              <span className='edit-label'>Add Commas to Numbers</span>
                            </label>
                          </li>
                          <li>
                            <label className='checkbox'>
                              <input
                                type='checkbox'
                                checked={state.columns.primary.dataTable || false}
                                onChange={(event) => {
                                  editColumn(
                                    'primary',
                                    'dataTable',
                                    event.target.checked
                                  );
                                }}
                              />
                              <span className='edit-label'>Display in Data Table</span>
                            </label>
                          </li>
                          <li>
                            <label className='checkbox'>
                              <input
                                type='checkbox'
                                checked={state.columns.primary.tooltip || false}
                                onChange={(event) => {
                                  editColumn('primary', 'tooltip', event.target.checked);
                                }}
                              />
                              <span className='edit-label'>Display in Tooltips</span>
                            </label>
                          </li>
                        </ul>
                      </fieldset>
                      <fieldset className="primary-fieldset edit-block">
                        <label>
                          <span className='edit-label'>
                            Special Classes
                            <Tooltip style={{textTransform: 'none'}}>
                              <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                              <Tooltip.Content>
                                <p>For secondary values such as "NA", the system can automatically color-code them in shades of gray, one shade for each special class.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          </span>
                        </label>
                        {specialClasses.map((specialClass, i) => (
                          <div className="edit-block" key={`special-class-${i}`}>
                            <button className="remove-column"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      editColumn('primary', 'specialClassDelete', i);
                                    }}
                            >Remove</button>
                            <p>Special Class {i + 1}</p>
                            <label>
                              <span className="edit-label column-heading">Data Key</span>
                              <select value={specialClass.key} onChange={(e) => {
                                editColumn('primary', 'specialClassEdit', {prop: 'key', index: i, value: e.target.value});
                              }}>
                                {columnsOptions}
                              </select>
                            </label>
                            <label>
                              <span className="edit-label column-heading">Value</span>
                              <select value={specialClass.value} onChange={(e) => {
                                editColumn('primary', 'specialClassEdit', {prop: 'value', index: i, value: e.target.value});
                              }}>
                                <option value="">- Select Value -</option>
                                {columnsByKey[specialClass.key] && columnsByKey[specialClass.key].sort().map(option => (
                                  <option key={`special-class-value-option-${i}-${option}`}>{option}</option>
                                ))}
                              </select>
                            </label>
                            <label>
                              <span className="edit-label column-heading">Label</span>
                              <input type="text" value={specialClass.label} onChange={(e) => {
                                editColumn('primary', 'specialClassEdit', {prop: 'label', index: i, value: e.target.value});
                              }} />
                            </label>
                          </div>
                        ))}
                        <button className="btn full-width" onClick={(e) => {
                          e.preventDefault();
                          editColumn('primary', 'specialClassAdd', {});
                        }}>
                          Add Special Class
                        </button>
                      </fieldset>
                    </>
									)}

									<label className='edit-block navigate column-heading'>
										<span className='edit-label column-heading'>
                      Navigation
                      <Tooltip style={{textTransform: 'none'}}>
                        <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>To provide end users with navigation functionality, select the source column containing the navigation URLs.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
										<select
											value={
												state.columns.navigate ? state.columns.navigate.name : columnsOptions[0]
											}
											onChange={(event) => {
												editColumn('navigate', 'name', event.target.value);
											}}
										>
											{columnsOptions}
										</select>
									</label>
									{'navigation' !== state.general.type &&
                    <fieldset className="primary-fieldset edit-block">
                      <label>
                        <span className="edit-label">
                          Additional Columns
                          <Tooltip style={{textTransform: 'none'}}>
                            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                            <Tooltip.Content>
                              <p>You can specify additional columns to display in tooltips and / or the supporting data table.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                      </label>
                      {additionalColumns.map((val) => (
                        <fieldset className="edit-block" key={val}>
                          <button
                            className="remove-column"
                            onClick={(event) => {
                              event.preventDefault()
                              removeAdditionalColumn(val)
                            }}
                          >
                            Remove
                          </button>
                          <label>
                            <span className="edit-label column-heading">Column</span>
                            <select
                              value={
                                state.columns[val]
                                  ? state.columns[val].name
                                  : columnsOptions[0]
                              }
                              onChange={(event) => {
                                editColumn(val, 'name', event.target.value)
                              }}
                            >
                              {columnsOptions}
                            </select>
                          </label>
                          <TextField
                            value={columns[val].label}
                            section="columns"
                            subsection={val}
                            fieldName="label"
                            label="Label"
                            updateField={updateField}
                          />
                          <ul className="column-edit">
                            <li className="three-col">
                              <TextField
                                value={columns[val].prefix}
                                section="columns"
                                subsection={val}
                                fieldName="prefix"
                                label="Prefix"
                                updateField={updateField}
                              />
                              <TextField
                                value={columns[val].suffix}
                                section="columns"
                                subsection={val}
                                fieldName="suffix"
                                label="Suffix"
                                updateField={updateField}
                              />
                              <TextField
                                type="number"
                                value={columns[val].roundToPlace}
                                section="columns"
                                subsection={val}
                                fieldName="roundToPlace"
                                label="Round"
                                updateField={updateField}
                              />
                            </li>
                            <li>
                              <label className="checkbox">
                                <input
                                  type="checkbox"
                                  checked={state.columns[val].useCommas}
                                  onChange={(event) => {
                                    editColumn(val, 'useCommas', event.target.checked)
                                  }}
                                />
                                <span className="edit-label">Add Commas to Numbers</span>
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input
                                  type="checkbox"
                                  checked={state.columns[val].dataTable}
                                  onChange={(event) => {
                                    editColumn(val, 'dataTable', event.target.checked)
                                  }}
                                />
                                <span className="edit-label">Display in Data Table</span>
                              </label>
                            </li>
                            <li>
                              <label className="checkbox">
                                <input
                                  type="checkbox"
                                  checked={state.columns[val].tooltip}
                                  onChange={(event) => {
                                    editColumn(val, 'tooltip', event.target.checked)
                                  }}
                                />
                                <span className="edit-label">Display in Tooltips</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      ))}
                      <button
                        className={'btn full-width'}
                        onClick={(event) => {
                          event.preventDefault();
                          addAdditionalColumn(additionalColumns.length + 1);
                        }}
                      >
                        Add Column
                      </button>
                    </fieldset>
                  }
								</AccordionItemPanel>
							</AccordionItem>{' '}
							{/* Columns */}
							{'navigation' !== state.general.type && (
								<AccordionItem>
									{' '}
									{/* Legend */}
									<AccordionItemHeading>
										<AccordionItemButton>Legend</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										{(state.legend.type === "equalnumber" || state.legend.type === 'equalinterval') && (
										<label>
											<span className='edit-label'>Legend Type</span>
											<select
												value={legend.type}
												onChange={(event) => {
													handleEditorChanges('legendType', event.target.value);
												}}
											>
												<option value='equalnumber'>Equal Number</option>
												<option value='equalinterval'>Equal Interval</option>
												<option value='category'>Categorical</option>
											</select>
											</label>
											)}
										{'category' !== legend.type && (
											<label className='checkbox'>
												<input
													type='checkbox'
													checked={legend.separateZero || false}
													onChange={(event) =>
														handleEditorChanges('separateZero', event.target.checked)
													}
												/>
												<span className='edit-label'>
                          Separate Zero
                          <Tooltip style={{textTransform: 'none'}}>
                            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                            <Tooltip.Content>
                              <p>For numeric data, you can separate the zero value as its own data class.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
											</label>
										)}
										{'category' !== legend.type && (
											<label>
												<span className='edit-label'>
                          Number of Items
                          <Tooltip style={{textTransform: 'none'}}>
                            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                            <Tooltip.Content>
                              <p>For numeric maps, select the number of data classes. Do not include designated special classes.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
												<select
													value={legend.numberOfItems}
													onChange={(event) => {
														handleEditorChanges('legendNumber', event.target.value);
													}}
												>
													{[...Array(numberOfItemsLimit).keys()].map((num) => {
														return (
															<option value={num + 1} key={num + 1}>
																{num + 1}
															</option>
														);
													})}
												</select>
											</label>
										)}
										{'category' === legend.type && (
											<React.Fragment>
												<label>
													<span className='edit-label'>
                            Category Order
                            <Tooltip style={{textTransform: 'none'}}>
                              <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                              <Tooltip.Content>
                                <p>Drag map categories into preferred legend order. </p>
                              </Tooltip.Content>
                            </Tooltip>
                          </span>
												</label>
												{/* TODO: Swap out this drag and drop library back to something simpler. I had to remove the old one because it hadn't been updated and wouldn't work with Webpack 5. This is overkill for our needs. */}
												<DragDropContext
													onDragEnd={({ source, destination }) =>
														categoryMove(source.index, destination.index)
													}
												>
													<Droppable droppableId='category_order'>
														{(provided) => (
															<ul
																{...provided.droppableProps}
																className='sort-list'
																ref={provided.innerRef}
															>
																<CategoryList />
																{provided.placeholder}
															</ul>
														)}
													</Droppable>
												</DragDropContext>
												{editorCatOrder.length >= 9 && (
													<section className='error-box my-2'>
														<div>
															<strong className='pt-1'>Warning</strong>
															<p>
																The maximum number of categorical legend items is 9. If
																your data has more than 9 categories your map will not
																display properly.
															</p>
														</div>
													</section>
												)}
											</React.Fragment>
										)}
										<TextField
											value={legend.title}
											updateField={updateField}
											section='legend'
											fieldName='title'
											label='Legend Title'
											placeholder='Legend Title'
										/>
										{false === legend.dynamicDescription && (
											<TextField
												type='textarea'
												value={legend.description}
												updateField={updateField}
												section='legend'
												fieldName='description'
												label='Legend Description'
											/>
										)}
										{true === legend.dynamicDescription && (
											<React.Fragment>
												<label>
													<span>Legend Description</span>
													<span className='subtext'>
														For {displayFilterLegendValue(activeFilterValueForDescription)}
													</span>
													<DynamicDesc
														value={
															legend.descriptions[String(activeFilterValueForDescription)]
														}
													/>
												</label>
												<label>
													<select
														value={String(activeFilterValueForDescription)}
														onChange={(event) => {
															handleEditorChanges(
																'changeActiveFilterValue',
																event.target.value
															);
														}}
													>
														{filterValueOptionList.map((arr, i) => {
															return (
																<option value={arr} key={i}>
																	{displayFilterLegendValue(arr)}
																</option>
															);
														})}
													</select>
												</label>
											</React.Fragment>
										)}
										{filtersJSX.length > 0 && (
											<label className='checkbox'>
												<input
													type='checkbox'
													checked={legend.dynamicDescription}
													onChange={() => {
														handleEditorChanges(
															'dynamicDescription',
															filterValueOptionList[0]
														);
													}}
												/>
												<span className='edit-label'>
                          Dynamic Legend Description
                          <Tooltip style={{textTransform: 'none'}}>
                            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                            <Tooltip.Content>
                              <p>Check this option if the map has multiple filter controls and you want to specify a description for each filter selection.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
											</label>
										)}
										{filtersJSX.length > 0 && (
											<label className='checkbox'>
												<input
													type='checkbox'
													checked={legend.unified}
													onChange={(event) =>
														handleEditorChanges('unifiedLegend', event.target.checked)
													}
												/>
												<span className='edit-label'>
                          Unified Legend
                          <Tooltip style={{textTransform: 'none'}}>
                            <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                            <Tooltip.Content>
                              <p>For a map with filters, check this option if you want the high and low values in the legend to be based on <em>all</em> mapped values.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
											</label>
										)}
									</AccordionItemPanel>
								</AccordionItem>
							)}
							{'navigation' !== state.general.type && (
								<AccordionItem>
									{' '}
									{/* Filters */}
									<AccordionItemHeading>
										<AccordionItemButton>Filters</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										{filtersJSX.length > 0 ? (
											filtersJSX
										) : (
											<p style={{ textAlign: 'center' }}>There are currently no filters.</p>
										)}
										<button
											className={'btn full-width'}
											onClick={(event) => {
												event.preventDefault();
												changeFilter(null, 'addNew');
											}}
										>
											Add Filter
										</button>
									</AccordionItemPanel>
								</AccordionItem>
							)}
							{'navigation' !== state.general.type && (
								<AccordionItem>
									{' '}
									{/* Data Table */}
									<AccordionItemHeading>
										<AccordionItemButton>Data Table</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<TextField
											value={dataTable.title}
											updateField={updateField}
											section='dataTable'
											fieldName='title'
											label='Data Table Title'
											placeholder='Data Table'
										/>
										<TextField
											value={dataTable.indexLabel || ''}
											updateField={updateField}
											section='dataTable'
											fieldName='indexLabel'
											label='Index Column Header'
											placeholder='Location'
                      tooltip={
                        <Tooltip style={{textTransform: 'none'}}>
                          <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
										/>
										<TextField
											value={dataTable.caption}
											updateField={updateField}
											section='dataTable'
											fieldName='caption'
											label='Data Table Caption'
											placeholder='Data Table'
                      tooltip={
                        <Tooltip style={{textTransform: 'none'}}>
                          <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter a description of the data table to be read by screen readers.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
											type="textarea"
										/>
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={
													state.dataTable.forceDisplay !== undefined
														? state.dataTable.forceDisplay
														: !isDashboard
												}
												onChange={(event) => {
													handleEditorChanges('showDataTable', event.target.checked);
												}}
											/>
											<span className='edit-label'>
                        Show Table
                        <Tooltip style={{textTransform: 'none'}}>
                          <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                          <Tooltip.Content>
                            <p>Data tables are required for 508 compliance. When choosing to hide this data table, replace with your own version.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      </span>
										</label>
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={ state.dataTable.limitHeight }
												onChange={(event) => {
													handleEditorChanges('limitDataTableHeight', event.target.checked);
												}}
											/>
											<span className='edit-label'>Limit Table Height</span>
										</label>
										{state.dataTable.limitHeight &&
											<TextField
												value={dataTable.height}
												updateField={updateField}
												section='dataTable'
												fieldName='height'
												label='Data Table Height'
												placeholder='Height(px)'
												type="number"
												min="0"
												max="500"
											/>
										}
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={state.general.expandDataTable || false}
												onChange={(event) => {
													handleEditorChanges('expandDataTable', event.target.checked);
												}}
											/>
											<span className='edit-label'>Map loads with data table expanded</span>
										</label>
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={state.general.showDownloadButton}
												onChange={(event) => {
													handleEditorChanges('toggleDownloadButton', event.target.checked);
												}}
											/>
											<span className='edit-label'>Enable Download CSV Button</span>
										</label>
									</AccordionItemPanel>
								</AccordionItem>
							)}
							<AccordionItem>
								{' '}
								{/* Tooltips */}
								<AccordionItemHeading>
									<AccordionItemButton>Interactivity</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<label>
										<span className='edit-label'>
											Detail displays on{' '}
                      <Tooltip style={{textTransform: 'none'}}>
                        <Tooltip.Target><Icon display="question" style={{marginLeft: '0.5rem'}}/></Tooltip.Target>
                        <Tooltip.Content>
                          <p>At mobile sizes, information always appears in a popover modal when a user taps on an item.</p>
                        </Tooltip.Content>
                      </Tooltip>
										</span>
										<select
											value={state.tooltips.appearanceType}
											onChange={(event) => {
												handleEditorChanges('appearanceType', event.target.value);
											}}
										>
											<option value='hover'>Hover - Tooltip</option>
											<option value='click'>Click - Popover Modal</option>
										</select>
									</label>
									{'click' === state.tooltips.appearanceType && (
										<TextField
											value={tooltips.linkLabel}
											section='tooltips'
											fieldName='linkLabel'
											label='Tooltips Link Label'
											updateField={updateField}
										/>
									)}
									<label className='checkbox'>
										<input
											type='checkbox'
											checked={state.tooltips.capitalizeLabels}
											onChange={(event) => {
												handleEditorChanges('capitalizeLabels', event.target.checked);
											}}
										/>
										<span className='edit-label'>Capitalize text inside tooltip</span>
									</label>
								</AccordionItemPanel>
							</AccordionItem>
							<AccordionItem>
								{' '}
								{/* Visual */}
								<AccordionItemHeading>
									<AccordionItemButton>Visual</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<label className='header'>
										<span className='edit-label'>Header Theme</span>
										<ul className='color-palette'>
											{headerColors.map((palette) => {
												return (
													<li
														title={palette}
														key={palette}
														onClick={() => {
															handleEditorChanges('headerColor', palette);
														}}
														className={
															state.general.headerColor === palette
																? 'selected ' + palette
																: palette
														}
													></li>
												);
											})}
										</ul>
									</label>
									<label className='checkbox'>
										<input
											type='checkbox'
											checked={state.general.showTitle || false}
											onChange={(event) => {
												handleEditorChanges('showTitle', event.target.checked);
											}}
										/>
										<span className='edit-label'>Show Title</span>
									</label>

									<label className='checkbox'>
										<input
											type='checkbox'
											checked={state.general.hideGeoColumnInTooltip || false}
											onChange={(event) => {
												handleEditorChanges('hideGeoColumnInTooltip', event.target.checked);
											}}
										/>
										<span className='edit-label'>Hide Geography Column Name in Tooltip</span>
									</label>

									<label className='checkbox'>
										<input
											type='checkbox'
											checked={state.general.hidePrimaryColumnInTooltip || false}
											onChange={(event) => {
												handleEditorChanges('hidePrimaryColumnInTooltip', event.target.checked);
											}}
										/>
										<span className='edit-label'>Hide Primary Column Name in Tooltip</span>
									</label>

									{'navigation' !== state.general.type && (
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={state.general.showSidebar || false}
												onChange={(event) => {
													handleEditorChanges('showSidebar', event.target.checked);
												}}
											/>
											<span className='edit-label'>Show Legend</span>
										</label>
									)}
									{'navigation' !== state.general.type && (
										<label>
											<span className='edit-label'>Legend Position</span>
											<select
												value={legend.position || false}
												onChange={(event) => {
													handleEditorChanges('sidebarPosition', event.target.value);
												}}
											>
												<option value='side'>Side</option>
												<option value='bottom'>Bottom</option>
											</select>
										</label>
									)}
									{'side' === legend.position && (
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={legend.singleColumn}
												onChange={(event) => {
													handleEditorChanges('singleColumnLegend', event.target.checked);
												}}
											/>
											<span className='edit-label'>Single Column Legend</span>
										</label>
									)}
									{'navigation' === state.general.type && (
										<label className='checkbox'>
											<input
												type='checkbox'
												checked={state.general.fullBorder || false}
												onChange={(event) => {
													handleEditorChanges('fullBorder', event.target.checked);
												}}
											/>
											<span className='edit-label'>Add border around map</span>
										</label>
									)}
									<label>
										<span className='edit-label'>Geo Border Color</span>
										<select
											value={state.general.geoBorderColor || false}
											onChange={(event) => {
												handleEditorChanges('geoBorderColor', event.target.value);
											}}
										>
											<option value='darkGray'>Dark Gray (Default)</option>
											<option value='sameAsBackground'>White</option>
										</select>
									</label>
									<label>
										<span className='edit-label'>Map Color Palette</span>
									</label>
									{/* <InputCheckbox  section="general" subsection="palette"  fieldName='isReversed'  size='small' label='Use selected palette in reverse order'   updateField={updateField}  value={isPaletteReversed} /> */}
									<InputToggle type='3d' section="general" subsection="palette"  fieldName='isReversed'  size='small' label='Use selected palette in reverse order'   updateField={updateField}  value={isPaletteReversed} />
										<span>Sequential</span>
									<ul className='color-palette'>
										{filteredPallets
											.map((palette) => {
												const colorOne = {
													backgroundColor: colorPalettes[palette][2],
												};

												const colorTwo = {
													backgroundColor: colorPalettes[palette][4],
												};

												const colorThree = {
													backgroundColor: colorPalettes[palette][6],
												};

												return (
													<li
														title={palette}
														key={palette}
														onClick={() => {
															handleEditorChanges('color', palette);
														}}
														className={state.color === palette ? 'selected' : ''}
													>
														<span style={colorOne}></span>
														<span style={colorTwo}></span>
														<span style={colorThree}></span>
													</li>
												);
											})}
									</ul>
									<span>Non-Sequential</span>
									<ul className='color-palette'>
										{filteredQualitative
											.map((palette) => {
												const colorOne = {
													backgroundColor: colorPalettes[palette][2],
												};

												const colorTwo = {
													backgroundColor: colorPalettes[palette][4],
												};

												const colorThree = {
													backgroundColor: colorPalettes[palette][6],
												};

												return (
													<li
														title={palette}
														key={palette}
														onClick={() => {
															handleEditorChanges('color', palette);
														}}
														className={state.color === palette ? 'selected' : ''}
													>
														<span style={colorOne}></span>
														<span style={colorTwo}></span>
														<span style={colorThree}></span>
													</li>
												);
											})}
									</ul>
								</AccordionItemPanel>
							</AccordionItem>
						</Accordion>
					</form>
					<a
						href='https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html'
						target='_blank'
						rel='noopener noreferrer'
						className='guidance-link'
					>
						<MapIcon />
						<div>
							<span className='heading-3'>Get Maps Help</span>
							<p>Examples and documentation</p>
						</div>
					</a>
					<div className='advanced'>
						<span className='advanced-toggle-link' onClick={() => setAdvancedToggle(!advancedToggle)}>
							<span>{advancedToggle ? `— ` : `+ `}</span>Advanced Options
						</span>
						{advancedToggle && (
							<React.Fragment>
								<section className='error-box py-2 px-3 my-2'>
									<div>
										<strong className='pt-1'>Warning</strong>
										<p>This can cause serious errors in your map.</p>
									</div>
								</section>
								<p className='pb-2'>
									This tool displays the actual map configuration{' '}
									<acronym title='JavaScript Object Notation'>JSON</acronym> that is generated by this
									editor and allows you to edit properties directly and apply them.
								</p>
								<textarea
									value={configTextboxValue}
									onChange={(event) => setConfigTextbox(event.target.value)}
								/>
								<button
									className='btn full-width'
									onClick={() => loadConfig(JSON.parse(configTextboxValue))}
								>
									Apply
								</button>
							</React.Fragment>
						)}
					</div>
				</section>
			</section>
		</ErrorBoundary>
	);
};

export default EditorPanel;
