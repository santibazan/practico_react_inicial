// import { useState } from "react"
// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
// import { MiPrimerComponent } from "./components/MiPrimerComponente/MiPrimerComponent"
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
// import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/appProduct/appProduct"


export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      {/* <MiPrimerComponent
        text={"Texto desde Propiedades"}
        color="red"
        fontSize={3}
      />
      <ComponentCounter />
      <ComponentUseEffect /> */}
      {/* <FormComponent /> */}
      <AppProduct />
    </div>
  );
};