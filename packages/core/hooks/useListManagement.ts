import { useCallback } from 'react'

export interface UseListManagementOptions<TItem> {
  /** Config object containing the list */
  config: any
  /** Function to update entire config */
  updateConfig: (config: any) => void
  /** Path to the list in config (e.g., 'items' or 'imageData.options') */
  listPath: string
  /** Factory function to create new items */
  createItem: () => TItem
}

/**
 * Hook for managing dynamic lists in EditorPanel configs
 *
 * Standardizes add/remove/update operations for dynamic arrays,
 * eliminating the need for repetitive boilerplate code.
 *
 * @example
 * // Basic usage
 * const { items, add, remove, update } = useListManagement({
 *   config,
 *   updateConfig,
 *   listPath: 'imageData.options',
 *   createItem: () => ({ source: '', alt: '' })
 * })
 *
 * @example
 * // Usage in render
 * {items.map((image, index) => (
 *   <div key={index}>
 *     <button onClick={() => remove(index)}>Remove</button>
 *     <input
 *       value={image.source}
 *       onChange={e => updateField(index, 'source', e.target.value)}
 *     />
 *   </div>
 * ))}
 * <button onClick={add}>Add Image</button>
 */
export const useListManagement = <TItem = any>({
  config,
  updateConfig,
  listPath,
  createItem
}: UseListManagementOptions<TItem>) => {
  /**
   * Parse nested path (e.g., 'imageData.options' → config.imageData.options)
   */
  const getList = useCallback((): TItem[] => {
    const parts = listPath.split('.')
    let current = config
    for (const part of parts) {
      current = current?.[part]
    }
    return current || []
  }, [config, listPath])

  /**
   * Update list at nested path
   */
  const setList = useCallback(
    (newList: TItem[]) => {
      const parts = listPath.split('.')
      if (parts.length === 1) {
        // Simple top-level path
        updateConfig({ ...config, [parts[0]]: newList })
      } else {
        // Nested path - need to reconstruct nested structure
        const updated = { ...config }
        let current = updated
        for (let i = 0; i < parts.length - 1; i++) {
          current[parts[i]] = { ...current[parts[i]] }
          current = current[parts[i]]
        }
        current[parts[parts.length - 1]] = newList
        updateConfig(updated)
      }
    },
    [config, updateConfig, listPath]
  )

  /**
   * Add a new item to the list
   */
  const add = useCallback(() => {
    const list = getList()
    setList([...list, createItem()])
  }, [getList, setList, createItem])

  /**
   * Remove an item at the specified index
   */
  const remove = useCallback(
    (index: number) => {
      const list = getList()
      setList(list.filter((_, i) => i !== index))
    },
    [getList, setList]
  )

  /**
   * Update an item with partial changes
   */
  const update = useCallback(
    (index: number, partial: Partial<TItem>) => {
      const list = getList()
      const updated = [...list]
      updated[index] = { ...updated[index], ...partial }
      setList(updated)
    },
    [getList, setList]
  )

  /**
   * Update a specific field of an item
   */
  const updateField = useCallback(
    (index: number, field: keyof TItem, value: any) => {
      const list = getList()
      const updated = [...list]
      updated[index] = { ...updated[index], [field]: value }
      setList(updated)
    },
    [getList, setList]
  )

  /**
   * Update a nested field within an array field
   * Useful for imageData.options[i].arguments[j].threshold patterns
   */
  const updateNested = useCallback(
    (index: number, field: keyof TItem, nestedIndex: number, nestedField: string, value: any) => {
      const list = getList()
      const updated = [...list]
      const item = { ...updated[index] }
      const nestedArray = [...(item[field] as any)]
      nestedArray[nestedIndex] = { ...nestedArray[nestedIndex], [nestedField]: value }
      item[field] = nestedArray as any
      updated[index] = item
      setList(updated)
    },
    [getList, setList]
  )

  /**
   * Replace entire item at index
   */
  const replace = useCallback(
    (index: number, item: TItem) => {
      const list = getList()
      const updated = [...list]
      updated[index] = item
      setList(updated)
    },
    [getList, setList]
  )

  /**
   * Move an item from one index to another (for drag-and-drop)
   */
  const move = useCallback(
    (fromIndex: number, toIndex: number) => {
      const list = getList()
      const updated = [...list]
      const [removed] = updated.splice(fromIndex, 1)
      updated.splice(toIndex, 0, removed)
      setList(updated)
    },
    [getList, setList]
  )

  return {
    /** Current list items */
    items: getList(),
    /** Add a new item to the end of the list */
    add,
    /** Remove an item at index */
    remove,
    /** Update item with partial changes */
    update,
    /** Update a specific field of an item */
    updateField,
    /** Update nested array field (e.g., item.arguments[i].threshold) */
    updateNested,
    /** Replace entire item at index */
    replace,
    /** Move item from one index to another */
    move
  }
}
