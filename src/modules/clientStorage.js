import Constants from "./constants"
import LocalStorageManager from './localStorageManager'

class ClientStorage{
    constructor(storage = new LocalStorageManager(Constants.JS_ASYNC_LOGGER_STORAGE_NAME) ){
        this.storage = storage;
        this.loggsQueue = [];

    }
    read(){
       return this.storage.read(); 
    }
    insert(data){
        this.storage.write(data)
    }
    clear(){
        this.storage.drop();
    }
}

export default ClientStorage;