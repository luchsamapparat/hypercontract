import { addVocabularyContext } from './context';
import { hyper } from './namespaces';
import * as rootUris from './uris';

export const vocabulary = addVocabularyContext({
    '@graph': [
        {
            '@id': rootUris.getRootUri(),
            '@type': [
                'owl:Ontology'
            ]
        },
        {
            '@id': hyper('EntryPoint'),
            '@type': [
                'owl:Class'
            ]
        },
        {
            '@id': hyper('Operation'),
            '@type': [
                'owl:Class'
            ],
            'rdfs:subClassOf': [
                {
                    '@id': 'owl:ObjectProperty'
                }
            ]
        },
        {
            '@id': hyper('expectedType'),
            '@type': [
                'owl:ObjectProperty'
            ],
            'rdfs:domain': [
                {
                    '@id': hyper('Operation')
                }
            ]
        },
        {
            '@id': hyper('method'),
            '@type': [
                'owl:DatatypeProperty',
                'owl:FunctionalProperty'
            ],
            'rdfs:domain': [
                {
                    '@id': hyper('Operation')
                }
            ],
            'rdfs:range': [
                {
                    '@id': hyper('Method')
                }
            ]
        },
        {
            '@id': hyper('returnedType'),
            '@type': [
                'owl:ObjectProperty'
            ],
            'rdfs:domain': [
                {
                    '@id': hyper('Operation')
                }
            ]
        },
        {
            '@id': hyper('defaultMediaType'),
            '@type': [
                'rdfs:Datatype',
                'owl:DatatypeProperty'
            ],
            'rdfs:domain': [
                {
                    '@id': hyper('EntryPoint')
                }
            ],
            'rdfs:range': [
                {
                    '@id': hyper('MediaType')
                }
            ]
        },
        {
            '@id': hyper('returnedMediaType'),
            '@type': [
                'rdfs:Datatype',
                'owl:DatatypeProperty'
            ],
            'rdfs:domain': [
                {
                    '@id': hyper('Operation')
                }
            ],
            'rdfs:range': [
                {
                    '@id': hyper('MediaType')
                }
            ]
        },
        {
            '@id': hyper('expectedMediaType'),
            '@type': [
                'rdfs:Datatype',
                'owl:DatatypeProperty'
            ],
            'rdfs:domain': [
                {
                    '@id': hyper('Operation')
                }
            ],
            'rdfs:range': [
                {
                    '@id': hyper('MediaType')
                }
            ]
        },
        {
            '@id': hyper('MediaType'),
            '@type': [
                'rdfs:Datatype'
            ],
            'owl:equivalentClass': [
                {
                    '@id': 'xsd:string'
                }
            ]
        },
        {
            '@id': hyper('Method'),
            '@type': [
                'rdfs:Datatype'
            ],
            'owl:equivalentClass': [
                {
                    '@type': [
                        'rdfs:Datatype'
                    ],
                    'owl:oneOf': [
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
                }
            ]
        }
    ]
});
