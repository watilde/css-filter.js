(function () {
  var elem = document.getElementById('cover-heading_input');
  elem.addEventListener('change', function () {
    cssFilter('#cat').blur(this.value + 'px');
  });
  cssFilter('#cat').blur('5px');
}());
