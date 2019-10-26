import ClientSorage from "./modules/clientStorage";
import RemoteService from "./modules/remoteService";
class Logger {
    constructor(storage = new ClientSorage(),
                remoteService = new RemoteService()){
        this.storage = storage;
        this.remoteService = remoteService;
    }
    prepareLogObject(content){
        return{
            ...content,
            time : new Date()
        }
    }
    log(content){
        this.storage.insert(this.prepareLogObject(content));
    }
    flush(){
        let logs = this.storage.read();
        this.remoteService.sendLogs()
    }

}


export default Logger;