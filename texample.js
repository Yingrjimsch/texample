(function () {
  var texample;
  const language = function () {
    if (typeof window !== 'undefined') {
      return window.navigator.userLanguage || window.navigator.language;
    } else {
      return 'en-GB';
    }
  };

  switch (language()) {
    case 'de-DE':
      texample = require('./texample-de');
    case 'en-GB':
    default:
      texample = require('./texample-en');
      break;
  }

  texample.lorem = function () {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  };

  texample.loremGenerated = function (nr) {
    return texample.lorem().repeat(nr);
  };

  texample.helloWorld = function () {
    return 'Hello World!';
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
