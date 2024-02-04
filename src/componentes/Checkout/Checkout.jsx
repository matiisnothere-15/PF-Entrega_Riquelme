// Checkout.js
import React, { useState } from 'react';
import styles from './Checkout.module.css'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const Checkout = ({ cart, clearCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    additionalDetails: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    try {
      // Aquí puedes incluir cualquier lógica adicional antes de enviar el mensaje

      // Simplemente marca el mensaje como enviado
      setMessageSent(true);

      // Puedes realizar acciones adicionales aquí según tus necesidades

    } catch (error) {
      console.error('Error al procesar el mensaje:', error);
      // Puedes manejar errores aquí si es necesario
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {messageSent ? (
          <div>
            <h2 className={styles.successMessage}>¡Compra realizada con éxito!</h2>
            <p className={styles.successMessage}>Gracias por tu compra. Tu pedido ha sido confirmado, se han enviado los detalles a tu correo.</p>
          </div>
        ) : (
          <div>
            <h2 className={styles.formTitle}>Enviar Detalles de Envío</h2>
            <form onSubmit={handleCheckout}>
              <label htmlFor="name" className={styles.formLabel}>Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={styles.formInput}
              />

              <label htmlFor="email" className={styles.formLabel}>Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.formInput}
              />

              <label htmlFor="phone" className={styles.formLabel}>Teléfono:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.formInput}
              />
              
              <label htmlFor="address" className={styles.formLabel}>Dirección:</label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={styles.formInput}
              />
              <button
                type="submit"
                className={styles.submitButton}
              >
                Confirmar Compra
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
