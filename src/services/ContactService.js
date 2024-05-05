import httpAxios from "../httpAxios";

const ContactService = {
  get_list: () => {
    return httpAxios.get("contact/index");
  },
  delete: async (id) => {
    return await httpAxios.delete(`contact/remove/${id}`);
  },
  store: async (contact) => {
    return await httpAxios.post("contact/store", contact);
  },
};

export default ContactService;
