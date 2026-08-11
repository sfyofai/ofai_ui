const request = require('supertest');
const app = require('../server');

describe('Express Server', () => {
  describe('GET /', () => {
    test('should return 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });

    test('should return "Hello world" message', async () => {
      const response = await request(app).get('/');
      expect(response.text).toBe('Hello world\n');
    });

    test('should have correct content type', async () => {
      const response = await request(app).get('/');
      expect(response.headers['content-type']).toContain('text/html');
    });
  });

  describe('404 Not Found', () => {
    test('should return 404 for undefined routes', async () => {
      const response = await request(app).get('/undefined-route');
      expect(response.statusCode).toBe(404);
    });
  });
});
