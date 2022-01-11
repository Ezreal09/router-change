const routerChange = function(cb:() => void) {
  const _pushState = window.history.pushState.bind(window.history);
  window.history.pushState = function() {
    _pushState(...arguments);
    cb();
  }
}

export default routerChange;
