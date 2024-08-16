// import axios
import axios from 'axios';

// toast
import { ToastContainer, toast } from 'react-toastify';

// baseurl
import {baseURL, defaultTimeout} from '../config/config';

// default axios configuration
axios.defaults.baseURL = baseURL;
// axios.defaults.timeout = defaultTimeout;


export default async function postApi(endpoint, payload, setIsLoading) {
    try {
        setIsLoading(true);
        const response = await axios.post(endpoint, payload);
        setIsLoading(false);
        return response.data;
    } catch (e) {
        console.log(e)
        console.log('error', e.message);
        setIsLoading(false);
        if (
            e.message.includes('timeout of ') &&
            e.message.includes('ms exceeded')
        ) {
            toast.show({
                text1: "Can't connect to server",
                text2: 'Please try again later',
                textStyle: {textAlign: 'center'},
                type: 'error',
                visibilityTime: 5000,
            });
        } else {
            toast.show({
                text1: e.response.data.error,
                text2: 'Please try again later',
                textStyle: {textAlign: 'center'},
                type: 'error',
                visibilityTime: 5000,
            });
        }
        return e.message;
    }
}