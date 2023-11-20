import React from "react";
import DataUpdater from './cvInputUpdater'


function SkillHandler({data, setData}){
  const dataUpdater = new DataUpdater(data, setData);

  if(data.skillArray[0] !== '' ){
        return (
          <div>
            {data.skillArray.map((array, index) => (
              <div key={index} className="skill">
                        <h2>{array.skillName}</h2>
                        {array.descSkill !== '' &&(
                            <h2>-  {array.descSkill}</h2>
                        )}
              </div>
            ))}
          </div>
        );
      } else {
        return null; 
      }
}
export default SkillHandler