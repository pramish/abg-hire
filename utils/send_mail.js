const sendMail = require("@sendgrid/mail");
sendMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendEmail = async (name, receiver, url) => {
  await sendMail.send({
    to: receiver,
    from: "luitelpramish7@gmail.com",
    templateId: process.env.REGISTRATION_TEMPLATE_ID,
    dynamicTemplateData: {
      url,
      name,
    },
  });
};

module.exports = sendEmail;
