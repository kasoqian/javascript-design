const DogFamily = (function () {
  let dogs = []

  const getAllDog = function () {
    return dogs
  }

  const addDog = function (dogeName) {
    dogs.push(dogeName)
  }

  return {
    addDog,
    getAllDog,
  }
})()

export default DogFamily
