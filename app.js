function setupCalculator() {

  let numberInput = []
  let equations = []
  let solutions = []

  const button = document.getElementsByClassName('button')
  const display = document.querySelector('.user-input')
  display.innerHTML = 0

  const addNumber = function () {


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

    // if (this.innerHTML === '+') {
    //   const mergedNum = parseFloat(numberInput.join('').split()[0])
    //   // console.log(parseFloat(...(numberInput.join('').split())))
    //   // console.log(parseFloat(numberInput.join('').split()))
    //   solutions.push([mergedNum].reduce((accumulator, element) => {
    //     return accumulator + element
    //   }, solutions.length >= 1 ? solutions[0] : 0))


    //   numberInput = []
    //   return display.innerHTML = `${this.innerHTML}`





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
      // console.log(equations)

      // while (equations.length >= 3) {
      const solution = equations.reduce((accumulator, element, index, array) => {
        for (let i = 1; i < equations.length; i++) {
          switch (element) {
            case '+':
              solutions.push(accumulator + (array[index - 1]) + (array[index + 1]))
              console.log(accumulator)
              //console.log(solutions)
              // console.log(equations)
              // console.log(array)
              equations.splice(index - 1, 3)
              // console.log(equations)
              // console.log(array)
              equations.unshift(solutions[0])
              // console.log(equations)
              // console.log(array)

              // console.log(solution)
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
            // default:
            //   return
          }
        }
      }, 0)
      
      //   }
      let answer = solutions.filter(element => element).reduce((a, b) => a + b, 0)
      display.innerHTML = `${answer}`

      numberInput = [answer]
      equations = []
      solutions = []
      // console.log(numberInput)
      // console.log(equations)


      // equations = [solution].filter(element => element)
      // numberInput = []
      // console.log(solutions)
      // solutions.length > 1 ? solutions.shift() : null
      // console.log(solutions)
      // numberInput.push(solutions[0])
      // console.log(numberInput)

      return
    } else {
      if (numberInput.length >= 19) {
        console.log('done')
        return
      } else
        numberInput.push(parseFloat(this.innerHTML))
      // console.log(numberInput)

      return display.innerHTML = `${numberInput.join('')}`
    }
  }


  Array.from(button).forEach((element) => {
    element.addEventListener('click', addNumber)
  })

}
document.addEventListener('DOMContentLoaded', setupCalculator)