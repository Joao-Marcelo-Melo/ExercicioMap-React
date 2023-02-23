import React, { Component } from 'react'
import './App.css'

import bruxa from "./assents/bruxa.png"
import fantasma from "./assents/fantasma.png"
import vampiro from "./assents/vampiro.png"
import zumbi from "./assents/zumbi.png"
import fada from "./assents/fada.png"
import pirata from "./assents/pirata.png"




class app extends Component {

  state = {
    personagens: [
      {
        imagem: bruxa,
        nome: "Bruxa"
      },

      {
        imagem: fantasma,
        nome: "Fantasma"
      },

      {
        imagem: vampiro,
        nome: "Vampiro"
      },
      
      {
        imagem: zumbi,
        nome: "Zumbi"
      },

      {
        imagem: fada,
        nome: "Fada"
      },

      {
        imagem: pirata,
        nome: "Pirata"
      }
    ]
  }

  render() {

    return (
      <div className='box'>
        <h1>Fantasias</h1>

        <div className='line1'>
          {this.state.personagens.map((item) => (
            <div className='elementos'>
              <img src={item.imagem} />
              <p>{item.nome}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}


export default app;