import * as http from 'http';

export const server = http
    .createServer((req, res) => {

        if (req.url !== '/') {
            res.writeHead(404);
            res.end();
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');

    })
    .listen(3000);

// tslint:disable-next-line: no-console
console.log('Server running on port 3000');
