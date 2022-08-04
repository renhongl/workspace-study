export class Storage {
  constructor(nameSpace) {
    this.nameSpace = nameSpace;
  }

  _getStorage() {
    return window.localStorage.getItem(this.nameSpace);
  }

  getItem(key) {
    let storage = this._getStorage();
    if (!storage) {
      return null;
    } else {
      storage = JSON.parse(storage);
      const result = storage[key] || '';
      return result;
    }
  }

  setItem(key, val) {
    let storage = this._getStorage();
    if (!storage) {
      storage = {};
    } else {
      storage = JSON.parse(storage);
    }
    storage[key] = val;
    window.localStorage.setItem(this.nameSpace, JSON.stringify(storage));
  }
}

export function useStorage(ns) {
  const nameSpace = ns || 'default';
  function _getStorage() {
    return window.localStorage.getItem(nameSpace);
  }

  return {
    set: function (key, val) {
      let storage = _getStorage();
      if (!storage) {
        storage = {};
      } else {
        storage = JSON.parse(storage);
      }
      storage[key] = val;
      window.localStorage.setItem(nameSpace, JSON.stringify(storage));
    },
    get: function (key) {
      let storage = _getStorage();
      if (!storage) {
        return null;
      } else {
        storage = JSON.parse(storage);
        const result = storage[key] || '';
        return result;
      }
    },
  };
}
