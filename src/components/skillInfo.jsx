import React, { useState, useEffect } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater';
import ArrayEditer from "./ArrayEditer";



function SkillInfo({skillName, setSkillName, descSkill, setdescSkill, array, setArray,  setSetter, isExpanded, data, setData}){
    function handleInputChange(setter, e) {
        setter(e.target.value);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const skill= {
        skillName: skillName,
        descSkill: descSkill
      };

      dataUpdater.arrayUpdater(skill, 'skillArray')

      setSkillName('');
      setdescSkill('');

      setData(prevData => ({
        ...prevData,
        setSkillName: '',
        setdescSkill: ''
      }));

      }
      const dataUpdater = new DataUpdater(data, setData);
      const [isExpandedArraySkill, setIsExpandedArraySkill]= useState(false);

    return(
      <Collapse formName="Habilidades" setSetter={setSetter} isExpanded={isExpanded}>
            <form onSubmit={handleSubmit}> 
            <div>
          <label htmlFor="skillName">Habilidad:</label>
          <input
            type="text"
            id="skillName"
            value={skillName}
            onChange={(e) => {handleInputChange(setSkillName, e); dataUpdater.handleValueChange('skillName', e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="descSkill">Descripcion:</label>
          <input
            type="text"
            id="descSkill"
            value={descSkill}
            onChange={(e) =>{ handleInputChange(setdescSkill, e); dataUpdater.handleValueChange('descSkill', e.target.value)}}
          />
        </div>
        <button type="submit">Enviar</button>
            </form>
            <ArrayEditer
        data={data}
        setData={setData}
        array={'skillArray'}
        setSetter={isExpandedArraySkill}
        isExpanded={setIsExpandedArraySkill}
      />
        </Collapse>
    )
}

export default SkillInfo