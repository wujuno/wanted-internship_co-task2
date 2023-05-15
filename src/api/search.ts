import apiRequest from ".";

const RESOURCE = "/search";

const PAGE = 1;
const LIMIT = 10;

export const getSearchRecommendTodos = async (keyword: string) => {
  try {
    const response = await apiRequest.get(
      `${RESOURCE}?q=${keyword}&page=${PAGE}&limit=${LIMIT}`
    );

    return response;
  } catch (error) {
    throw new Error("API getSearchRecommendTodos error");
  }
};
