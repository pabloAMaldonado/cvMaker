import React, { useState, useMemo } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater';

function PpEditer({data, setData, isExpanded, setSetter}){
    const dataUpdater = new DataUpdater(data, setData);

    const [expandedStates, setExpandedStates] = useState([]);

    const toggleExpand = (index) => {
      setExpandedStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !prevStates[index];
        return newStates;
      });
    };
    //falta borrar sesetterarray.jsx  replicar el workediter en los otros y arreglar el editor de array, finalizar el css
    if(data.ppArray[0] !== '' ){
    return(

            <div className='trabajos'>
                {data.ppArray.map((elemento, index) =>(
                    <div key={index} className="ppEditer">
                      <Collapse formName={elemento['proyectName']} 
                                setSetter={() => toggleExpand(index)}
                        isExpanded={expandedStates[index]}
                        >
                    <textarea 
                        name="proyectName"
                        value={elemento['proyectName']}
                        onChange={(e) => {dataUpdater.actualizarArray('ppArray', 'proyectName', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="descProyect"
                        value={elemento['descProyect']}
                        onChange={(e) => {dataUpdater.actualizarArray('ppArray', 'descProyect', index, e.target.value)}}
                    ></textarea>
                    {elemento.importanteProyect.map((elementos, indexIndex) =>(
                        <textarea 
                            key={indexIndex}
                            name="importanteProyect"
                            value={elementos}
                            onChange={(e) => {dataUpdater.actualizarArrayArray('ppArray', 'importanteProyect', index, indexIndex, e.target.value)}}
                        ></textarea>
                    ))}
                    </Collapse>
                </div>
                  ))}
                
            </div> 
        
    )}
}
export default PpEditer