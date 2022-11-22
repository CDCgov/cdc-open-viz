import { useState, useEffect } from 'react'
// Use for accessibility testing
const useActiveElement = () => {
  const [active, setActive] = useState(document.activeElement)

  const handleFocusIn = e => {
    setActive(document.activeElement)
  }

  useEffect(() => {
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [])

  return active
}
export default useActiveElement
