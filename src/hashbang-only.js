export default {
  _changeHistory(method, item, url) {
    url.addQuery('_sid', item.id);
    location[method == 'push' ? 'assign' : 'replace']('#!' + url.pathname + url.search + url.hash);
  },

  // fallback to hashbang url if browser doesn't history API
  _convertLocation() {
    if (this.base && location.pathname != this.base && location.protocol.indexOf('http') == 0) {
      let url = location.pathname.replace(this._baseNoTrailingSlash, '');
      url = this.base + '#!' + url + location.search + location.hash;
      location.replace(url);
      // stop executing
      throw 1;
    }
  },

  _parseCurrentUrl() {

  }
};