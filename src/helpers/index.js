export const fetchProducts = async ({ queryKey }) => {
    const [,apiUrlProducts, orgId, appId, apiKey, page, size] = queryKey;
    const url = `${apiUrlProducts}/?organization_id=${orgId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  };

  export const fetchProduct = async ({ queryKey }) => {
    const [, id, apiUrlProduct, orgId, appId, apiKey] = queryKey;
    const url = `${apiUrlProduct}/${id}?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  };