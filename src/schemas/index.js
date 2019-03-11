import api from '../api.json';

import {normalize, schema} from 'normalizr';

const media = new schema.Entity('media', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
}); // (key, definicion de mi esquema, opciones)

const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category)}

const normalizeData = normalize(api, categories);

export default normalizeData;
