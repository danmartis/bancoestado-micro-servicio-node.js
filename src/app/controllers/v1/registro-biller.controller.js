import {registroSchema} from "../../schemas/registro.schema";
import {
  mensajeSalida,
  CODE_RESP_BAD_REQUEST,
  CODE_RESP_OK,
  CODE_MESSAGE_OK,
  CODE_MESSAGE_ERROR,
  MEN_CORRECT_DATA,
  MEN_INCORRECT_SCHEMA,
} from "../../../config/mensaje-respuesta";

export const registro = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = registroSchema.validate(req.body);
    if (error) {
      reject({ message: MEN_INCORRECT_SCHEMA, data: error });
    } else {
      resolve({ message: MEN_CORRECT_DATA, data: value });
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