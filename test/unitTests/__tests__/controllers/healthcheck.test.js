import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
const request = supertest(app);

it('Test endpoint /v1/healthcheck good', async done => {
  const res = await request.get('/bff/se-ms-registrobiller/v1/healthcheck');
  
  expect(res.status).toBe(200);
  expect(res.text).toBe('OK');
  done()
})