#!/usr/bin/env node

import inquirer from 'inquirer'
import chalkanimation from 'chalk-animation'

const stop = ()=>{
  return new Promise((res) => {
    setTimeout(res,2000)
  })
}

async function Welcome() {
    let WelcomeMessage= chalkanimation.rainbow('CHAR Counter')
    await stop()
     WelcomeMessage.stop()
}
await Welcome()

async function CharCount() {
  let para =await inquirer.prompt([{
    name : 'main',
    type:'input',
    message : 'Enter your Paragraph'
  }])
  if (para.main===''){
    console.log(`You didnt write a paragraph`)
    CharCount(
      
    )
  }
  else {

    let words= para.main.split('')
    console.log(`The lenght of para with space is : ${words.length}`)
    let charLength = para.main.replace(/ /g, '')
    console.log(`The lenght of para without space is : ${charLength.length}`)
  }
  
}

async function restart() {
  do{
      await CharCount()
      var restart= await inquirer.prompt([{
          name : 'Option',
          type : 'input',
          message : 'Do you want to play again if yes press Y'
      }])
  }while(restart.Option==='Y' || restart.Option==='y')
  
}

restart()
