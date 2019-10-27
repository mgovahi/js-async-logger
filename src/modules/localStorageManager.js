class LocalStorageManager{
    constructor(name){
        this.name = name;
        this.init();
    }
    read(){
        return JSON.parse(localStorage.getItem(this.name));
    }
    write(value){
        let loglist = this.read();
        loglist.push(value);
        localStorage.setItem(this.name,JSON.stringify(loglist));
    }
    drop(){
        this.init();
    }
    init(){
        localStorage.setItem(this.name,JSON.stringify([]));
    }
    
}

export default LocalStorageManager;