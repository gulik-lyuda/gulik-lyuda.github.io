var startDate, endDate;

$(document).ready(function() {
  "use strict";

  console.log("main js");
  // load settings from settings.json
  loadSettings("settings.json");

  // initialize a daterangepicker element
  var d = new Date();

  var current_day = d.getDate();
  if (current_day > 1) {
    startDate = moment().startOf("month");
    endDate = moment();
  } else {
    startDate = moment()
      .subtract(1, "month")
      .startOf("month");
    endDate = moment()
      .subtract(1, "month")
      .endOf("month");
  }

  $(".calendar_icon").daterangepicker(
    {
      opens: "bottom",
      alwaysShowCalendars: true,
      showDropdowns: true,
      ranges: {
        //'היום': [moment(), moment()],
        אתמול: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "7 ימים אחרונים": [moment().subtract(6, "days"), moment()],
        "30 ימים אחרונים": [moment().subtract(29, "days"), moment()],
        "חודש נוכחי": [moment().startOf("month"), moment().endOf("month")],
        "חודש קודם": [
          moment()
            .subtract(1, "month")
            .startOf("month"),
          moment()
            .subtract(1, "month")
            .endOf("month")
        ],
        השנה: [moment().startOf("year"), moment()]
      },
      startDate: startDate,
      endDate: endDate,
      locale: {
        format: "DD/MM/YYYY",
        separator: " - ",
        applyLabel: "בחירה",
        cancelLabel: "ביטול",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "טווח",
        weekLabel: "W",
        daysOfWeek: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
        monthNames: [
          "ינואר",
          "פברואר",
          "מרץ",
          "אפריל",
          "מאי",
          "יוני",
          "יולי",
          "אוגוסט",
          "ספטמבר",
          "אוקטובר",
          "נובמבר",
          "דצמבר"
        ],
        firstDay: 0
      }
    },
    function(start, end, label) {
      dates_changed(start, end);
    }
  );


  // load settings from settings.json
  function loadSettings(fileName) {
    $.getJSON(fileName, function(data) {
      localStorage.setItem("offerMinDate", data.offer_min_date);
      localStorage.setItem("requiredField", data.error_field_is_required);
      localStorage.setItem("shoulfBeNumber", data.error_field_should_be_number);
      localStorage.setItem("couldntBeLess", data.error_field_min_value);
      localStorage.setItem("shouldBeGreater", data.error_should_be_greater);
    });
  }
  // end of function loadSettings

  // set deafult values for inputs for different tabs
  function setDefaultValues(tabNumber) {
    switch (tabNumber) {
      case 1:
        // Set default start date as "current date + week + 2 days"
        $("#1st_offer_start").val(
          moment.min(localStorage.getItem("offerMinDate")),
          moment()
            .add(1, "week")
            .add(2, "days")
            .format("DD/MM/YY")
        );

        // Set default end date as "current date + month + 2 days"
        $("#1st_offer_end").val(
          moment()
            .add(1, "month")
            .add(2, "days")
            .format("DD/MM/YY")
        );

        break;

      case 2:
        // Set default start date as "current date + week + 2 days"
        $("#2nd_offer_start").val(
          moment.min(localStorage.getItem("offerMinDate")),
          moment()
            .add(1, "week")
            .add(2, "days")
            .format("DD/MM/YY")
        );

        // Set default end date as "current date + month + 2 days"
        $("#2nd_offer_end").val(
          moment()
            .add(1, "month")
            .add(2, "days")
            .format("DD/MM/YY")
        );

        break;

      case 3:
        // Set default start date as "current date + week + 2 days"
        $("#3rd_offer_start").val(
          moment.min(localStorage.getItem("offerMinDate")),
          moment()
            .add(1, "week")
            .add(2, "days")
            .format("DD/MM/YY")
        );

        // Set default end date as "current date + month + 2 days"
        $("#3rd_offer_end").val(
          moment()
            .add(1, "month")
            .add(2, "days")
            .format("DD/MM/YY")
        );

        break;
    }
  }
  // end of the function setDefaultValues(tabNumber)

  function checkEnabledBtnStatus(tabNumber) {
    switch (tabNumber) {
      case 1:
        if (
          !$("#1st_offer_start").hasClass("error") &&
          $("#1st_offer_start").val().length > 0 &&
          (!$("#1st_offer_end").hasClass("error") &&
            $("#1st_offer_end").val().length > 0) &&
          (!$("#1st_offer_product").hasClass("error") &&
            $("#1st_offer_product").val().length > 0) &&
          (!$("#1st_discount").hasClass("error") &&
            $("#1st_discount").val().length > 0) &&
          (!$("#1st_max_count").hasClass("error") &&
            $("#1st_max_count").val().length > 0)
        ) {
          $("#continue_discount_btn").removeAttr("disabled");
        } else {
          $("#continue_discount_btn").attr("disabled", "disabled");
        }

        break;
      case 2:
        if (
          !$("#2nd_offer_start").hasClass("error") &&
          $("#2nd_offer_start").val().length > 0 &&
          (!$("#2nd_offer_end").hasClass("error") &&
            $("#2nd_offer_end").val().length > 0) &&
          (!$("#2nd_offer_product").hasClass("error") &&
            $("#2nd_offer_product").val().length > 0) &&
          (!$("#2nd_max_count").hasClass("error") &&
            $("#2nd_max_count").val().length > 0)
        ) {
          $("#continue_1plus1_offer_btn").removeAttr("disabled");
        } else {
          $("#continue_1plus1_offer_btn").attr("disabled", "disabled");
        }
        break;
      case 3:
        if (
          !$("#3rd_offer_start").hasClass("error") &&
          $("#3rd_offer_start").val().length > 0 &&
          (!$("#3rd_offer_end").hasClass("error") &&
            $("#3rd_offer_end").val().length > 0) &&
          (!$("#buy_product").hasClass("error") &&
            $("#buy_product").val().length > 0) &&
          (!$("#get_product").hasClass("error") &&
            $("#get_product").val().length > 0) &&
          (!$("#3rd_max_count").hasClass("error") &&
            $("#3rd_max_count").val().length > 0)
        ) {
          $("#continue_purchase_btn").removeAttr("disabled");
        } else {
          $("#continue_purchase_btn").attr("disabled", "disabled");
        }

        break;
    }
  }

  // function to add daysCount excluding weekends (Friday and Saturday)
  function addWeekdays(date, daysCount) {
    date = moment(date); // use a clone
    while (daysCount > 0) {
      date = date.add(1, "days");
      // decrease "days" only if it's a weekday.
      if (date.isoWeekday() !== 5 && date.isoWeekday() !== 6) {
        daysCount -= 1;
      }
    }
    return date;
  }
  // end of function addWeekdays

  function checkStartDate(element, tabNumber) {
    var errCount = 0;
    var errMessage = "";

    if (!element.val()) {
      // if value is empty
      errMessage += localStorage.getItem("requiredField");
      errCount = 1;
    } else if (
      moment(element.val(), "DD/MM/YY") <
      moment(localStorage.getItem("offerMinDate"), "DD/MM/YY")
    ) {
      // if value less than minimum date from settings.json
      errMessage +=
        localStorage.getItem("couldntBeLess") +
        localStorage.getItem("offerMinDate");
      errCount = 1;
    }

    if (errCount) {
      // show info about errors
      element
        .parent()
        .next(".error_message")
        .html(errMessage);
      element.addClass("error");
      element
        .parent()
        .next(".error_message")
        .addClass("open");
    } else {
      element.removeClass("error");
      element
        .parent()
        .next(".error_message")
        .removeClass("open");
    }

    checkEnabledBtnStatus(tabNumber);
  }
  // end of function checkStartDate(element, tabNumber)

  // check offer end date
  function checkEndDate(element, tabNumber) {
    var errCount = 0;
    var errMessage = "";

    if (!element.val()) {
      // if value is empty
      errMessage += localStorage.getItem("requiredField");
      errCount = 1;
    } else if (
      moment(element.val(), "DD/MM/YY") <
      addWeekdays(moment($("#1st_offer_start").val(), "DD/MM/YY"), 2)
    ) {
      // if value less than minimum date from settings.json
      errMessage +=
        localStorage.getItem("shouldBeGreater") + $("#1st_offer_start").val();
      errCount = 1;
    }

    if (errCount) {
      // show info about errors
      element
        .parent()
        .next(".error_message")
        .html(errMessage);
      element.addClass("error");
      element
        .parent()
        .next(".error_message")
        .addClass("open");
    } else {
      element.removeClass("error");
      element
        .parent()
        .next(".error_message")
        .removeClass("open");
    }

    checkEnabledBtnStatus(tabNumber);
  }
  // end of function checkEndDate(element, tabNumber)

  // check product name
  function checkProductName(element, tabNumber) {
    var errCount = 0;
    var errMessage = "";

    if (!element.val()) {
      // if value is empty
      errMessage += localStorage.getItem("requiredField");
      errCount = 1;
    }

    if (errCount) {
      // show info about errors
      element
        .parent()
        .next(".error_message")
        .html(errMessage);
      element.addClass("error");
      element
        .parent()
        .next(".error_message")
        .addClass("open");
    } else {
      element.removeClass("error");
      element
        .parent()
        .next(".error_message")
        .removeClass("open");
    }

    checkEnabledBtnStatus(tabNumber);
  }
  // end of function checkProductName(element, tabNumber)

  // check offer discount
  function checkDiscountPercent(element, tabNumber) {
    var errCount = 0;
    var errMessage = "";

    if (!element.val()) {
      // if value is empty
      errMessage += localStorage.getItem("requiredField");
      errCount = 1;
    }

    if (errCount) {
      // show info about errors
      element
        .parent()
        .next(".error_message")
        .html(errMessage);
      element.addClass("error");
      element
        .parent()
        .next(".error_message")
        .addClass("open");
    } else {
      element.removeClass("error");
      element
        .parent()
        .next(".error_message")
        .removeClass("open");
    }

    checkEnabledBtnStatus(tabNumber);
  }
  // end of function checkDiscountPercent(element, tabNumber)

  // check max count
  function checkMaxCount(element, tabNumber) {
    var errCount = 0;
    var errMessage = "";

    if (!element.val()) {
      // if value is empty
      errMessage += localStorage.getItem("requiredField");
      errCount = 1;
    } else if (+element.val() < +$("#1st_min_count").val()) {
      // if less than offer min count (500)
      errMessage +=
        localStorage.getItem("shouldBeGreater") + $("#1st_min_count").val();
      errCount += 1;
    } else if (!Number.isInteger(+element.val())) {
      // if value isn't integer
      errMessage += localStorage.getItem("shoulfBeNumber");
      errCount += 1;
    }

    if (errCount) {
      // show info about errors
      element
        .parent()
        .next(".error_message")
        .html(errMessage);
      element.addClass("error");
      element
        .parent()
        .next(".error_message")
        .addClass("open");
    } else {
      element.removeClass("error");
      element
        .parent()
        .next(".error_message")
        .removeClass("open");
    }

    checkEnabledBtnStatus(tabNumber);
  }
  // end of function checkMaxCount(element, TabNumber)

  const age_ranges_values = {
    age_range_1: "עד 20",
    age_range_2: "21-35",
    age_range_3: "36-54",
    age_range_4: "55 +"
  };

  // set default values for tabs
  $("#content_create_discount").show(function() {
    setDefaultValues(1);
  });

  $("#tab_create_1plus1_offer").click(function() {
    setDefaultValues(2);
  });

  $("#tab_create_purchase_offer").click(function() {
    setDefaultValues(3);
  });

  // Work with Create Offer button
  $(".create_offer_btn").click(function() {
  // $("#create_offer_btn").click(function() {
    $("#create_offer").toggleClass("open");
    $(".disable_page").toggleClass("open");

    // Initialize age ranges for multiselect choice
    $(".age_ranges").multi_select({
      data: age_ranges_values,
      selectColor: "green",
      selectText: "",
      buttonWidth: "50%",
      selectSize: "big"
    });

    // Initialize date selection
    $('[data-toggle="datepicker"]').datepicker({
      autoHide: true,
      format: "dd/mm/yy",
      date: null
    });
  });
  // end of $('#create_offer_btn').click(function(){})

  $("#1st_discount").click(function() {
    $("#percentage_picker").toggleClass("open");
  });

  $("#percentage_picker .percentage_values .percentage_item input:radio").click(
    function() {
      $("#1st_discount").val(
        $(this)
          .next("label")
          .text()
      );
      checkDiscountPercent($("#1st_discount"), 1);
      $("#percentage_picker").toggleClass("open");
    }
  );

  $("#close_btn, #close_img_btn").click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this)
      .parent()
      .toggleClass("open");
    $(this)
      .parent()
      .toggleClass("zoomed");
    $(this)
      .parent()
      .animate({ zoom: "1" }, "slow");
    $(".disable_page").toggleClass("open");
  });

  // check inputs for #content_create_discount
  $("#1st_offer_start").change(function() {
    checkStartDate($(this), 1);
  });

  $("#1st_offer_end").change(function() {
    checkEndDate($(this), 1);
  });

  $("#1st_offer_product").change(function() {
    checkProductName($(this), 1);
  });

  $("#1st_discount").change(function() {
    checkDiscountPercent($(this), 1);
  });

  $("#1st_max_count").change(function() {
    checkMaxCount($(this), 1);
  });

  $("#continue_discount_btn").click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    // check if all needed fields values are correct
    checkStartDate($("#1st_offer_start"), 1);
    checkEndDate($("#1st_offer_end"), 1);
    checkProductName($("#1st_offer_product"), 1);
    checkDiscountPercent($("#1st_discount"), 1);
    checkMaxCount($("#1st_max_count"), 1);

    if (!$("#continue_discount_btn").is(":disabled")) {
      $("#create_offer").toggleClass("open");
      $("#offer_content").toggleClass("open");
    }
  });

  // check inputs for #content_1plus1_offer
  $("#2nd_offer_start").change(function() {
    checkStartDate($(this), 2);
  });

  $("#2nd_offer_end").change(function() {
    checkEndDate($(this), 2);
  });

  $("#2nd_offer_product").change(function() {
    checkProductName($(this), 2);
  });

  // check offer max count
  $("#2nd_max_count").change(function() {
    checkMaxCount($(this), 2);
  });

  $("#continue_1plus1_offer_btn").click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    // check if all needed fields values are correct
    checkStartDate($("#2nd_offer_start"), 2);
    checkEndDate($("#2nd_offer_end"), 2);
    checkProductName($("#2nd_offer_product"), 2);
    checkMaxCount($("#2nd_max_count"), 2);

    if (!$("#continue_1plus1_offer_btn").is(":disabled")) {
      $("#create_offer").toggleClass("open");
      $("#offer_content").toggleClass("open");
    }
  });

  // check inputs for #content_create_purchase_offer
  $("#3rd_offer_start").change(function() {
    checkStartDate($(this), 3);
  });

  $("#3rd_offer_end").change(function() {
    checkEndDate($(this), 3);
  });

  $("#buy_product").change(function() {
    checkProductName($(this), 3);
  });

  $("#get_product").change(function() {
    checkProductName($(this), 3);
  });

  $("#3rd_max_count").change(function() {
    checkMaxCount($(this), 3);
  });

  $("#continue_purchase_btn").click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    // check if all needed fields values are correct
    checkStartDate($("#3rd_offer_start"), 3);
    checkEndDate($("#3rd_offer_end"), 3);
    checkProductName($("#buy_product"), 3);
    checkProductName($("#get_product"), 3);
    checkMaxCount($("#3rd_max_count"), 3);

    if (!$("#continue_purchase_btn").is(":disabled")) {
      $("#create_offer").toggleClass("open");
      $("#offer_content").toggleClass("open");
    }
  });

  $("#approve_btn").click(function() {
    $("#offer_content").toggleClass("open");
    $("#offer_saved").toggleClass("open");
  });

  $("#cancel_btn").click(function() {
    $("#offer_content").toggleClass("open");
    $(".disable_page").toggleClass("open");
  });

  $("#ok_btn").click(function() {
    $("#offer_saved").toggleClass("open");
    $(".disable_page").toggleClass("open");
  });

  // show Popup#1 with detailed graphs about our clients
  $('.show_clients_detailed_info').click(function() {
    if ( +$(document).width() < 550 ) {
      $('.customers_detailed_info_mobile').toggleClass("open");
    } else {
      $('.customers_detailed_info').toggleClass("open");
    }
    
    if ( $('.home_page_mobile').hasClass('open') ) {
      $('.home_page_mobile').toggleClass('open');
    } else {
      $('.home_page').toggleClass("open");
    }
  });

  // show Popup #2 with detailedt graphs about products
  $('.show_products_detailed_info').click(function() {
    if ( +$(document).width() < 550 ) {
      $('.products_detailed_info_mobile').toggleClass("open");
    } else {
      $('.products_detailed_info').toggleClass("open");
    }
    
    if ( $('.home_page_mobile').hasClass('open') ) {
      $('.home_page_mobile').toggleClass('open');
    } else {
      $('.home_page').toggleClass("open");
    }    
  });
  // close popups
  $('.customers_detailed_info .close_btn').click(function() {
    $('.customers_detailed_info').toggleClass("open");

    if ( +$(document).width() < 550 ) {
      $('.home_page_mobile').toggleClass("open");
    } else {
      $('.home_page').toggleClass("open");
    }    
  });
  $('.customers_detailed_info_mobile .close_btn').click(function() {
    $('.customers_detailed_info_mobile').toggleClass("open");

    if ( +$(document).width() < 550 ) {
      $('.home_page_mobile').toggleClass("open");
    } else {
      $('.home_page').toggleClass("open");
    }    
  });
  $('.products_detailed_info .close_btn').click(function() {
    $('.products_detailed_info').toggleClass("open");
    if ( +$(document).width() < 550 ) {
      $('.home_page_mobile').toggleClass("open");
    } else {
      $('.home_page').toggleClass("open");
    }
  });
  $('.products_detailed_info_mobile .close_btn').click(function() {
    $('.products_detailed_info_mobile').toggleClass("open");
    if ( +$(document).width() < 550 ) {
      $('.home_page_mobile').toggleClass("open");
    } else {
      $('.home_page').toggleClass("open");
    }
  });

  // Change disabled values for switchers on switch
  $('.is_club_member input').click(function() {
    $('.is_club_member').parent().find('.left_value').toggleClass('disabled');
    $('.is_club_member').parent().find('.right_value').toggleClass('disabled');
  });
  $('.is_our_client input').click(function() {
    $('.is_our_client').parent().find('.left_value').toggleClass('disabled');
    $('.is_our_client').parent().find('.right_value').toggleClass('disabled');
  });
  $('.leading_amount input').click(function() {
    $('.leading_amount').parent().find('.left_value').toggleClass('disabled');
    $('.leading_amount').parent().find('.right_value').toggleClass('disabled');
  });
  $('.leading_quantity input').click(function() {
    $('.leading_quantity').parent().find('.left_value').toggleClass('disabled');
    $('.leading_quantity').parent().find('.right_value').toggleClass('disabled');
  });
  
});

