'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

var ideaHuntServices = angular.module('ideaHuntServices', ['ngResource']);

ideaHuntServices.factory('TechnologyIdeas', ['$resource',
  function($resource){
    return $resource('ideas/:ideaId.json', {}, {
      query: {method:'GET', params:{ideaId:'technologyIdeas'}, isArray:true}
    });
  }]);

ideaHuntServices.factory('ProcessIdea', ['$resource',
  function($resource){
    return $resource('ideas/:ideaId.json', {}, {
      query: {method:'GET', params:{ideaId:'processIdeas'}, isArray:true}
    });
  }]);
  
  ideaHuntServices.factory('MyIdeas', ['$resource',
  function($resource){
    return $resource('ideas/:ideaId.json', {}, {
      query: {method:'GET', params:{ideaId:'myIdeas'}, isArray:true}
    });
  }]);

ideaHuntServices.factory('ApplicationLobIdeas', ['$resource',
  function($resource){
    return $resource('ideas/:ideaId.json', {}, {
      query: {method:'GET', params:{ideaId:'applicationsLobIdeas'}, isArray:true}
    });
  }]);

ideaHuntServices.factory('Ideas', ['$resource',
  function($resource){
    return $resource('ideas/:ideaId.json', {}, {
      query: {method:'GET', params:{ideaId:'ideas'}, isArray:true}
    });
  }]);

ideaHuntServices.factory('Comments', ['$resource',
  function($resource){
    return $resource('ideas/:ideaId.json', {}, {
      query: {method:'GET', params:{ideaId:'comments'}, isArray:true}
    });
  }]);




