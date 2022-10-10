
/* fix drop down menu*/

const api_key='DEMO_API_KEY'
const url = `https://api.thecatapi.com/v1/breeds`;


let storedBreeds = []


//fetch the api


const fetchApi = () => {
    return fetch(url)
    .then(res=>res.json)
    .then((data) =>data.filer(img.image?.url!=null))
    storedBreeds = data;



}
fetchApi()









 fetch(url, {
    headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {

   data = data.filter(img=> img.image?.url!=null)
  
  storedBreeds = data;

//    for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
     
//      if(!breed.image)continue
     
//     option.value = i;
//     option.innerHTML = `${breed.name}`;

document.getElementById('breed_selector').appendChild(option);
    
    }

   showBreedImage(0)

})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}

// change dark/light mode
function changeMode(event){
const checkBox= document.getElementById('checkbox')
checkBox.addEventListener('change',()=> {
    if(!checkBox.checked){
    }
    document.body.classList.toggle('dark')  

})
}
changeMode()



// all event listeners


//plays meow sound on button click
const audio= new Audio('https://freesound.org/data/previews/232/232343_3032944-lq.mp3');
const meow = document.getElementById('meow')
meow.addEventListener('click',(e)=>{
    audio.play()
    e.preventDefault()
})
const title= document.getElementById('h1')
title.addEventListener('mouseover',()=>{
    // console.log('hello')
    alert('You found a secret!!! 🥳🥳🥳')
})
clicks = 0
const like = document.getElementById('like')
like.addEventListener('click', () => {
    function onClick(){
        clicks ++
        like.innerHTML= '❤️ ' +clicks
    }
    onClick()
})



