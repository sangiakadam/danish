console.log("connected");


//List all breeds == https://dog.ceo/api/breeds/list/all
// Breeds list == https://dog.ceo/api/breed/{}/images/random

//dom  selection 

const selectEl=document.querySelector("#dog-breeds");
const imsgeEl=document.querySelector("#dog=image");
console.log(selectEl);
console.log(imsgeEl);




function getDogsBreed(){

     return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((responce)=>responce.json())
    .then((data)=>Object.keys(data.message))
    .catch((error)=>console.log(error));

    }

function getDogImage(breed){
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((responce)=>responce.json())
    .then((data)=>data.message)
    .catch((error)=>console.log(error));
    
    
}


function renderOption(){
    getDogsBreed().then((breeds)=>{
        for (let breed of breeds){
        const option=document.createElement("option");
        option.textContent=breed[0].toUpperCase()+breed.slice(1);
        option.value=breed;
        selectE1.appendChild(option);  
                  
        }
    })
}
renderOption()

selectE1.addEventListener("change",()=>{
    console.log(e.target.value);
    getDogImage(selectedValue).then((link)=> (imsgeE1.src=link));
});s