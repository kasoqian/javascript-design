function CatFamily() {
  let cats = []
  console.log('I am working!')

  let delFirstCat = function () {
    cats.pop()
  }

  let addCat = function (catName) {
    let hasCat = false
    catName.length == 0 ? cats.push(catName) : null

    cats.forEach((cat) => {
      cat == catName ? (hasCat = true) : null
    })

    hasCat == false ? cats.push(catName) : null
  }

  let getAllCats = function () {
    return {
      value: cats.length ? cats : 'No cat in here ~',
      delFirstCat,
    }
  }

  return {
    addCat,
    getAllCats,
  }
}

export default CatFamily
