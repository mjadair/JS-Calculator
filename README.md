# JavaScript Calculator 🧮


## Overview ✖️

[See the calculator here](https://mjadair.github.io/JS-Calculator/)

This is an ongoing project that I will be adding to sporadically. 

After successfully completing General Assembly's Software Engineering Immersive Bootcamp, I was asked to stay on as a teaching assistant for the cohort that followed mine. 

The first two weeks of the course heavily involves the use of CSS Flexbox and 'vanilla' JavaScript logic. 

I decided to build this basic calculator to make sure I was well prepared for the issues that the students I was to be working with would be encountering. 



## Technologies Used ➗

- HTML5
- JavaScript
- CSS

## The Approach ✖️

The intention was to use the tools that the students I would be helping would use to refamiliarise myself with the basics that they would encounter. 

### Appearance

The first step was to build a simple calculator case using HTML and CSS:

<img src=screenshots/screenshot1.png height=200>

In the HTML, there are a number of divs that represent the different parts of the calculator:

```html
<div class="case">
    <div class="display">
      <P class=user-input>0</P>
    </div>
    <div class="break"></div>
    <div class="buttons">
      <div class="button-row top">
        <span id="reset" class="button operator-button">AC</span>
        <span class="button operator-button">⌫</span>
        <span class="button" id="9">9</span>
        <span class="button" id="8">8</span>
        <span class="button" id="7">7</span>
      </div>
```

In the CSS, these are made to be flex containers so that the children within those containers are responsive and adaptable to different screen sizes:

```css
.case{
  display: flex;
  height: 80vh;
  width: 80vw;
  border: solid 10px black;
  border-radius: 5%;
  padding: 1vw;
  flex-direction: column;
  background-color: aquamarine;
  margin-left: 6vw;
}


.buttons {
border-top: solid 1px black;
height: 60vh;
width: 60vw;
display: flex;
flex-wrap: wrap;



}

.button-row{
  display: flex;
  flex-direction: row-reverse;
  width: 60vw;
 
}

```

### Logic 

The logic is written with vanilla JavaScript.

The buttons that have a class of button are selected on the DOM and an event listener is added for clicks

```js
  Array.from(button).forEach((element) => {
    element.addEventListener('click', addNumber)
  })
```


The `addNumber` function is where the complexity is.

I noticed on many calculator apps that the text resized to allow more input, so I did this here:

```js
  if (numberInput.length === 12) {
      display.style.fontSize = '5vw'
    } if (numberInput.length === 18) {
      display.style.fontSize = '4vw'
    }
```

To solve equations - when the user inputs the `=` button, this code is executed:


```js
 if (this.innerHTML === '=') {
      equations.push(parseFloat(...(numberInput.join('').split())))
      numberInput = []

```

We clear the `numberInput` array and push any input that hasn't already been added to the `equations` array. At this point, the `equations` array might look something like this:

`[5, '+', 5]`

We then map through the equations array and have cases built on which operator element we arrive at. The below example is for addition:

```js
 case '+':
              solutions.push((equations[index - 1]) + (equations[index + 1]))
              equations.splice(index - 1, 3)
              solutions.length >= 2 ? solutions.shift() : console.log('solution has one')
              equations.unshift(solutions[0])
              break
              
```
If it hits a `+` the function takes the number either side of that operator and adds them together. It then pushes this answer to a solutions array and removes both numbers and the operator. It then removes any previous numbers from the solution array and adds the remaining solution to the `equations` array and starts the process again. This process continues until the `equations` array contains no operators. 


## Challenges ➖
 - The main difficulty of this task, which I still haven't quite managed to solve fully, is running equations. For instance, inputting `5 x 6 + 2 - 3 + 426` and only then hitting `=` will almost certainly not give the correct result. The reason for this is the difficulty and complexity in how stubborn JavaScript is in interpreting mathematical operators as strings, which is how they are being input. The problem could be easily solved using a language such as Python. I'm still trying to discern what would be an elegant solution to this issue using JavaScript! 



## Successes ➕
- I built this quickly and with relative ease and didn't have to resort to looking at how other people had built such calculators. This is something that would have been completely beyond me a couple of months ago without having to continuously search for answers and ideas from people who have done similarly before. 




## Future features ♾

- One day I'll be able to input running equations successfully. 

- Decimal points and more advanced calculator features should also be available. 




### [Use the calculator now](https://mjadair.github.io/JS-Calculator/)
