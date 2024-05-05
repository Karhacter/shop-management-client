import httpAxios from "../httpAxios";

const ProductService = {
  get_list: () => {
    return httpAxios.get("product/index");
  },
  list: async (page, limit) => {
    return await httpAxios.get(`product/list/${page}/${limit}`);
  },
  detail: async (slug, limit) => {
    return await httpAxios.get(`product/productdetail/${slug}/${limit}`);
  },
  list_product_category: async (categoryid, page, limit) => {
    return await httpAxios.get(
      `product/list_product_category/${categoryid}/${page}/${limit}`
    );
  },
  list_brand: async (brandid, limit) => {
    return await httpAxios.get(`product/list_brand/${brandid}/${limit}`);
  },
  store: async (product) => {
    return await httpAxios.post("product/store", product);
  },
  remove: async (id) => {
    return await httpAxios.delete(`product/remove/${id}`);
  },
  show: async (id) => {
    return await httpAxios.get(`product/show/${id}`);
  },
  edit: async (id, product) => {
    return await httpAxios.put(`product/edit/${id}`, product);
  },
  listnew: async (limit) => {
    return await httpAxios.get(`product/listnew/${limit}`);
  },
};

export default ProductService;
