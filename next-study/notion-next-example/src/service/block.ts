import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NEXT_NOTION_API_KEY,
});

// const createBlock = async () => {
//     const response = await notion.blocks.children.append({

//     })
//   return;
// };
