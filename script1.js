function setCookie(c_name, value, exdays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + exdays)
  var c_value =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString())
  document.cookie = c_name + "=" + c_value
}

function getCookie(c_name) {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";")
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="))
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1)
    x = x.replace(/^\s+|\s+$/g, "")
    if (x == c_name) {
      return unescape(y)
    }
  }
}

function getUrlVars() {
  var vars = {}
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value
  })
  return vars
}

//var urlPara = url.substring(url.indexOf('NAF-PPC-GOOGLE-CL'), url.length);
var utm_source = ""
var utm_campaign = ""
utm_source = getUrlVars()["utm_source"]
utm_campaign = getUrlVars()["utm_campaign"]

if (utm_source != undefined) {
  setCookie("sequel2_lead_source", utm_campaign, 90)
} else {
  utm_campaign = getCookie("sequel2_lead_source")

  if (utm_campaign == undefined) {
    utm_campaign = "LOCALOC"
  } else {
    setCookie("sequel2_lead_source", utm_campaign, 90)
  }
}

document.write(
  '<input type="hidden" name="campSource" value="' + utm_campaign + '">'
)
