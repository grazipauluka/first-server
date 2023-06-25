

const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
const porta = 3333;

const mulheres = [
	{id: "1",
		nome: "Graziela Pauluka",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{id: "2",
		nome: "Ana Maria",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	},
	{id: "3",
		nome: "Luana",
		img: "https://lh3.googleusercontent.com/a/AAcHTteG0CcwwTQzZ8yYppY2_P3w4KY7PLFjdEtsSu-30zg=s576-c-no",
		minibio: "Software developer"
	}
]
// GET
function mostraMulheres(request, response) {
	response.json(mulheres)
}

// POST
function criaMulher(request, response) {
	const novaMulher =  {
		id: uuidv4(),
		name: request.body.name,
		img: request.body.img,
		minibio: request.body.minibio
	}
	mulheres.push(novaMulher)
	response.json(mulheres)
}

// PATCH
function corrigeMulher(request, response) {
	function encontraMulher(mulher) {
		if (mulher.id === request.params.id) {
			return mulher;
		}
	}
	const mulherEncontrada = mulheres.find(encontraMulher);

	if(request.body.nome) {
		mulherEncontrada.nome = request.body.nome
	}

	if(request.body.img) {
		mulherEncontrada.img = request.body.img
	}

	if(request.body.minibio) {
		mulherEncontrada.minibio = request.body.minibio
	}

	response.json(mulheres)

}

// DELETE

function deletaMulher(request,response) {
	function todasMenosEla(mulher) {
		if (mulher.id !== request.params.id){
			return mulher
		}
	}
	const mulheresQueFicam = mulheres.filter(todasMenosEla)
	response.json(mulheresQueFicam)
}

function mostraPorta(){
	console.log("servidor rodando na porta " + porta)
}


app.use(router.get('/mulheres', mostraMulheres));
app.use(router.post('/mulheres', criaMulher));
app.use(router.patch('/mulheres/:id', corrigeMulher));
app.use(router.delete('/mulheres/:id', deletaMulher));
app.listen(porta, mostraPorta)