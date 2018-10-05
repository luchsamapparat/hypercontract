import { createOrGetStore } from '@hypercontract/hypercontract-shared';
import { vocabulary } from './vocabulary';

export function getVocabularyStore() {
    return createOrGetStore('vocabulary', vocabulary);
}
