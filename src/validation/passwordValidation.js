
const passwordMinEigthCharacters = new RegExp('^(.){8,}$');
const passwordMinOneSpecialCharacter = new RegExp('[!@#$%^&*(),.?":{}|<>\-_\'/\\=§;`´+~]','g');
const passwordMinOneCapitalizedLetter = new RegExp('[A-ZÄÜÖ]');
const passwordMinOneNumber = new RegExp('[0-9]');

const validatePassword = (password, passwordConfirmation) => {
  if(password !== passwordConfirmation){ 
    return false
  }
  if(!passwordMinEigthCharacters.test(password)){ 
    return false
  }
  if(!passwordMinOneSpecialCharacter.test(password)){ 
    return false
  }
  if(!passwordMinOneCapitalizedLetter.test(password)){ 
    return false
  }
  if(!passwordMinOneNumber.test(password)){ 
    return false
  }
  return true
}

export default validatePassword;