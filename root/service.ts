import { toJsonLdWithVocabularyContext } from './context';
import { hyper } from './namespaces';
import { getVocabularyStore } from './store';

export function getVocabulary() {
    return getVocabularyStore()
        .then(profileStore => profileStore.getAll())
        .then(quads => toJsonLdWithVocabularyContext(quads));
}

export function getResource(name: string) {
    const uri = hyper(name);
    return getResourceByUri(uri);
}

function getResourceByUri(uri: string) {
    return getVocabularyStore()
        .then(profileStore => profileStore.get(uri))
        .then(quads => toJsonLdWithVocabularyContext(quads));
}
