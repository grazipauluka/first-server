const mongoose = require('mongoose');

const MulherSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: false,
	},
	minibio: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('diva', MulherSchema);