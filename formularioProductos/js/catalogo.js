import { fetchAllProductos } from "./modules/productosApi.js";

const createProductoCard = (productoObject) => {
  let { nombreProducto, marca, material, peso, precio, imagen, key } = productoObject;
  let cardHtml = `
    <div class="col">
        <a href="../views/detalle.html?productoKey=${key}">
        <div class="card producto-card p-0 overflow-hidden h-100">
        <div class="row g-0 h-100">
            <div class="col-md-4">
            <img
                src="${imagen}"
                class="producto-card__picture"
                alt="..."
            />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${nombreProducto}</h5>
                <ul class="list-group">
                <li class="list-group-item">Marca: ${marca}</li>
                <li class="list-group-item">Material: ${material}</li>
                <li class="list-group-item">Peso: ${peso}</li>
                <li class="list-group-item">Precio: ${precio} pesos</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        </a>
    </div>
  `;
  return cardHtml;
};

const printProductos = (productosArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
  wrapper.innerHTML = "";

  productosArray.forEach((producto) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createProductoCard(producto);
  });
};

const printAllProductos = async () => {
  let productosArray = await fetchAllProductos();
  printProductos(productosArray, "productos-wrapper");
};

printAllProductos();
