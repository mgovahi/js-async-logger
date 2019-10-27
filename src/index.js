import ClientSorage from "./modules/clientStorage";
import RemoteService from "./modules/remoteService";
class Logger {
    constructor(options ,
                storage = new ClientSorage(),
                remoteService = new RemoteService(options)){
        
        this.options = options;
        this.storage = storage;
        this.remoteService = remoteService;
        this.init(options);
    }
    init(options){
        if(options.flushInterval){
            this.intervalId = setInterval(() => this.flush(),
            this.flushInterval)
        }
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
    read(){
        return this.storage.read();
    }
    async flush(){
        try{
            let logs = this.storage.read();
            if(logs && logs.length){
            const result = await this.remoteService.sendLogs();
            console.log("Server response => ", result.json())
            return result.json();
            }
        }catch(err){
            console.err( "Sending loggs faild", err);
        }
    }
    clearFlushInterval(){
        clearInterval(this.intervalId);
    }
}


export default Logger;