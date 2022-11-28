import forge from 'node-forge'
import { computePbkdf2 } from '../../../utils/crypto-functions'

export default function handler(req, res) {
  const {password, salt, iteration, keyLength} = req.body
  
  const it = parseInt(iteration)
  const kl = parseInt(keyLength)

  const derivedKey = computePbkdf2(password, salt, it, kl)

  res.status(200).json({ key: derivedKey })
}
