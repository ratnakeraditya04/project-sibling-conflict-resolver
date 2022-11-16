// For Image 1 
let randomNumber1 = Math.floor((Math.random() * 6)) + 1 
// console.log(randomNumber1)

let randomDiceImg1 = "dice" + randomNumber1 + ".png" ; 
// Createe an image holder. 

let randomImageSource1 = "images/" + randomDiceImg1 ; 
// Created a complete address of Image. 

let image1 = document.querySelectorAll("img")[1] ; 
// For Image 1 of Dice, we are actually randomising the image which it will load. 

image1.setAttribute("src" , randomImageSource1 ) ; 
// Set the attribute - img1's src to be dynamic. . 


// For Image 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1 ; 
// initialised a random number b/w 1 to 6. 

let randomDiceSource2 = "dice" + randomNumber2 + ".png" ; 
// Stored the address of a random image here. 

let randomImageSource2 = "images/" + randomDiceSource2 ; 
// Stored the complete address of image to be loaded on refresh. 

let image2 = document.querySelectorAll("img")[2] ; 
// Tapping into the second image to be changed. 

image2.setAttribute("src" , randomImageSource2) ; 
// Set the Attribute of img2's src to be dynamic. 


// Logic of the Code. 
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h4").innerHTML = "Sibling1 Wins" ; 
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h4").innerHTML = "Sibling2 Wins" ; 
}
else
{
    document.querySelector("h4").innerHTML = "Draw, Refresh It!"
}