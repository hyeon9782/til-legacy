import { rest } from 'msw';

const postings = Array.from(Array(1024).keys()).map((id) => ({
  id,
  name: `게시글 제목 ${id}`,
}));

export const handlers = [
  rest.get("/api/posting", async (req, res, ctx) => {
    const { searchParams } = req.url;
    const size = Number(searchParams.get("size"));
    const page = Number(searchParams.get("page"));
    const totalCount = postings.length;
    const totalPages = Math.round(totalCount / size);

    return res(
      ctx.status(200),
      ctx.json({
        contents: postings.slice(page * size, (page + 1) * size),
        pageNumber: page,
        pageSize: size,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
      }),
      ctx.delay(500)
    );
  }),
];