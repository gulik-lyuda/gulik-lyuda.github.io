
$(function() {
    "use strict";

// load metadata from JSON file
    $.getJSON('settings.json', function (data) {

        document.title = data.page_title;
        $('meta[name=description]').attr('content', data.page_description);
        $('meta[name=keywords]').attr('content', data.page_keywords);
    });
});