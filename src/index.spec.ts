import request from 'supertest';
import { server } from '.';

describe('server', () => {

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .expect(200, 'Hello World :-)');
        });
    });

    describe('GET /invalid', () => {
        it('should return 404 Not Found', () => {
            return request(server)
                .get('/invalid')
                .expect(404);
        });
    });

});
