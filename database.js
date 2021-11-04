import {MongoClient} from 'mongodb';
import config from './config.js';



class MongoManager {

    // constructor
    constructor(config){

        this.url = config.urlDataBase;

           this._createConnection(config.db); 
    }

   async  _createConnection(dbName){

    try {

        this.client = new MongoClient(this.url, {useNewUrlParser: true});
        this.client.connect();
        this.db =  this.client.db(dbName);
        this.collection = this.db.collection('companies', {});
        console.log('create connection works');
        //console.log(this.db);

    } catch (error) {

        this._dropConnection();
        throw error;
    }
    }
    async _dropConnection(){

        this.client.close();
    };


    // methods
    async insertOne(collectionName, data){
        try {

          const result =  await this.db.collection(collectionName).insertOne(data);
          this._dropConnection();
          return result;

        } catch (error) {
            throw error;
        }
    };

    async insertMany(collectionName, data){

        try {
           
           const result =  await this.db.collection(collectionName).insertMany(data);
           this._dropConnection();
           return result;

        } catch (error) {
            throw error;
        }
    };

    async findInCollection(collectionName, query){

        try {
            const result = await this.db.collection(collectionName)
                                        .find(query)
                                        .limit(10)
                                        .toArray();
        console.log(result);
            this._dropConnection();
            return result;

        } catch (error) {
            throw error;
        }
    };

    async updateOne(collectionName, query, data){

        try {

           const result =  await this.db.collection(collectionName).updateOne(query,data);
           this._dropConnection();
           return result;

        } catch (error) {
            throw error;
        }
    };

    async removeOne(collectionName, query){

        try {
            const result = await this.db.collection(collectionName).removeOne(query);
            this._dropConnection();
            return result;

        } catch (error) {
            throw error;
        }
    }
};

 export default new MongoManager(config);