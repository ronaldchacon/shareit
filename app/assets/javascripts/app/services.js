angular.module("myApp.services", [])
.factory("ArticleService", function($http, $q) {
  var service = {
    getLatestFeed: function() {
      var d = $q.defer();
      $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fnews.yahoo.com%2Frss%2Ftopstories'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys").then(function(data, status) {
        if (data.status === 200)
          d.resolve(data.data.query.results.item);
        else
          d.reject(data);
      });
      return d.promise;
    }
  };
  return service;
});
