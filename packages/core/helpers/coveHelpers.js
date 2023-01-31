import { timeFormat, timeParse } from 'd3-time-format'

// General
const getViewport = (size) => {
  const viewports = { 'lg': 1280, 'md': 992, 'sm': 768, 'xs': 576, 'xxs': 350 }
  let result = 'xl'
  if (size > 1200) return result
  for (let viewport in viewports) if (size <= viewports[viewport]) result = viewport
  return result
}

// Strings
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

// Dates
const formatDate = (format = undefined, date) => (timeFormat(format)(date))
const parseDate = (format = undefined, dateString) => (timeParse(format)(dateString) || new Date())

// Events
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

  // Events
  subscribe,
  unsubscribe,
  publish
}
