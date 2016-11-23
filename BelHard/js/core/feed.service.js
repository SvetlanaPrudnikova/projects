angular.module("core.feed").
service("rss", ["$http", "$q", function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.load = function (url, num) {
        var deferred = this.$q.defer();
        this.$http.jsonp("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=" + url + "&callback=JSON_CALLBACK&num="+num)
            .then(function (response) {
                if (response.data.responseData) {
                    deferred.resolve(response.data.responseData.feed);
                } else {alert("Проверьте правильность введенной ленты")}
            }, function (error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }
}
]);


