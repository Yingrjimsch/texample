(function () {
    
    var texample = function() { return 'This is an example'; };

    texample.lorem = function() { return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'; };

    texample.loremG = function(nr) 
    
    texample.prename = function(b) {
        switch(texample.l()) {
            case 'en-GB': 
                return 'Peter';
        }
    }

    texample.l = function() { 
        if(typeof window !== 'undefined') {
            return window.navigator.userLanguage || window.navigator.language;
        } else {
            return 'en-GB';
        }
    };

    texample.valueOf = texample;
  
    if(typeof module !== 'undefined' && module.exports) {
      module.exports = texample;
    } else if (typeof define === 'function' && define.amd){
      define(texample);
    } else if (window) {
      window.texample = texample;
    }
  }());