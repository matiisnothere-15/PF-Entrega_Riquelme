import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListDetails from "../ListDetails/ListDetails";
import Loader from "../Loader/Loader";
import { CartContext, UseCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";

const ItemsDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { productId } = useParams();
  const { loading, setLoading } = UseCart(CartContext);

  useEffect(() => {
    setLoading(true);

    const prodAdapterId = doc(db, "pokestore", productId);  // Cambio de nombre de la colección

    getDoc(prodAdapterId)
      .then((queryDocumentSnapshot) => {
        const field = queryDocumentSnapshot.data();
        const prodAdapte = { id: queryDocumentSnapshot.id, ...field };
        setDetalle(prodAdapte);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ListDetails
          imagen={detalle.imagen}
          precio={detalle.precio}
          id={detalle.id}
          descripcion={detalle.descripcion}
          nombre={detalle.nombre}
          stock={detalle.stock}
        />
      )}
    </>
  );
};

export default ItemsDetailContainer;
