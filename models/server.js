const express = require('express');
const cors=require('cors');
class Server{
    constructor() {
        this.app=express();
        
        this.port=process.env.PORT || 8080;
        
        this.charactersPatch='/v1/api/characters';
        // // middlewares
        this.middlewares();

        //rutas
        this.routes();
        // cors
        this.corsOptions={
            origin:'*',
            optionsSuccessStatus:200
        };
    }
    
    middlewares(){
        //CORS
        this.app.use(cors(this.corsOptions ));
        // lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        //directorio Publico
        this.app.use(express.static("public"));
    }
    routes(){
    
      this.app.use(this.charactersPatch,require('../routes/character.router')) 
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Listening on port '+this.port); 
        });
    }
}

module.exports = Server; 