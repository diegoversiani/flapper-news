angular.module('flapperNews')
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