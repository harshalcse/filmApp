// movies.spec.js
const supertest = require('supertest');
const app = require('../app');
const Film = require('../models/filmModel').Films;

describe("Testing the films API", () => {
    it("tests the base route and returns 200 for status", async () => {

		const response = await supertest(app).get('/films');

        expect(response.status).toBe(200);
        console.log(response.body);
		expect(response.body.status).toBe(200);

    });
    
    it("tests the post new films endpoint and returns as success message", async () => {

		const response = await supertest(app).post('/films').send({
			name: 'New Movie',
			description: 'Synopsis of the new film',
            realeaseDate: 1611974995,
            ticketPrice: 200,
            country: "India",
            photo: "photodata"

		});

		expect(response.status).toBe(200);
		expect(response.body.msg).toBe("Film Created Successfully!");

	});

	// This is run after 
	afterEach(async () => {
		await Film.deleteOne({
			name: 'New Movie'
		})
	})
  });