import { createOrGetStore } from '../store/quadStoreFactory';
import { vocabulary } from './vocabulary';

export function getVocabularyStore() {
    return createOrGetStore('vocabulary', vocabulary);
}
