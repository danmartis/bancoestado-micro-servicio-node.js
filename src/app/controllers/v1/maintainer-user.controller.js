import {
  mensajeSalida,
  CODE_RESP_BAD_REQUEST,
  CODE_RESP_OK,
  CODE_MESSAGE_OK,
  CODE_MESSAGE_ERROR,
  MEN_CORRECT_DATA,
  MEN_INCORRECT_DATA,
  USER_NOT_FOUND,
  MEN_INCORRECT_SCHEMA
} from "../../../config/mensaje-respuesta";

import { registerNewUserSchema } from "../../schemas/register-new-user.schema";

export const personalInformation = (req, res) => {
  new Promise((resolve, reject) => {
    let dataUser = users.find(
      user => user.email === req.email && user.rut == req.rut
    );
    if (dataUser) {
      resolve({ message: MEN_CORRECT_DATA, data: dataUser });
    } else {
      reject({ message: MEN_INCORRECT_DATA, data: USER_NOT_FOUND });
    }
  })
    .then(data => {
      res
        .status(CODE_RESP_OK)
        .json(mensajeSalida(CODE_MESSAGE_OK, data.message, data.data).SUCCESS);
    })
    .catch(error => {
      res
        .status(CODE_RESP_BAD_REQUEST)
        .json(
          mensajeSalida(CODE_MESSAGE_ERROR, error.message, error.data).ERROR
        );
    });
};

const users = [
  {
    id: 1,
    email: "claudio.monasterio@telefonica.com",
    rut: "76124890-1",
    password: "movistar",
    changePassword: true,
    userRut: "15446676-k",
    birthday: "10/12/1986",
    phone: "+56978811992",
    address: "Los Cerezos 89, dpto 782",
    comuna: "Ñuñoa",
    city: "Santiago",
    roles: [
      {
        id: 2,
        role: "consultor"
      }
    ]
  },
  {
    id: 2,
    email: "entel@cliente.cl",
    rut: "92580000-7",
    password: "entel123",
    changePassword: false,
    userRut: "15446676-k",
    birthday: "10/12/1986",
    phone: "+56978811992",
    address: "Los Cerezos 89, dpto 782",
    comuna: "Ñuñoa",
    city: "Santiago",
    roles: [
      {
        id: 1,
        role: "admin"
      }
    ]
  }
];

export const registerNewUser = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = registerNewUserSchema.validate(req.body);
    if (error) {
      reject({ message: MEN_INCORRECT_SCHEMA, data: error });
    } else {
      resolve({ message: MEN_CORRECT_DATA, data: value });
    }
  })
    .then(data => {
      res
        .status(CODE_RESP_OK)
        .json(mensajeSalida(CODE_MESSAGE_OK, data.message, data.data).SUCCESS);
    })
    .catch(error => {
      res
        .status(CODE_RESP_BAD_REQUEST)
        .json(
          mensajeSalida(CODE_MESSAGE_ERROR, error.message, error.data).ERROR
        );
    });
};
