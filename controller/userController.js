const arr = [] // database
const bcrypt = require("bcrypt")
const saltRounds = 10;
const register = (req, res) => {
    const regesterData = req.body;
    const user = arr.find((details) => {
        if (details.email === regesterData.email) {
            return details;
        }
    })
    if (user) {
        return res.send("user already exits pls try to login!!")
    }
    const hashpassword = bcrypt.hashSync(regesterData.password, saltRounds)
    const tempobj = {
        email: regesterData.email,
        password: hashpassword,
        phone: regesterData.contact,
        dpimage: regesterData.image
    }
    arr.push(tempobj)
    console.log(arr)
    return res.send(arr)
}
const login = (req, res) => {
    const logindata = req.body;
    const user = arr.find((details) => {
        if (details.email === logindata.email) {
            return details;
        }
    })
    if (!user) {
        return res.send("you are not registered with us, firstly registered")
    }
    const validate = bcrypt.compareSync(logindata.password, user.password) // bollean values
    if (validate) {
        return res.send("user login ")
    }
    return res.send("password doesn't match")
}
module.exports = {
    register,
    login
}



// Abhishek is not active
// 
