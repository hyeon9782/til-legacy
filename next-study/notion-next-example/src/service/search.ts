import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_KEY,
});

export const search = async () => {
  const response = await notion.search({
    query: "JavaScript",
    // filter: {
    //   value: "database",
    //   property: "object",
    // },
    sort: {
      direction: "ascending",
      timestamp: "last_edited_time",
    },
  });
  console.log(response);
  return response;
};
