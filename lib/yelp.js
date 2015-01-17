var request = require("request");
var OAuth = require("oauth-1.0a");

var yelp = {};

yelp.auth = function(data, callback) {
	var oauth = OAuth({
		consumer: {
			public: "yilaPOowISqnQlqwDKDb0g",
			private: "4mG_FIrTpeaZzeIQ834rYbB51sw"
		},
		signature_method: "HMAC-SHA1"
	});

	var token = {
		public: "6MFn5PIDC7Re-rUIjitdlYni4S7Ji9wB",
		secret: "CkboNqNtWi4ueCortoiIQzV8dtU"
	};

	var requestData = {
		url: "http://api.yelp.com/v2/search",
		method: "GET",
		data: data
	};

	var options = {
		url: requestData.url,
		method: requestData.method,
		headers: oauth.toHeader(oauth.authorize(requestData, token)),
		form: requestData.data
	};

	console.log(options);

	request(options, function(error, response, body) {
		//if (!error && response.statusCode === 200) {
			callback(body);
		//}
	});
};

module.exports = yelp;
