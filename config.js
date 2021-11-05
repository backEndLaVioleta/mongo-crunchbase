const config = {
    urlDataBase: process.env.URL || 'mongodb://localhost:27017/crunchbase',
    db: process.env.Db || 'crunchbase'
};
/* const config ={
    urlDataBase: process.env.URL || 'mongodb+srv://robby:admin1234@servercliente.73azq.mongodb.net/crunchbase?retryWrites=true&w=majority',
    db: process.env.Db || 'crunchbase'
}; */

export default config;