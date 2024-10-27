console.log("connected");


//List all breeds == https://dog.ceo/api/breeds/list/all
// Breeds list == https://dog.ceo/api/breed/affenpinscher/images/random

//dom  selection 

const selectE1=document.querySelector("#dog-breeds");
console.log(selectE1);




function getDogsBreed(){

     return fetch("https://dog.ceo/api/breeds/list/all")
    .then((responce)=>responce.json())
    .then((data)=>Object.keys(data.message))
    .catch((error)=>console.log(error));

    }


function renderOption(){
    getDogsBreed().then((breeds)=>{
        for (let breed of breeds){
        const option=document.createElement("option");
        option.textContent=breed[0].toUpperCase()+breed.slice(1);

        option.value=breed;s
        selectE1.appendChild(option);  
                  
        }
    })
}
renderOption()