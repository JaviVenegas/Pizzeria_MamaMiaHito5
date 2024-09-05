import React, { useState, useEffect } from 'react';
const urlBase = "http://localhost:5000/api/pizzas";


const Cart = ({ pizzas }) => { 
    const [pizza, setPizza] = useState([]);

    const getDatos = async () => {
        try {
            const response = await fetch(urlBase);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getDatos();
    }, []);


    const [carro, setCarro] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalCalculado = carro
            .map(item => item.count * item.price)
            .reduce((suma, iteracion) => suma + iteracion, 0);
        setTotal(totalCalculado);
    }, [carro]);

    const agregarPizza = (nuevaPizza) => {
        setCarro(prevCarro => {
            const existe = prevCarro.find(pizza => pizza.id === nuevaPizza.id);
            if (existe) {
                return prevCarro.map(pizza =>
                    pizza.id === nuevaPizza.id
                        ? { ...pizza, count: pizza.count + nuevaPizza.count }
                        : pizza
                );
            } else {
                return [...prevCarro, nuevaPizza];
            }
        });
    };

    const restarPizza = (pizzaId) => {
        setCarro(prevCarro => {
            return prevCarro
                .map(pizza =>
                    pizza.id === pizzaId
                        ? { ...pizza, count: pizza.count > 1 ? pizza.count - 1 : pizza.count }
                        : pizza
                )
                .filter(pizza => pizza.count > 0);
        });
    };

    const eliminarPizza = (pizzaId) => {
        setCarro(prevCarro => prevCarro.filter(pizza => pizza.id !== pizzaId));
    };

    return (
        <>
            <div>
                <h2>Carrito de Compras</h2>
            </div>
            <div>
                <h4>Disponibles para agregar:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {pizza.map(pizza => (
                        <div key={pizza.id} className="card" style={{ width: '18rem' }}>
                            <img 
                                src={pizza.img} 
                                alt={pizza.name} 
                                className="card-img-top rounded mx-auto d-block" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
                                <button 
                                    className="btn btn-success" 
                                    onClick={() => agregarPizza({ ...pizza, count: 1 })}
                                >
                                    Añadir Pizza
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="pt-2">Pizzas compradas:</h4>
                <ul>
                    {carro.map(item => (
                        <li key={item.id}>
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                            />
                            {item.name} - {item.count} x ${item.price.toLocaleString()} = ${ (item.count * item.price).toLocaleString()}
                            <button 
                                className="btn btn-secondary btn-sm mx-2" 
                                onClick={() => agregarPizza({ ...item, count: 1 })}
                            >
                                +
                            </button>
                            <button 
                                className="btn btn-secondary btn-sm mx-2" 
                                onClick={() => restarPizza(item.id)}
                            >
                                -
                            </button>
                            <button 
                                className="btn btn-danger btn-sm mx-2" 
                                onClick={() => eliminarPizza(item.id)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="pb-4 text-center">
                    <h5>Monto Total: ${total.toLocaleString()}</h5>
                    <button className="btn btn-primary ">Comprar</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
