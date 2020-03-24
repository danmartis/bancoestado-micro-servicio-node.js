import "@babel/polyfill";
import app from "../../../../src/app";
import supertest from "supertest";
const request = supertest(app);

it('Test endpoint /registerNewUser OK', async done => {
    let dataMock = {
      name: "name",
      email: "email@gmail.com",
      perfil: "perfil",
      tipoContrato: "contratoA"
    };
    
    const res = await request.post('/ms/se-ms-registrobiller/v1/configuracion-personal/registerNewUser').send(dataMock);
    let text = JSON.parse(res.text);
  
    expect(res.status).toBe(200);
    expect(text.status).toBe('OK');
    expect(text.message).toBe('Datos Correctos');
    done()
  })

  it('Test endpoint /registerNewUser Error', async done => {
    let dataMock = {
        name: "",
        email: "email@gmail.com",
        perfil: "perfil",
        tipoContrato: "contratoA"
      };
  
    const res = await request.post('/ms/se-ms-registrobiller/v1/configuracion-personal/registerNewUser').send(dataMock);
    let text = JSON.parse(res.text);
  
    expect(res.status).toBe(400);
    expect(text.status).toBe('ERROR');
    expect(text.message).toBe('Datos incompletos');
    done()
  })