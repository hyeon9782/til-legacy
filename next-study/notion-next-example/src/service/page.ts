import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NEXT_NOTION_API_KEY,
});

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
};

export const updatePageProperties = async () => {
  return;
};

export const createPage = async () => {
  return;
};
