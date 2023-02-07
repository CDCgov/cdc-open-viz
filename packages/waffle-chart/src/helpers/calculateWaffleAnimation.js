// Calculate the animation steps for each node displayed in an animated waffle chart
const calculateWaffleAnimation = (step, prevVal, newVal) => {
  const delay = 0.0025 // Animation delay between nodes
  // const duration = 0.5 // Total duration of animation

  if (newVal) {
    const adjustment = Math.abs(prevVal - newVal)

    // If new value is an increase, calculate the animation timing for the returned node
    if (newVal > prevVal) {
      let timerVal = ''
      const animationIndex = Math.abs((newVal - step) - (adjustment)) // Calculate new index for animations to only set animation delays at changed nodes
      if (step > prevVal && step < newVal) timerVal = 'fill-opacity 200ms cubic-bezier(0.16, 1, 0.3, 1) ' + (animationIndex * delay).toString() + 's, '
      return timerVal
    }

    // If new value is a decrease, calculate the animation timing for the returned node
    if (newVal < prevVal) {
      let timerVal = ''
      const animationIndex = Math.abs(newVal - step) // Calculate new index for animations to only set animation delays at changed nodes
      if (step >= newVal && step < prevVal) timerVal = 'fill-opacity 200ms cubic-bezier(0.16, 1, 0.3, 1) ' + (Math.abs(adjustment - animationIndex) * delay).toString() + 's, '
      return timerVal
    }
  }

  return ''
}

export default calculateWaffleAnimation
