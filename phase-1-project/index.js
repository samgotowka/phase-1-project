
/* fix drop down menu*/

const api_key='DEMO_API_KEY'
const url = `https://api.thecatapi.com/v1/breeds`;


let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
   /* filter   */
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     if(!breed.image)continue
     
    option.value = i;
    option.innerHTML = `${breed.name}`;
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


function changeMode(event){
const checkBox= document.getElementById('checkbox')
checkBox.addEventListener('change',()=> {
    //change theme of the page
    if(!checkBox.checked){
    }
    document.body.classList.toggle('dark')  

})
}
changeMode()

// trying to figure out how to make a button that chooses a random cat from the drop down list

const dropDown=document.getElementById('breed_selector')
const randomCat=document.getElementById('random')
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
    alert('Find what cat works for your life style!')
})