import forge from 'node-forge'

const computeHash = (algorithm, inputText) =>{
  switch (algorithm) {
    case 'md5':
      let md1 = forge.md.md5.create()
      md1.update(inputText)
      return(md1.digest().toHex())
      
    case 'sha1':
      let md2 = forge.md.sha1.create()
      md2.update(inputText)
      return(md2.digest().toHex())
      
    case 'sha256':
      let md3 = forge.md.sha256.create()
      md3.update(inputText)
      return(md3.digest().toHex())
      
    case 'sha512':
      let md4 = forge.md.sha512.create()
      md4.update(inputText)
      return(md4.digest().toHex())
  }
}

const computeHmac = (algorithm, secret, inputText) =>{
  const hmac = forge.hmac.create()
  hmac.start(algorithm, secret)
  hmac.update(inputText)
  const hmacValue = hmac.digest().toHex()

  return hmacValue
}

const computePbkdf2 = (password, salt, iteration, keyLength) => {
  return forge.util.bytesToHex(forge.pkcs5.pbkdf2(password, salt, iteration, keyLength))
}

export { computeHash, computeHmac, computePbkdf2 }