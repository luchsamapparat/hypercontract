import { hyper } from './namespaces';
import * as rootUris from './uris';

export const vocabulary = {
    '@graph': [
        {
            '@id': '_:genid9',
            '@type': [
                'http://www.w3.org/2000/01/rdf-schema#Datatype'
            ],
            'http://www.w3.org/2002/07/owl#oneOf': [
                {
                    '@list': [
                        {
                            '@value': 'DELETE'
                        },
                        {
                            '@value': 'GET'
                        },
                        {
                            '@value': 'HEAD'
                        },
                        {
                            '@value': 'OPTIONS'
                        },
                        {
                            '@value': 'PATCH'
                        },
                        {
                            '@value': 'POST'
                        },
                        {
                            '@value': 'PUT'
                        }
                    ]
                }
            ]
        },
        {
            '@id': rootUris.getRootUri(),
            '@type': [
                'http://www.w3.org/2002/07/owl#Ontology'
            ]
        },
        {
            '@id': hyper('EntryPoint'),
            '@type': [
                'http://www.w3.org/2002/07/owl#Class'
            ]
        },
        {
            '@id': hyper('Operation'),
            '@type': [
                'http://www.w3.org/2002/07/owl#Class'
            ],
            'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
                {
                    '@id': 'http://www.w3.org/2002/07/owl#ObjectProperty'
                }
            ]
        },
        {
            '@id': hyper('expectedType'),
            '@type': [
                'http://www.w3.org/2002/07/owl#ObjectProperty'
            ],
            'http://www.w3.org/2000/01/rdf-schema#domain': [
                {
                    '@id': hyper('Operation')
                }
            ]
        },
        {
            '@id': hyper('method'),
            '@type': [
                'http://www.w3.org/2000/01/rdf-schema#Datatype',
                'http://www.w3.org/2002/07/owl#DatatypeProperty',
                'http://www.w3.org/2002/07/owl#FunctionalProperty'
            ],
            'http://www.w3.org/2000/01/rdf-schema#domain': [
                {
                    '@id': hyper('Operation')
                }
            ],
            'http://www.w3.org/2000/01/rdf-schema#range': [
                {
                    '@id': hyper('method')
                }
            ],
            'http://www.w3.org/2002/07/owl#equivalentClass': [
                {
                    '@id': '_:genid9'
                }
            ]
        },
        {
            '@id': hyper('returnedType'),
            '@type': [
                'http://www.w3.org/2002/07/owl#ObjectProperty'
            ],
            'http://www.w3.org/2000/01/rdf-schema#domain': [
                {
                    '@id': hyper('Operation')
                }
            ]
        },
        {
            '@id': hyper('defaultMediaType'),
            '@type': [
                'http://www.w3.org/2000/01/rdf-schema#Datatype',
                'http://www.w3.org/2002/07/owl#DatatypeProperty'
            ],
            'http://www.w3.org/2000/01/rdf-schema#domain': [
                {
                    '@id': hyper('EntryPoint')
                }
            ],
            'http://www.w3.org/2000/01/rdf-schema#range': [
                {
                    '@id': hyper('mediaType')
                }
            ]
        },
        {
            '@id': hyper('returnedMediaType'),
            '@type': [
                'http://www.w3.org/2000/01/rdf-schema#Datatype',
                'http://www.w3.org/2002/07/owl#DatatypeProperty'
            ],
            'http://www.w3.org/2000/01/rdf-schema#domain': [
                {
                    '@id': hyper('Operation')
                }
            ],
            'http://www.w3.org/2000/01/rdf-schema#range': [
                {
                    '@id': hyper('mediaType')
                }
            ]
        },
        {
            '@id': hyper('expectedMediaType'),
            '@type': [
                'http://www.w3.org/2000/01/rdf-schema#Datatype',
                'http://www.w3.org/2002/07/owl#DatatypeProperty'
            ],
            'http://www.w3.org/2000/01/rdf-schema#domain': [
                {
                    '@id': hyper('Operation')
                }
            ],
            'http://www.w3.org/2000/01/rdf-schema#range': [
                {
                    '@id': hyper('mediaType')
                }
            ]
        },
        {
            '@id': hyper('mediaType'),
            '@type': [
                'http://www.w3.org/2000/01/rdf-schema#Datatype'
            ],
            'http://www.w3.org/2002/07/owl#equivalentClass': [
                {
                    '@id': 'http://www.w3.org/2001/XMLSchema#string'
                }
            ]
        }
    ]
};
