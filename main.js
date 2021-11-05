import connection from './database.js';
import queries from './queries.js';
// readline
/* import readline from 'readline';
import clear from 'clear';
import { stdin as input, stdout as output} from 'process';


const rl = readline.createInterface({input, output}); */

// connection.findInCollection('companies', {}).then(console.log).catch(console.error);
connection.countDb('companies').then(console.log).catch(console.error);
console.log(queries[1])
// documentation
// https://nodejs.org/api/readline.html#class-interfaceconstructor