const User = require("../models/User");
const Vehicle = require("../models/Vehicle");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const imageUpload = require("../utils/image_uploader");
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

    users: async (_, args) => {
      try {
        const allUsers = await User.find();
        return allUsers;
      } catch (error) {
        throw new Error(error);
      }
    },
    vehicles: async (_, args) => {
      try {
        const allVehicles = await Vehicle.find();
        return allVehicles;
      } catch (error) {
        throw new Error(error);
      }
    },
    getVehicleByID: async (_, args) => {
      try {
        const { vehicleID } = args.vechicleID;
        const oneVehicle = await Vehicle.findById({
          _id: vehicleID,
        });
        return oneVehicle;
      } catch (error) {
        throw new Error(error);
      }
    },
    getUserByID: async (_, args) => {
      try {
        const { userID } = args.userID;
        const oneUser = await User.findById({
          _id: userID,
        });
        return oneUser;
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
    addVehicle: async (_, args) => {
      try {
        const {
          name,
          description,
          availability,
          isBooked,
          price,
        } = args.vehicleInput;
        const newVehicle = new Vehicle({
          name,
          description,
          price,
        });
        const newVehicleSave = await newVehicle.save();
        return newVehicleSave;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
module.exports = resolvers;
