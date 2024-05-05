import httpAxios from "../httpAxios";

const TopicService = {
  get_list: () => {
    return httpAxios.get("topic/index");
  },
  store: async (topic) => {
    return await httpAxios.post("topic/store", topic);
  },
  remove: async (id) => {
    return await httpAxios.delete("topic/remove/" + id);
  },
};

export default TopicService;
