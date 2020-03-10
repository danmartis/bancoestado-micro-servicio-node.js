import { loginSchema } from "../../schemas/login.schema";
import {
  mensajeSalida,
  CODE_RESP_BAD_REQUEST,
  CODE_RESP_OK,
  CODE_MESSAGE_OK,
  CODE_MESSAGE_ERROR,
  MEN_CORRECT_DATA,
  MEN_USER_NOT_FOUND,
  MEN_INCORRECT_DATA
} from "../../../config/mensaje-respuesta";

export const login = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = loginSchema.validate(req.body);

    if (error) {
      reject({ message: MEN_INCORRECT_DATA, data: error });
    } else {
      let user = users.find((usuario) => {
        return usuario.rut === value.rut
        && usuario.password === value.password
        && usuario.email === value.email
      });

      if (user) {
        resolve({ message: MEN_CORRECT_DATA, data: user });
      } else {
        reject({ message: MEN_USER_NOT_FOUND, data: {} });
      }
    }
  })
    .then(data => {
      res.status(CODE_RESP_OK)
      .json(
        mensajeSalida(CODE_MESSAGE_OK, data.message, data.data).SUCCESS
      );
    })
    .catch(error => {
      res.status(CODE_RESP_BAD_REQUEST)
      .json(
        mensajeSalida(CODE_MESSAGE_ERROR, error.message, error.data).ERROR
      );
    });
};

const users = [
  {
    email: "cliente@cliente.cl",
    rut: "11111111-1",
    password: "rc123456",
    changePassword: true
  },
  {
    email: "entel@cliente.cl",
    rut: "11111111-2",
    password: "12345678",
    changePassword: false
  }
];
