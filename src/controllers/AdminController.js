const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authenticate');

// Rota protegida por autenticação
router.get('/users', authMiddleware, (req, res) => {
    // As informações do usuário logado, incluindo data de criação, número de posts e favoritos
    const { _id, name, email, createdAt, userPosts, favoritos } = req.user;
    console.log(req.user)
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
