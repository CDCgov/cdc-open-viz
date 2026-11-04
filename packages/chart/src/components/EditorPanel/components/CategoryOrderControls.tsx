import { useMemo } from 'react'
import CustomSortOrder from '@cdc/core/components/EditorPanel/CustomSortOrder'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import { type Axis } from '@cdc/core/types/Axis'
import { getOrderedCategoryValues } from '../../../helpers/categoryOrder'

type CategoryOrderType = NonNullable<Axis['categoryOrderType']>

type CategoryOrderControlsProps = {
  axisType?: string
  categoryOrder?: string[]
  categoryOrderType?: CategoryOrderType
  data: Record<string, any>[]
  dataKey?: string
  label?: string
  onOrderChange: (order: string[]) => void
  onOrderTypeChange: (type: CategoryOrderType, order: string[]) => void
}

const CategoryOrderControls = ({
  axisType,
  categoryOrder,
  categoryOrderType,
  data,
  dataKey,
  label = 'Category Order',
  onOrderChange,
  onOrderTypeChange
}: CategoryOrderControlsProps) => {
  const orderedValues = useMemo(
    () => getOrderedCategoryValues(data, dataKey, categoryOrder),
    [categoryOrder, data, dataKey]
  )

  if (axisType !== 'categorical' || !dataKey || !orderedValues.length) return null

  const handleOrderTypeChange = (value: CategoryOrderType) => {
    onOrderTypeChange(value, value === 'custom' ? orderedValues : [])
  }

  return (
    <>
      <Select
        value={categoryOrderType || 'data'}
        section='xAxis'
        fieldName='categoryOrderType'
        label={label}
        options={[
          { label: 'Data order', value: 'data' },
          { label: 'Custom', value: 'custom' }
        ]}
        updateField={(_section, _subsection, _fieldName, value) => handleOrderTypeChange(value)}
      />
      {categoryOrderType === 'custom' && (
        <CustomSortOrder
          column={dataKey}
          data={data}
          customOrder={categoryOrder}
          updateField={(_section, _subsection, _fieldName, order) => onOrderChange(order)}
          updateTarget={{ section: 'xAxis', subsection: null, fieldName: 'categoryOrder' }}
          droppableId='category_order'
          draggableIdPrefix='categoryOrder'
        />
      )}
    </>
  )
}

export default CategoryOrderControls
