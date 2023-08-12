// // // // // let you =prompt("Enter S,P or SCI")
// // // // // let computerI =Math.floor(Math.random()*3);

// // // // // let computer =["S","P","SCI"][computerI]

// // // // // const match =(computer,you)=>{
// // // // //     if(computer===you){
// // // // //         return "NOBODY"
// // // // //     }
// // // // //    else if(computer==="S" && you==="SCI"){
// // // // //     return "computer" 
// // // // // } 
// // // // //    else if(computer==="S" && you==="P"){
// // // // //     return "YOU" 
// // // // // } 
// // // // //    else if(computer==="P" && you==="SCI"){
// // // // //     return "you" 
// // // // // } 
// // // // //    else if(computer==="P" && you==="S"){
// // // // //     return "computer" 
// // // // // } 
// // // // //    else if(computer==="SCI" && you==="S"){
// // // // //     return "you" 
// // // // // } 
// // // // //    else if(computer==="SCI" && you==="P"){
// // // // //     return "computer" 
// // // // // }
// // // // //    }
// // // // //     let result = match(computer, you)
// // // // //     document.write(`Computer:${computer} <br> YOU:${you}<br>the winner is:${result}`)
// // // // const red = () =>{
// // // //     document.body.firstElementChild.style.background = "red"
// // // // }
// // // // let b =document.body
// // // // console.log("The firstChild of body is:", b.firstChild)
// // // // console.log("The firstChild of body is:", b.firstElementChild)

// // // let t = document.body.firstElementChild.firstElementChild
// // // console.log(t.rows)
// // // console.log(t.caption)
// // // console.log(t.tHead.firstElementChild)

// // // let ctitle = document.getElementsByClassName("card-title")[0]
// // //     ctitle.style.color ="red"

// // //  document.getElementsByTagName("nav")[0].firstElementChild.style.color ="green"
// // //  document.getElementsByTagName("nav")[0].lastElementChild.style.color ="green"
 
 
// //  document.getElementsByTagName("li").style.background ="cyan"

// let myjokes =[
// {   
// "category": "Pun",
// "type": "single",
// "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 185,
// "safe": true,
// "lang": "en"
// },
// {
// "category": "Programming",
// "type": "single",
// "joke": "I'd tell you a joke about NAT but I would have to translate.",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "safe": true,
// "id": 319,
// "lang": "en"
// },
// {
// "category": "Programming",
// "type": "single",
// "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 18,
// "safe": true,
// "lang": "en"
// },
// {
// "category": "Programming",
// "type": "single",
// "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 44,
// "safe": true,
// "lang": "en"
// },
// {
// "category": "Pun",
// "type": "single",
// "joke": "I have a joke about trickle down economics, but 99% of you will never get it.",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 238,
// "safe": true,
// "lang": "en"
// },
// {
// "category": "Pun",
// "type": "single",
// "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 204,
// "safe": false,
// "lang": "en"
// },
// {
// "category": "Programming",
// "type": "single",
// "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 38,
// "safe": true,
// "lang": "en"
// },
// {
// "category": "Dark",
// "type": "single",
// "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
// "flags": {
//     "nsfw": false,
//     "religious": false,
//     "political": false,
//     "racist": false,
//     "sexist": false,
//     "explicit": false
// },
// "id": 138,
// "safe": false,
// "lang": "en"
// },
// ]

// let index =Math.floor(Math.random() * (myjokes.length-1))
// console.log(index)

// joke.innerHTML = myjokes[index].joke
// console.log(joke)
//  let x =document.getElementsByTagName('span')[0]
//  console.log(x)
//  let y = document.getElementsByTagName('span')[0]
//  console.dir(y)
//  console.log(document.body.firstChild.nodeName)
//  console.log(document.body.firstElementChild.nodeName)

// let first = document.getElementById("first")
// let a = first.getAttribute('class')
//  console.log(a)
//  console.log(first.hasAttribute('class'))
//  console.log(first.hasAttribute("style"))

// insertion method
// let a = document.getElementsByTagName('div')[0]
 
// a.innerHTML = a.innerHTML +'<h1> hello bhai kese ho app</h1>'


//insert adjacent method

first.insertAdjacentHTML('beforeend','<div class="test"> beforeend</div>')