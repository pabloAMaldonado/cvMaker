import React from "react";
import DataUpdater from './cvInputUpdater'


function PpHandler({data, setData}){
  const dataUpdater = new DataUpdater(data, setData);

  if(data.ppArray[0] !== '' ){
        return(
          <div>
          {data.ppArray.map((array, index) => (
            <div key={index} className="pp">
               <div className="headerPp">
                                <h2>{array.proyectName}</h2>
                                {array.descProyect !== '' &&(
                                    <h2> - {array.descProyect}</h2>
                                )}
                        </div>
                        {array.importanteProyect[0] !== '' &&(
                            <ul>
                                {array.importanteProyect.map((elemento, index) => (
                                    <li key={index}>{elemento}</li>
                                ))}
                            </ul>
                            )}
            </div>
          ))}
        </div>
        )
    }else {
        return null; // O proporciona un componente vacío o un mensaje apropiado
      }
}
export default PpHandler