import config from 'config';
import { isNull } from 'lodash';

export function getBaseUri() {
    const scheme = config.get('http.scheme');
    const hostname = config.get('http.hostname');
    const port = config.get('http.port');
    const uri = `${scheme}://${hostname}`;
    return omitPort(scheme, port) ? uri : `${uri}:${port}`;
}

export function getRootPath() {
    return '/';
}

export function getRootUri() {
    return getBaseUri() + getRootPath();
}

export function getResourcePath(resourceName: string | null = null) {
    const pathTemplate = getRootPath() + ':resourceName/';

    if (!isNull(resourceName)) {
        return pathTemplate.replace(':resourceName', resourceName);
    }

    return pathTemplate;
}

function omitPort(scheme: string, port: number) {
    return (scheme === 'http' && port === 80) ||
        (scheme === 'https' && port === 443);
}
