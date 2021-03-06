const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');
//app.__set__
//app.__get__

describe('App', () => {

	let db = {
		saveUser: expect.createSpy()
	}

	app.__set__('db', db);

	it('should call the spy correctly', () => {
		let spy = expect.createSpy();
		spy('Andrew', 25);
		//expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith('Andrew', 25);
	});

	it('should call saveUser wtih user object', () => {
		let email = 'the@the.com';
		let password = '123abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email : email, password : password});
	});

});
