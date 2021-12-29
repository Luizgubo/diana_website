import React, { Component, useState } from 'react';


let userData = {
    name: "Diana",
    posts: [
        {titulo: "Origami", texto: "Meu origami perfeito", data: "13/11/2021"},
        {titulo: "Monster", texto: "I'm in love with the monster", data: "04/12/2021"},
    ]
}

class Area extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:"Quando me tratas mal e, desprezado, Sinto que o meu valor vês com desdém, \n Lutando contra mim, fico a teu lado \n E, inda perjuro, provo que és um bem. \n Conhecendo melhor meus próprios erros, \n A te apoiar te ponho a par da história \n De ocultas faltas, onde estou enfermo; \n Então, ao me perder, tens toda a glória. \n Mas lucro também tiro desse ofício: \n Curvando sobre ti amor tamanho, \n Mal que me faço me traz benefício, \n Pois o que ganhas duas vezes ganho. \n Assim é o meu amor e a ti o reporto: \n Por ti todas as culpas eu suporto."}
    }

    footer() {
        let data = "01/02/2021"
        let styles = {
            button: {
                backgroundColor:'black',
                color:'white',
                padding:'5px',
                borderRadius:'5px',
                margin:'2px'
            },
            footer: {
                display: 'flex',
                justifyContent: 'space-between'
            }
        }
        return <div style={styles.footer}>
        <span>Postado em: {data}</span>
        <div>
            <button onClick={() => this.setState({editado:true})} style={styles.button}>Editar</button>
            <button onClick={() => this.setState({excluido:true})} style={styles.button}>Excluir</button>
        </div>
    </div>;
    }

    render() {
        let styles = {
            container: {
                border: '3px double grey',
            },
            mainArea: {
                display:'block',
                width: '80%',
                height: '300px',
                backgroundColor: 'grey',
                margin: '10%'
            },

        }
        return <div style={styles.container}>
            <div style={styles.mainArea}>{this.state.date}</div>
            <this.footer></this.footer>
            {this.state.editado}
        </div>;
    }
}

export default Area;