require('./../../../db/config.test')
const assert = require('assert')
const Controller = require('./../controller')

describe('Pokemon Controller', () => {

	var msg1 = 'Quando iniciamos sem pokemons e vir vazio' 
	describe(msg1, () => {
		it(' retorna um array VAZIO', (done) => {
			var query = {}
			var callback = (err, data) => {
				assert.equal(null, err, 'Erro não é nulo')
				assert.equal(0,data.length, 'Lista veio vazia')
				done()
			}
			Controller.find(query, callback)
		})
	})
//INICIO CREATE
	describe('Create', () => {
	it('no cadastro, o retorno deve ser o mesmo objeto adicionado _id', ()=> {
		var mod = {
			name: 'Suissa',
			attack: '9001',
			defense: '8001'
		}
		var callback = (err, data) => {			
			assert.equal('object', typeof data._id)			
		}	
		Controller.create(mod,callback);			
		})
	})
//FIM CREATE	
//INICIO UPDATE
	 describe('update', () => {
	it('UPDATE', (done) => {
			var query = {
				_id:'Colocar O ID Gerado'
			}
			var mod ={
				name:'Renan'
			}
			var callback = (err, data) => {
				assert.equal(data.ok,1,' ok = 1');
				done()				
			}
			Controller.update(query,mod,callback);
		})
	})
//FIM UPDATE	
	 
// FIND ONE
	describe('findOne', () => {
	it('Deve retornar uma Query', (done) => {
			var query = {
				_id:'Colocar O ID Gerado'
			}
			var callback = (err, data) => {
				assert.equal(query._id, data._id, 'IDS DEVEM SER IGUAIS')
				done()
			}
			Controller.findOne(query,callback);	
		})
	})
// FIND ONE
// REMOVE
	describe('remove', () => {
	it('DEVE DELETETAR', (done) => {
			var query = {
				_id:'Colocar O ID Gerado'
			}
			var callback = (err, data) => {
				assert.equal(data.result.ok, 1, 'result.ok = 1')
				done()
			}
			Controller.remove(query,callback);			
		})
	})
	// REMOVE
})