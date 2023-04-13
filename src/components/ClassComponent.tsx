import { Component } from "react";

// ogni componente parte definendo le sue prop e state come {}
// dovremo sempre andare a definire la nuova struttura delle nostre prop (se ce ne saranno), andando ad informare il componente che non arriverà più solo un oggetto vuoto {}
// l'interfaccia delle prop dovrebbe mantenere una nomeclatura di questo tipo: [NomeComponente]Props

interface ClassComponentProps {
  title: string;
  subtitle?: string;
}

interface ClassComponentState {
  counter: number;
}

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
        <h1>{this.props.title}</h1>
        {this.props.subtitle && <p>{this.props.subtitle}</p>}
      </div>
    );
  }
}

export default ClassComponent;
