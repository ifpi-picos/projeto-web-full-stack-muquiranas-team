const express = require("express");
const router = express.Router();
const auth = require("../middleware/authenticate");

const User = require("../models/user");
const Publi = require("../models/pub");

router.get("/favoritos", async (req, res) => {
  const user = await User.findOne({
    email: req.user.email,
  });

  if (user) {
    const publis = await Publi.find({
      user: user._id,
      favorited: true,
    });

    res.json(publis);
  } else {
    res.status(401).send("Usuário não autenticado");
  }
});

module.exports = router;
