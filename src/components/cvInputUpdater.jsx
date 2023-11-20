import React from 'react';

class DataUpdater {
  constructor(data, setData) {
    this.data = data;
    this.setData = setData;
  }

  actualizarCampo = (campo, valor) => {
    this.setData((prevData) => ({
      ...prevData,
      [campo]: valor
    }));
  };

  handleValueChange = (campo, value) => {
    this.actualizarCampo(campo, value);
  };

  actualizarEnlace = (campo, index, valor) => {
    const updatedSet = [...this.data[campo]];
    updatedSet[index] = valor;
    this.actualizarCampo(campo, updatedSet);
  };

  actualizarArray = (array, campo, index, valor) => {
    this.setData((prevData) => {
      const updatedArray = [...prevData[array]]; // Copy of the nested array
      updatedArray[index][campo] = valor; // Update the specific field in the nested array
  
      // Return a new object with the updated nested array
      return {
        ...prevData,
        [array]: updatedArray,
      };
    });
  };
  

  actualizarArrayArray = (array, arrayArray, index, indexIndex, valor) => {
    this.setData((prevData) => {
      const updatedArray = [...prevData[array]]; // Copy of the outer array
      const updatedNestedArray = [...updatedArray[index][arrayArray]]; // Copy of the nested array
      updatedNestedArray[indexIndex] = valor; // Update the specific field in the nested array
      updatedArray[index][arrayArray] = updatedNestedArray; // Update the nested array within the outer array
  
      // Return a new object with the updated nested array within the outer array
      return {
        ...prevData,
        [array]: updatedArray,
      };
    });
  };

  arrayUpdater= (obj, campo) =>{
    const isTrabajoEmpty = Object.values(obj).some(value => value === '');
    const isArrayZeroEmpty = !this.data[campo][0] || this.data[campo][0].length === 0;

    this.setData((prevData) => {
      if (isTrabajoEmpty && isArrayZeroEmpty) {
        return { ...prevData };
      } else if (!isTrabajoEmpty && isArrayZeroEmpty) {
        return { ...prevData, [campo]: [obj] };
      } else if (!isTrabajoEmpty && !isArrayZeroEmpty) {
        return { ...prevData, [campo]: [...prevData[campo], obj] };
      }
        })
  }
}

export default DataUpdater;