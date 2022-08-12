function PassSetting(Length, CharacterType){
    let passGen = []
    let passwordLength = Length
    let alphaCount = 0
    let numCount = 0
    let symbolCount = 0
    let Characters = {
        alpha: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        //numeric: "0123456789".split(""),
        specialCharacter: ['!', '@', '#', '$', '%','^' , '&', '*', '_']
    }
    console.log(Characters.specialCharacter)

    for (let i = 1; i <= Length; i++) {
        
        if (CharacterType.indexOf("alphas") !== -1) {
            alphaCount = Math.round(Math.random()*52)
            passGen.push(Characters.alpha[alphaCount])
        }
        if (CharacterType.indexOf("numeric") !== -1){
            numCount = Math.round(Math.random()*9)
            passGen.push(numCount)
        }
        if (CharacterType.indexOf("special characters") !== -1){
            symbolCount = Math.round(Math.random()*9)
            passGen.push(Characters.specialCharacter[symbolCount])
        }
           
    }
    return passGen.join("")
    
}

let result = PassSetting(5, ["alphas", "numeric", "special characters"])
console.log("Final Result: ", result)


