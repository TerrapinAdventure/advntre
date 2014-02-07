'use strict';

angular.module('advntreApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
