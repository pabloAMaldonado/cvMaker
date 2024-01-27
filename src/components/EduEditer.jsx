import React, { useState, useMemo } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater';

function EduEditer({data, setData, isExpanded, setSetter}){
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
    if(data.eduArray[0] !== '' ){
    return(

            <div className='educacion'>
                {data.eduArray.map((elemento, index) =>(
                    <div key={index} className="eduEditer">
                      <Collapse formName={elemento['institucion']} 
                                setSetter={() => toggleExpand(index)}
                        isExpanded={expandedStates[index]}
                        >
                    <textarea 
                        name="institucion"
                        value={elemento['institucion']}
                        onChange={(e) => {dataUpdater.actualizarArray('eduArray', 'institucion', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="carrera"
                        value={elemento['carrera']}
                        onChange={(e) => {dataUpdater.actualizarArray('eduArray', 'carrera', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="fromDateUni"
                        value={elemento['fromDateUni']}
                        onChange={(e) => {dataUpdater.actualizarArray('eduArray', 'fromDateUni', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="toDateUni"
                        value={elemento['toDateUni']}
                        onChange={(e) => {dataUpdater.actualizarArray('eduArray', 'toDateUni', index, e.target.value)}}
                    ></textarea>
                    </Collapse>
                </div>
                  ))}
                
            </div> 
        
    )}
}
export default EduEditer