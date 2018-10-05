import { fromRDF } from 'jsonld';
import { Quad, Writer } from 'n3';
import { compactWithDomainContext } from './context';
import { hyper } from './namespaces';
import { getVocabularyStore } from './store';

export function getVocabulary() {
    return getVocabularyStore()
        .then(profileStore => profileStore.getAll())
        .then(quads => toJsonLd(quads));
}

export function getResource(name: string) {
    const uri = hyper(name);
    return getResourceByUri(uri);
}

function getResourceByUri(uri: string) {
    return getVocabularyStore()
        .then(profileStore => profileStore.get(uri))
        .then(quads => toJsonLd(quads));
}

function toJsonLd(quads: Quad[]) {
    return toGraphObjects(quads)
        .then(graphObjects => compactWithDomainContext({
            '@graph': graphObjects
        }));
}

function toGraphObjects(quads: Quad[]) {
    return new Promise((resolve, reject) => {
        const writer = new Writer({ format: 'n-quads' });
        writer.addQuads(quads);
        writer.end((error, result) => {
            if (error) {
                return reject(error);
            }

            fromRDF(result, { format: 'application/n-quads' }, (err, doc) => {
                if (err) {
                    return reject(err);
                }

                return resolve(doc);
            });
        });
    });
}
