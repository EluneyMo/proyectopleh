import React from "react";




function cajaTipos(){
    return(
        <div className="Vdomestica">
            <i className="bi bi-chevron-left">#</i>,
            <h2>Tipos de violencias</h2>,
            <div className="card text-bg-dark">
                <img src="..." className="card-img" alt="..." />
                <div className="card-img-overlay">
                <h5 className="card-title">Violencia Domestica</h5>
                <p className="card-text">La violencia no es solo matar a otro</p> 
                </div>

            </div>,
            <i className="bi bi-chevron-right">#</i>
        </div>,

        <div className="VSexual">
            <div className="card text-bg-dark">
                

            </div>


        </div>
    )
}



function Card(){
    return(
        <h2>Noticias Recientes</h2>,
        <div className='card' style='width:18rem;'>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Violencia de Genero</h5>
                <p className="card-text">La violencia de género puede ser de tipo sexual, físico, psicológico y económico, y puede darse tanto en el espacio público como en la esfera privada</p>
                <a href="#" className="btn btn-primary" >Ver más información</a>
            </div>

        </div>
    )    
} 

export default Cartita; 