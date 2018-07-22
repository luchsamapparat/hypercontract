import { isString } from 'lodash';
import { getRootUri } from './uris';

export const vocabularyBaseUri = getRootUri();

export const hyper = (name: string | object) => addPrefix(vocabularyBaseUri, name);
export const owl = (name: string | object) => addPrefix('http://www.w3.org/2002/07/owl#', name);
export const rdfs = (name: string | object) => addPrefix('http://www.w3.org/2000/01/rdf-schema#', name);

function addPrefix(prefix: string, name: string | object) {
    if (isString(name)) {
        return prefix + name;
    }

    throw new Error('Cannot add prefix to given name(s). Invalid object type.');
}
