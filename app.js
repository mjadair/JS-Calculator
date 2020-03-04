function setupCalculator() {

  let numberInput = []
  let equations = []
  let solutions = []

  const button = document.getElementsByClassName('button')
  const display = document.querySelector('.user-input')
  display.innerHTML = 0

  const addNumber = function () {

    console.log('Equations:' + equations)
    console.log('Solutions:' + solutions)


    //input resizing================================================================
    if (numberInput.length === 10) {
      display.style.fontSize = '5vw'
    } if (numberInput.length === 14) {
      display.style.fontSize = '4vw'
    }

    //Reset button===================================================================
    if (this.innerHTML === 'AC') {
      numberInput = []
      equations = []
      solutions = []
      display.style.fontSize = '7vw'
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

      const solution = equations.map((element, index, array) => {
        for (let i = 1; i < equations.length; i++) {
          switch (element) {
            case '+':
              solutions.push((array[index - 1]) + (array[index + 1]))
              console.log('Equations:' + equations)
              console.log('Solutions:' + solutions)
              equations.splice(index - 1, 3)
              console.log('Equations:' + equations)
              console.log('Solutions:' + solutions)
              solutions.length >= 2 ? solutions.shift() : console.log('solution has one')
              equations.unshift(solutions[0])
              console.log('Equations:' + equations)
              console.log('Solutions:' + solutions)
              break
            case '-':
              solutions.push((array[index - 1]) - (array[index + 1]))
              equations.splice(index - 1, 3)
              equations.unshift(solutions[0])
              break
            case '×':
              solutions.push((array[index - 1]) * (array[index + 1]))
              equations.splice(index - 1, 3)
              equations.unshift(solutions[0])
              break
            case '÷':
              solutions.push((array[index - 1]) / (array[index + 1]))
              equations.splice(index - 1, 3)
              equations.unshift(solutions[0])
              break
            default:
              return
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
        console.log('done')
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