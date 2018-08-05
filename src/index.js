var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = displayStringInput

function displayStringInput({theme: {classes: css}, type}) {

  return bel`<input class=${css.inputField} placeholder='abc'>`

}
