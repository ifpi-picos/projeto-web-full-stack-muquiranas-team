const express = require("express");
const router = express.Router();
const mongoose = require("../database/index");
const auth = require("../middlewares/authenticate");

const User = require("../model/User");
const Publi = require("../model/Pub");

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

router.post("/favoritar", async (req,res) => {
  
  try{
  const userId = req.body;
  const user = await User.findOne({userId})

  const favId = req.body.favId;

  const objectId = new ObjectId(favId);


  const favoritos = user.favoritos.concat([objectId]);
  await User.updateOne({ userId }, { favoritos: favoritos });

  res.status(200).json({message: "favoritado com sucesso",message});
  }catch (error){
    res
      .status(500).json({error:"Não foi possivel favoritar a publicação, tente novamente mais tarde!", message: error.message,});
  }
})


module.exports = router;
