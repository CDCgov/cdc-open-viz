import { timeFormat, timeParse } from 'd3-time-format'

// General ------------------------------------------------------------------------------------------------
const getViewport = (size) => {
  const viewports = { 'lg': 1280, 'md': 992, 'sm': 768, 'xs': 576, 'xxs': 350 }
  let result = 'xl'
  if (size > 1200) return result
  for (let viewport in viewports) if (size <= viewports[viewport]) result = viewport
  return result
}

// Strings ------------------------------------------------------------------------------------------------
const cacheBustingString = () => {
  const round = 1000 * 60 * 15
  const date = new Date()
  return new Date(date.getTime() - (date.getTime() % round)).toISOString()
}

const numberFromString = (value) => {
  let nonNumeric = /[^\d.-]/g
  if (false === Number.isNaN(parseFloat(value)) && null === String(value).match(nonNumeric)) return parseFloat(value)
  return value
}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// Dates ------------------------------------------------------------------------------------------------
const formatDate = (format = undefined, date) => (timeFormat(format)(date))
const parseDate = (format = undefined, dateString) => (timeParse(format)(dateString) || new Date())

// Math ------------------------------------------------------------------------------------------------
const getSum = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.reduce((sum, x) => sum + x)
  }
}

const getMean = (arr) => {
  return arr.length > 1 ? arr.reduce((a, b) => a + b) / arr.length : arr[0]
}

const getMedian = (arr) => {
  const mid = Math.floor(arr.length / 2)
  const nums = [ ...arr ].sort((a, b) => a - b)

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

const getMode = (arr) => {
  let response = []
  let freq = {}
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1
    } else {
      // If index entry doesn't exist, start at 1 instead of 0
      freq[arr[i]] = 1
    }
    if (freq[arr[i]] > max) max = freq[arr[i]]
  }
  for (let key in freq) if (freq[key] === max) response.push(key)
  return response
}

const applyPrecision = (value, roundToPlace) => {
  if ('' !== roundToPlace && !isNaN(roundToPlace) && Number(roundToPlace) > -1) {
    value = Number(value).toFixed(Number(roundToPlace))
  }
  return value
}

// Events ------------------------------------------------------------------------------------------------
const subscribe = (eventName, listener) => document.addEventListener(eventName, listener)

const unsubscribe = (eventName, listener) => document.removeEventListener(eventName, listener)

const publish = (eventName, data) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

export {
  // General
  getViewport,

  // Strings
  cacheBustingString,
  numberFromString,
  capitalizeFirstLetter,

  // Date
  formatDate,
  parseDate,

  // Math
  getSum,
  getMean,
  getMedian,
  getMode,
  applyPrecision,

  // Events
  subscribe,
  unsubscribe,
  publish
}
