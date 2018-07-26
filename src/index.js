var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = displayStringInput

function displayStringInput({name, classes: css}) {

  var input = bel`<input class=${css.inputField} placeholder='abc'>`

  return bel`
    <div class=${css.inputContainer}>
      <div class=${css.inputTitle}>${name}</div>
      <div class=${css.inputFields}>
        ${input}
      </div>
    </div>
  `
}
