import httpAxios from "../httpAxios";

const OrderService = {
  get_list: () => {
    return httpAxios.get("order/index");
  },
  remove: async (id) => {
    return await httpAxios.delete(`order/remove/${id}`);
  },
};

export default OrderService;
