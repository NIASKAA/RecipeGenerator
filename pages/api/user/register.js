const { User } = require("../../../models");
const bcrypt = require("bcryptjs");
const connectDB = require("../../../middleware/connect");

const handleRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    // find a user to see if the username has been taken
    let user = await User.findOne({ username }).catch(e => console.error(e));
    if (user) return res.send({ err: "Username has been taken." });

    // hash the password and save in the db
    const hash = await bcrypt.hash(password, Number(process.env.SALT));
    user = new User({ username, password: hash });

    const newUser = await user.save();
    console.log(newUser);

    res.json({ success: "Successful registration" });
  } catch (e) {
    console.error(e);
    res.json({ err: "Failed to sign up" });
  }
};

export default connectDB(handleRegister);