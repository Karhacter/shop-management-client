import httpAxios from "../httpAxios";

const BrandService = {
  get_list: () => {
    return httpAxios.get("brand/index");
  },
  store: async (brand) => {
    return await httpAxios.post("brand/store", brand);
  },
  show: async (id) => {
    return await httpAxios.get(`brand/show/${id}`);
  },
  remove: async (id) => {
    return await httpAxios.delete(`brand/delete/${id}`);
  },
  edit: async (id, brand) => {
    return await httpAxios.put(`brand/edit/${id}`, brand);
  },
  detail: async (slug, limit) => {
    return await httpAxios.get(`brand/branddetail/${slug}/${limit}`);
  },
};

export default BrandService;
