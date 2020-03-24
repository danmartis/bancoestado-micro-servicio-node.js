import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
import {
  CODE_RESP_BAD_REQUEST,
  CODE_RESP_OK,
  CODE_MESSAGE_OK,
  CODE_MESSAGE_ERROR,
  MEN_CORRECT_DATA,
  MEN_INCORRECT_SCHEMA,
} from "../../../../src/config/mensaje-respuesta";

const request = supertest(app);

it(`Test endpoint /v1/registro-biller/ good ${MEN_CORRECT_DATA}`, async done => {
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

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done()
})


it(`Test endpoint /v1/registro-biller/ Error ${MEN_INCORRECT_SCHEMA}`, async done => {
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

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_SCHEMA);
  done()
})