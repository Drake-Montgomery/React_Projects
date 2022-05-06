import React, {Componet} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Componet() {
  render() {
    const {newValue} = this.props;
  
    return (
      <div className="App" style= {{paddingTop: "10px"}}>
        <h2>App3: React com Reduz</h2>

        <input type="text" />

        <button>

          Enviar

        </button>

        <h3>Aguardando...</h3>
      
      </div>
  );
}

const mapStateToProps = store => ({

  newValue: store.ClickState.newValue

});

export default connect (mapStateToProps)(App);