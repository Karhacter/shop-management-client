import httpAxios from "../httpAxios";

const PostService = {
  get_list: () => {
    return httpAxios.get("post/index");
  },
  list: () => {
    return httpAxios.get("post/list");
  },
  detail: async (slug, limit) => {
    return await httpAxios.get(`post/postdetail/${slug}/${limit}`);
  },
  store: async (post) => {
    return await httpAxios.post("post/store", post);
  },
  remove: async (id) => {
    return await httpAxios.delete(`post/remove/${id}`);
  },
  show: async (id) => {
    return await httpAxios.get(`post/show/${id}`);
  },
  listnew: async (limit) => {
    return await httpAxios.get(`post/listnew/${limit}`);
  },
};

export default PostService;
