import { useState } from 'react'

export const useModal = () => {
  const [isShown, setIsShown] = useState(false)
  const toggle = () => setIsShown(!isShown)
  return {
    isShown,
    toggle
  }
}
