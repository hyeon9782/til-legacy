import { useQuery } from "react-query";
import axios from 'axios';

const TestQuery = () => {

    const { 
        isSuccess,
        isError,
        isLoading,
        isFetching,
        data,
        error
    } = useQuery(
        "getPosting",
        () => axios.get("http://localhost:4000/api/posting"),
        {
            onSuccess: (data) => {
                console.log("onSuccess : ", data);
            },
            onError: (error) => {
                console.log("onError : ", error);
            }
        }
    );
    
    if (isFetching) {
        console.log('fetching...');
    }
    
    if (isLoading) {
        console.log("loading...");
    }
    
    if (isError) {
        console.log('error', error);
    }
    
    if (isSuccess) {
        console.log('success', data);
    }
}

export default TestQuery;
