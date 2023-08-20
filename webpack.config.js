const path = require("path");

module.exports = {
	entry: [__dirname + "/src/scss/main.scss"],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				type: "asset/resource",
				generator: {
					filename: "bundle.css",
				},
				use: ["sass-loader"],
			},
		],
	},
};
