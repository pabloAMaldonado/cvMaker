import React, { useState, useMemo } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater';

function WorkEditer({data, setData, isExpanded, setSetter}){
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
    if(data.workArray[0] !== '' ){
    return(

            <div className='trabajos'>
                {data.workArray.map((elemento, index) =>(
                    <div key={index} className="workEditer">
                      <Collapse formName={elemento['company']} 
                                setSetter={() => toggleExpand(index)}
                        isExpanded={expandedStates[index]}
                        >
                    <textarea 
                        name="company"
                        value={elemento['company']}
                        onChange={(e) => {dataUpdater.actualizarArray('workArray', 'company', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="location"
                        value={elemento['location']}
                        onChange={(e) => {dataUpdater.actualizarArray('workArray', 'location', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="fromDate"
                        value={elemento['fromDate']}
                        onChange={(e) => {dataUpdater.actualizarArray('workArray', 'fromDate', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="toDate"
                        value={elemento['toDate']}
                        onChange={(e) => {dataUpdater.actualizarArray('workArray', 'toDate', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="cargo"
                        value={elemento['cargo']}
                        onChange={(e) => {dataUpdater.actualizarArray('workArray', 'cargo', index, e.target.value)}}
                    ></textarea>
                    {elemento['importantes'].map((elementos, indexIndex) =>(
                        <textarea 
                            key={indexIndex}
                            name="importantes"
                            value={elementos}
                            onChange={(e) => {dataUpdater.actualizarArrayArray('workArray', 'importantes', index, indexIndex, e.target.value)}}
                        ></textarea>
                    ))}
                    </Collapse>
                </div>
                  ))}
                
            </div> 
        
    )}
}
export default WorkEditer