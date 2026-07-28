export const ensureElementVisibleInScrollContainer = (
  element?: Element | null,
  container?: HTMLElement | null,
  topOffset = 0,
  bottomOffset = 0
) => {
  if (!element || !container) return

  const elementRect = element.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()
  const visibleTop = containerRect.top + topOffset
  const visibleBottom = containerRect.bottom - bottomOffset

  if (elementRect.top < visibleTop) {
    container.scrollTop -= visibleTop - elementRect.top
  } else if (elementRect.bottom > visibleBottom) {
    container.scrollTop += elementRect.bottom - visibleBottom
  }
}
