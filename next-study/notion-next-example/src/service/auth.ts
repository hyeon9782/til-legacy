import axios from "axios";

const options = {
  method: "POST",
  url: "https://api.notion.com/v1/oauth/token",
  headers: { accept: "application/json", "content-type": "application/json" },
  data: { grant_type: '"authorization_code"' },
};

export const auth = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
