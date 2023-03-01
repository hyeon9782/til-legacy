export const API_END_POINT = "pr-088fa3bd2c9fbd880.programmers.co.kr:49340";

const request = async (url) => {
  const res = await fetch(url);
};

export const fetchEmployee = async (page) =>
  request(`${API_END_POINT}/employee/page=${page}`);
