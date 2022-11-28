import bcrypt from 'bcryptjs';

export default function handler(req, res) {
  const password = req.body.password;
  const password1 = req.body.password1;

  let hpassword = bcrypt.hashSync(password, 8);
  
  let result = bcrypt.compareSync(password1, hpassword);
  if (password1===""){
    res.status(200).json(false);
  }
  else{
  console.log(password1)
  console.log(hpassword)
  console.log(result)
  res.status(200).json({ result });
  }
}
