import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import Modal from '@cdc/core/components/ui/Modal'
import { DashboardContext } from '../../../../DashboardContext'
import { useContext } from 'react'
import { DashboardFilters } from '../../../../types/DashboardFilters'

type DeleteFilterProps = {
  removeFilterCompletely: (number) => void
  removeFilterFromViz: (number) => void
  filterIndex: number
}

const DeleteFilterModal: React.FC<DeleteFilterProps> = ({
  removeFilterCompletely,
  removeFilterFromViz,
  filterIndex
}) => {
  const { overlay } = useGlobalContext()
  const { config } = useContext(DashboardContext)

  const filterUsedByMany =
    Object.values(config.visualizations).filter(viz => {
      return (viz as DashboardFilters).sharedFilterIndexes?.map(Number).includes(Number(filterIndex))
    }).length > 1

  const message = filterUsedByMany
    ? 'This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations.'
    : 'Are you sure you want to delete this filter?'
  return (
    <Modal showClose={true}>
      <Modal.Content>
        <p>{message}</p>
        {filterUsedByMany && (
          <button
            className='btn btn-warning'
            onClick={() => {
              removeFilterFromViz(filterIndex)
              overlay?.actions.toggleOverlay()
            }}
          >
            Delete from Visualization
          </button>
        )}
        <button
          className='btn btn-danger'
          onClick={() => {
            removeFilterCompletely(filterIndex)
            overlay?.actions.toggleOverlay()
          }}
        >
          Delete{filterUsedByMany ? ' Completely' : ''}
        </button>
      </Modal.Content>
    </Modal>
  )
}

export default DeleteFilterModal
