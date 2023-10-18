import {useEffect, useState} from "react";

export function Contador() {
    const [contador, setContador] = useState(0);
    const gino = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    useEffect(() => {
        console.log("seActualiza");
    }, [contador]);

    useEffect(() => {
        gino();
    }, []);

    return (
        <>
            <h2 className="Pokedex">HOLA</h2>
            <h3>{contador}</h3>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </>
    );
}
