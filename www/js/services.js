angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    removeItem: function(key){
        $window.localStorage.removeItem(key);
    }
  }
}])

.factory('$app', ['$localstorage','$state', function($localstorage,$state) {
  return {
    checkUser: function() {
      if($localstorage.get("nome") && $localstorage.get("periodo")) {
        $state.go("materias");
      }
    }
  }
}]);