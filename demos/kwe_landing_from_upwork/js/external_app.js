$(function() {
  var e = new Date().getFullYear();
  document.getElementById("year").innerHTML = e;
}),
(function(t) {
"use strict";
t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
    location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
    ) {
    var e = t(this.hash);
    if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length)
        return (
        t("html, body").animate(
            { scrollTop: e.offset().top - 85 },
            1e3,
            "easeInOutExpo"
        ),
        !1
        );
    }
}),
    t(".js-scroll-trigger").click(function() {
    t(".navbar-collapse").collapse("hide");
    }),
    t("body").scrollspy({ target: "#mainNav", offset: 100 });
var e = function() {
    100 < t("#mainNav").offset().top
    ? t("#mainNav").addClass("navbar-shrink")
    : t("#mainNav").removeClass("navbar-shrink");
};
e(),
    t(window).scroll(e),
    (window.sr = ScrollReveal({ reset: !0 })),
    (window.sr = new ScrollReveal({ mobile: !1 })),
    sr.reveal(
    "h2",
    {
        duration: 400,
        bottom: "left",
        distance: "50px",
        delay: 800,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"
    },
    300
    ),
    sr.reveal(
    ".box-address",
    { duration: 600, scale: 0.3, distance: "5px" },
    300
    ),
    sr.reveal(
    ".cfd",
    { origin: "right", distance: "-55rem", delay: 1e3, scale: 1 },
    300
    ),
    sr.reveal(
    ".logo-kwi",
    { origin: "right", distance: "-55rem", delay: 1e3, scale: 1 },
    300
    ),
    sr.reveal(
    ".logo-serv",
    { origin: "right", distance: "-55rem", delay: 1e3, scale: 1 },
    300
    ),
    sr.reveal(
    ".socials",
    { origin: "left ", distance: "55rem", delay: 1e3, scale: 1 },
    300
    ),
    t(".show-map").click(function() {
    t(this).text(function(e, t) {
        return "Hide Map" == t ? "Show Map" : "Hide Map";
    });
    });
})(jQuery),
$(document).ready(function() {
"use strict";
$(".read-more-show").on("click", function(e) {
    $(this)
    .next()
    .next(".read-more-content")
    .removeClass("hide"),
    $(this)
        .next()
        .removeClass("hide"),
    $(this).addClass("hide"),
    e.preventDefault();
}),
    $(".read-less").on("click", function(e) {
    var t = $(this).attr("more-id");
    $(this).addClass("hide"),
        $(this)
        .next()
        .addClass("hide"),
        $(".read-more-show#" + t).removeClass("hide"),
        e.preventDefault();
    });
});
var webJS = { map: {} };
(webJS.gmap = (function(m, y) {
  var o,
    e,
    t,
    u = !1;
  function g(e) {
    this.setValues(e);
  }
  function l(e, t) {
    e.style.padding = "25px";
    var n = y.createElement("div");
    (n.style.backgroundColor = "transparent"),
      (n.style.borderStyle = "solid"),
      (n.style.borderColor = "transparent"),
      (n.style.borderWidth = "0px"),
      (n.style.border = "none"),
      (n.style.cursor = "pointer"),
      (n.style.textAlign = "center"),
      (n.style.width = "44px"),
      (n.style.height = "94px"),
      e.appendChild(n);
    var a = y.createElement("div");
    (a.className += "zoom-in-btn"),
      (a.style.backgroundColor = "transparent"),
      (a.style.width = "44px"),
      (a.style.height = "44px"),
      (a.style.borderStyle = "solid"),
      (a.style.borderColor = "transparent"),
      (a.style.borderWidth = "2px"),
      (a.style.borderRadius = "50%"),
      (a.style.marginBottom = "6px"),
      n.appendChild(a);
    var i = y.createElement("div");
    (i.className += "zoom-out-btn"),
      (i.style.backgroundColor = "transparent"),
      (i.style.width = "44px"),
      (i.style.height = "44px"),
      (i.style.borderStyle = "solid"),
      (i.style.borderColor = "transparent"),
      (i.style.borderWidth = "2px"),
      (i.style.borderRadius = "50%"),
      (i.style.marginTop = "4px"),
      n.appendChild(i),
      google.maps.event.addDomListener(a, "click", function() {
        t.setZoom(t.getZoom() + 1);
      }),
      google.maps.event.addDomListener(i, "click", function() {
        t.setZoom(t.getZoom() - 1);
      });
  }
  function s(e) {
    var t,
      n,
      a = JSON.stringify(markerData.events),
      i = ((t = JSON.parse(a)),
      (n = { country_id: e }),
      t.filter(function(t) {
        return Object.keys(n).every(function(e) {
          return t[e] == n[e];
        });
      }));
    for (var o = new google.maps.LatLngBounds(), l = 0; l < i.length; l++) {
      var s = i[l].lat,
        r = i[l].lng,
        c = new google.maps.LatLng(s, r);
      o.extend(c);
    }
    webJS.gmap.clickroute(
      markerData.citiesLocation[e].lat,
      markerData.citiesLocation[e].long,
      o
    );
  }
  return {
    googleMapsInitCallback: function() {
      0 !== $("#map").length &&
        (((g.prototype = new google.maps.OverlayView()).draw = function() {
          var t = this,
            e = this.div;
          e ||
            ((e = this.div = $(
              '<div><div class="shadow"></div><div class="pin-wrap"><div class="pulse"></div><div class="pin"></div></div></div>'
            )[0]),
            (this.pinWrap = this.div.getElementsByClassName("pin-wrap")),
            (this.pin = this.div.getElementsByClassName("pin")),
            (this.pinShadow = this.div.getElementsByClassName("shadow")),
            (e.style.position = "absolute"),
            (e.style.cursor = "pointer"),
            this.getPanes().overlayImage.appendChild(e),
            google.maps.event.addDomListener(e, "click", function(e) {
              google.maps.event.trigger(t, "click", e);
            }),
            google.maps.event.addDomListener(e, "mouseover", function(e) {
              google.maps.event.trigger(t, "mouseover", e);
            }),
            google.maps.event.addDomListener(e, "mouseout", function(e) {
              google.maps.event.trigger(t, "mouseout", e);
            }));
          var n = this.getProjection().fromLatLngToDivPixel(this.position);
          n && ((e.style.left = n.x + "px"), (e.style.top = n.y + "px"));
        }),
        (g.prototype.animateDrop = function() {
          dynamics.stop(this.pinWrap),
            dynamics.css(this.pinWrap, {
              transform:
                "scaleY(2) translateY(-" + $("#map").outerHeight() + "px)",
              opacity: "1"
            }),
            dynamics.animate(
              this.pinWrap,
              { translateY: 0, scaleY: 1 },
              { type: dynamics.gravity, duration: 1800 }
            ),
            dynamics.stop(this.pin),
            dynamics.css(this.pin, { transform: "none" }),
            dynamics.animate(
              this.pin,
              { scaleY: 0.8 },
              { type: dynamics.bounce, duration: 1800, bounciness: 600 }
            ),
            dynamics.stop(this.pinShadow),
            dynamics.css(this.pinShadow, { transform: "scale(0,0)" }),
            dynamics.animate(
              this.pinShadow,
              { scale: 1 },
              { type: dynamics.gravity, duration: 1800 }
            );
        }),
        (g.prototype.animateBounce = function() {
          dynamics.stop(this.pinWrap),
            dynamics.css(this.pinWrap, { transform: "none" }),
            dynamics.animate(
              this.pinWrap,
              { translateY: -30 },
              {
                type: dynamics.forceWithGravity,
                bounciness: 0,
                duration: 500,
                delay: 150
              }
            ),
            dynamics.stop(this.pin),
            dynamics.css(this.pin, { transform: "none" }),
            dynamics.animate(
              this.pin,
              { scaleY: 0.8 },
              { type: dynamics.bounce, duration: 800, bounciness: 0 }
            ),
            dynamics.animate(
              this.pin,
              { scaleY: 0.8 },
              {
                type: dynamics.bounce,
                duration: 800,
                bounciness: 600,
                delay: 650
              }
            ),
            dynamics.stop(this.pinShadow),
            dynamics.css(this.pinShadow, { transform: "none" }),
            dynamics.animate(
              this.pinShadow,
              { scale: 0.6 },
              {
                type: dynamics.forceWithGravity,
                bounciness: 0,
                duration: 500,
                delay: 150
              }
            );
        }),
        (g.prototype.animateWobble = function() {
          dynamics.stop(this.pinWrap),
            dynamics.css(this.pinWrap, { transform: "none" }),
            dynamics.animate(
              this.pinWrap,
              { rotateZ: -45 },
              { type: dynamics.bounce, duration: 1800 }
            ),
            dynamics.stop(this.pin),
            dynamics.css(this.pin, { transform: "none" }),
            dynamics.animate(
              this.pin,
              { scaleX: 0.8 },
              { type: dynamics.bounce, duration: 800, bounciness: 1800 }
            );
        }),
        (e = $("#map")
          .attr("data-center")
          .split("|")),
        (function e(t) {
          "object" == typeof m.google && "object" == typeof m.google.maps
            ? t()
            : setTimeout(function() {
                e(t);
              }, 250);
        })(function() {
          !(function(e, t) {
            y.documentElement;
            var n = {
                zoom: 4,
                minZoom: 3,
                maxZoom: 4,
                center: new google.maps.LatLng(e[0], e[1]),
                disableDefaultUI: !0,
                scrollwheel: !1,
                draggable: m.innerWidth < 768,
                gestureHandling: "cooperative",
                zoomControl: !1,
                styles: [
                  {
                    featureType: "all",
                    elementType: "labels.text",
                    stylers: [{ weight: "2" }, { visibility: "on" }]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#000000" }]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: [
                      { visibility: "off" },
                      { color: "#000000" },
                      { width: "2" }
                    ]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }]
                  },
                  {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#000000" }, { width: "2" }]
                  },
                  {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{ visibility: "on" }, { color: "#000000" }]
                  },
                  {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ visibility: "off" }, { color: "#000000" }]
                  },
                  {
                    featureType: "administrative.country",
                    elementType: "geometry.stroke",
                    stylers: [{ visibility: "on" }, { color: "#9d9d9d" }]
                  },
                  {
                    featureType: "administrative.province",
                    elementType: "geometry.stroke",
                    stylers: [{ visibility: "off" }]
                  },
                  {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{ color: "#D7D8D8" }, { visibility: "on" }]
                  },
                  {
                    featureType: "landscape",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#000000" }]
                  },
                  {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#D7D8D8" }]
                  },
                  {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#D7D8D8" }]
                  },
                  {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{ visibility: "on" }]
                  },
                  {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#D7D8D8" }]
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#D7D8D8" }]
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ weight: 0.2 }, { visibility: "off" }]
                  },
                  {
                    featureType: "road.highway",
                    elementType: "labels.text",
                    stylers: [{ visibility: "off" }]
                  },
                  {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{ color: "#fafafa" }]
                  },
                  {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [{ visibility: "on" }, { color: "#fafafa" }]
                  },
                  {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{ color: "#fafafa" }]
                  },
                  {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [{ visibility: "on" }]
                  },
                  {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#fafafa" }]
                  },
                  {
                    featureType: "transit",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#fafafa" }]
                  },
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#fafafa" }]
                  },
                  {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#000000" }, { visibility: "off" }]
                  }
                ]
              },
              a = y.getElementById("map");
            o = new google.maps.Map(a, n);
            var i = y.createElement("div");
            new l(i, o),
              (i.index = 1),
              o.controls[google.maps.ControlPosition.RIGHT_CENTER].push(i),
              (function(a) {
                for (
                  var e,
                    i,
                    t = {
                      events: [
                        {
                          country_id: "Austria",
                          country_name: "Austria",
                          place_name: "Austria",
                          place_location: "Finanzmarktaufsicht (FMA)",
                          description: "",
                          event_link:
                            "https://www.fma.gv.at/en/search-company-database/?cname=key+way&place=&bic=&category=&per_page=10&submitted=1",
                          lat: "47.516231",
                          lng: "14.550072"
                        },
                        {
                          country_id: "Bulgaria",
                          country_name: "Bulgaria",
                          place_name: "Bulgaria",
                          place_location:
                            "РљРѕРјРёСЃРёСЏС‚Р° Р·Р° С„РёРЅР°РЅСЃРѕРІ РЅР°РґР·РѕСЂ (РљР¤Рќ вЂ“ Bulgarian FSC)",
                          description: "",
                          event_link: "http://www.fsc.bg/en/",
                          lat: "42.733883",
                          lng: "25.48583"
                        },
                        {
                          country_id: "Czech Republic",
                          country_name: "Czech Republic",
                          place_name: "Czech Republic",
                          place_location:
                            "ДЊeskГЎ NГЎrodnГ­ Banka (CNB) (Czech National Bank)",
                          description: "",
                          event_link: "http://www.cnb.cz/cs/index.html",
                          lat: "49.81749199999999",
                          lng: "15.472962"
                        },
                        {
                          country_id: "Germany",
                          country_name: "Germany",
                          place_name: "Germany",
                          place_location:
                            "Federal Financial Supervisory Authority",
                          description: "",
                          event_link:
                            "https://portal.mvp.bafin.de/database/InstInfo/institutDetails.do?cmd=loadInstitutAction&institutId=149078",
                          lat: "51.165691",
                          lng: "10.451526"
                        },
                        {
                          country_id: "Denmark",
                          country_name: "Denmark",
                          place_name: "Denmark",
                          place_location:
                            "Danish Financial Supervisory Authority",
                          description: "",
                          event_link:
                            "http://vut.finanstilsynet.dk/Tal-og-fakta/Virksomheder-under-tilsyn/VUT-vis-virksomhed.aspx?id=E0B5D0DE-9F72-E711-811B-00505680286D",
                          lat: "56.26392",
                          lng: "9.501785"
                        },
                        {
                          country_id: "Estonia",
                          country_name: "Estonia",
                          place_name: "Estonia",
                          place_location: "Finantsinspektsioon (FSAEE)",
                          description: "",
                          event_link:
                            "https://www.fi.ee/index.php?id=1975&action=showentity&eid=117806",
                          lat: "58.595272",
                          lng: "25.0136071"
                        },
                        {
                          country_id: "Spain",
                          country_name: "Spain",
                          place_name: "Spain",
                          place_location:
                            "Comision Nacional del Mercado de Valores (CNMV) (Spanish Securities Market Commission)\n",
                          description: "",
                          event_link: "http://www.cnmv.es/Portal/home.aspx",
                          lat: "40.46366700000001",
                          lng: "-3.74922"
                        },
                        {
                          country_id: "Finland",
                          country_name: "Finland",
                          place_name: "Finland",
                          place_location:
                            "Financial Supervisory Authority of Finland",
                          description: "",
                          event_link:
                            "http://www.finanssivalvonta.fi/en/Pages/default.aspx",
                          lat: "61.92410999999999",
                          lng: "25.7481511"
                        },
                        {
                          country_id: "United Kingdom",
                          country_name: "United Kingdom",
                          place_name: "United Kingdom",
                          place_location: " Financial Conduct Authority (FCA)",
                          description: "",
                          event_link:
                            "https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000003uGZIGAA4",
                          lat: "55.378051",
                          lng: "-3.435973"
                        },
                        {
                          country_id: "Greece",
                          country_name: "Greece",
                          place_name: "Greece",
                          place_location:
                            "Hellenic Capital Market Commission (HCMC)",
                          event_link: "http://www.hcmc.gr/",
                          lat: "39.074208",
                          lng: "21.824312"
                        },
                        {
                          country_id: "Croatia",
                          country_name: "Croatia",
                          place_name: "Croatia",
                          place_location:
                            "Hrvatska agencija za nadzor financijskih usluga (HANFA)",
                          event_link:
                            "https://www.hanfa.hr/capital-market/registers/notifications-from-eu-member-states/",
                          lat: "44.1",
                          lng: "15.2000001"
                        },
                        {
                          country_id: "Hungary",
                          country_name: "Hungary",
                          place_name: "Hungary",
                          place_location:
                            "Magyar Nemzeti Bank (MNB) (Central Bank of Hungary)",
                          event_link: "https://www.mnb.hu/en",
                          lat: "47.162494",
                          lng: "19.5033041"
                        },
                        {
                          country_id: "Ireland",
                          country_name: "Ireland",
                          place_name: "Ireland",
                          place_location: "Central Bank of Ireland (CBI)",
                          event_link: "https://www.centralbank.ie/",
                          lat: "53.1423672",
                          lng: "-7.692053599999999"
                        },
                        {
                          country_id: "Italy",
                          country_name: "Italy",
                          place_name: "Italy",
                          place_location:
                            "National Commission for Companies and the Stock Exchange",
                          event_link: "http://www.consob.it/web/consob/home",
                          lat: "41.87194",
                          lng: "12.56738"
                        },
                        {
                          country_id: "Liechtenstein",
                          country_name: "Liechtenstein",
                          place_name: "Liechtenstein",
                          place_location:
                            "Finanzmarktaufsicht Liechtenstein (FMA)",
                          event_link: "https://www.fma-li.li/",
                          lat: "47.166",
                          lng: "9.555373"
                        },
                        {
                          country_id: "Lithuania",
                          country_name: "Lithuania",
                          place_name: "Lithuania",
                          place_location: "Lietuvos Bankas Eurosistema",
                          event_link: "https://www.lb.lt/",
                          lat: "55.1694380",
                          lng: "23.8812750"
                        },
                        {
                          country_id: "Luxembourg",
                          country_name: "Luxembourg",
                          place_name: "Luxembourg",
                          place_location:
                            "Commission de Surveillance du Secteur Financier (CSSF)",
                          event_link: "https://www.cssf.lu/en/",
                          lat: "49.815273",
                          lng: "6.129582999999999"
                        },
                        {
                          country_id: "Latvia",
                          country_name: "Latvia",
                          place_name: "Latvia",
                          place_location:
                            "FinanЕЎu un kapitДЃla tirgus komisija (FKTK)",
                          event_link: "http://www.fktk.lv/en/",
                          lat: "56.879635",
                          lng: "24.603189"
                        },
                        {
                          country_id: "Malta",
                          country_name: "Malta",
                          place_name: "Malta",
                          place_location:
                            "Malta Financial Services Authority (MFSA)",
                          event_link: "https://www.mfsa.com.mt/",
                          lat: "35.9374960",
                          lng: "14.3754160"
                        },
                        {
                          country_id: "Netherlands",
                          country_name: "Netherlands",
                          place_name: "Netherlands",
                          place_location:
                            "De Autoriteit FinanciГ«le Markten (AFM)",
                          event_link:
                            "https://www.afm.nl/en/professionals/registers/vergunningenregisters/beleggingsondernemingen/details?id=EE340519-6377-E711-9B74-005056BE011D",
                          lat: "52.1326330",
                          lng: "5.2912660"
                        },
                        {
                          country_id: "Norway",
                          country_name: "Norway",
                          place_name: "Norway",
                          place_location:
                            "Finanstilsynet (NFSA) (Financial Supervisory Authority of Norway)",
                          event_link: "https://www.finanstilsynet.no/tilsyn/",
                          lat: "60.47202399999999",
                          lng: "8.468945999999999"
                        },
                        {
                          country_id: "Poland",
                          country_name: "Poland",
                          place_name: "Poland",
                          place_location: "Komisja Nadzoru Finansowego (KNF)",
                          event_link:
                            "https://www.knf.gov.pl/en/ENTITIES#78288/",
                          lat: "51.919438",
                          lng: "19.145136"
                        },
                        {
                          country_id: "Portugal",
                          country_name: "Portugal",
                          place_name: "Portugal",
                          place_location:
                            "Comissao do Mercado de Valores Mobiliarios (CMVM)",
                          event_link: "http://www.cmvm.pt/pt/Pages/home.aspx",
                          lat: "39.3998719999",
                          lng: "-8.224454"
                        },
                        {
                          country_id: "Romania",
                          country_name: "Romania",
                          place_name: "Romania",
                          place_location:
                            "Autoritatea de Supraveghere Financiara (ASF)",
                          event_link:
                            "https://asfromania.ro/en/supervision/registries/financial-instruments-and-investments",
                          lat: "45.943161",
                          lng: "24.96676"
                        },
                        {
                          country_id: "Sweden",
                          country_name: "Sweden",
                          place_name: "Sweden",
                          place_location:
                            "Finansinspektionen (FI) (Financial Supervisory Authority)",
                          event_link: "https://www.fi.se/en/",
                          lat: "60.1281610",
                          lng: "18.6435010"
                        },
                        {
                          country_id: "Slovenia",
                          country_name: "Slovenia",
                          place_name: "Slovenia",
                          place_location:
                            "Finansinspektionen (FI) (Financial Supervisory Authority)",
                          event_link: "https://www.fi.se/en/",
                          lat: "46.151241",
                          lng: "14.995463"
                        },
                        {
                          country_id: "Slovakia",
                          country_name: "Slovakia",
                          place_name: "Slovakia",
                          place_location: "NГЎrodnГЎ Banka Slovenska (NBS)",
                          event_link:
                            "https://subjekty.nbs.sk/?aa=&bb=&cc=&qq=key+way",
                          lat: "48.669026",
                          lng: "19.699024"
                        }
                      ]
                    },
                    n = { coords: [1, 1, 1, 20, 18, 20, 18, 1], type: "poly" },
                    o = {
                      disableAutoPan: !1,
                      maxWidth: 0,
                      pixelOffset: new google.maps.Size(0, 0),
                      zIndex: null,
                      boxStyle: {
                        opacity: 1,
                        background: "rgba(0,0,0,0)",
                        width: "320px"
                      },
                      closeBoxMargin: "0",
                      closeBoxURL: "",
                      infoBoxClearance: new google.maps.Size(10, 10),
                      isHidden: !1,
                      pane: "floatPane",
                      enableEventPropagation: !1
                    },
                    l = new InfoBox(o),
                    s = [],
                    r = 0;
                  r < t.events.length;
                  r++
                ) {
                  var c = t.events[r],
                    p =
                      '<div class="info-window"><h3 class="info-window__heading"><span>' +
                      c.place_name +
                      '</span></h3><a class="info-window__text" href="" target="_blank"><span>' +
                      c.place_location +
                      "</span></a></div>",
                    d = new google.maps.LatLng(c.lat, c.lng);
                  (s[r] = new g({
                    position: d,
                    map: a,
                    shape: n,
                    name: c.country_id,
                    url: c.event_link
                  })),
                    (e = new google.maps.Marker({
                      map: a,
                      draggable: !0,
                      position: d,
                      visible: !1
                    })),
                    google.maps.event.addListener(s[r], "click", function() {
                      0 == u && (u = !0);
                      var e = y.createElement("a");
                      (e.id = this.name),
                        (e.className = "pin-btn clickable"),
                        e.setAttribute(
                          "style",
                          "opacity: 0; viibility: hidden; position: absolute;"
                        ),
                        (e.href = this.url),
                        (e.target = '"_blank"'),
                        y.body.appendChild(e),
                        e.click(),
                        e.remove();
                    }),
                    google.maps.event.addListener(
                      s[r],
                      "mouseover",
                      (function(e, n) {
                        return function() {
                          if (
                            null == e.getAnimation() ||
                            void 0 === e.getAnimation()
                          ) {
                            clearTimeout(i),
                              l.setContent(n),
                              l.open(a, e),
                              (i = setTimeout(function() {
                                TweenMax.to(
                                  ".infoBox .info-window__heading",
                                  0.5,
                                  { autoAlpha: 1, x: "0%" }
                                ),
                                  TweenMax.to(
                                    ".infoBox .info-window__text",
                                    0.5,
                                    { autoAlpha: 1, x: "0%" }
                                  ),
                                  $(".info-window").addClass("custom");
                              }, 300));
                            var t = $(".info-window__text");
                            (t.href = this.url),
                              $(t).click(function(e) {
                                e.preventDefault(), m.open(t.href, "_blank");
                              });
                          }
                        };
                      })(e, p)
                    ),
                    google.maps.event.addListener(s[r], "mouseout", function() {
                      $(".info-window").addClass(".custom"), clearTimeout(i);
                    });
                }
              })(o),
              t && s(t);
          })(e, t);
        }));
    },
    clickroute: function(e, t, n) {
      var a = new google.maps.LatLng(e, t);
      o.panTo(a), o.fitBounds(n);
    },
    centerMap: s
  };
})(window, document)),
$(function() {
"use strict";
webJS.gmap.googleMapsInitCallback();
});
