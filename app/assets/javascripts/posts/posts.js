angular.module('flapperNews')
  .factory(
    'posts',
    [
    '$http',
    function ($http) {
      var o = { posts: [] };

      o.getAll = function () {
        return $http.get('/posts.json').success(function (data) {
          angular.copy(data, o.posts);
        });
      };

      o.get = function (id) {
        return $http.get('/posts/' + id + '.json')
          .then(function (result) {
            return result.data;
          })
      };

      o.create = function (post) {
        return $http.post('/posts.json', post).success(function (data) {
          o.posts.push(data);
        });
      };

      o.upvote = function (post) {
        return $http.put('/posts/' + post.id + '/upvote.json').success(function (data) {
          post.upvotes ++;
        });
      }

      o.upvoteComment = function (id, comment) {
        return $http.put('/posts/' + id + '/comments/' + comment.id + '/upvote.json').success(function (data) {
          comment.upvotes ++;
        });
      }

      o.addComment = function (id, comment) {
        return $http.post('/posts/' + id + '/comments.json', comment);
      };

      return o;
    }
  ])