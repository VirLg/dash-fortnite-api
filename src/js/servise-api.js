import axios from "axios";
class DashFortnite {

    // BASE_URL = 'https://fortnite-api.com/v1/playlists/',
    
    async fetchApi(params) {
        
        
            return axios('https://fortnite-api.com/v1/playlists/');
    
       
    }

}






export default {DashFortnite }