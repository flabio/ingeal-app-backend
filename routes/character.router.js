const{ Router }=require('express');
const {charactersGet } = require('../controllers/characters.controller');

const routerC = Router();
routerC.get('/', charactersGet);

console.log("holaaa")




module.exports = routerC;