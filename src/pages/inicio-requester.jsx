import './styles/inicio-requester.css';
import Select from '../components/select-directorios'
import Upload from '../components/upload'
import ListFiles from '../components/list-files'
import { Navigate } from 'react-router-dom';
import {useState} from 'react';

const Inicio = () => {

    let identidad = JSON.parse(localStorage.getItem('identity'));

    const [directorio, setDirectorio] = useState("");

    if(identidad.rol !== 'Requester'){
        return (

            <Navigate to={'/'} />
        )
    }
    return (
        <div className="general">
            <div className="page-header">
                <div className="page-caption">
                    <h1 className="page-title">Bucket internship-project-21</h1>
                </div>
            </div>
            <div className="page-body cyan">
                <div className="contenedor con-select blue">
                    <div className="contenido">
                        <h2>Directorio</h2>
                        <p>Mira el listado y selecciona el directorio al que deseas entrar para subir o ver archivos.</p>
                        <Select setDirectorio={setDirectorio}/>
                    </div>
                </div>
                <div className="contenedor con-download orange">
                    <div className="contenido">
                        <h2>Archivos</h2>
                        <p>Mira el listado de los archivos que se encuentran en el directorio seleccionado.</p>
                        <ListFiles directorio={directorio}/>
                    </div>
                </div>     
                <div className="contenedor con-upload red">
                    <div className="contenido">
                        <h2>Solicitar Subir Archivos</h2>
                        <p>Selecciona los archivos que deseas subir al directorio seleccionado y solicita permisos para poder subirlos.</p>
                        <Upload/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;