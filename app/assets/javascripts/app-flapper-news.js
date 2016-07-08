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

        .state( 'login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthController',
          onEnter: [
            '$state',
            'Auth',
            function($state, Auth) {
              Auth.currentUser().then(function () {
                $state.go('home');
              })
            }
          ]
        })

        .state( 'register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthController',
          onEnter: [
            '$state',
            'Auth',
            function($state, Auth) {
              Auth.currentUser().then(function () {
                $state.go('home');
              })
            }
          ]
        })

        ;
      // !== Configure States

      $urlRouterProvider.otherwise( 'home' );
    }
  ]);