import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile(){

    const [ incidents, setIncidents ] = useState([])
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    useEffect( ()=>{
        api.get('profile', {
            headers:{
                Authorization: ongId
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    }, [])

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            alert('Deletado com sucesso')

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert('Erro impossivel deletar')
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vindo, {ongName} </span>

                <Link to='/incidents/new' className='button'>
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} >
                    <FiPower size={18} color='#e02041'/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
               { incidents.map(incident => (
                    <li key={incident.id} > 
                        <strong>CASO:</strong>
                        <p> {incident.title} </p>
                        <strong>DESCRIÇÃO:</strong>
                        <p> {incident.description}</p>
                        <strong>VALOR:</strong>
                        <p>R$ {incident.value} </p>
                    <button onClick={() => handleDeleteIncident(incident.id) } >
                        <FiTrash2 size={20} color='#999'/>
                    </button>
                 </li>
               )) }
            </ul>
        </div>
    )
}