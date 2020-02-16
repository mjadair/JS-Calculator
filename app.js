function setupCalculator() {

  let userInputOne = []
  let operator = ''
  let userInputTwo = []

  const button = document.getElementsByClassName('button')
  let display = document.querySelector('.user-input')
  display.innerHTML = 0

  const addNumber = function () {
    if (this.innerHTML === 'AC') {
      userInputOne = []
      return display.innerHTML = 0
    }
    if (this.innerHTML === '⌫') {
      userInputOne.pop()
      if (userInputOne.length > 0) {
        return display.innerHTML = `${userInputOne.join('')}`
      } else return display.innerHTML = 0
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