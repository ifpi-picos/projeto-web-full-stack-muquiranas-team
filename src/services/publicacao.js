class publiServices {
    constructor(PubSchema){
        this.pubSchema = PubSchema;
    }

    async createPubli(user, productName,productLink,productDescription) {
        try {
           const publicacao = await this.pubschema.create({user: user, productName: productName,productLink: productLink, productDescription: productDescription })
           return publicacao
        } catch (error) {
            console.log('Erro ao criar publicação!');
            throw error;
        }
    }

    async selectPubli(productName) {
        try{
            const publicacao = await this.PubSchema.findOne(productName);

            return publicacao;
        }catch(error) {
            console.log("Publicação não encontrada", error);
            throw error;
        }
    }

    
    async deletePubli(pubId){
        try{
            const apagarpublicacao = await this.PubSchema.findByIdAndDelete(pubId);
            
            return apagarpublicacao
        }catch(error) {
            console.log("Erro ao apagar publicação", error);
            throw error;
        }
    }

}

module.exports = publiServices;