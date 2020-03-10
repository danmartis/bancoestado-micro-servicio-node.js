import {loginSchema} from "../../schemas/login.schema";
export const login = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = loginSchema.validate(req.body);
    
    if (error) {
      reject({message:"Datos incompletos",error});
    } else {
      let user = users.find((valor) =>{
        return (
          valor.rut == value.rut &&
          valor.email == value.email &&
          valor.password == value.password
        );
      });

      if( user ){
        resolve(value);
      }
      else {
        reject({message: "Usuario no existe", error: {}});
      }
    }
  })
    .then(data => {
      res.json({
        status: "OK",
        message: "Datos Correctos",
        data
      });
    })
    .catch(error => {
      res.status(400).json({
        status: "ERROR",
        message: error.message,
        error: error.error
      });
    });
};

const users = [
  {
      email: 'cliente@cliente.cl',
      rut: '11111111-1',
      password: 'RC123456',
      changePassword: true
  },
  {
      email: 'entel@cliente.cl',
      rut: '11111111-2',
      password: '12345678',
      changePassword: false
  },
];