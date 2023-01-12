const{request,response}=require('express');
const axios = require('axios');

const charactersGet=async (req=request,res=response)=>{
    try {
        const  {page=0,name=0,status=0}=req.query;
        let band="character";
        if (page.length>0){
            band="character?page="+page;
        }
        if (name.length!="" && page.length>0){
             band="character?page&name="+name+"&status="+status;
          
        }
        if (name!="" && page==0){
            band="character?name="+name+"";
        }
        const response = await axios.get(`https://rickandmortyapi.com/api/${band}`);
        res.status(200).json(response.data);
        
    } catch (e) {
        console.log(e.response);
        res.status(400).json(e.response);
    }
}

module.exports={
    charactersGet,
}