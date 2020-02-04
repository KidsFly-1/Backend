const server = require('./api/server.js');

const port = process.env.PORT || 1300;

server.listen(port, () => console.log(`\n*** Server is running on ${port} ***\n`));