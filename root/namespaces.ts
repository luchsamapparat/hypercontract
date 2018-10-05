import { createUriFactory, prefixes as sharedPrefixes } from '@hypercontract/hypercontract-shared';
import { getRootUri } from '../root/uris';

export const profileBaseUri = `${getRootUri()}profile/`;

export const prefixes = {
    ...sharedPrefixes,
    hyper: getRootUri()
};

export const hyper = createUriFactory(prefixes.hyper);
