const range = require('range-slider-ui')
const integer = require('input-integer-ui')

module.exports = range_slider_integer

function range_slider_integer (opts) {
  
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })
  
  const range_slider = range(opts, listen)
  const input_integer = integer(opts, listen)

  const output = document.createElement('div')
  output.innerText = 0

  shadow.append(range_slider, input_integer, output)

  return el

  function listen (message) {
    const { type, body } = message
    if (type === 'update') output.innerText = body
  }

}