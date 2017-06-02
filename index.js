(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.VueCovfefe = factory()
  }
}(this, function () {
  var VueCovfefe = {
    install: function (Vue) {
      Vue.directive('covfefe', {
        bind: function (el) {
          var covfefe = this.covfefe = document.createTextNode(' covfefe')
          el.appendChild(covfefe)
        },
        unbind: function (el) {
          el.removeChild(this.covfefe)
        }
      })
    }
  }
  return VueCovfefe
}))
