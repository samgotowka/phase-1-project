const api_key='DEMO_API_KEY'
const url = `https://api.thecatapi.com/v1/breeds/`;
const fullApi = url + api_key

let storedBreeds = []

const fetchApi = () =>  {

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

storedBreeds.forEach((breed, i) => {
 let option = document.createElement('option')
    if(breed.image){
    option.value = i
    option.innerHTML=`${breed.name}`
    }
 document.getElementById('breed_selector').appendChild(option)
 showBreedImage(0)
})
    })
}

fetchApi()

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
function playSound(){
    const audio= new Audio('https://freesound.org/data/previews/232/232343_3032944-lq.mp3');
    const meow = document.getElementById('meow')
        meow.addEventListener('click',(e)=>{
            audio.play()
            e.preventDefault()
        })
}
playSound()

// secret popup
function popUp(){
const title= document.getElementById('h1')
title.addEventListener('mouseover', alertMe()
)}
popUp()
//like
function likeButton(){
clicks = 0
const like = document.getElementById('like')
like.addEventListener('click', incLikes()
)}
likeButton()

//callback for popUp()
function alertMe(){
    alert('You found a secret!!! 🥳🥳🥳')
};

//callback for likeButton()
function incLikes(){
    function onClick(){
        clicks++
        like.innerHTML= '❤️ ' +clicks
    }
    onClick()
}