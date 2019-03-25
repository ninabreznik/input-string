const csjs = require('csjs-inject')
const inputstring = require('../')

document.body.innerHTML = `<style>
.inputField {
  color: #cccccc;
  background-color: #666;
}
.stringField {
  width: 300px;
}
</style>`

const classes = {
  inputField: 'inputField',
  stringField: 'stringField'
}
const log = document.createElement('pre')
const el = inputstring({ theme: { classes }, type: 'uint8', cb: (err, val) => {
  if (err) log.appendChild(document.createTextNode(`${err}\n`))
  else log.appendChild(document.createTextNode(`ok: ${val}\n`))
} })
document.body.appendChild(el)
document.body.appendChild(log)
