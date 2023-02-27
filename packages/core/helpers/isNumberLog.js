export default function isNumberLog(value = '', state = null) {
  // if you need to check data to see if there is junk in there that can't be handled
  // you can run the points through this and see values on the console
  console.log("entering isNumber valuetype is:",typeof value);
  var test;
  if (typeof value === 'number') {
    test = !Number.isNaN(value)
  }
  if (typeof value === 'string') {
    test = value !== null && value !== '' && /\d+\.?\d*/.test(value)
  }
  if (test === false) {
    console.log('# isNumber FALSE on value, result', value, test)
  } else {
    console.log('# isNumber TRUE on value, result', value, test)
  }
  return test
}
