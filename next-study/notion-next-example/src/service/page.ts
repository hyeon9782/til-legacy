import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_KEY,
});

const createPage = async () => {
  const response = await notion.pages.create({
    icon: {
      type: "emoji",
      emoji: "🥬",
    },
    parent: {
      type: "database_id",
      database_id: process.env.NEXT_NOTION_DATABASE_ID,
    },
    properties: {
      이름: {
        title: [
          {
            text: {
              content: "Tuscan kale3",
            },
          },
        ],
      },
    },
    children: [
      {
        object: "block",
        heading_2: {
          rich_text: [
            {
              text: {
                content: "Lacinato kale",
              },
            },
          ],
        },
      },
    ],
  });
  console.log(response);

  return response;
};

const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
};

const updatePageProperties = async () => {
  return;
};

export { getPage, updatePageProperties, createPage };
