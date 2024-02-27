const verifyCode = async (req, res) => {
  console.log(req);
  try {
    const { code, username } = req.body;
    const params = {
      ClientId: "4rjvc13p144asbbbs5ufchil4p",
      Username: username,
      ConfirmationCode: code,
    };
    console.log(params);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyCode };
