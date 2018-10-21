const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add', () => {

		it('should add two numbers', () => {
			let results = utils.add(33, 11);
			
			expect(results).toBe(44).toBeA('number');
			});

			it('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3, (sum)=> {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});

	})

	

	it('should square a number', () => {
		let square = utils.square(6);

		expect(square).toBe(36).toBeA('number');
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(6, (sum)=> {
			expect(sum).toBe(36).toBeA('number');
			done();
		});
	})

	it('should verify first and last names are set', () => {
		let user = utils.setName({}, 'Bob Jenkins');
		expect(user).toBeA('object');
		expect(user).toInclude({firstName : 'Bob'}).toInclude({lastName : 'Jenkins'});
	});

	it('should compare two objects', ()=> {
		expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
		expect([2,3,4]).toExclude(1);
		expect([2,3,4]).toInclude(2);
		expect({
			name: 'Andrew',
			age: 25,
			location: 'Philadelphia'
		}).toInclude({
			age: 25
		})
		
	});



});






