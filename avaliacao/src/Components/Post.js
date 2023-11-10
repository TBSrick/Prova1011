import React from 'react'
import '../blog.css'


const Noticias = ({titulo, imagem, descricao, categoria}) => {
    return(
        <div className='noticias'>
            <h2>{titulo}</h2>
            <img src={imagem} className='imagem'/>
           <p> <h3 className='des'>{descricao}</h3></p>
            <p><h3 className='cat'>{categoria}</h3></p>

            </div>
    )
}

export default Noticias;