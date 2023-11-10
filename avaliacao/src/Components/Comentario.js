import React from 'react'
import '../comentario.css'


const Usuario = ({Nome, foto, comentario}) => {
    return(
        <div className='user'>
            <h2>{Nome}</h2>
            <img src={foto} className='kaue'/>
         <p>{comentario}</p>
       

            </div>
    )
}

export default Usuario;