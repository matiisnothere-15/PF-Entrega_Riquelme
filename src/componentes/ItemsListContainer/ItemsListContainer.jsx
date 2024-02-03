import Clase from "./ItemsListContainer.module.css";
import React, { useState, useEffect } from "react";
import ListItems from "../ListItems/ListItems";
import { useParams } from "react-router-dom";
import { UseCart, CartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemsListContainer = (propiedades) => {
  const [productos, setProductos] = useState([]);
  const { categoriId } = useParams();
  const { loading, setLoading } = UseCart(CartContext);

  useEffect(() => {
    const collectionProductos = collection(db, "pokestore");
    setLoading(true);

    // Si hay una categoría, agregamos un filtro a la consulta
    const q = categoriId ? query(collectionProductos, where('categoria', '==', categoriId)) : collectionProductos;

    getDocs(q)
      .then((querySnapshot) => {
        const productosAdaptados = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return {
            id: doc.id,
            ...fields,
          };
        });
        setProductos(productosAdaptados);
      })
      .finally(() => setLoading(false));
  }, [categoriId]);

  return (
    <div className={Clase.contenedor}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className={Clase.titulo}>{propiedades.greeting}</h1>
          <ListItems productos={productos} />
        </>
      )}
    </div>
  );
};

export default ItemsListContainer;
