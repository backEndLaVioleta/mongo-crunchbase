import connection from './database.js';
import queries from './queries.js';
// readline

console.log(connection);
// connection.findInCollection('companies', {}).then(console.log).catch(console.error);
connection.countDb('companies').then(console.log).catch(console.error);
console.log(queries[1])
// documentation
// https://nodejs.org/api/readline.html#class-interfaceconstructor