import apiRequest from ".";

const RESOURCE = "/todos";

export const getTodoList = async () => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`);

    return response;
  } catch (error) {
    throw new Error("API getTodoList error");
  }
};

export const createTodo = async (data: any) => {
  try {
    const response = await apiRequest.post(`${RESOURCE}`, data);

    return response;
  } catch (error) {
    throw new Error("API createTodo error");
  }
};

export const deleteTodo = async (id: any) => {
  try {
    const response = await apiRequest.delete(`${RESOURCE}/${id}`);

    return response;
  } catch (error) {
    throw new Error("API deleteTodo error");
  }
};
