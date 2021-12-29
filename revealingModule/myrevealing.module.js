const myRevealing = function () {
  let privateVar = 'Ben Cherry',
    publicVar = 'Hey there!'

  function privateFunction() {
    console.log('Name: ' + privateVar)
  }

  function publicSetName(strName) {
    let privateName
    privateName = strName
  }

  function publicGetName() {
    privateFunction()
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  }
}

export default myRevealing
