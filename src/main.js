console.log("connected");


//List all breeds == https://dog.ceo/api/breeds/list/all
// Breeds list == https://dog.ceo/api/breed/affenpinscher/images/random

function getDogsBreed(){

     return fetch("https://dog.ceo/api/breeds/list/all")
    .then((responce)=>responce.json())
    .then((data)=>Object.keys(data.message))
    .catch((error)=>console.log(error));

    }


function renderOption(){
    getDogsBreed().then((breeds)=>{
        for (let breed of breeds){
            console.log(breed);
            
        }
    })
}
renderOption()