const Joke =document.getElementById('Joke')
const button = document.getElementById('button')


function next(){

fetch('https://official-joke-api.appspot.com/random_joke')

.then((res)=>res.json())
.then((msg)=>{
    
    const jokeText = `<h4 style="font-weight:900;">${msg.setup}</h4><h2 style="font-weight:800; ">Answer:</h2>`;
    const answer = `<p style=" font-weight:800; color: red; font-size: normal; letter-spacing: 2px; font-weight: bold;">${msg.punchline}</p>`;
    console.log(jokeText);
Joke.innerHTML=jokeText + answer;

} )
.catch((err)=>console.log(err))

}
next()

button.addEventListener('click',next)
