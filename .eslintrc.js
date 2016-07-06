module.exports = {
    "extends": "eslint:recommended",
    "plugins":["import"],
    "env": {
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
    },
    "rules":{
      "no-console": 1,
      "no-unused-vars": 1
    }
};
