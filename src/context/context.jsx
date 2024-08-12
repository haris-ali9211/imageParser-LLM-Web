import {createContext,useContext, useState} from 'react';
// requestApi
import postApi from '../requestType/postApi.js';


//createContext
export const ImageAnalyzerContext = createContext();


// eslint-disable-next-line react/prop-types
export const OpulentSipsProvider = ({children}) => {

    // useState hooks
    const [isLoading, setIsLoading] = useState(false);

    const questionAsk = async body => {
        return await postApi(`/analyze-image/`, body, setIsLoading)
    }

    return (
        <ImageAnalyzerContext.Provider
            value={{
                isLoading,
                questionAsk
            }}>
            {children}
        </ImageAnalyzerContext.Provider>
    );
};

export const useImageAnalyzerContext = () => useContext(ImageAnalyzerContext);



