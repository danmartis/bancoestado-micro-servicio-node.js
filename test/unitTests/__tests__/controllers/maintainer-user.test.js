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
  MEN_INCORRECT_DATA
} from "../../../../src/config/mensaje-respuesta";

const request = supertest(app);

it(`Test endpoint /informacion-personal OK ${MEN_CORRECT_DATA}`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.com",
    rut: "76124890-1"
  };

  const res = await request
    .post("/ms/se-ms-registrobiller/v1/maintainer-user/informacion-personal")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done();
});

it(`Test endpoint /informacion-personal Error ${MEN_INCORRECT_DATA}`, async done => {
  let dataMock = {
    email: "claudio.monaserio@telefonica.com",
    rut: "7614890-1"
  };

  const res = await request
    .post("/ms/se-ms-registrobiller/v1/maintainer-user/informacion-personal")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  done();
});

it(`Test endpoint /registerNewUser OK ${MEN_CORRECT_DATA}`, async done => {
  let dataMock = {
    name: "name",
    email: "email@gmail.com",
    perfil: "perfil",
    asignarContacto: true,
    tipoContacto: "Contacto Operacional"
  };

  const res = await request
    .post("/ms/se-ms-registrobiller/v1/maintainer-user/registerNewUser")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done();
});

it(`Test endpoint /registerNewUser Error ${MEN_INCORRECT_SCHEMA}`, async done => {
  let dataMock = {
    email: "email@gmail.com",
    perfil: "perfil",
    tipoContrato: "contratoA"
  };

  const res = await request
    .post("/ms/se-ms-registrobiller/v1/maintainer-user/registerNewUser")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_SCHEMA);
  done();
});

it(`Test endpoint /updatePerfilUser OK ${MEN_CORRECT_DATA}`, async done => {
  let dataMock = {
    birthday: "12-10-1994",
    phone: "999999999",
    address: "San antonio 8666",
    commune: "Santiago",
    city: "Santiago"
  };

  const res = await request
    .put("/ms/se-ms-registrobiller/v1/maintainer-user/editar-perfil")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done();
});

it(`Test endpoint /updatePerfilUser ERROR ${MEN_INCORRECT_DATA}`, async done => {
  let dataMock = {
    birthday: "12-10-1994",
    phone: "99999999",
    address: "San antonio 8666",
    commune: "Santiago",
    city: "Santiago"
  };

  const res = await request
    .put("/ms/se-ms-registrobiller/v1/maintainer-user/editar-perfil")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  done();
});

it(`Test endpoint /listar-usuarios OK ${MEN_CORRECT_DATA}`, async done => {
  let dataMock = {
    rut: "76124890-1"
  };

  const res = await request
    .post("/ms/se-ms-registrobiller/v1/maintainer-user/listar-usuarios")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done();
});

it(`Test endpoint /listar-usuarios Error ${MEN_INCORRECT_DATA}`, async done => {
  let dataMock = {
    rut: "123123123"
  };

  const res = await request
    .post("/ms/se-ms-registrobiller/v1/maintainer-user/listar-usuarios")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  done();
});

it(`Test endpoint /updateUser OK ${MEN_CORRECT_DATA}`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.com",
    rut: "76.124.890-1",
    roles: [
      {
        "id": 2,
        "role": "Consultor"
      }
    ],
    contact: "Si",
    contactType: "Contacto Operacional"
  };

  const res = await request
    .put("/ms/se-ms-registrobiller/v1/maintainer-user/editar-usuario")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_OK);
  expect(text.code).toBe(`${CODE_MESSAGE_OK}.000`);
  expect(text.message).toBe(MEN_CORRECT_DATA);
  done();
});

it(`Test endpoint /updateUser ERROR ${MEN_INCORRECT_DATA}`, async done => {
  let dataMock = {
    email: "claudio.monasterio@telefonica.com",
    rut: "76.124.890-1",
    roles: [
      {
        "id": 2,
        "role": "Consultor"
      }
    ],
    contactType: "Contacto Operacional"
  };

  const res = await request
    .put("/ms/se-ms-registrobiller/v1/maintainer-user/editar-usuario")
    .send(dataMock);
  let text = JSON.parse(res.text);

  expect(res.status).toBe(CODE_RESP_BAD_REQUEST);
  expect(text.code).toBe(`${CODE_MESSAGE_ERROR}.001`);
  expect(text.message).toBe(MEN_INCORRECT_DATA);
  done();
});
