const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:2000');

describe('Unit testing for Main page of CLM and Jenkins Integration', function() {
	it('should return me the full home page', function(done) {
		server.get('/').expect('Content-type').expect(200).end(function(err, res) {
			res.status.should.equal(200);
			done();
		})
	})
})