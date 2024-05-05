import httpAxios from "../httpAxios";

const BannerService = {
  get_list: () => {
    return httpAxios.get("banner/index");
  },
  slideshow: async (position) => {
    return await httpAxios.get(`banner/list/${position}`);
  },
  store: async (banner) => {
    return await httpAxios.post("banner/store", banner);
  },
  delete: async (id) => {
    return await httpAxios.delete(`banner/delete/${id}`);
  },
  show: async (id) => {
    return await httpAxios.get(`banner/show/${id}`);
  },
  edit: async (id, banner) => {
    return await httpAxios.put(`banner/edit/${id}`, banner);
  },
};

export default BannerService;