$(window).on("resize", function() {
  var width = $(document).width();

  // changes if home page is visible
  if ( +width < 550 && $('.home_page').hasClass('open') ) {
    $('.home_page').toggleClass('open');
    $('.home_page_mobile').toggleClass('open');
  }
  if ( +width > 550 && $('.home_page_mobile').hasClass('open')) {
    $('.home_page').toggleClass('open');
    $('.home_page_mobile').toggleClass('open');
  }

  // changes if popup #1 is visible
  if ( +width < 550 && $('.customers_detailed_info').hasClass('open') ) {
    $('.customers_detailed_info').toggleClass('open');
    $('.customers_detailed_info_mobile').toggleClass('open');
  }
  if ( +width > 550 && $('.customers_detailed_info_mobile').hasClass('open')) {
    $('.customers_detailed_info').toggleClass('open');
    $('.customers_detailed_info_mobile').toggleClass('open');
  }

  // changes if popup #2 is visible
  if ( +width < 550 && $('.products_detailed_info').hasClass('open') ) {
    $('.products_detailed_info').toggleClass('open');
    $('.products_detailed_info_mobile').toggleClass('open');
  }
  if ( +width > 550 && $('.products_detailed_info_mobile').hasClass('open')) {
    $('.products_detailed_info').toggleClass('open');
    $('.products_detailed_info_mobile').toggleClass('open');
  }
  
});

function dates_changed(start, end) {
  var date_array = [];
  $("#selected_date_range").text(
    start.format("DD/MM/YY") + "-" + end.format("DD/MM/YY")
  );
  while (start.diff(end) < 0) {
    //console.log(start.toDate());
    var epoch = new Date(1899, 12, 30);
    //console.log(datediff(epoch, start.toDate()));
    date_array.push(datediff(epoch, start.toDate()));
    start.add(1, "days");
  }
  console.log(date_array.join());

  app.field("תאריך").clear();
  app.field("תאריך").selectValues(date_array, true, true);
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  //var epoch = new Date(1899,12,30);
  //var now = new Date(2018,8,1,0,0,0);
  //console.log(datediff(epoch,now));
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
