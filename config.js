function log_msg(msg) {
  GM_xmlhttpRequest({
    method: "POST",
    url: "https://mlesnik.asuscomm.com:5000/log",
    data: "msg=" + msg
  });
}
