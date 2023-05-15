export type todosType = {
  id: number;
  title: string;
};

export type RecommendedDataType = {
  q: string;
  page: number;
  limit: number;
  result: string[];
  qty: number;
  total: number;
};
