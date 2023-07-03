import { Client } from "@notionhq/client";
import { NextApiResponse } from "next";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_KEY,
});

export const getDatabase = async () => {
  const databaseId = process.env.NEXT_NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response;
};
