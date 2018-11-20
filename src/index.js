var bel = require('bel')
var csjs = require('csjs-inject')
var validator = require('solidity-validator')

module.exports = displayStringInput

function displayStringInput({theme: {classes: css}, type, cb}) {
  var input = bel`
    <div class=${css.stringField}>
      <input class=${css.inputField} oninput=${validate} placeholder='abc'>
    </div>`

  return input

  function validate (e) {
    var msg = validator.getMessage(type, e.target.value)
    if (msg) cb(msg)
    else cb(null)
  }
}
