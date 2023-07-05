import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_KEY,
});

const getDatabase = async () => {
  const databaseId = process.env.NEXT_NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response;
};

const updateDatabase = async () => {
  return;
};

const createDatabase = async () => {
  const options = {
    method: "POST",
    url: "https://api.notion.com/v1/databases",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_NOTION_API_KEY}`,
    },
    body: {
      parent: {
        type: "page_id",
        page_id: "",
      },
      title: {
        type: "text",
        text: {
          content: "Text Title",
          link: null,
        },
      },
      properties: {
        "Food group": {
          select: {
            options: [
              {
                name: "🥦Vegetable",
                color: "green",
              },
              {
                name: "🍎Fruit",
                color: "red",
              },
              {
                name: "💪Protein",
                color: "yellow",
              },
            ],
          },
        },
      },
    },
  };
  return;
};

export { getDatabase, updateDatabase, createDatabase };
