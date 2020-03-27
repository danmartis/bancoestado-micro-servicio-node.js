import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
import {
  CODE_RESP_BAD_REQUEST,
  CODE_RESP_OK,
  CODE_MESSAGE_OK,
  CODE_MESSAGE_ERROR,
  MEN_CORRECT_DATA,
  MEN_INCORRECT_DATA_LOGIN,
  MEN_INCORRECT_SCHEMA,
  MEN_INCORRECT_DATA,
  MEN_INCORRECT_PASSWORD
} from "../../../../src/config/mensaje-respuesta";

const request = supertest(app);

it(`Test endpoint /ms/se-ms-registrobiller/v1/login good (${MEN_CORRECT_DATA})`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.com",
    rut: "76.124.890-1",
    password: "movistar",
    changePassword: false
  };
  
  const res = await request.post('/ms/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done()
})

it(`Test endpoint /ms/se-ms-registrobiller/v1/login error (${MEN_INCORRECT_SCHEMA})`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.com",
    rut: "19",
    password: "movistar",
    changePassword: false
  };
  
  const res = await request.post('/ms/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);
  
  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_SCHEMA);
  done()
})

it(`Test endpoint /ms/se-ms-registrobiller/v1/login error (${MEN_INCORRECT_DATA})`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.com",
    rut: "76.124.890-1",
    password: "movista2",
    changePassword: true
  };

  const res = await request.post('/ms/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);
  
  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  expect(text.data.titulo).toBe(MEN_INCORRECT_PASSWORD);
  expect(text.data.descripcion).toBe("");
  done()
})

it(`Test endpoint /ms/se-ms-registrobiller/v1/login error (${MEN_INCORRECT_DATA_LOGIN})`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.cl",
    rut: "76124890-1",
    password: "movistar",
    changePassword: true
  };
  
  const res = await request.post('/ms/se-ms-registrobiller/v1/login').send(dataMock);
  let text = JSON.parse(res.text);
  
  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  expect(text.data.titulo).toBe(MEN_INCORRECT_DATA);
  expect(text.data.descripcion).toBe(MEN_INCORRECT_DATA_LOGIN);
  done()
})

// cambio contraseña
it(`Test endpoint /ms/se-ms-registrobiller/v1/login/cambio-contrasenia good (${MEN_CORRECT_DATA})`, async done => {
  let dataMock = {
    email: "cliente@cliente.cl",
    rut: "11111111-1",
    oldPassword: "RC123456",
    newPassword: "12345678"
  };
  
  const res = await request.put('/ms/se-ms-registrobiller/v1/login/cambio-contrasenia').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done()
})

it(`Test endpoint /ms/se-ms-registrobiller/v1/login/cambio-contrasenia error (${MEN_INCORRECT_DATA})`, async done => {
  let dataMock = {
    email: "cliente@cliente.cla",
    rut: "11111111-11",
    oldPassword: "RC1234561",
    newPassword: "123456781"
  };
  
  const res = await request.put('/ms/se-ms-registrobiller/v1/login/cambio-contrasenia').send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  done()
})