angular.module("feedList").component("feedList", {
    templateUrl: "js/feed-list/feed-list.template.html",
    controller: ["rss", function (rss) {
        var self = this;
        self.rss = rss;
        self.rssUrl = "";//устанавливает url, связан с полем input
        self.feedNum = 10;//устанавливает количество записей
        self.load = function () {
            self.rss.load(self.rssUrl, self.feedNum)
                .then(function (feed) {
                    self.feed = feed;
                });
        };
    }]
});


