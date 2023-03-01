import axios from "axios";
import { QueryClient, useMutation } from "react-query";

const TestMutation = () => {

    const queryClient = new QueryClient();

    const mutation = useMutation(
        'addPosting',
        (param) => axios.post('http://localhost:4000/api/posting', param),
        {
            onMutate: (variables) => {
                console.log("onMutate", variables);
            },
            onError: (error, variables, context) => {
                console.log('onError', context);
            },
            onSuccess: (data, variables, context) => {
                // console.log("onSuccess", data);
                queryClient.invalidateQueries("getPosting");
            },
            onSettled: (data, error, variables, context) => {
                console.log("onSettled", data);
            }
        }
    );

    const data = {
      id: 1,
      posting_title: "게시글 제목입니다.11",
      posting_category: "게시글 분류입니다.11",
      posting_content: "게시글 내용입니다.11",
    };

    return (
      <>
        <button onClick={() => mutation.mutate(data)}>[ ADD POSTING ]</button>
      </>
    );
}

export default TestMutation;