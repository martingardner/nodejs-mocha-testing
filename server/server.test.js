const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('Server', () => {

	describe('/', () => {

		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				//.expect('Hello World!')
				//.expect({error: 'Page not found.'})
				.expect( (res) => {
					expect(res.body).toInclude({
						error: 'Page not found.'
					});
				})
				.end(done);
		});

	});

	describe('/users', () => {

		it('should return users', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect( (res) => {
					expect(res.body).toInclude({
						age: 20,
						name: 'Bill'
					});
				})
				.end(done);
		});

	});
});


