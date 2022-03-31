const { RESTDataSource } = require("apollo-datasource-rest");
const APIKEY = process.env.COIN_API;

const axios = require("axios");

let response = null;
new Promise(async (resolve, reject) => {
	try {
		response = await axios.get(
			"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
			{
				headers: {
					"X-CMC_PRO_API_KEY": "fa5c04fc-d8a5-4328-8992-31de0d7ae806",
				},
			}
		);
	} catch (ex) {
		response = null;
		// error
		console.log(ex);
		reject(ex);
	}
	if (response) {
		// success
		const json = response.data;
		console.log(json);
		resolve(json);
	}
});

// class CRYPTOAPI extends RESTDataSource {
// 	constructor() {
// 		// Always call super()
// 		super();
// 		// Sets the base URL for the REST API
// 		this.baseURL = "pro-api.coinmarketcap.com";
// 	}

// 	async getMovie(id) {
// 		// Send a GET request to the specified endpoint
// 		return this.get(`movies/${encodeURIComponent(id)}`);
// 	}

// 	async getMostViewedMovies(limit = 10) {
// 		const data = await this.get("movies", {
// 			// Query parameters
// 			per_page: limit,
// 			order_by: "most_viewed",
// 		});
// 		return data.results;
// 	}
// }
