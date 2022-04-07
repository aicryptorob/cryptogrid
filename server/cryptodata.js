const { RESTDataSource } = require("apollo-datasource-rest");
const axios = require("axios");
// https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR
const getBtcData = async () => {
	axios
		.get(
			"https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,BNB,USDC,XRP,ADA,SOL,LUNA,AVAX,DOT,DOGE,BUSD,UST,SHIB,MATIC,ALGO&tsyms=USD,EUR&api_key={41f6d207abc7fcbc458828245417bbbe5f5a15f13160a2323ad881bc27902fcb}"
		)

		.then((response) => {
			console.log(response.data.RAW);
		})
		.then((data) => {
			// console.log(data.Raw.BTC);
			// document.getElementById("info").innerHTML = '<b>1 BTC = ' + data.USD + ' USD</b>'
		});
};

const cryptoData = getBtcData();

// https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD

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
