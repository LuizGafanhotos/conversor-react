import React, { Component } from "react";
import './Conversor.css';

export default class Conversor extends Component{

    constructor(props){
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
            resultado: 0,
        }

        this.converter = this.converter.bind(this)
    }

    converter(){
        let valor = this.state.moedaA_valor
        let calc = 5.15 * valor
        let moedaB_valor = parseFloat(calc).toFixed(2)
        this.setState({ resultado: moedaB_valor })

    }

    render(){
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <button type="button" onClick={this.converter}>Converter</button>
                <h2>{this.state.resultado}</h2>
            </div>
        )
    }
}