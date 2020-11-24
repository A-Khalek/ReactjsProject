
import axios from 'axios';


 class RestClient{

    static getRequest(getUrl){
        axios.get(getUrl).then(response=>{
          return   response.data;
        }).catch(error=>{
            return null;
        })
    }
}
export default RestClient;