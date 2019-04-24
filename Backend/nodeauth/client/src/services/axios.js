import axios from 'axios'
import config from '../config'
import decode from 'jwt-decode';

    let instance = axios.create({
        baseURL: config.apiUrl,
    });

    let setToken = (token) => {
        console.log("Token: "+token);
        localStorage.setItem('id_token',token);
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //console.log("COS tam");
        //this.setToken(token)
    }

    let loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = getToken() // Getting token from localstorage
        return !!token && !isTokenExpired(token)
    }

    let isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    }

    let getToken = () => {
        // Retrieves the user token from localStorage
        console.log("get token");
        return localStorage.getItem('id_token')
    }
    let logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    let getConfirm = () => {
        // Using jwt-decode npm package to decode the token
        let answer = decode(getToken());
        console.log("Recieved answer!");
        return answer;
    }

export default instance
export {setToken}
export {getToken}
export {logout}
export {loggedIn}
