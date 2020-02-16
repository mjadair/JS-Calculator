function setupCalculator() {

  let userInputOne = []
  let operator = ''
  let userInputTwo = []

  const button = document.getElementsByClassName('button')
  let display = document.querySelector('.user-input')
  display.innerHTML = `${userInputOne.join('')}`

  const addNumber = function() {
    userInputOne.push(parseFloat(this.innerHTML))
    console.log(userInputOne.join(''))
    return display.innerHTML = `${userInputOne.join('')}`
  }
 

  Array.from(button).forEach((element) => {
    element.addEventListener('click', addNumber)
  })

}
document.addEventListener('DOMContentLoaded', setupCalculator)