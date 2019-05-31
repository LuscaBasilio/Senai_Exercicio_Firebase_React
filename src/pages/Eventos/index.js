import React, {Component} from 'react';
import firebase from '../../services/firebaseConfig';

export default class EventosIndex extends Component{

    constructor(){
        super();
        this.state = {
            listaEventos : []
        }
    }

    listarEventos(){
        firebase.firestore().collection("Eventos")
        .where("ativo", "==", true)
        .get()
        .then((eventos) => {
            //console.log(eventos)
            let listaEvento = [];
            eventos.forEach((evento) => {
                listaEvento.push({
                    id: evento.id,
                    titulo : evento.data().Titulo,
                    descricao : evento.data().Descricao,
                    data : evento.data().Data.toDate().toLocaleString('pt-br'),
                    acessoLivre : evento.data().acessoLivre,
                    ativo : evento.data().ativo
                })
            })
            this.setState({
                listaEventos : listaEvento
            },() =>{
                console.log(this.state.listaEventos)
            })
        })
    }

    listarEventosRealTime(){
        firebase.firestore().collection("Eventos")
        .where("ativo", "==", false)
        .onSnapshot((eventos) => 
        {
            let listaEvento = [];
            eventos.forEach((evento) => {
                listaEvento.push({
                    id: evento.id,
                    titulo : evento.data().Titulo,
                    descricao : evento.data().Descricao,
                    data : evento.data().Data.toDate().toLocaleString('pt-br'),
                    acessoLivre : evento.data().acessoLivre,
                    ativo : evento.data().ativo
                })
            })
            this.setState({
                listaEventos : listaEvento
            },() =>{
                console.log(this.state.listaEventos)
            })}
        )
    }

    componentDidMount(){
        this.listarEventos();
    }

    render(){
        return(
            <div>
                <h1>Eventos - Index</h1>

            </div>
        )
    }
}