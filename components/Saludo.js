const Saludo = () => {
  const [cuenta, setCuenta] = React.useState(1);

  return <h1>Cuenta: {cuenta}</h1>;
};
