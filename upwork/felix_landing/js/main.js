$(document).ready(function() {
    "use strict";

    var userFeed = new Instafeed({
        get: 'user',
        // my test credentials
        // userId: '6009671398',
        // clientId: '37cc488f99294a7c819120a43635aa7f',
        // accessToken: "6009671398.1677ed0.733c4df279f94ee1a4f5226e61dbe5a8",
        userId: '10718039181',
        clientId: '1bf223318a284c45a1ee01e8ddb0ea95',
        accessToken: "10718039181.1bf2233.6650d2293adb4b3ba9e8533115be5357",
        limit: 3,
        resolution: 'thumbnail',
        sortBy: 'most-recent',
        template: '<div class="feed_item"><img src="{{image}}" alt="{{caption}}"/><a href="{{link}}" title="{{caption}}" target="_blank"></a></div>',
        filter: function(image) {
            return image.type === 'video';
        },
        after: function() {
            // delete not needed elements
            $('#instafeed .feed_item').replaceWith($('#instafeed .feed_item').slice(-3));
            $('#instafeed').addClass('open');
        }
    });

    try {
        userFeed.run();
    }        
    finally {
        // if we don't get data from Instagram API for some reason we should show default images
        $('#instafeed').addClass('open');
    }

    $('#contact_btn').click(function(event) {
        event.preventDefault();
        $('.contact_popup').addClass("open");
    });

    $('.close_btn').click(function(event) {
        event.preventDefault();
        $('.contact_popup').removeClass("open");
    });
});