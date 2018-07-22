import * as jsonld from 'jsonld';
import { defaultTo, filter, find, isArray, isEmpty, isUndefined, omit } from 'lodash';
import { vocabularyContext } from './context';
import { hyper } from './namespaces';
import { vocabulary } from './vocabulary';

export type Uri = string;
export type Context = any;

export function getVocabulary() {
    return addContext(vocabulary, vocabularyContext);
}

export function getResource(name: string) {
    const uri = hyper(name);

    const graph = [
        getResourceByUri(uri),
        ...getPropertiesByDomain(uri)
    ];

    if (isEmpty(graph)) {
        return Promise.resolve(null);
    }

    return (<Promise<any>> addContext(
        { '@graph': graph },
        vocabularyContext
    ));
}

function getResourceByUri(uri: Uri) {
    return find(vocabulary['@graph'], { '@id': uri });
}

function getPropertiesByDomain(domainUri: Uri) {
    return filter(vocabulary['@graph'], (resource: any) => {
        const domain = resource[`rdfs:domain`];
        return (
            isArray(domain) &&
            (!isUndefined(find(domain, { '@id': domainUri })))
        );
    });
}

function addContext(input: any, context: any) {
    return compact(input, context);
}

function compact(input: any, context: Context) {
    return new Promise((resolve, reject) => {
        const inputContext = defaultTo(input['@context'], {});

        jsonld.compact(
            omit(input, ['@context']),
            {
                ...context,
                ...inputContext
            },
            (error: any, output: any) => {
                if (error) {
                    reject(error);
                }

                resolve(output);
            }
        );
    });
}
