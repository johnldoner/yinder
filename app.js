$.post( "sample.php", {
      oauth_consumer_key: "7i4ekl7wbXvjA4xAMXvatQ", 
      oauth_token: "RUGMGKl2cuGS1CyGHo0qYVtzqE-D_yXc",
      oauth_signature_method: "hmac-sha1",
      oauth_signature: "Xor8ROb9A64OYT-LRRIoJCVEmN4",
      oauth_timestamp: (new Date).getTime(),
      oauth_nonce: "",
      term: "bars",
      location: "San Francisco, CA"
    }).
  success(function(data, status, headers, config) {
    console.log( "Success: ", data, status, headers, config);
  }).
  error(function(data, status, headers, config) {
    console.log("Error: ", data, status, headers, config);
  });   