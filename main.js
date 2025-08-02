// Simulador de compra básica

const productos = [
  { id: 1, nombre: "Shampoo", precio: 2500 },
  { id: 2, nombre: "Acondicionador", precio: 3000 },
  { id: 3, nombre: "Secador de pelo", precio: 15000 },
  { id: 4, nombre: "Plancha", precio: 18000 }
];

let carrito = [];

console.log("Listado de productos disponibles:");
productos.forEach(p => console.log(`${p.id} - ${p.nombre}: $${p.precio}`));

function buscarProducto(id) {
  return productos.find(p => p.id === id);
}

function iniciarSimulador() {
  alert("Bienvenido al simulador de compras para productos de peluquería.");
  let continuar = true;

  while (continuar) {
    let input = prompt("Ingrese el número del producto que desea agregar al carrito:\n" +
      productos.map(p => `${p.id}. ${p.nombre} ($${p.precio})`).join('\n'));

    let productoElegido = buscarProducto(parseInt(input));

    if (productoElegido) {
      carrito.push(productoElegido);
      alert(`${productoElegido.nombre} fue agregado al carrito.`);
    } else {
      alert("Producto no válido. Intente nuevamente.");
    }

    continuar = confirm("¿Desea agregar otro producto?");
  }

  finalizarCompra();
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("No agregó productos. Gracias por visitar.");
    return;
  }

  let total = carrito.reduce((sum, prod) => sum + prod.precio, 0);

  alert(`Gracias por su compra. El total es $${total}.`);

  console.log("Resumen de la compra:");
  carrito.forEach(p => console.log(`${p.nombre}: $${p.precio}`));
  console.log(`Total: $${total}`);
}

iniciarSimulador();
