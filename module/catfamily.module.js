function CatFamily() {
  let cats = []
  console.log('I am working!')

  function delFirstCat() {
    cats.pop()
  }

  return {
    addCat: function (catName) {
      let hasCat = false
      catName.length == 0 ? cats.push(catName) : null

      cats.forEach((cat) => {
        cat == catName ? (hasCat = true) : null
      })

      hasCat == false ? cats.push(catName) : null
    },
    getAllCats: function () {
      return {
        value: cats.length ? cats : 'No cat in here ~',
        delFirstCat,
      }
    },
  }
}

export default CatFamily
