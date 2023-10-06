// const axios = require('axios')

// const url='https://hp-api.onrender.com/api/characters/students'

// async function obtenerStudents(){
//     try{
//         const respuesta = await axios.get(url)
//         console.log(respuesta.data)
//     }catch(error){

//     }
// }       
// obtenerStudents()


// const axios = require('axios')

// const url='https://hp-api.onrender.com/api/characters/students'
// axios.get(url)
//          .then((respuesta)=>{
//                 let studentss = respuesta.data
//                 studentss.forEach((student) => {
//                     console.log(student.name)
//                     console.log('--------------')

//          })
//         })
//          .catch(function(error){
//             console.log(error)
// })


// const request = require('request')

// const url='https://hp-api.onrender.com/api/characters/students'
// let r  = request(url,
//                 {json: true}, 
//                 (error, respuesta, data)=> {
//                         let students = data
//                         students.forEach((student) => {
//                             console.log(student.name)
//                             console.log('--------------//--------')
//                         });
//                 } ) 


const needle = require('needle')

const url='https://hp-api.onrender.com/api/characters/students'
needle('get',
         url,
         {json: true})
         .then((respuesta)=>{
                console.log(respuesta.data.results)
         })
         .catch(function(){
            
         })