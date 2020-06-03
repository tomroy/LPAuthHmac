# LPAuthHmac
Line Pay API Authentication HMAC Base64 Signature Generator
--
This is a page for user to easily generate the LINE Pay API Authentication Hmac Signature.  
All you have to do is to fill in the required information and click the generate button, then the signature will be generated.

## Fields
|  Fields   | Description  |
|  ----  | ----  |
| SecretKey  | Provided Channel SecretKey from the LINE Pay merchants |
| Url  | URL Path |
| Nonce | Use the one-time random value nonce when generating HMAC signature to block the signature generation and prevent sending the same request with malicious purpose. <br>`The one-time nonce can use UUID 1 or 4 or a timestamp.`
| QueryString | A query string except `?` (Example: Name1=Value1&Name2=Value2...) |
| RequestBody | request body |
| Payload | The raw payload to be used to generate HMAC Base64 Signature. |
| Signature | HMAC Base64 Signature for the `X-LINE-Authorization` header  |
| Auth Headers | Just copy and paste to your cURL command. |
