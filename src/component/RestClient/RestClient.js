import axios from "axios";

export default class RestClient  {

    static GetRequest(getUrl){
       return  axios.get(getUrl).then(response=>{
            return   response.data;
        }).catch(error=>{
            return error;
        })
    }

    static PostRequest(postUrl,postJson){

        let config={
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }

        return  axios.get(postUrl,postJson,config).then(response=>{
            return   response.data;
        }).catch(error=>{
            return error;
        })
    }


}
