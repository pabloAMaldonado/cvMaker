import React, { useState, useEffect } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater';
import ArrayEditer from "./ArrayEditer";



function EducacionInfo({institucion, setInstitucion, carrera, setCarrera, fromDateUni, setFromDateUni, toDateUni, setToDateUni,
   array, setArray,  setSetter, isExpanded, data, setData}){
    function handleInputChange(setter, e) {
        setter(e.target.value);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const edu= {
          institucion: institucion,
          carrera: carrera,
          fromDateUni: fromDateUni,
          toDateUni: toDateUni,
        };

        console.log(edu)
        console.log(array)

        dataUpdater.arrayUpdater(edu, 'eduArray')
        
        console.log(data)
        setInstitucion('');
        setCarrera('');
        setFromDateUni('');
        setFromDateUni('');
        setToDateUni('');

        setData(prevData => ({
          ...prevData,
          institucion: '',
          carrera: '',
          fromDateUni: '',
          toDateUni: '',
        }));
        }     

      const dataUpdater = new DataUpdater(data, setData);
      const [isExpandedArrayEdu, setIsExpandedArrayEdu]= useState(false)

    return(
      <Collapse formName="Educacion" setSetter={setSetter} isExpanded={isExpanded}>
        <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="institucion">Institucion:</label>
          <input
            type="text"
            id="institucion"
            value={institucion}
            onChange={(e) => {handleInputChange(setInstitucion, e); dataUpdater.handleValueChange('institucion', e.target.value)  }}
          />
        </div>

        <div>
          <label htmlFor="carrera">Carrera:</label>
          <input
            type="text"
            id="carrera"
            value={carrera}
            onChange={(e) => {handleInputChange(setCarrera, e); dataUpdater.handleValueChange('carrera', e.target.value)  }}
          />
        </div>

        <div>
          <label htmlFor="fromDateUni">fromDate:</label>
          <input
            type="text"
            id="fromDateUni"
            value={fromDateUni}
            onChange={(e) => {handleInputChange(setFromDateUni, e); dataUpdater.handleValueChange('fromDateUni', e.target.value)  }}
          />
        </div>

        <div>
          <label htmlFor="toDateUni">toDate:</label>
          <input
            type="text"
            id="toDateUni"
            value={toDateUni}
            onChange={(e) => {handleInputChange(setToDateUni, e); dataUpdater.handleValueChange('toDateUni', e.target.value)  }}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
      <ArrayEditer
        data={data}
        setData={setData}
        array={'eduArray'}
        setSetter={isExpandedArrayEdu}
        isExpanded={setIsExpandedArrayEdu}
      />
      </Collapse>
    )
}

export default EducacionInfo