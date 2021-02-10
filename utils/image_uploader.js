const cloudinary = require("cloudinary").v2;

const imageUpload = async (imageToUpload) => {
  let imageResponse = await cloudinary.uploader.upload(
    imageToUpload.tempFilePath,
    {
      upload_preset: "ABG-Hire",
    }
  );
  return {
    url: imageResponse.url,
    publicId: imageResponse.public_id,
  };
};
module.exports = imageUpload;
