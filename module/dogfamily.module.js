const DogFamily = (function () {
  let dogs = []
  return {
    addDog(dogeName) {
      dogs.push(dogeName)
    },
    getAllDog() {
      return dogs
    },
  }
})()

export default DogFamily
