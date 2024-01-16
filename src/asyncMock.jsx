const productos = [
  {
    id: "0",
    nombre: "POLERA GENGAR POKEMON ",
    precio: "23.500",
    categoria: "Camisetas",
    stock: 9,
    imagen:
      "https://yasashii.cl/wp-content/uploads/2023/07/19.png",
    descripcion:
      "El estampado de la polera es completamente duradero aplicamos una de las últimas tecnologías a diferencia de la SERIGRAFÍA y DTG este no se descolora con los lavados y tampoco se va saliendo y el diseño no tendrá una apariencia de desgastado.",
  },
  {
    id: "1",
    nombre: "ZAPATILLAS FORUM LOW",
    precio: "99.990",
    categoria: "Zapatillas",
    stock: 3,
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Zapatillas_Forum_Low_Blanco_FY7757_01_standard.jpg",
    descripcion:
      "Para pies delgados recomendamos comprar la talla inferior. Revisa la equivalencia, H: Hombre | M: Mujer.",
  },
  {
    id: "2",
    nombre: "Zapatilla New Balance 550 Hombre Blanco",
    precio: "55.000",
    categoria: "Zapatillas",
    stock: 9,
    imagen:
      "https://www.blockstore.cl/cdn/shop/products/p-BB550VTB-1_grande.jpg?v=1674680469",
    descripcion:
      "La 550 original debutó en 1989 y dejó su huella en las canchas de baloncesto de costa a costa. Tras su lanzamiento inicial, la 550 se guardó en los archivos, antes de reintroducirse en ediciones limitadas a finales de 2020, y volvió a la alineación a tiempo completo en 2021, convirtiéndose rápidamente en una favorita de la moda mundial. La silueta aerodinámica y de caña baja de las 550 ofrece una visión limpia de los diseños más resistentes de finales de los 80, mientras que la fiable construcción superior de piel, material sintético y malla es un clásico en cualquier época.",
  },
  {
    id: "3",
    nombre: "Zapatilla New Balance NM1010 Hombre Blanco",
    precio: "79.000",
    categoria: "Zapatillas",
    stock: 9,
    imagen:
      "https://www.blockstore.cl/cdn/shop/files/p-NM1010CL-5_grande.jpg?v=1692649012",
    descripcion:
      "New Balance tiene una venerada historia de fabricación de calzado de rendimiento técnico para satisfacer las necesidades de los atletas profesionales. New Balance Numeric continúa esta tradición con la 1010, la zapatilla de skate técnicamente más avanzada hasta la fecha. La 1010 cuenta con una entresuela FuelCell de doble densidad en toda su longitud para una amortiguación propulsiva bajo los pies.",
  },
  {
    id: "4",
    nombre: "JOOGER BICOLOR GENGAR",
    precio: "45.990",
    categoria: "Pantalones",
    stock: 6,
    imagen:
      "https://yasashii.cl/wp-content/uploads/2023/06/13-3.png",
    descripcion:
      "Pantalones Jogger , tejido suave con elástico grueso en tobillo y cintura, amplios bolsillos, cintura elástica para un ajuste óptimo. El corte holgado y elegante de los pantalones no restringirá tus movimientos y te permitirá mantenerte activo en cualquier circunstancia, el estampado es completamente duradero aplicamos una de las últimas tecnologías a diferencia de la SERIGRAFÍA y DTG este no se descolora con los lavados y tampoco se va saliendo y el diseño no tendrá una apariencia de desgastado.",
  },
  {
    id: "5",
    nombre: "POLERA SNORLAX BICOLOR",
    precio: "23.000",
    categoria: "Camisetas",
    stock: 2,
    imagen:
      "https://yasashii.cl/wp-content/uploads/2023/11/7.png",
    descripcion:
      "Polera de algodon peinado y su estampado es completamente duradero aplicamos una de las últimas tecnologías a diferencia de la SERIGRAFÍA y DTG este no se descolora con los lavados y tampoco se va saliendo y el diseño no tendrá una apariencia de desgastado.",
  },
  {
    id: "6",
    nombre: "Nike Air Force 1 07",
    precio: "89.000",
    categoria: "Zapatillas",
    stock: 4,
    imagen:
      "https://nikeclprod.vtexassets.com/arquivos/ids/723227-800-800?v=638241047050330000&width=800&height=800&aspect=true",
    descripcion:
      "La luminosidad sigue viva con este calzado de básquetbol original. Al combinar la comodidad para la cancha con el estilo para usar fuera de ella, le da un giro nuevo a lo que mejor conoces: la confección de los años 80, los detalles audaces y nada más que el estilo de básquetbol.",
  },
];
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
export const getProductosById = (productoId) => {
  return new Promise((resolve) => {
    resolve(
      productos.find((product) => {
        return product.id === productoId;
      })
    );
  });
};
export const getProductosCategori = (productoCategori) => {
  return new Promise((resolve) => {
    resolve(
      productos.filter((product) => {
        return product.categoria == productoCategori;
      })
    );
  });
};
