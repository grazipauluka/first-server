const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
	response.json({
		nome: "Graziela Pauluka",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	})
}

function mostraPorta(){
	console.log("servidor rodando na porta " + porta)
}


app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta)