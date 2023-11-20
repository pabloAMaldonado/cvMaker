import React, { useMemo } from 'react';
import './cPersonal.css';
import Collapse from './foldForm';
import DataUpdater from './cvInputUpdater'

function Cpersonal({ fullName, cellPhone, eMail, adress, setFullName, setCellPhone, setEmail, setAdress, links, setLinks, setSetter, isExpanded, data, setData }) {

  const dataUpdater = new DataUpdater(data, setData);

  function handleInputChange(setter, e) {
    setter(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  function handleLinkChange(index, e) {
    const updatedLinks = [...links];
    updatedLinks[index] = e.target.value;
    setLinks(updatedLinks);
  }
  const maxLinks = 3;

  function addLink() {
    if (links.length < maxLinks) {
      setLinks([...links, '']);
    }
  }
  function handleRemoveLink() {
    if (links.length > 1) {
      const updatedLinks = [...links];
      updatedLinks.pop();
      setLinks(updatedLinks);
  }
}
  return (
    
      <Collapse formName="Informacion personal y contacto" setSetter={setSetter} isExpanded={isExpanded}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => { handleInputChange(setFullName, e); dataUpdater.handleValueChange('nombre', e.target.value)  }}
          />
        </div>

        <div>
          <label htmlFor="cellPhone">Teléfono:</label>
          <input
            type="text"
            id="cellPhone"
            value={cellPhone}
            onChange={(e) => {handleInputChange(setCellPhone, e); dataUpdater.handleValueChange('celular', e.target.value)  }}
          />
        </div>

        <div>
          <label htmlFor="eMail">Email:</label>
          <input
            type="text"
            id="eMail"
            value={eMail}
            onChange={(e) => {handleInputChange(setEmail, e); dataUpdater.handleValueChange('email', e.target.value)  }}
          />
        </div>

        <div>
          <div className="labelButton">
          <label>Enlaces:</label>
          <button type="button" onClick={addLink}>+</button>
          <button type='button' onClick={handleRemoveLink}>-</button>
          </div>
          {links.map((link, index) => (
            <div key={index}>
              <input
                type="text"
                id={`link${index}`}
                value={link}
                onChange={(e) => {handleLinkChange(index, e); dataUpdater.actualizarEnlace('links', index, e.target.value)  }}
              />
            </div>
          ))}
          
        </div>

        

        <button type="submit">Enviar</button>
      </form> </Collapse>
   
  );
}

export default Cpersonal;