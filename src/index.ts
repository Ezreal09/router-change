import { Options } from './type';

const routerChange = function(cb:() => void, options?: Options) {
  if (options) {
    switch (options.mode) {
      case 'hash':
        hashMode(cb);
        break;
      default:
        historyMode(cb);
        break;
    }
  } else {
    historyMode(cb);;;
  }
};

// history 模式
export function historyMode(cb:() => void) {
  const _pushState = window.history.pushState.bind(window.history);
  const _replaceState = window.history.replaceState.bind(window.history);
  window.history.pushState = function() {
    _pushState(...arguments);
    cb();
  }
  window.history.replaceState = function() {
    _replaceState(...arguments);
    cb();
  }
};

// hash 模式
export function hashMode(cb:() => void) {
  window.addEventListener('hashchange', cb);
}

export default routerChange;
