import "@babel/polyfill";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import app from "./app";
import { api } from "./config/appConfig";
// Para desarrollo, muestra todas los endpoint del router
import listEndpoints from "express-list-endpoints";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const main = async () => {
    let port = api.port;
    
    //Documentación API
    const base = "/ms/se-ms-registrobiller";
    const swaggerDocument = YAML.load('./ms_spec.yaml');
    app.use(`${base}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.listen(port, () => {
        console.log("Servidor ejecutandose en el puerto: " + port);
        console.log(listEndpoints(app));
    });
}

const cleanup = async () => {
    console.log("Desconectando...");
    process.exit(0);
}

// Captura de señales de S.O. en las que ejecutaremos el cierre de conexiones
process.on("SIGTERM", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGHUP", cleanup);

main();