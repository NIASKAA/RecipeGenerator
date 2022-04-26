const { User } = require("../../../models");
const bcrypt = require("bcryptjs");
const connectDB = require("../../../middleware/connect");

const loginHandler = async (req, res) => {
  try {
    const { username, password } = req.body;

    // find a user to see if the username is valid
    const user = await User.findOne({ username }).catch(e => console.error(e));
    if (!user) return res.send({ err: "The email or password is incorrect." });

    // compare the given password with the encrypted db password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.send({ err: "The email or password is incorrect." });

    // generate JWT and send it back
    const token = user.generateAuthToken();
    res.status(200).send({ token, user: { id: user._id } });
  } catch (e) {
    console.error(e);
    res.send({ err: "Failed to sign in" });
  }
};

export default connectDB(loginHandler);