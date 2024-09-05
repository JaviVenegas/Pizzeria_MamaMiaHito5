
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const urlBase = "http://localhost:5000/api/pizzas";

export const Pizza = () => {
  const [pizzas, setPizzas] = useState([]); // Array para manejar múltiples pizzas
  const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(0); // Índice para la pizza seleccionada
  const [isLoading, setIsLoading] = useState(false);

  const getPizzas = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(urlBase);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const pizzaData = await response.json();
      console.log('Pizza Data:', pizzaData); // Agregado para inspeccionar los datos
      setPizzas(pizzaData); // Guardar todas las pizzas en el estado
    } catch (error) {
      console.error('Error fetching pizza data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Mensaje de carga
  }

  if (pizzas.length === 0) {
    return <div>No data available</div>; // Mensaje si no hay datos
  }

  const pizza = pizzas[selectedPizzaIndex]; // Obtener la pizza seleccionada

  return (
    <>
      <div className="card mb-4">
        <img
          src={pizza?.img || 'default-image.jpg'}
          alt={pizza?.name || 'Pizza'}
          className="card-img-top rounded mx-auto d-block"
        />
        <div className="card-body">
          <h2 className="card-title">{pizza?.name || 'Nombre de Pizza'}</h2>
          <p className='card-text text-start'>{pizza?.desc || 'Descripción no disponible'}</p>
          <p className="card-text"><strong>Ingredientes:</strong></p>
          <ul className="card-text list-inline">
            {(pizza?.ingredients || []).map((ingredient, index) => (
              <li key={index} className="list-group-item"> 🍕{ingredient}</li>
            ))}
          </ul>
          <h4 className="card-text text-center p-1">
            <strong>Precio: ${pizza?.price ? pizza.price.toLocaleString() : '0.00'}</strong>
          </h4>
          <div className="d-flex justify-content-evenly">
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedPizzaIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pizzas.length - 1))}
            >
              Anterior
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedPizzaIndex((prevIndex) => (prevIndex < pizzas.length - 1 ? prevIndex + 1 : 0))}
            >
              Siguiente
            </button>
            <Link className="btn btn-primary" to="/cart">🛒<strong>Añadir</strong></Link>
            <Link className="btn btn-primary" to="/">🍕 <strong>Home</strong></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
