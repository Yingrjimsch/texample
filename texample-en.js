(function () {
  var texample = function () {
    return 'This is an example.';
  };

  texample.prename = function () {
    return 'Prename';
  };

  texample.ePrename = function () {
    return 'Oliver';
  };

  texample.lastname = function () {
    return 'Lastname';
  };

  texample.eLastname = function () {
    return 'Smith';
  };

  texample.username = function () {
    return 'Username';
  };

  texample.password = function () {
    return 'Password';
  };

  texample.valueOf = texample;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = texample;
  } else if (typeof define === 'function' && define.amd) {
    define(texample);
  } else if (window) {
    window.texample = texample;
  }
})();
