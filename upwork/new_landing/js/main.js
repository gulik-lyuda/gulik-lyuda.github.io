// Work with Hamburger menu button
$('#hamburger_menu_btn').click(function() {
  $(this).toggleClass('open');
  $('.mobile_menu').toggleClass('open');
  // disable scrolling of a main page when menu is open and enable scrolling when menu is closed
  $('#hamburger_menu_btn').hasClass('open') ? $('body').css('overflow', 'hidden') : $('body').css('overflow', 'auto');
  // shade a main page when menu is
  $('.disable_page').toggleClass('open');

// and add scroll because of long menu items list
  var height = $(window).width() < 1024 ? $(window).height() - $('.header').height() : $(window).height();
  $('.mobile_menu').css({'max-height': height, 'overflow-y':'auto'});
});

// Work with the button "PLAY VIDEO"
window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    modal_video_close();
  }
};

function modal_video_open() {
  var lightBoxVideo = document.getElementById("modal_video_popup");

  document.getElementById("modal_popup").style.display = "block";
  document.getElementById("disable_page").style.display = "block";
  lightBoxVideo.play();
}

function modal_video_close() {
  var lightBoxVideo = document.getElementById("modal_video_popup");

  document.getElementById('modal_popup').style.display = 'none';
  document.getElementById('disable_page').style.display = 'none';
  lightBoxVideo.pause();
}