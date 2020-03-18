import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
const request = supertest(app);

it('Test endpoint /bff/se-ms-registrobiller/v1/login good (Datos Correctos)', async done => {
  let dataMock = {
    email: "entel@cliente.cl",
    rut: "11111111-2",
    password: "12345678",
    changePassword: false
  };
  
  const res = await request.post('/bff/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(200);
  expect(text.code).toBe('OK.000');
  expect(text.message).toBe('Datos Correctos');
  done()
})

it('Test endpoint /bff/se-ms-registrobiller/v1/login error (Datos Incorrectos)', async done => {
  let dataMock = {
    email: "entel@cliente.cl",
    rut: "11111111-2",
    password: "123456789",
    changePassword: false
  };
  
  const res = await request.post('/bff/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);
  
  expect(res.status).toBe(400);
  expect(text.code).toBe('ERROR.001');
  expect(text.message).toBe('Datos Incorrectos');
  done()
})

it('Test endpoint /bff/se-ms-registrobiller/v1/login error (Usuario no encontrado)', async done => {
  let dataMock = {
    email: "entel1@cliente.cl",
    rut: "11111111-2",
    password: "12345678",
    changePassword: false
  };

  const res = await request.post('/bff/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);
  
  expect(res.status).toBe(400);
  expect(text.code).toBe('ERROR.001');
  expect(text.message).toBe('Usuario no encontrado');
  done()
})

// cambio contraseña
it('Test endpoint /bff/se-ms-registrobiller/v1/login/cambio-contrasenia good (Datos Correctos)', async done => {
  let dataMock = {
    email: "cliente@cliente.cl",
    rut: "11111111-1",
    oldPassword: "RC123456",
    newPassword: "12345678"
  };
  
  const res = await request.put('/bff/se-ms-registrobiller/v1/login/cambio-contrasenia').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(200);
  expect(text.code).toBe('OK.000');
  expect(text.message).toBe('Datos Correctos');
  done()
})

it('Test endpoint /bff/se-ms-registrobiller/v1/login/cambio-contrasenia error (Datos Incorrectos)', async done => {
  let dataMock = {
    email: "cliente@cliente.cla",
    rut: "11111111-11",
    oldPassword: "RC1234561",
    newPassword: "123456781"
  };
  
  const res = await request.put('/bff/se-ms-registrobiller/v1/login/cambio-contrasenia').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(400);
  expect(text.code).toBe('ERROR.001');
  expect(text.message).toBe('Datos Incorrectos');
  done()
})