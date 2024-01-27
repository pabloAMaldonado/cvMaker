import React, { useState, useEffect } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater'
import ArrayEditer from "./ArrayEditer";


function ContactWork({company, setCompany, location, setLocation, fromDate, setFromDate, toDate, setToDate, cargo, setCargo,
   importantes, setImportantes, array, setArray, setSetter, isExpanded, data, setData
  }){
    function handleInputChange(setter, e) {
        setter(e.target.value);
      }
      const handleSubmit = (e) => {
        e.preventDefault();

        const trabajo= {
          company: company,
          location: location,
          fromDate: fromDate,
          toDate: toDate,
          cargo: cargo,
          importantes: importantes
        };

        dataUpdater.arrayUpdater(trabajo, 'workArray')
        
        console.log(data)
        setCompany('');
        setLocation('');
        setFromDate('');
        setToDate('');
        setCargo('');
        setImportantes(['']);

        setData(prevData => ({
          ...prevData,
          company: '',
          location: '',
          fromDate: '',
          toDate: '',
          cargo: '',
          importantes: ['']
        }));
  
      }
      
      function handleImportanteChange(index, e) {
        const updatedImportante = [...importantes];
        updatedImportante[index] = e.target.value;
        setImportantes(updatedImportante);
      }
      const maxLinks = 3;

      function addImportante() {
        if (importantes.length < maxLinks) {
          setImportantes([...importantes, '']);
        }
      }
      function handleRemoveImportante() {
        if (importantes.length > 1) {
          const updatedImportantes = [...importantes];
          updatedImportantes.pop();
          setImportantes(updatedImportantes);
      }
    }
    const dataUpdater = new DataUpdater(data, setData);

    const [isExpandedArrayWork, setIsExpandedArrayWork]= useState(false)
    
    return(
    <Collapse formName="Experiencia laboral" setSetter={setSetter} isExpanded={isExpanded}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Empresa:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => {handleInputChange(setCompany, e); dataUpdater.handleValueChange('company', e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="location">Locacion:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => {handleInputChange(setLocation, e); dataUpdater.handleValueChange('location', e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="fromDateWork">fromDate:</label>
          <input
            type="text"
            id="fromDateWork"
            value={fromDate}
            onChange={(e) => {handleInputChange(setFromDate, e); dataUpdater.handleValueChange('fromDate', e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="toDateWork">toDate:</label>
          <input
            type="text"
            id="toDateWork"
            value={toDate}
            onChange={(e) => {handleInputChange(setToDate, e); dataUpdater.handleValueChange('toDate', e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="cargo">cargo:</label>
          <input
            type="text"
            id="cargo"
            value={cargo}
            onChange={(e) => {handleInputChange(setCargo, e); dataUpdater.handleValueChange('cargo', e.target.value) }}
          />
        </div>
        <div>
        <div className="labelButton">
        <label >Rasgos del cargo: </label>
        <button type="button" onClick={addImportante}>+</button>
        <button type='button' onClick={handleRemoveImportante}>-</button>
        </div>
        {importantes.map((importante, index) => (
          <div key={index}>
            <input
              type="text"
              id={`importante${index}`}
              value={importante}
              onChange={(e) => {handleImportanteChange(index, e); dataUpdater.actualizarEnlace('importantes', index, e.target.value)  }}
            />
          </div>
        ))}
        </div>
      

        <button type="submit" >Enviar</button>
      </form>
      <ArrayEditer
        data={data}
        setData={setData}
        array={'workArray'}
        setSetter={isExpandedArrayWork}
        isExpanded={setIsExpandedArrayWork}
      />

      </Collapse>
    )
}

export default ContactWork