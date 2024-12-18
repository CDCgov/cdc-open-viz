export const closeModal = ({ target }, modal: string, setModal: Function) => {
  if (
    'string' === typeof target.className &&
    (target.className.includes('modal-close') || target.className.includes('modal-background')) &&
    null !== modal
  ) {
    setModal(null)
  }
}
