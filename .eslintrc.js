module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    },
    // añade la opción "parser" con "babel-eslint"
	"parser": "babel-eslint",

	// añade "prettier" (y si quieres "prettier/react") a las opciones de "extends"
	//"extends": ["airbnb", "prettier", "prettier/react"],

	// y por ultimo, en la llave de "plugins" añade el plugin de eslint para prettier
	"plugins": ["prettier"]
};