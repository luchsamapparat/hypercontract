import { addContext, compact, toJsonLd } from '@hypercontract/hypercontract-shared';
import { prefixes } from './namespaces';

type Context = any;

const vocabularyContext = {
    ...prefixes
};

export function addVocabularyContext(input: any) {
    return addContext(input, vocabularyContext);
}

export function compactWithDomainContext(input: any) {
    return compact(input, vocabularyContext);
}

export function toJsonLdWithVocabularyContext(input: any) {
    return toJsonLd(input, vocabularyContext);
}
