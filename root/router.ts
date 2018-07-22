import * as express from 'express';
import { isEmpty, omit } from 'lodash';
import { getResource, getVocabulary } from './service';
import { getResourcePath, getRootPath } from './uris';

export const router = express.Router();

const jsonLd = 'application/ld+json';

router.get(getRootPath(), (request, response) => {
    getVocabulary()
        .then(vocabulary => response
            .type(jsonLd)
            .send(vocabulary)
        );
});

router.get(getResourcePath(), (request, response) => {
    getResource(request.url.substr(1))
        .then((resource: any) => {
            if (isEmpty(omit(resource, ['@context']))) {
                response.sendStatus(404);
                return;
            }

            response
                .type(jsonLd)
                .send(resource);
        });
});
