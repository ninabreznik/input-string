const bel = require('bel')
const csjs = require('csjs-inject')
const validator = require('solidity-validator')

module.exports = displayStringInput

function displayStringInput ({ theme: { classes: css }, cb }) {
  const input = bel`<div class=${css.stringField}>
    <input class=${css.inputField} data-type="string" oninput=${validate} placeholder='abc'>
  </div>`
  return input
  function validate (e) {
    const value = e.target.value
    cb(validator.getMessage('string', value), value)
  }
}
