angular.module('flapperNews', ['ui.router'])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ( $stateProvider, $urlRouterProvider ) {
      
      // == Configure States
      $stateProvider
        
        .state( 'home', {
          url: '/home',
          templateUrl: 'partial-home.html',
          controller: 'HomeController'
        })

        .state( 'post', {
          url: '/post/{id}',
          templateUrl: 'partial-post.html',
          controller: 'PostsController'
        })
        ;
      // !== Configure States

      $urlRouterProvider.otherwise( 'home' );
    }
  ])

  .factory('posts', [function () {
    var p = {
      posts: [
        { title: 'post 1', upvotes: 5, comments: [] },
        { title: 'post 2', upvotes: 2, comments: [] },
        { title: 'post 3', upvotes: 15,
          comments: [
            { author: 'Joe', body: 'Cool post!', upvotes: 0 },
            { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
          ] },
        { title: 'post 4', upvotes: 9, comments: [] },
        { title: 'post 5', upvotes: 4, comments: [] }
      ]
    };

    return p;
  }])

  .controller('HomeController', [
    '$scope',
    'posts',
    function($scope, posts){
      $scope.posts = posts.posts;

      $scope.addPost = function () {

        if ( !$scope.title || $scope.title ==='' ) { return; }

        $scope.posts.push( { 
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            { author: 'Joe', body: 'Cool post!', upvotes: 0 },
            { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
          ]
        } );

        $scope.title = '';
        $scope.link = '';
      };

      $scope.incrementUpvotes = function ( post ) {
        post.upvotes ++;
      };
    }
  ])

  .controller('PostsController', [
    '$scope',
    '$stateParams',
    'posts',
    function ($scope, $stateParams, posts) {

      $scope.post = posts.posts[$stateParams.id];

      $scope.addComment = function () {
        if ($scope.body === '') { return; }

        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });

        $scope.body = '';
      }

      $scope.incrementUpvotes = function ( comment ) {
        comment.upvotes ++;
      };

    }
  ])
;