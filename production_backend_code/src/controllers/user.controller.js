const registerUser = (req, res) => {
  console.log("hi");
};

const loginUser = (req, res)=>{
  console.log("login")
  res.status(200).json({message: "Login✅✅✅"})
}

export {registerUser, loginUser}