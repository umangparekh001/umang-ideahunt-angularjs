'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Ideas','Phone',
  function($scope, Ideas, Phone) {
    $scope.phones = Ideas.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('IdeaDashbaordCtrl', ['$scope', '$filter',  'ProcessIdea', 'TechnologyIdeas', 'ApplicationLobIdeas', 
  function($scope, $filter,  ProcessIdea, TechnologyIdeas, ApplicationLobIdeas) {
  
    $scope.technologyIdeas = TechnologyIdeas.query();
    $scope.processIdeas = ProcessIdea.query();
    $scope.applicationsLobIdeas =ApplicationLobIdeas.query();
      
  }]);


phonecatControllers.controller('PostIdeaCtrl', ['$scope','$filter','Phone','ProcessIdea', 'TechnologyIdeas', 'ApplicationLobIdeas',
  function($scope,$filter, Phone, ProcessIdea, TechnologyIdeas, ApplicationLobIdeas) {
  $scope.zonesList = [{id:'1', label:'Technology'}, {id:'2', label:'Process'},{id:'3', label:'Application LOBs'}];
    $scope.ideas = Phone.query();
    console.log($scope.ideas.size);
    $scope.zoneId = "";
       $scope.technologyIdeas = TechnologyIdeas.query();
    $scope.processIdeas = ProcessIdea.query();
    $scope.applicationsLobIdeas =ApplicationLobIdeas.query();
    $scope.zoneCategoryList = [{id:'101', label:'Tools', zoneId:'1'},
      {id:'102', label:'Components', zoneId:'1'},
      {id:'103', label:'New Product and Ideas', zoneId:'1'},
      {id:'104', label:'Platform Solutions', zoneId:'1'},
      {id:'105', label:'Technology Solutions', zoneId:'1'},
      {id:'106', label:'IT as a Service', zoneId:'1'},
      {id:'107', label:'Methodologies and Framework', zoneId:'1'},

      {id:'201', label:'Audit and Compliance', zoneId:'2'},
      {id:'202', label:'Data Security and Operational Risk Management', zoneId:'2'},
      {id:'203', label:'Finance', zoneId:'2'},
      {id:'204', label:'Physical Infrastructure and Administration', zoneId:'2'},
      {id:'205', label:'Digitization', zoneId:'2'},
      {id:'206', label:'Human Resources', zoneId:'2'},
      {id:'207', label:'Knowledge Management', zoneId:'2'},
      {id:'208', label:'Corporate Sustainability', zoneId:'2'},
      {id:'209', label:'Information Resource Centre (Library & Information Center)', zoneId:'2'},
      {id:'210', label:'Leadership & Governance', zoneId:'2'},
      {id:'211', label:'Organization Change Management', zoneId:'2'},
      {id:'212', label:'IT Infrastructure', zoneId:'2'},
      {id:'213', label:'Learning & Competency Development', zoneId:'2'},
      {id:'214', label:'Service Practice', zoneId:'2'},
      {id:'215', label:'Delivery', zoneId:'2'},
      {id:'216', label:'Purchasing', zoneId:'2'},
      {id:'217', label:'Marketing', zoneId:'2'},
      {id:'218', label:'Sales and Client Relationship', zoneId:'2'},
      {id:'219', label:'Health, Safety & Environment', zoneId:'2'},
      {id:'220', label:'Improvement Framework', zoneId:'2'},
      {id:'221', label:'Communication', zoneId:'2'},

      {id:'301', label:'Home Entertainment', zoneId:'3'},
      {id:'302', label:'Motion Pictures', zoneId:'3'},
      {id:'303', label:'Research and Development', zoneId:'3'},
      {id:'304', label:'Television', zoneId:'3'},
      {id:'305', label:'Corporate', zoneId:'3'},
      {id:'306', label:'Vendor Applications', zoneId:'3'},
      {id:'307', label:'EIS', zoneId:'3'},
      {id:'308', label:'New Application', zoneId:'3'}];
   $scope.categories = [];
    $scope.getZoneCategories = function(zoneId){
      $scope.categories = ($filter('filter')( $scope.zoneCategoryList, {zoneId: $scope.zoneId}));
     // return categories;
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

phonecatControllers.controller('IdeaSearchCtrl', ['$scope', '$routeParams', 'Ideas', 'Comments',
  function($scope, $routeParams, Ideas, Comments) {
    $scope.idea = Ideas.get({ideaId: $routeParams.ideaId}, function(phone) {
      
    });
      $scope.comments = Comments.query();
    
  }]);


phonecatControllers.controller('ZoneSearchCtrl', ['$scope', '$routeParams',  'ProcessIdea', 'TechnologyIdeas', 'ApplicationLobIdeas', 'Comments',
  function($scope, $routeParams,  ProcessIdea, TechnologyIdeas, ApplicationLobIdeas, Comments) {
    console.log('$routeParams.zone'+$routeParams.zone);
    if($routeParams.zone == 'applicationsLobIdeas')
      $scope.ideas = ApplicationLobIdeas.query();
    else if($routeParams.zone == 'processIdeas')
        $scope.ideas = ProcessIdea.query();
      else
          $scope.ideas = TechnologyIdeas.query();
      
      
  }]);




