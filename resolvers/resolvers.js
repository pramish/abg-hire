const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto-random-string");
const User = require("../models/User");
const Vehicle = require("../models/Vehicle");
const Booking = require("../models/Booking");
const Token = require("../models/Token");
const imageUpload = require("../utils/image_uploader");
const sendEmail = require("../utils/send_mail");
const verifyUser = require("../config/verifyUser");
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
    users: async (_, args, { req }) => {
      try {
        await verifyUser(req);
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
    getVehicleByID: async (_, args, { req }) => {
      try {
        await verifyUser(req);
        const { vehicleID } = args.vechicleID;
        const oneVehicle = await Vehicle.findById({
          _id: vehicleID,
        });
        return oneVehicle;
      } catch (error) {
        throw new Error(error);
      }
    },
    getUserByID: async (_, args, { req }) => {
      try {
        await verifyUser(req);
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
        if (newUserSave) {
          //   send the email saying welcome to ABGHire
          const token = crypto({
            length: 50,
            type: "hex",
          });
          const newToken = new Token({
            userID: newUserSave._id,
            token,
          });
          const tokenSave = await newToken.save();
          if (tokenSave) {
            await sendEmail(
              newUserSave.name,
              newUserSave.email,
              `${process.env.PUBLIC_URL}/account-confirmation?code=${token}`
            );
            newUserSave.verificationSent = true;
            await newUserSave.save();
          }
        }
        return newUserSave;
      } catch (error) {
        throw new Error(error);
      }
    },
    addVehicle: async (_, args, { req }) => {
      try {
        await verifyUser(req);
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
    bookVehicle: async (_, args, { req }) => {
      try {
        await verifyUser(req);
        const { name, user, vehicle } = args.bookingInput;
        const isRightUser = await User.findById({ _id: user });
        if (!isRightUser) throw new Error("Sorry you're not the right user");
        const isRightVehicle = await Vehicle.findById({ _id: vehicle });
        if (!isRightVehicle)
          throw new Error("Sorry the vehile you've chosen doesn't exists");
        if (isRightVehicle.isBooked)
          throw new Error("Vehicle is already booked. Please try again later");
        const bookVehicle = new Booking({
          name,
          user,
          vehicle,
        });
        const bookingSave = await bookVehicle.save();
        isRightUser.bookings = bookingSave._id;
        isRightUser.save();
        isRightVehicle.isBooked = true;
        isRightVehicle.save();
        return bookingSave;
      } catch (error) {
        throw new Error(error);
      }
    },
    confirmAccount: async (_, args) => {
      try {
        let message = "Token is invalid or expired";
        const { token } = args.confirmAccountInput;
        const isTokenValid = await Token.findOne({ token });
        if (isTokenValid) {
          const isUser = await User.findByIdAndUpdate(
            { _id: isTokenValid.userID },
            {
              $set: {
                isActive: true,
              },
            },
            { new: true }
          );
          if (isUser) message = "Your email has been verified. Please login";
        }
        return { message };
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
module.exports = resolvers;
