import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
const request = supertest(app);

it('Test endpoint /v1/registro-biller/registro good', async done => {
  let dataMock = {
    business_name: "businessname",
    rut: "rut",
    name: "name",
    last_name: "last_name",
    email: "email",
    phone: "950923752",
    position: "position@gmail.com"
  };
  
  const res = await request.post('/bff/se-bff-empresas/v1/registro-biller/registro').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(200);
  expect(text.status).toBe('OK');
  expect(text.message).toBe('Datos Correctos');
  done()
})


it('Test endpoint /v1/registro-biller/registro Error', async done => {
  let dataMock = {
    rut: "rut",
    name: "name",
    last_name: "last_name",
    email: "email",
    phone: "950923752",
    position: "position@gmail.com"
  };

  const res = await request.post('/bff/se-bff-empresas/v1/registro-biller/registro').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(400);
  expect(text.status).toBe('ERROR');
  expect(text.message).toBe('Datos incompletos');
  done()
})