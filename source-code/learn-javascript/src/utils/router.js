export class Router {
  constructor() {
    this.routes = new Map();

    window.addEventListener('hashchange', this.onHashChange.bind(this), false);
  }

  setRoute(path, fn) {
    if (!path.startsWith('#')) {
      path = '#' + path;
    }
    if (!this.routes.has(path)) {
      this.routes.set(path, fn);
    } else {
      throw new Error('route already exsited');
    }
  }

  linkTo(path) {
    window.location.hash = path;
  }

  onHashChange(e) {
    const path = window.location.hash;
    if (this.routes.has(path)) {
      this.routes.get(path)();
    } else {
      throw new Error('no router set for: ' + path);
    }
  }
}

export function useRouter() {
  const routes = new Map();
  window.addEventListener('hashchange', _onHashChange, false);
  function _onHashChange(e) {
    const path = window.location.hash;
    if (routes.has(path)) {
      routes.get(path)();
    } else {
      throw new Error('no router set for: ' + path);
    }
  }
  return {
    setRoute: function (path, fn) {
      if (!path.startsWith('#')) {
        path = '#' + path;
      }
      if (!routes.has(path)) {
        routes.set(path, fn);
      } else {
        throw new Error('route already exsited');
      }
    },
    linkTo: function (path) {
      window.location.hash = path;
    },
  };
}
