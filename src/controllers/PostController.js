const postService = require('../services/publicacao');
const express = require('express');

const router = express.Router();

router.post('/postagem', async (req, res) =>{
   try{ 
        const {username, productName, productLink, productDescription } = req.body;
        const publicacao = await mongoose.model('publicacao',PubSchema);

        publicacao.createPubli(username, productName, productLink, productDescription);
        res.status(201).json({message: 'Publicação criada com sucesso', publicacao});
    }catch (error) {
        res.status(500).json({error:'Erro ao criar publicação', message: error.message});
    }
});

router.post('/listar', async (req,res) => {
    try { 
        const {productName} = req.body;
        const publicacao = await postService.selectPubli(productName);

        res.status(200).json(publicacao);
    }catch (error) {
        res.status(500).json({error: 'Erro ao buscar publicacoes', message: error.message });
      }
   
});

router.delete('/apagar:id', async (req,res) => {
    try {
        const {pubId} = req.params.id;
        const publicacao = postService.deletePubli(pubId);

        res.status(200).json({message: 'Publicação excluida com sucesso!', message})
    }catch (error) {
        res.status(500).json({error: 'Não foi possivel excluir a publicação, tente novamente mais tarde!',message: error.message})
    }
}) 