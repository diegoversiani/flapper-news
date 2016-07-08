angular.module('flapperNews', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ( $stateProvider, $urlRouterProvider ) {
      
      // == Configure States
      $stateProvider
        
        .state( 'home', {
          resolve: {
            postsPromise: [
              'posts',
              function(posts) {
                return posts.getAll();
              }
            ]
          },
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'HomeController'
        })

        .state( 'post', {
          url: '/post/{id}',
          templateUrl: 'posts/_post.html',
          controller: 'PostsController'
        })
        ;
      // !== Configure States

      $urlRouterProvider.otherwise( 'home' );
    }
  ]);