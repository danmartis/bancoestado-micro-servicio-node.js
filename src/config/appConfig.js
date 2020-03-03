export const addEnvParam = (paramName, required) => {
    var parameter = process.env[paramName];
    if (!parameter) {
        if (required)
            throw new Error("No se definió la variable de entorno " + paramName);
        else return null;
    }
    return parameter;
}

export const getVariable = (name, defaultValue) => {
    const env = process.env[name.toUpperCase()];
    if (env == undefined || env == null || env === 'undefined' || env === 'null') {
        logger.warn('configBusServicios.getVariable(), ' + name + ', NO ESTA DEFINIDO!!!!! (se tomara valor default)');
        return defaultValue;
    }
    return env;
}

export const api = {
    port: addEnvParam("PORT", false) || 3000,
    checkCertificate: process.env.NODE_ENV === ("produccion" || "production"),
    hostMicroservicios: 'https://172.16.97.113'
};