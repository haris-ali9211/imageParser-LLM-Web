// import axios
import axios from 'axios';

// toast
import { ToastContainer, toast } from 'react-toastify';

// baseurl
import {baseURL, defaultTimeout} from '../config/config';

// default axios configuration
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = defaultTimeout;

// redux actions
import {loaderStart, loaderStop} from '../redux/actions/actions';

export default async function getApi(endpoint, dispatch) {
    try {
        dispatch(loaderStart());
        const response = await axios.get(endpoint);
        dispatch(loaderStop());
        return response.data;
    } catch (e) {
        console.log('error', e);
        dispatch(loaderStop());
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
                text1: e.message,
                text2: 'Please try again later',
                textStyle: {textAlign: 'center'},
                type: 'error',
                visibilityTime: 5000,
            });
        }
        return null;
    }
}
