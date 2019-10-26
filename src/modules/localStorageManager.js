class LocalStorageManager{
    constructor(name){
        this.name = name;
        localStorage.setItem(this.name,JSON.stringify([]));
    }
    read(){
        return JSON.parse(localStorage.getItem(this.name));
    }
    write(value){
        let loglist = this.read();
        loglist.push(value);
        localStorage.setItem(this.name,JSON.stringify(loglist));
    }
    
}

export default LocalStorageManager;