import './styles/styles.css';
import Main from "./components/main.jsx";
import {OpulentSipsProvider} from "./context/context.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


    return <>
        <OpulentSipsProvider>
            <Main/>
            <ToastContainer/>
        </OpulentSipsProvider>
    </>;
};

export default App;

