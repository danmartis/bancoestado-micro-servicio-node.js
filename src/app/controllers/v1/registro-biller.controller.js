import {registroSchema} from "../../schemas/registro.schema";
export const registro = (req, res) => {
  new Promise((resolve, reject) => {
    let { error, value } = registroSchema.validate(req.body);
    if (error) {
      reject(error);
    } else {
      resolve(value);
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
        message: "Datos incompletos",
        error
      });
    });
};