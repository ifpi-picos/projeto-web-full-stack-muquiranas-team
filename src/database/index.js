const mongoose = require('mongoose');

// Use a Promise para conectar ao MongoDB
mongoose
  .connect("mongodb+srv://Admindatabase01:senhaadm@avsdatebase.z4al7nb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {})
  .then(() => {
    console.log('Conexão com MongoDB estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Falha ao executar a conexão com o MongoDB');
    console.error(error);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
