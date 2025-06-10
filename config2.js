function log_msg(msg) {
  GM_xmlhttpRequest({
    method: "POST",
    url: "http://mlesnik.asuscomm.com:5000/log",
    data: "msg=" + msg
  });
}
