/**
 * @author Daijiro Wachi <daijiro.wachi@gmail.com>
 * @version 0.0.1
 * @license The MIT License
 *   Copyright (c) 2014 Daijiro Wachi
 */

/**
 * @class cssFilter
 */
var cssFilter = function (selectors, filters) {
  /**
   * @class klass
   * @constructor
   * @param {String} selectors
   * @params {Object} Filter suite
   * @return {Function} self
   */
  var klass = function (selectors, filters) {
    /** @property list */
    this.list = document.querySelectorAll(selectors);

    /** @property filters */
    this.filters = filters || {};
    if (filters) return this.do();
  }

  /**
   * @method getFilter
   * @return {String} Join filter objects
   */
  klass.prototype.getFilter = function () {
    var filters = '';
    for (var key in this.filters) {
      filters += key + '(' + this.filters[key] + ') ';
    }
    return filters;
  };

  /**
   * @method blur
   * @param {String} <Number> + px
   * @return {Function} self
   */
  klass.prototype.blur  = function (val) {
    var length = val || '0px';
    this.filters['blur'] = length;
    return this.do();
  };

  /**
   * @method brightness
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.brightness = function (val) {
    var length = val || '0%';
    this.filters['brightness'] = length;
    return this.do();
  };

  /**
   * @method contrast
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.contrast = function (val) {
    var length = val || '0%';
    this.filters['contrast'] = length;
    return this.do();
  };

  /**
   * @method dropShadow
   * @param {String} x y blur color
   * @return {Function} self
   */
  klass.prototype.dropShadow = function (val) {
    var length = val || '0px 0px 0px #000';
    this.filters['drop-shadow'] = length;
    return this.do();
  };

  /**
   * @method
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.grayscale = function (val) {
    var length = val || '0%';
    this.filters['grayscale'] = length;
    return this.do();
  };

  /**
   * @method hueRotate
   * @param {String} <Number> + deg
   * @return {Function} self
   */
  klass.prototype.hueRotate = function (val) {
    var length = val || '0deg';
    this.filters['hue-rotate'] = length;
    return this.do();
  };

  /**
   * @method invert
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.invert = function (val) {
    var length = val || '0%';
    this.filters['invert'] = length;
    return this.do();
  };

  /**
   * @method opacity
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.opacity = function (val) {
    var length = val || '0%';
    this.filters['opacity'] = length;
    return this.do();
  };

  /**
   * @method saturate
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.saturate = function (val) {
    var length = val || '0%';
    this.filters['saturate'] = length;
    return this.do();
  };

  /**
   * @method sepia
   * @param {String} <Number> + %
   * @return {Function} self
   */
  klass.prototype.sepia = function (val) {
    var length = val || '0%';
    this.filters['sepia'] = length;
    return this.do();
  };

  /**
   * @method do
   * @return {Function} self
   */
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
