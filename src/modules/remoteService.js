class RemoteService{
    constructor(options){
        this.url = options.url;
    }
    async sendLogs(logData){
        const response = await fetch(this.url,{
            method: "POST",
            body: JSON.stringify(logData)
        });

        return response.json();
    }


}

export default RemoteService;