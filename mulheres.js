const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
	{nome: "Graziela Pauluka",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{nome: "Ana Maria",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{nome: "Luana",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{nome: "Graziela Pauluka",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{nome: "Graziela Pauluka",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{nome: "Graziela Pauluka",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
]

function mostraMulheres(request, response) {
	response.json(mulheres)
}

function mostraPorta(){
	console.log("servidor rodando na porta " + porta)
}


app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta)