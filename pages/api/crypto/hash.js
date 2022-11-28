
import { computeHash } from '../../../utils/crypto-functions'

export default function handler(req, res) {
  const algorithm = req.body.algorithm
  const inputText = req.body.inputText
  let hashValue = computeHash(algorithm, inputText)
  console.log(algorithm)
  console.log(inputText)

  res.status(200).json({ hashValue })

}
