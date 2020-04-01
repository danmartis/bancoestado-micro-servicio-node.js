import {
  loginSchema,
  changePasswordSchema,
  recoverPasswordSchema
} from "../../schemas/login.schema";
import {
  mensajeSalida,
  CODE_RESP_BAD_REQUEST,
  CODE_RESP_OK,
  CODE_MESSAGE_OK,
  CODE_MESSAGE_ERROR,
  MEN_CORRECT_DATA,
  MEN_INCORRECT_DATA_DESCRIPTION,
  MEN_INCORRECT_SCHEMA,
  MEN_INCORRECT_DATA,
  MEN_INCORRECT_PASSWORD,
} from "../../../config/mensaje-respuesta";
import { users } from "../../mock-data/user"

export const login = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = loginSchema.validate(req.body);

    if (error) {
      reject({ message: MEN_INCORRECT_SCHEMA, data: error });
    } else {
      /*
      Se debe generar código con llamada a switch para consultar usuarios
      */
      let user = users.find(usuario => {
        return usuario.rut === value.rut && usuario.email === value.email;
      });

      if (user) {
        if (user.password == value.password) {
          resolve({ message: MEN_CORRECT_DATA, data: user });
        } else {
          reject({ message: MEN_INCORRECT_DATA, data: { titulo: MEN_INCORRECT_PASSWORD, descripcion: "" } });
        }
      } else {
        reject({ message: MEN_INCORRECT_DATA, data: { titulo: MEN_INCORRECT_DATA, descripcion: MEN_INCORRECT_DATA_DESCRIPTION } });
      }

      // esto debe cambiar cuando se realice la conexión con switch ya que él validará el bloqueo de contraseña
      /*
      let error_3_veces = 3;
      if( error_3_veces == 3 )
        reject({ message: MEN_INCORRECT_DATA, data: { titulo: KEY_LOCKED, descripcion: KEY_LOCKED_DESCRIPTION } });
      */
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

export const changePassword = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = changePasswordSchema.validate(req.body);

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

export const recoverPassword = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = recoverPasswordSchema.validate(req.body);

    if (error) {
      reject({ message: MEN_INCORRECT_SCHEMA, data: error });
    } else {

      let user = users.find(usuario => {
        return usuario.rut === value.rut && usuario.email === value.email;
      });
      
      if (user) {
        resolve({ message: MEN_CORRECT_DATA, data: {clave_provisoria: "estaEsUnaClaveProvisoria", username: `${user.firstName} ${user.lastName}`}});
      } else {
        reject({message: MEN_INCORRECT_DATA,data: {titulo: MEN_INCORRECT_DATA, descripcion: MEN_INCORRECT_DATA_DESCRIPTION}});
      }
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
}