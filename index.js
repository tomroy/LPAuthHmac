generate();
function generate() {
  // INIT
  var secretKey = document.getElementById("secretKey").value;
  var url = document.getElementById("url").value;
  var nonce = document.getElementById("nonce").value;
  var queryString = document.getElementById("queryString").value;
  var requestBody = document.getElementById("body").value;

  var payload = secretKey + url + queryString + requestBody + nonce;

  // PROCESS
  //   var secretKeyBytes = CryptoJS.enc.Base64.parse(secretKey);
  var secretKeyBytes = CryptoJS.enc.Utf8.parse(secretKey);
  var payloadBytes = CryptoJS.enc.Utf8.parse(payload);
  var signatureBytes = CryptoJS.HmacSHA256(payloadBytes, secretKeyBytes);
  var signatureBase64String = CryptoJS.enc.Base64.stringify(signatureBytes);
  var authorizationNonce = "-H 'X-LINE-Authorization-Nonce: " + nonce + "'";
  var authorization =
    "-H 'X-LINE-Authorization: " + signatureBase64String + "'";

  // WRITE
  document.getElementById("secretKey").innerHTML = secretKey;
  document.getElementById("url").innerHTML = url;
  document.getElementById("nonce").innerHTML = nonce;
  document.getElementById("queryString").innerHTML = queryString;
  document.getElementById("body").innerHTML = requestBody;
  document.getElementById("payload").innerHTML = payload;
  document.getElementById("signature").innerHTML = signatureBase64String;
  document.getElementById("headers").innerHTML =
    authorizationNonce + " " + authorization;
}

function generate_nonce() {
  document.getElementById("nonce").value = uuidv4();
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
