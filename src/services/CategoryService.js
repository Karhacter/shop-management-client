import httpAxios from "../httpAxios";

const CategoryService = {
  get_list: () => {
    return httpAxios.get("category/index");
  },
  store: async (category) => {
    return await httpAxios.post("category/store", category);
  },
  detail: async (slug, limit) => {
    return await httpAxios.get(`category/categorydetail/${slug}/${limit}`);
  },
  remove: async (id) => {
    return await httpAxios.delete(`category/delete/${id}`);
  },
  show: async (id) => {
    return await httpAxios.get(`category/show/${id}`);
  },
  edit: async (id, category) => {
    return await httpAxios.put(`category/edit/${id}`, category);
  },
};

export default CategoryService;
