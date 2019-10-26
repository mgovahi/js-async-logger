import Constants from "./constants"
import LocalStorageManager from './localStorageManager'

class ClientStorage{
    constructor(storage = new LocalStorageManager(Constants.JS_ASYNC_LOGGER_STORAGE_NAME) ){
        this.storage = storage;
        this.loggsQueue = [];

    }
    read(){
       this.storage.read(); 
    }
    insert(data){
        this.storage.write(data)
    }
    update(){

    }
    drop(){

    }
    delete(){

    }

}

export default ClientStorage;