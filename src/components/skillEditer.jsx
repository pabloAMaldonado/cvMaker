import React, { useState, useMemo } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater';

function SkillEditer({data, setData, isExpanded, setSetter}){
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
    if(data.skillArray[0] !== '' ){
    return(

            <div className='habilidades'>
                {data.skillArray.map((elemento, index) =>(
                    <div key={index} className="skillEditer">
                      <Collapse formName={elemento['skillName']} 
                                setSetter={() => toggleExpand(index)}
                        isExpanded={expandedStates[index]}
                        >
                    <textarea 
                        name="skillName"
                        value={elemento['skillName']}
                        onChange={(e) => {dataUpdater.actualizarArray('skillArray', 'skillName', index, e.target.value)}}
                    ></textarea>
                    <textarea 
                        name="descSkill"
                        value={elemento['descSkill']}
                        onChange={(e) => {dataUpdater.actualizarArray('skillArray', 'descSkill', index, e.target.value)}}
                    ></textarea>
                    </Collapse>
                </div>
                  ))}
                
            </div> 
        
    )}
}
export default SkillEditer