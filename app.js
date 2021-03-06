function setupCalculator() {

  let numberInput = []
  let equations = []
  let solutions = []

  const button = document.getElementsByClassName('button')
  const display = document.querySelector('.user-input')
  display.innerHTML = 0

  const addNumber = function () {

    //input resizing================================================================
    if (numberInput.length === 12) {
      display.style.fontSize = '5vw'
    } if (numberInput.length === 18) {
      display.style.fontSize = '4vw'
    }

    //Reset button===================================================================
    if (this.innerHTML === 'AC') {
      numberInput = []
      equations = []
      solutions = []
      display.style.fontSize = '8vw'
      return display.innerHTML = 0
    }

    //Backspace button================================================================
    if (this.innerHTML === '⌫') {
      numberInput.pop()
      if (numberInput.length > 0) {
        return display.innerHTML = `${numberInput.join('')}`
      } else return display.innerHTML = 0

      //Operator input=======================================================================
    }
    if (this.innerHTML === '+' || this.innerHTML === '-' || this.innerHTML === '×' || this.innerHTML === '÷') {
      equations.push(parseFloat(...(numberInput.join('').split())))
      equations.push(this.innerHTML)
      numberInput = []
      return display.innerHTML = `${this.innerHTML}`

      //Calculate ===============================================================================
    }

    if (this.innerHTML === '=') {
      equations.push(parseFloat(...(numberInput.join('').split())))
      numberInput = []

      const operatorsLength = equations.filter((element) => {
        return element === '+' || element === '-'  || element === '÷' || element === '×'
      }).length

      const solution = equations.map((element, index, array) => {
        for (let i = 1; i <= operatorsLength; i++) {
          switch (element) {
            case '×':
              solutions.push((array[index - 1]) * (array[index + 1]))
              equations.splice(index - 1, 3)
              solutions.length >= 2 ? solutions.shift() : console.log('solution has one')
              equations.unshift(solutions[0])
              break
            case '÷':
              solutions.push((array[index - 1]) / (array[index + 1]))
              equations.splice(index - 1, 3)
              solutions.length >= 2 ? solutions.shift() : console.log('solution has one')
              equations.unshift(solutions[0])
              break
            case '+':
              solutions.push((equations[index - 1]) + (equations[index + 1]))
              equations.splice(index - 1, 3)
              solutions.length >= 2 ? solutions.shift() : console.log('solution has one')
              equations.unshift(solutions[0])
              break
            case '-':
              solutions.push((array[index - 1]) - (array[index + 1]))
              equations.splice(index - 1, 3)
              solutions.length >= 2 ? solutions.shift() : console.log('solution has one')
              equations.unshift(solutions[0])
              break
          }
        }
      })

      let answer = solutions.filter(element => element).reduce((a, b) => a + b, 0)
      display.innerHTML = `${answer}`

      numberInput = [answer]
      equations = []
      solutions = []

      return
    } else {
      if (numberInput.length >= 19) {
        return
      } else
        numberInput.push(parseFloat(this.innerHTML))

      return display.innerHTML = `${numberInput.join('')}`
    }
  }

  Array.from(button).forEach((element) => {
    element.addEventListener('click', addNumber)
  })

}
document.addEventListener('DOMContentLoaded', setupCalculator)