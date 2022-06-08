
function catchmatch() {
    function callback(mutationList) {
        mutationList.forEach(function (mutation) {
            if (mutation.type === "attributes" && mutation.attributeName === "state") {
                if (mutation.oldValue === "widgetClose") {
                    console.log("catchmatch- conversion is coming now");
                    //sendconversionevent('chat');
                    dataLayer.push({'event': 'chat-button'});
                    observer.disconnect();
                }
            }
        });
    }

    var targetNode = document.querySelector('iframe[title="Webchat Widget"]');

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, {
        attributes: true,
        attributeOldValue: true
    });
}
function catchermatcher() {
    var counter = 0;
    var id = setInterval(function ()
    {
        console.log("entering");
        counter += 1;
        if (counter == 15)
            clearInterval(id);
        chatwidgo=document.querySelector('iframe[title="Webchat Widget"]');
        if (chatwidgo === undefined || chatwidgo === null)
            return;
        if (chatwidgo.nodeType != 1)
            return;
        //return;
        catchmatch();
        clearInterval(id);
        //console.log('catchermatcher worked');
    }, 2000);
}
catchermatcher();
var $e = function (id) {
    return document.getElementById(id);
};


//thankyou
thankyou="/en/thank-you";
if(lang == "ar")thankyou="شكرا-لك";
//subscripe
function sendsublead(e) {
    //gtag("event", "conversion", {"send_to": "AW-429894538/agemCM2Qq_oBEIrX_swB","event_callback": () => {console.log("convention sent from contact form");} });
    e.preventDefault();
    email = $e("sublead_email").value;
    $e("sublead_info").innerHTML = (lang == "ar" ? "جاري الارسال ...." : "sending ...");
    fetch("/api/subscribe.php/", {method: "post", cache: "no-cache", body: JSON.stringify({email: email, lang: lang}), headers: {"Content-Type": "application/json", "Accept": "application/json"}})
            .then(response => response.text())
            .then(data => {
                $e("sublead_info").innerHTML = data;            
                window.location.href = thankyou;
            })
            .catch(error => {
                $e("sublead_info").innerHTML = error;
            });
}
//contact form
function sendctctlead(e) {
    //gtag("event", "conversion", {"send_to": "AW-429894538/agemCM2Qq_oBEIrX_swB","event_callback": () => {console.log("convention sent from contact form");} });
    e.preventDefault();
    name = $e("ctctlead_name").value;
    phone = $e("ctctlead_mobile").value;
    email = $e("ctctlead_email").value;
    msg = $e("ctctlead_description").value;
    let leaddata = {name: name, phone: phone, email: email, message: msg, lang: lang};
    $e("ctctlead_info").innerHTML = (lang=="en"?"Sending ....":"جاري الارسال ....");
    fetch("/api/", {method: "post", cache: "no-cache", body: JSON.stringify(leaddata), headers: {"Content-Type": "application/json", "Accept": "application/json"}})
            .then(response => response.text())
            .then(data => {
                $e("ctctlead_info").innerHTML = data;
                window.location.href = thankyou;
            })
            .catch(error => {
                $e("ctctlead_info").innerHTML = error;
            });
}

//request form
function sendlead(e) {
    //gtag("event", "conversion", {"send_to": "AW-429894538/agemCM2Qq_oBEIrX_swB","event_callback": () => {console.log("convention sent from request form");} });
    e.preventDefault();
    name = $e("rqstlead_name").value;
    phone = $e("rqstlead_mobile").value;
    email = $e("rqstlead_email").value;
    msg = $e("rqstlead_description").value;
    let leaddata = {name: name, phone: phone, email: email, message: msg, lang: lang};
    $e("rqstlead_info").innerHTML = (lang=="en"?"Sending ....":".");
    fetch("/api/", {method: "post", cache: "no-cache", body: JSON.stringify(leaddata), headers: {"Content-Type": "application/json", "Accept": "application/json"}})
            .then(response => response.text())
            .then(data => {
                $e("rqstlead_info").innerHTML = data;
                window.location.href = thankyou;
            })
            .catch(error => {
                $e("rqstlead_info").innerHTML = error;
            });
}
