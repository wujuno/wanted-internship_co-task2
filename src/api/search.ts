import apiRequest from ".";

const RESOURCE = "/search";

const LIMIT = 10;

export const getSearchRecommendTodos = async (keyword: string, page = 1) => {
  try {
    const response = await apiRequest.get(
      `${RESOURCE}?q=${keyword}&page=${page}&limit=${LIMIT}`
    );

    return response;
  } catch (error) {
    throw new Error("API getSearchRecommendTodos error");
  }
};
