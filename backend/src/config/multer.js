import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

// Configurações do Multer
export default {
  // Configurando aonde salvar o arquivo
  storage: multer.diskStorage({
    // Caminho aonde serão salvos os arquivos
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    /**
     * Aqui podemos controlar tudo o que quisermos no nome da imagem
     * cb : Será chamado com o nome do arquivo final
     * file: Todos os dados do arquivo que o usuário está fazendo upload, como formato, tipo, tamanho
     * nome, etc
     */
    filename: (req, file, cb) => {
      // Fazendo com que o nome do arquivo sempre seja único
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        /**
         * Se não deu erro, executa a callback
         * A callback irá transformar os bytes randoms em uma string e concatenar
         * o nome do arquivo com a extensão do arquivo original enviado
         * */
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
