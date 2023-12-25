import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
    console.log('Constructor: Componente está sendo inicializado.');
  }

  componentDidMount() {
    console.log('componentDidMount: Componente foi montado.');
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Componente foi atualizado.');
    if (prevState.count === 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Componente será desmontado.');
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    console.log('render: Renderizando componente.');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.state.count}</Text>
        </View>
    );
  }
}

export default LifecycleComponent;
