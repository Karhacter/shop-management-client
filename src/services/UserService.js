import httpAxios from "../httpAxios";

const UserService = {
  get_list: () => {
    return httpAxios.get("user/index");
  },
  store: async (user) => {
    return await httpAxios.post("user/store", user);
  },
  remove: async (id) => {
    return await httpAxios.delete(`user/remove/${id}`);
  },
  edit: async (id, user) => {
    return await httpAxios.put(`user/edit/${id}`, user);
  },
  show: async (id) => {
    return await httpAxios.get(`user/show/${id}`);
  },
  login: async(user) => {
    return await httpAxios.post("user/login", user);
  }
};

export default UserService;
