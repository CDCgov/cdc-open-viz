export default function cacheBustingString() {
  return `${Math.round(Date.now() / (1000 * 60 * 60 * 6))}`
}
