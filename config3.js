function log_msg(msg) {
  let message = "msg=" + msg;
  GM_xmlhttpRequest({
    method: "POST",
    url: "http://mlesnik.asuscomm.com:5000/log",
    data: message,
    headers: { 
      "Content-Type": "application/x-www-form-urlencoded" 
    }
  });
}
