import React from "react";
import DataUpdater from './cvInputUpdater'


function EduHandler({data, setData}){
  const dataUpdater = new DataUpdater(data, setData);
  if(data.eduArray[0] !== '' ){
            return(
          <div>
            {data.eduArray.map((array, index) => (
              <div key={index} className="edu">
                <div className="headerEdu">
                            <span className='topTxt topTxtEdu'>
                                
                                    <h2>{array.institucion}</h2>
                                    {array.carrera !== '' &&(
                                        <h2>  {array.carrera}</h2>
                                    )}
                                    
                            </span>
                            <span>
                                <h2>{array.fromDateUni}</h2>
                                {array.toDateUni !== '' &&(
                                    <h2>-</h2>
                                )}
                                 {array.toDateUni !== '' &&(
                                    <h2>{array.toDateUni}</h2>
                                )}
                            </span>
                        </div>
              </div>
            ))}
          </div>
        )
    }
    }

export default EduHandler