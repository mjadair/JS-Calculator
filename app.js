function setupCalculator() {

  let numberInput = []
  let equations = []
  let operator = ''
  let userInputTwo = []

  const button = document.getElementsByClassName('button')
  const display = document.querySelector('.user-input')
  display.innerHTML = 0




  const addNumber = function () {
    //input resizing================================================================
    // console.log(this.innerHTML)
    if (numberInput.length === 10) {
      display.style.fontSize = '5vw'
      display.style.marginTop = '6vw'
    } if (numberInput.length === 14) {
      display.style.fontSize = '4vw'
      display.style.marginTop = '7vw'
    }

    //Reset button===================================================================
    if (this.innerHTML === 'AC') {
      numberInput = []
      equations = []
      display.style.fontSize = '7vw'
      display.style.marginTop = '4vw'
      return display.innerHTML = 0
    }
    //Backspace button================================================================
    if (this.innerHTML === '⌫') {
      numberInput.pop()
      if (numberInput.length > 0) {
        return display.innerHTML = `${numberInput.join('')}`
      } else return display.innerHTML = 0
      //Number input=======================================================================
    } if (this.innerHTML === '+' || this.innerHTML === '-' || this.innerHTML === '×' || this.innerHTML === '÷') {
      equations.push(parseFloat(...(numberInput.join('').split())))
      equations.push(this.innerHTML)
      numberInput = []
      // console.log(equations)
      return display.innerHTML = `${this.innerHTML}`
    } if (this.innerHTML === '=') {
      equations.push(parseFloat(...(numberInput.join('').split())))
      numberInput = []
      console.log(...equations)
      const solution = equations.filter((element, index, array) => {
        console.log(array)
        switch (element) {
          case '+':
            (array[index - 1]) + (array[index + 1])
            console.log(element)
            break
          case '-':
            (array[index - 1]) - (array[index + 1])
            break
          case '×':
            (array[index - 1]) * (array[index + 1])
            break
          case '÷':
            (array[index - 1]) / (array[index + 1])
            break
        }
      })
      console.log(solution)
      return display.innerHTML = `${(solution.join(' '))}`
    } else {
      numberInput.push(parseFloat(this.innerHTML))
      // console.log(parseFloat('+'))
      return display.innerHTML = `${numberInput.join('')}`
    }
  }




  Array.from(button).forEach((element) => {
    element.addEventListener('click', addNumber)
  })

}
document.addEventListener('DOMContentLoaded', setupCalculator)