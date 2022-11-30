export function Greeting() {
  function add(x, y) {
    return x + y;
  }
  const user = {
    firtsName: "Rafael",
    lastName: "Hilario Torress",
  };
  return (
    <div>
      <h1>Esto es un componente de React</h1>
      <h1>{user.firtsName}</h1>
      <h3>{user.lastName}</h3>
      <h1>{add(8, 5)}</h1>
    </div>
  );
  /*const married = true;
    return <h1>{married ? "Son casados 🤣" : "No estoy casado"}</h1>; 
    --Asi podemos simplificar un if
    */
}

export function UserCard({ name, amount, married, points, address }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>${amount}</h1>
      <h1>{married ? "Es casado" : "Soltero"}</h1>
      <h1>{points}</h1>
      <ul>
        <li>Calle: {address.street}</li>
        <li>City: {address.city}</li>
        <li>Zip Code: {address.zipCode}</li>
      </ul>
    </div>
  );
}
