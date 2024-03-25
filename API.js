let text = document.getElementById("text");
let number = document.getElementById("number");
let iconDiv = document.getElementById("iconDiv");
let res;
iconDiv.addEventListener('click', function(){
  fetch('https://api.adviceslip.com/advice')
  .then(response =>{
    if (!response.ok){
      throw new Error('Network response was not ok');
    }
    
    return response.json();
  })
  .then(data => {
      number.innerText = 'A D V I C E # ';
      let input = (data.slip.id).toString();
      input = input.replace(/([0-9])/g, '$1 ');
      number.innerText += input;
      text.innerText = data.slip.advice;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation', error);
      text.innerHTML = error;
    })
})