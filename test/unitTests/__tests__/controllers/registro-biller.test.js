import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
const request = supertest(app);

it('Test endpoint /v1/registro-biller/ good', async done => {
  let dataMock = {
    business_name: "businessname",
    rut: "rut",
    name: "name",
    last_name: "last_name",
    email: "email@gmail.com",
    phone: "963214569",
    position: "position"
  };
  
  const res = await request.post('/ms/se-ms-registrobiller/v1/registro-biller/').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(200);
  expect(text.status).toBe('OK');
  expect(text.message).toBe('Datos Correctos');
  done()
})


it('Test endpoint /v1/registro-biller/ Error', async done => {
  let dataMock = {
    rut: "rut",
    name: "name",
    last_name: "last_name",
    email: "email@gmail.com",
    phone: "963214569",
    position: "position"
  };

  const res = await request.post('/ms/se-ms-registrobiller/v1/registro-biller/').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(400);
  expect(text.status).toBe('ERROR');
  expect(text.message).toBe('Datos incompletos');
  done()
})