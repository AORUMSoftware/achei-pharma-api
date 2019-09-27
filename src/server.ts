import * as http from 'http';
import * as app from './app';

const port = process.env.PORT || '80';
const httpServer = http.createServer(app.default);
httpServer.listen(port, (): void => console.log(`App listening on port ${port}`));
