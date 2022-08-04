function Marker(options) {
  const defaultOpt = {};
  this.options = Object.assign(defaultOpt, options);
  this.init();
}

Marker.prototype.init = function () {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = '20px';
  div.style.height = '20px';
  div.style.border = '1px solid green';
  div.style.borderRadius = '100%';
};

export default Marker;
