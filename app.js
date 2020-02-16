function setupCalculator() {

  let numberInput = false
  let userInputOne = []
  let operator = ''
  let userInputTwo = []

  const button = document.getElementsByClassName('button')
  const display = document.querySelector('.user-input')
  display.innerHTML = 0




  const addNumber = function () {
    console.log(userInputOne.length)
    if (userInputOne.length === 10) {
      display.style.fontSize = '5vw'
    } if (userInputOne.length === 14) {
      display.style.fontSize = '4vw'
    }

    //Reset button===================================================================
    if (this.innerHTML === 'AC') {
      userInputOne = []
      display.style.fontSize = '7vw'
      return display.innerHTML = 0
    }
    //Backspace button================================================================
    if (this.innerHTML === '⌫') {
      userInputOne.pop()
      if (userInputOne.length > 0) {
        return display.innerHTML = `${userInputOne.join('')}`
      } else return display.innerHTML = 0
      //Number input=======================================================================
    } else {
      userInputOne.push(parseFloat(this.innerHTML))
      return display.innerHTML = `${userInputOne.join('')}`
    }
  }



  Array.from(button).forEach((element) => {
    element.addEventListener('click', addNumber)
  })

}
document.addEventListener('DOMContentLoaded', setupCalculator)