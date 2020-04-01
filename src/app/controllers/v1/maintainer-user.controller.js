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
import { UpdatePerfilUserSchema } from "../../schemas/update-perfil-user.schema";
import { UpdateUserSchema } from "../../schemas/update-user.schema";
export const personalInformation = (req, res) => {
  new Promise((resolve, reject) => {
    let dataUser = users.find(
      user => user.email === req.body.email && user.rut == req.body.rut
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
    email: "pruebaemailsiigroup@yopmail.com",
    rut: "76124890-1",
    firstName: "Claudio",
    lastName: "Monasterio",
    password: "movistar",
    changePassword: true,
    userRut: "15446676-k",
    birthday: "10/12/1986",
    phone: "+56978811992",
    address: "Los Cerezos 89, dpto 782",
    commune: "Ñuñoa",
    city: "Santiago",
    roles: [
      {
        id: 2,
        role: "Administrador"
      }
    ],
    covenants: [
      {
        nameFile: "Deptos. Coquimbo",
        activationDate: "10/07/2019"
      },
      {
        nameFile: "Deptos. Zona Sur",
        activationDate: "10/07/2019"
      }
    ],
    company: [
      {
        id: 2,
        name: "Telefónica"
      }
    ],
    contact: "Si",
    contactType: "Contacto Operacional"
  },
  {
    id: 2,
    email: "pruebaemailsiigroup2@yopmail.com",
    rut: "92580000-7",
    firstName: "Maria",
    lastName: "Lagos",
    password: "entel123",
    changePassword: false,
    userRut: "15446676-k",
    birthday: "10/12/1986",
    phone: "+56978811992",
    address: "Los Cerezos 89, dpto 782",
    commune: "Ñuñoa",
    city: "Santiago",
    roles: [
      {
        id: 1,
        role: "Administrador"
      }
    ],
    covenants: [
      {
        nameFile: "Deptos. Coquimbo",
        activationDate: "10/07/2019"
      },
      {
        nameFile: "Deptos. Zona Sur",
        activationDate: "10/07/2019"
      }
    ],
    company: [
      {
        id: 1,
        name: "Inmobiliaria Aconcagua, S.A"
      }
    ],
    contact: "Si",
    contactType: "Contacto Operacional"
  },
  {
    id: 3,
    email: "pruebaemailsiigroup3@yopmail.com",
    rut: "76124890-1",
    firstName: "Carolina",
    lastName: "Galdames",
    password: "movistar",
    changePassword: true,
    userRut: "12312312-3",
    birthday: "10/12/1986",
    phone: "+56978811992",
    address: "Los Cerezos 89, dpto 782",
    commune: "Ñuñoa",
    city: "Santiago",
    roles: [
      {
        id: 2,
        role: "Operador"
      }
    ],
    covenants: [
      {
        nameFile: "Deptos. Coquimbo",
        activationDate: "10/07/2019"
      },
      {
        nameFile: "Deptos. Zona Sur",
        activationDate: "10/07/2019"
      }
    ],
    company: [
      {
        id: 2,
        name: "Telefónica"
      }
    ],
    contact: "Si",
    contactType: "Contacto Operacional"
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

export const updatePerfilUser = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = UpdatePerfilUserSchema.validate(req.body);

    if (error) {
      reject({ message: MEN_INCORRECT_DATA, data: error });
    } else {
      /*
                Se debe generar código con llamada a switch
                */
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

export const getUsers = (req, res) => {
  new Promise((resolve, reject) => {
    let dataUser = users.filter(lista => lista.rut === req.body.rut);
    if (dataUser.length > 0) {
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

export const updateUser = (req, res) => {
  new Promise((resolve, reject) => {
    req.body.roles = req.body.roles[0].role;
    let { error, value } = UpdateUserSchema.validate(req.body);
    if (error) {
      reject({ message: MEN_INCORRECT_DATA, data: error });
    } else {
      /*
                Se debe generar código con llamada a switch
                */
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


