import React, { useState, useEffect } from 'react';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater'
import ArrayEditer from "./ArrayEditer";



function Pproyect({proyectName, setProyectName, descProyect, setDescProyect, importanteProyect, setImportanteProyect, array, setArray, setSetter, isExpanded, data, setData}){
    function handleInputChange(setter, e) {
        setter(e.target.value);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const pp= {
        proyectName: proyectName,
        descProyect: descProyect,
        importanteProyect: importanteProyect
      };

      dataUpdater.arrayUpdater(pp, 'ppArray')

      setProyectName('');
      setDescProyect('');
      setImportanteProyect(['']);

      setData(prevData => ({
        ...prevData,
        proyectName: '',
        importanteProyect: ['']
      }));
      
      }
    
      function handleImportanteProyectChange(index, e) {
        const updatedImportanteProyect = [...importanteProyect];
        updatedImportanteProyect[index] = e.target.value;
        setImportanteProyect(updatedImportanteProyect);
      }
      const maxLinks = 3;

      function addImportanteProyect() {
        if (importanteProyect.length < maxLinks) {
          setImportanteProyect([...importanteProyect, '']);
        }
      }
      function handleRemoveImportanteProyect() {
        if (importanteProyect.length > 1) {
          const updatedImportanteProyect = [...importanteProyect];
          updatedImportanteProyect.pop();
          setImportanteProyect(updatedImportanteProyect);
      }
    }
     const dataUpdater = new DataUpdater(data, setData);
     const [isExpandedArraypp, setIsExpandedArraypp]= useState(false)

    return(
      <Collapse formName="Proyectos personales" setSetter={setSetter} isExpanded={isExpanded}>
            
            <form onSubmit={handleSubmit}>
            <div>
          <label htmlFor="proyectName">Nombre:</label>
          <input
            type="text"
            id="proyectName"
            value={proyectName}
            onChange={(e) => {handleInputChange(setProyectName, e); dataUpdater.handleValueChange('proyectName', e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="descProyect">Descripcion del proyecto:</label>
          <input
            type="text"
            id="descProyect"
            value={descProyect}
            onChange={(e) => {handleInputChange(setDescProyect, e); dataUpdater.handleValueChange('descProyect', e.target.value) }}
          />
        </div>
        <div>
        <div className="labelButton">
        <label >Puntos importantes:</label>
        <button type="button" onClick={addImportanteProyect}>+</button>
        <button type='button' onClick={handleRemoveImportanteProyect}>-</button>

        </div>
        {importanteProyect.map((importanteProyec, index) => (
          <div key={index}>
            <input
              type="text"
              id={`importanteProyec${index}`}
              value={importanteProyec}
              onChange={(e) => {handleImportanteProyectChange(index, e); dataUpdater.actualizarEnlace('importanteProyect', index, e.target.value)}}
            />
          </div>
        ))}
        </div>
        

        <button type="submit">Enviar</button>
        </form>
        <ArrayEditer
        data={data}
        setData={setData}
        array={'ppArray'}
        setSetter={isExpandedArraypp}
        isExpanded={setIsExpandedArraypp}
      />
        </Collapse>
    )
}

export default Pproyect