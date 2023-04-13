import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
interface FunctionalComponentProps {
  title: string;
  subtitle?: string;
}

interface myFutureObject {
  name: string;
  role?: string;
}

const FunctionalComponent = (props: FunctionalComponentProps) => {
  const params = useParams();
  const location = useLocation();

  console.log(location);
  // nel caso di counter il tipo riesce ad essere automaticamente assegnato (inferito) a partire dal valore iniziale 0, e rimarrà number
  const [counter, setCounter] = useState(0);
  // mentre in questo caso dobbiamo prevedere il valore iniziale al tipo: null. ma successivamente bisogna lasciargli la possibilità di cambiare in un tipo strutturale più complesso: {}
  // lo si fa attraverso la UNION TYPE
  // const [myObj, setMyObj] = useState<null | { name: string; role?: string }>(null);
  const [myObj, setMyObj] = useState<null | myFutureObject>(null);

  // TS si lamenterà del fatto che abbiamo inizializzato il valore di myObj a null,
  // quindi la type inference gli assegnerà sempre il tipo null, e non sarà più in grado di riverne uno diverso

  // la soluzione è informare useState che anceh se inizializziamo myObj a null, questo non dovrà essere il suo unico tipo possibile

  // per farlo basterà passare <null | myFutureObject>, oppure <null | { name: string; role?: string }> come parametro di tipo al generic del useState

  return (
    <>
      <div>Hello there: {props.title}</div>
      <p>Let's see params id: {params.id}</p>
      {props.subtitle && <p>{props.subtitle}</p>}

      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      {myObj && <div>myObj is ready! your name is: {myObj.name}</div>}
      <button onClick={() => setMyObj({ name: "Stefano" })}>set my name</button>
    </>
  );
};

export default FunctionalComponent;
