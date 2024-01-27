import React from "react";
import DataUpdater from './cvInputUpdater'


function WorkHandler({data, setData}){
  const dataUpdater = new DataUpdater(data, setData);
  if(data.workArray[0] !== '' ){
    return(
        <div>
          {data.workArray.map((array, index) => (
            <div key={index} className="work">
              <div className="headerWork">
                            <span className='topTxt'>
                                <h2>{array.company} </h2>
                                {array.location !== '' &&(
                                    <h2>-</h2>
                                )}
                                {array.location !== '' &&(
                                    <h2>{array.location}</h2>
                                )}
                                {array.cargo !== '' &&(
                                    <p>|</p>
                                )}
                                {array.cargo !== '' &&(
                                    <h2>   {array.cargo}</h2>
                                )}
                            </span>
                            <span>
                            <h2>{array.fromDate}</h2>
                            {array.toDate !== '' &&(
                                <h2>-</h2>
                            )}
                            {array.toDate !== '' &&(
                                <h2>{array.toDate}</h2>
                            )}
                            </span>
                        </div>

              {array.importantes[0] !== '' &&(
                <ul>
                  {array.importantes.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
    )}
}

export default WorkHandler