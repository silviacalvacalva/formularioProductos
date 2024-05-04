const PRODUCTOS_BASE_URL = "https://productos-635b4-default-rtdb.firebaseio.com/productos";

const createProducto = async (productoObject) => {
  let response = await fetch(`${PRODUCTOS_BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(productoObject),
  });
  let data = await response.json();
  return data;
};

const fetchProductoByKey = async (productoKey) => {
  let response = await fetch(`${PRODUCTOS_BASE_URL}/${productoKey}/.json`);
  let data = await response.json();
  return data;
};

const fetchAllProductos = async () => {
  let response = await fetch(`${PRODUCTOS_BASE_URL}/.json`);
  let data = await response.json();
  let keys = Object.keys(data);
  let productosArray = keys.map((key) => ({ ...data[key], key }));
  return productosArray;
};

export { createProducto, fetchProductoByKey, fetchAllProductos };
