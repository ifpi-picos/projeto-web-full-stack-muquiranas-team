const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authenticate');


router.get('/users', authMiddleware, (req, res) => {
  
    const { _id, name, email, createdAt, userPosts, favoritos } = req.user;
    //console.log(req.user)
    return res.json({
        message: 'OK',
        user: {
            _id,
            name,
            email,
            createdAt,
            userPosts,
            favoritos
        }, 
    }); 
});

module.exports = router;
