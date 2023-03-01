import axios from "axios";
import { useInfiniteQuery } from "react-query";

const postingKeys = {
  all: ["posting"],
  lists: () => [...postingKeys.all, "list"],
  list: (filters) => [...postingKeys.lists(), { filters }],
  details: () => [...postingKeys.all, 'detail'],
  detail: (id) => [...postingKeys.details(), id]
};

const useFetchPosting = ({ size }) =>
  useInfiniteQuery(
    postingKeys.lists(),
    ({ pageParam = 0 }) =>
      axios.get("/api/posting", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { isLastPage, pageNumber }}) => isLastPage ? undefined : pageNumber + 1,
    }
  );


export default useFetchPosting;