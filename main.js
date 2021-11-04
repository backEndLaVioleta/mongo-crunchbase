import connection from './database.js';

console.log(connection);
connection.findInCollection('companies', {}).then(console.log).catch(console.error);