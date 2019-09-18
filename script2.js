
    function _stripPhoneFormat(e, val) {
      var regex = /\d+/g;
      if (e != null) {
          if (this.value.length > 0) {
              var matches = this.value.match(regex);
              this.value = matches.join("");
          }
      } else if (val.length > 0) {
          var matches = val.match(regex);
          if (matches && matches.length > 0)
              return val.match(regex).join("");
          else
              return val;
      } else
          return val;
  }
  function isValidEmail(email) {
      var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])$/i;
      return pattern.test(email);

  }
  function isValidPhone(phone) {      
      phone = _stripPhoneFormat(null, phone);
      return phone.match(/\d/g).length===10;
  }
  function isValidZip(zip) {
      var pattern = /(^[A-Z]\d[A-Z][\s-]?(\d[A-Z]\d)?$)|(^[0-9]{5}[\s-]?([0-9]{4})?$)/i;
      return pattern.test(zip);
  }
  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }

  function runMyFunction() {
      var favorite = [];
      $.each($("input[name='interestedIn']:checked"), function () {
          favorite.push($(this).val());
      });


      var src = readCookie('sequel2_lead_source');
      var mysource;
      if (src) {
          mysource = src;
      } else {
          mysource = '';
      }
      var name = $("#ih-nameBox").val().split(' ');
      var fname = name[0],
          lname = name[1],
          email = $("#ih-emailBox").val(),
          zip = $("#ih-zipBox").val(),
          phone = $("#ih-phoneBox").val().replace(/-/g, ''),
          comment = $("#ih-comment").val(),
          referrer = document.referrer,
          pageurl = location.href,
          source = mysource;
    
     if (fname.length > 0 && email.length > 0 && zip.length > 0 && phone.length > 0) {
              if (isValidEmail(email)) {
                  if (isValidPhone(phone)) {
                      if (isValidZip(zip)) {						
            requesttype = 'Landing';
            interestedIn = favorite.join(", "); //'closet, erer';      
            referrer = referrer.replace(/&/g, '^^^');
            pageurl = pageurl.replace(/&/g, '^^^');
            comment = comment.replace(/&/g, '^^^');
            var theurl = "https://www.tailoredliving.com/_Ajax/xpartyconsultform.ashx?firstName=" + fname + "&" + "lastName=" + lname + "&" + "source=" + source + "&" + "email=" + email + "&" + "phone=" + phone + "&" + "zip=" + zip + "&" + "referrer=" + referrer + "&" + "pageurl=" + pageurl + "&" + "comment=" + comment + "&" + "interestedIn=" + interestedIn + "&" + "requesttype=" + requesttype;
            var xmlhttp;

            if (window.XMLHttpRequest) {
              // code for IE7+, Firefox, Chrome, Opera, Safari
              xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var test = xmlhttp.responseText;
                var result = JSON.parse(test);
                if (result.Message == 'thankyou') {
                  //	alert(result.Message);
                   window.location.href = "/thankyou/";
                }
                else if (result.Message == 'nomatch') {
                  // 	alert(result.Message);
                    window.location.href = "/thankyou/";
                }
                else {
                  alert(result.Message);
                }
              }
            }
            xmlhttp.open("GET", theurl, true);
            xmlhttp.send();												
          } else {
            $("#ih-resultLbl").text("Invalid Zip or Postal Code.").css("color", "red");
                          $("#ih-zipBox").css("color", "red");
          }
                  }
          else {
           $("#ih-resultLbl").text("Invalid Phone Number.").css("color", "red");
                      $("#ih-phoneBox").css("color", "red");
        } 
      }
      else{
             $("#ih-resultLbl").text("Invalid Email.").css("color", "red");
                         $("#ih-emailBox").css("color", "red");
      } 
    }
    else{
              $("#ih-resultLbl").text("All fields with asterisk (*) are required.").css("color", "red");
    }
  }