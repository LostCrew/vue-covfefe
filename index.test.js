const Vue = require('vue')
const VueCovfefe = require('./index')

Vue.use(VueCovfefe)
const covfefe = Vue.options.directives.covfefe

it('append ` covfefe` on bind', () => {
  const text = 'test'
  const el = document.createElement('div')
  el.appendChild(document.createTextNode(text))
  covfefe.bind(el)

  expect(el.textContent).toBe(`${text} covfefe`)
})

it('remove ` covfefe` on unbind', () => {
  const text = 'test'
  const el = document.createElement('div')
  el.appendChild(document.createTextNode(text))
  covfefe.bind(el)
  covfefe.unbind(el)

  expect(el.textContent).toBe(text)
})
