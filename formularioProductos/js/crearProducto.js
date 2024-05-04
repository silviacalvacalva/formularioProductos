import { createProducto } from "./modules/productosApi.js";

let saveProductoBtn = document.getElementById("save-producto-btn");

saveProductoBtn.addEventListener("click", async () => {
  let fields = document.querySelectorAll("#create-producto-form input");

  let productoObject = {};

  fields.forEach((field) => {
    let type = field.type;
    console.log(type);
    let property = field.name;
    let value = field.value;

    /*if (type === "text") {
      productoObject[property] = value;
    } else if (type === "number") {
      productoObject[property] = Number(value);
    } else if (type === "checkbox") {
      productoObject[property] = field.checked;
    }*/

    switch (type) {
      case "text":
        productoObject[property] = value;
        break;
      case "number":
        productoObject[property] = Number(value);
        break;
      case "checkbox":
        productoObject[property] = field.checked;
    }
  });
  console.log(productoObject);
  let savedProducto = await createProducto(productoObject);
  console.log(savedProducto);
});
