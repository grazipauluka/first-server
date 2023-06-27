const express = require('express'); // inicia o express
const router = express.Router(); // configura a primeira parte da rota
const conectaBancoDeDados = require('./bancoDeDados'); //conecta o arquivo ao banco de dados
conectaBancoDeDados(); 
const cors = require('cors')

const Mulher = require('./mulherModel')

const app = express(); // inicia o app
app.use(express.json());
app.use(cors())
const porta = 3333; // cria a porta


// GET
async function mostraMulheres(request, response) {
	try {
		const mulheresVindasDoBD = await Mulher.find();

		response.json(mulheresVindasDoBD)
	} catch (error) {
		console.log(error)
	}
	

}

// POST
async function criaMulher(request, response) {
	const novaMulher =  new Mulher({
		nome: request.body.nome,
		img: request.body.img,
		minibio: request.body.minibio
	})
try {
	const MulherCriada = await novaMulher.save()
	response.status(201).json(MulherCriada)
} catch (error) {
	console.log(error)
}

}

// PATCH
async function corrigeMulher(request, response) {
	try {
		const mulherEncontrada = await Mulher.findById(request.params.id)

		if(request.body.nome) {
			mulherEncontrada.nome = request.body.nome
		}
	
		if(request.body.img) {
			mulherEncontrada.img = request.body.img
		}
	
		if(request.body.minibio) {
			mulherEncontrada.minibio = request.body.minibio
		}
	const mulherAtualizada = await mulherEncontrada.save()
	response.json(mulherAtualizada)
	
	} catch (error) {
		console.log(error)
	}

}

// DELETE

async function deletaMulher(request,response) {
	try {
		await Mulher.findByIdAndDelete(request.params.id)
		response.json({ messagem: "Mulher deletada com sucesso"})
	} catch (error) {
		console.log(error)
	}
}
function mostraPorta(){
	console.log("servidor rodando na porta " + porta)}


app.use(router.get('/mulheres', mostraMulheres));
app.use(router.post('/mulheres', criaMulher));
app.use(router.patch('/mulheres/:id', corrigeMulher));
app.use(router.delete('/mulheres/:id', deletaMulher));
app.listen(porta, mostraPorta);