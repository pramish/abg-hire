const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const resolvers = {
  Query: {
    login: async (_, args) => {
      try {
        const { email, password } = args.loginInput;
        const isUserExists = await User.findOne({ email });
        if (!isUserExists) throw new Error("Email or Password do not match");
        const isEqualPassword = await bcrypt.compare(
          password,
          isUserExists.password
        );
        if (!isEqualPassword) throw new Error("Email or Password do not match");
        const token = jwt.sign(
          {
            userId: isUserExists.id,
            email: isUserExists.email,
          },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        return {
          userId: isUserExists.id,
          token,
          tokenExpiration: 1,
        };
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    registerUser: async (_, args) => {
      try {
        const {
          name,
          email,
          password,
          fullAddress,
          phoneNumber,
        } = args.userInput;
        //   Bcrypt the password here
        const doesUserExists = await User.findOne({ email });
        if (doesUserExists) throw new Error("User Already exists");
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
          fullAddress,
          phoneNumber,
        });
        const newUserSave = await newUser.save();
        //   if (newUserSave) {
        //     //   send the email saying welcome to ABGHire
        //   }
        return newUserSave;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
module.exports = resolvers;
