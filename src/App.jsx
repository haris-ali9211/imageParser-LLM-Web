import './styles/styles.css';
import Main from "./components/main.jsx";
import {OpulentSipsProvider} from "./context/context.jsx";

const App = () => {


    return <>
        <OpulentSipsProvider>
            <Main/>
        </OpulentSipsProvider>
    </>;
};

export default App;

