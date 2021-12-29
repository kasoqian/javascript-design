import CatFamily from './catfamily.module.js'

const myCatFamily = CatFamily()

myCatFamily.addCat('kitty')
myCatFamily.addCat('boby')
myCatFamily.addCat('momi')
myCatFamily.addCat('kitty')

const allCats = myCatFamily.getAllCats()

console.log(allCats.value)
allCats.delFirstCat()
console.log(allCats.value)
allCats.delFirstCat()
console.log(allCats.value)

import dogfamily from './dogfamily.module.js'

const myDogFamily = dogfamily

myDogFamily.addDog('stone')
myDogFamily.addDog('lucky')
myDogFamily.addDog('mask')

const allDog = myDogFamily.getAllDog()
console.log(allDog)
