import { useMemo } from "react";
import useFetchPosting from "../hooks/useFetchPosting";
import useIntersect from "../hooks/useIntersect";

const PostingPage = () => {
    const { data, hasNextPage, isFetching, fetchNextPage } = useFetchPosting({
        size: 8,
    })

    const postings = useMemo(
        () => (data ? data.pages.flatMap(({ data }) => data.contents) : []),
        [data]
    )

    const ref = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target)
        if (hasNextPage && !isFetching) {
            fetchNextPage()
        }
    })

    return (
        <div>
            {postings.map((posting) => (
                <div key={posting.id} style={{"width": "500px", "height": "600px"}}>{posting.name}</div>
            ))}
            {isFetching && <div>로딩...</div>}
            <div ref={ref} style={{"height":"1px"}}></div>
        </div>
    )
}

export default PostingPage;