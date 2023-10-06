const needle = require('needle')

//const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
const url ='https://pokeapi.co/api/v2/pokemon'
needle('get',
         url,
         {json: true})
         .then((respuesta)=>{
                console.log(respuesta.body.results)
         })
         .catch(function(){
            
         })