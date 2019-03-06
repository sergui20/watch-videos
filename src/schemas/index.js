import api from '../api.json';

import {normalize, schema} from 'normalizr';

const media = new schema.Entity('media', {}, {
    idAttribute: 'id', // Para que tome el id que viene por defecto en nuestra data.json. Puede ser tambien una funcion que recibe tres parametros: value, parent, key
    processStrategy: (value, parent, key) => ({...value, category: parent.id}) // Estrategia a utilizar antes de procesar mi entidad. Puedo agregar o modificar ciertos atributos
}); // (key, definicion de mi esquema, opciones) En definicion de esquema es para heredar esquemas dentro de otros. Las opciones son para personalizar mi esquema

const category = new schema.Entity('categories', { // Aqui si agrego una definicion (2do parametro) para heredar al esquema anterior media.
    playlist: new schema.Array(media) // Dentro de mis categorias hay playlists, entonces por eso heredamos a media porque ya lo definimos anteriormente. Media vendria a ser un playlist solo que lo hicimos con diferentes nombres. Ademas es un array, por eso definimos como schema.Array()
});

const categories = { categories: new schema.Array(category)} // Categories sera lo que va a contener todo, por eso se lo declara al ultimo. Y simplemente hacemos un array con el esquema que definimos anteriormente

const normalizeData = normalize(api, categories);

export default normalizeData;