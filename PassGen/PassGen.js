function PassSetting(Length, CharacterType, CaseSensitive){
    let passGen = ""
    let passwordLength = Length
    let Characters = {
        alpha: "abcdefghijklmnopqrstuvwxyz".split(""),
        numeric: "0123456789".split(""),
        specialCharacter: "!, @, #, $, %,^ , &, *"
    }
    let CapCharacters = {
        alpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        numeric: "0123456789".split(""),
        specialCharacter: "!, @, #, $, %,^ , &, *"
    }

  /*  if (CaseSensitive == "lower case"){

        for (let i = 0; i <= Length; i++) {
            if (CharacterType == "alphas"){
            passGen.push(Math.random(Characters.alpha))
            }
            if (CharacterType == "numeric"){
            passGen.push(Math.random(Characters.CharacterType[1]))
            }
            if (characterType == "special characters"){
            passGen.push(Math.random(Characters.CharacterType[2]))
            }
        }   
    }
    if (CaseSensitive == "upper case"){
        for (let i = 0; i <= Length; i++) {
            passGen.push(Math.random(CapCharacters.alpha))
            passGen.push(Math.random(CapCharacters.numeric))
            passGen.push(Math.random(CapCharacters.specailCharacters))
        }
    }
    */
    // return passGen
    console.log(Characters.numeric);
}

PassSetting()

//14, [alpha, numeric], "lower case"


