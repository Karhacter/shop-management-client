import httpAxios from "../httpAxios";

const ContactService = {
  get_list: () => {
    return httpAxios.get("customer/index");
  },
  remove: async (id) => {
    return await httpAxios.delete(`customer/remove/${id}`);
  },
  edit: async (id, customer) => {
    return await httpAxios.put(`customer/edit/${id}`, customer);
  },
  show: async (id) => {
    return await httpAxios.get(`customer/show/${id}`);
  },
};

export default ContactService;
