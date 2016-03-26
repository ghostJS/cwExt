angular.module('popup')
  .controller('MainController', ['$scope', 'content', function($scope, content) {

    $scope.name = "CyberWatch";
    $scope.content = [];

    content.postContent(function (content){
        $scope.content = content;
    })

  }])
;
