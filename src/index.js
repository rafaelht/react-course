import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <UserCard
      name="Rafael Hilario"
      amount={5000}
      married={true}
      points={[84, 98.5, 52]}
      address={{
        street: "Duarte",
        city: "Santo Domingo",
        zipCode: "1498",
      }}
    />

    <UserCard
      name="Jose Torres"
      amount={5000}
      married={true}
      points={[84, 98.5, 52]}
      address={{
        street: "Duarte",
        city: "Santo Domingo",
        zipCode: "1498",
      }}
    />
  </>
); /*Etiquetas de auto cerrrado*/
