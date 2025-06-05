import { useState } from 'react'
import { SharedFilter } from '../../../../types/SharedFilter'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

type APIModalProps = {
  filter: SharedFilter
  isNestedDropdown: boolean
  updateAPIFilter: Function
}

const APIModal: React.FC<APIModalProps> = ({ filter, isNestedDropdown, updateAPIFilter }) => {
  const [APIEndpoint, setAPIEndpoint] = useState(filter.apiFilter?.apiEndpoint || '')
  const [APIValueSelector, setAPIValueSelector] = useState(filter.apiFilter?.valueSelector || '')
  const [APITextSelector, setAPITextSelector] = useState(filter.apiFilter?.textSelector || '')
  const [APISubGroupValueSelector, setAPISubGroupValueSelector] = useState(filter.apiFilter?.subgroupValueSelector)
  const [APISubGroupTextSelector, setAPISubGroupTextSelector] = useState(filter.apiFilter?.subgroupTextSelector)
  return (
    <fieldset className='mb-1 px-3 cdc-open-viz-module'>
      <label className='d-block'>
        <span>API Endpoint: </span>
        <textarea
          value={APIEndpoint}
          rows={4}
          onChange={e => setAPIEndpoint(e.target.value)}
          className='w-100'
          style={{ minHeight: '1.5rem', maxWidth: '90%' }}
        />
        {isNestedDropdown && (
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Your API Endpoint should return both value selector values.</p>
            </Tooltip.Content>
          </Tooltip>
        )}
      </label>
      <div className='d-flex'>
        <div className={`w-50${isNestedDropdown ? ' border border-dark p-1 m-1' : ''}`}>
          <label>
            <span>Value Selector: </span>
            <input type='text' value={APIValueSelector || ''} onChange={e => setAPIValueSelector(e.target.value)} />
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Value to use in the html option element</p>
              </Tooltip.Content>
            </Tooltip>
            <p>{` * Required`}</p>
          </label>
          <label>
            <span>Display Text Selector: </span>
            <input type='text' value={APITextSelector || ''} onChange={e => setAPITextSelector(e.target.value)} />
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Text to use in the html option element. If none is applied value selector will be used.</p>
              </Tooltip.Content>
            </Tooltip>
            <p>{` * Optional`}</p>
          </label>
        </div>

        {isNestedDropdown && (
          <div className={`w-50${isNestedDropdown ? ' border border-dark p-1 m-1' : ''}`}>
            <label>
              <span>Subgroup Value Selector: </span>
              <input
                type='text'
                value={APISubGroupValueSelector || ''}
                onChange={e => setAPISubGroupValueSelector(e.target.value)}
              />
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Value to use in the html option element</p>
                </Tooltip.Content>
              </Tooltip>
              <p>{` * Required`}</p>
            </label>
            <label>
              <span>Subgroup Display Text Selector: </span>
              <input
                type='text'
                value={APISubGroupTextSelector || ''}
                onChange={e => setAPISubGroupTextSelector(e.target.value)}
              />
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Text to use in the html option element. If none is applied value selector will be used.</p>
                </Tooltip.Content>
              </Tooltip>
              <p>{` * Optional`}</p>
            </label>
          </div>
        )}
      </div>
      <div className='d-flex justify-content-end mt-2'>
        <button
          className='btn btn-primary mt-2'
          onClick={() =>
            updateAPIFilter(
              APIEndpoint,
              APIValueSelector,
              APITextSelector,
              APISubGroupValueSelector,
              APISubGroupTextSelector
            )
          }
        >
          Save
        </button>
      </div>
    </fieldset>
  )
}

export default APIModal
