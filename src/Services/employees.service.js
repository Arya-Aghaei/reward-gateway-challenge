import { doApiGet } from "../Utils/serrvices.utils";

const getEmployeesListApi = async () => {
  try {
    const response = await doApiGet({ url: "list" });
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const employeesServices = {
  getEmployeesListApi,
};
