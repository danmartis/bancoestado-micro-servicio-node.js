// CÓDIGO DE RESPUESTA
export const CODE_RESP_OK = 200;
export const CODE_RESP_CREATED = 201;
export const CODE_RESP_BAD_REQUEST = 400;
export const CODE_RESP_NOT_FOUND = 404;
export const CODE_RESP_UNAUTHORIZED = 401;
export const CODE_RESP_METHOD_NOT_ALLOWED = 405;
export const CODE_RESP_CONFLICT = 409;
export const CODE_RESP_INTERNAL_SERVER_ERROR = 500;

// CÓDIGO MENSAJES
export const CODE_MESSAGE_OK = "OK";
export const CODE_MESSAGE_ERROR = "ERROR";

//MENSAJE DE ERROR
export const MEN_INCOMPLETE_DATA = "Datos Incompletos";
export const MEN_INCORRECT_DATA = "Datos incorrectos. Favor revísalos e ingresa nuevamente";
export const MEN_CORRECT_DATA = "Datos Correctos";
export const MEN_INCORRECT_PASSWORD = "Clave incorrecta";
export const KEY_LOCKED = "Clave Bloqueada. Puedes recuperarla presionando el link “¿olvidaste tu contraseña?";
export const USER_NOT_FOUND = "Usuario no encontrado";
export const mensajeSalida = (code, message, data) => ({
    SUCCESS: { code: `${code}.000`, message, data },
    ERROR: { code: `${code}.001`, message, data }
});