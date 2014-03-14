var cssFilter = function (selectors, filters) {
  var klass = function (selectors, filters) {
    this.list = document.querySelectorAll(selectors);
    this.filters = filters || {};
    if (filters) return this.do();
  }

  klass.prototype.getFilter = function () {
    var filters = '';
    for (var key in this.filters) {
      filters += key + '(' + this.filters[key] + ') ';
    }
    return filters;
  };

  klass.prototype.blur  = function (val) {
    var length = val || '0px';
    this.filters['blur'] = length;
    return this.do();
  };

  klass.prototype.brightness = function (val) {
    var length = val || '0%';
    this.filters['brightness'] = length;
    return this.do();
  };

  klass.prototype.contrast = function (val) {
    var length = val || '0%';
    this.filters['contrast'] = length;
    return this.do();
  };

  klass.prototype.dropShadow = function (val) {
    var length = val || '0px 0px 0px #000';
    this.filters['drop-shadow'] = length;
    return this.do();
  };

  klass.prototype.grayscale = function (val) {
    var length = val || '0%';
    this.filters['grayscale'] = length;
    return this.do();
  };

  klass.prototype.hueRotate = function (val) {
    var length = val || '0deg';
    this.filters['hue-rotate'] = length;
    return this.exec();
  };

  klass.prototype.invert = function (val) {
    var length = val || '0%';
    this.filters['invert'] = length;
    return this.do();
  };

  klass.prototype.opacity = function (val) {
    var length = val || '0%';
    this.filters['opacity'] = length;
    return this.do();
  };

  klass.prototype.saturate = function (val) {
    var length = val || '0%';
    this.filters['saturate'] = length;
    return this.exec();
  };

  klass.prototype.sepia = function (val) {
    var length = val || '0%';
    this.filters['sepia'] = length;
    this.do();
    return this;
  };

  klass.prototype.do = function () {
    var filters = this.getFilter();
    for (var i = 0; this.list.length > i; i++) {
      item = this.list[i];
      item.style.setProperty('-webkit-filter', filters);
    }
    return this;
  };

  return new klass(selectors, filters);
};


cssFilter('#cat').blur('10px').grayscale('100%');
