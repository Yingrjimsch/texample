(function () {
  var texample = function () {
    return 'Dies ist ein Beispiel.';
  };

  texample.prename = function () {
    return 'Vorname';
  };

  texample.ePrename = function () {
    return 'Hans';
  };

  texample.lastname = function () {
    return 'Nachname';
  };

  texample.eLastname = function () {
    return 'Muster';
  };

  texample.username = function () {
    return 'Benutzername';
  };

  texample.password = function () {
    return 'Passwort';
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
