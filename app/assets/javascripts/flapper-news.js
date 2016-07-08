angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ( $stateProvider, $urlRouterProvider ) {
      
      // == Configure States
      $stateProvider
        
        .state( 'home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'HomeController',
          resolve: {
            postsPromise: [
              'posts',
              function(posts) {
                return posts.getAll();
              }
            ]
          }
        })

        .state( 'post', {
          url: '/post/{id}',
          templateUrl: 'posts/_post.html',
          controller: 'PostsController',
          resolve: {
            post: [
              '$stateParams',
              'posts',
              function($stateParams, posts) {
                return posts.get($stateParams.id);
              }
            ]
          }
        })
        ;
      // !== Configure States

      $urlRouterProvider.otherwise( 'home' );
    }
  ]);