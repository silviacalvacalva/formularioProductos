import { fetchProductoByKey } from "./modules/productosApi.js";

/*Para extraer parámetros de la url:*/

/*1: Guardamos la url en una variable*/
const url = window.location.href;

/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);

/*3: Extraemos el parámetro que deseamos*/
let productoKey = params.get("productoKey");
console.log(productoKey);

const printProductoData = async (productoKey) => {
  let productoData = await fetchProductoByKey(productoKey);
  console.log(productoData);
  let {
    nombreProducto,
    precio,
    genero,
    color,
    marca,
    material,
    peso,
    imagen,
    presentacion,
  } = productoData;

  document.getElementById("producto-imagen").setAttribute("src", imagen);
  document.getElementById("producto-nombre").innerText = nombreProducto;
  document.getElementById("producto-presentacion").innerText = presentacion;
  document.getElementById("producto-peso").innerText = peso;
  document.getElementById("producto-material").innerText = material;
  document.getElementById("producto-color").innerText = color;
  document.getElementById("producto-precio").innerText = precio;
  document.getElementById("producto-marca").innerText = marca;
  document.getElementById("producto-genero").innerText = genero;
};

printProductoData(productoKey);
