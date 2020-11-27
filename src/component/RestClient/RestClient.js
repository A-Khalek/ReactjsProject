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
        return  axios.get(postUrl,postJson).then(response=>{
            return   response.data;
        }).catch(error=>{
            return error;
        })
    }


}
