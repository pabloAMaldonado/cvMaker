import React, { useMemo } from 'react';
import DataUpdater from './cvInputUpdater';
import WorkEditer from './workEditer';
import EduEditer from './EduEditer';
import PpEditer from './ppEditer';
import SkillEditer from './skillEditer';
import './arrayEditer.css'

function ArrayEditer({data, setData, array, setSetter, isExpanded}){

    const dataUpdater = new DataUpdater(data, setData);


    if( array== 'workArray'){
        return(
            <WorkEditer
                data= {data}
                setData= {setData}
                isExpanded= {isExpanded}
                setSetter= {setSetter}
            />
        )
    }else if( array == 'eduArray'){
        console.log(data.eduArray)
        return(
            <EduEditer
                data= {data}
                setData= {setData}
                isExpanded= {isExpanded}
                setSetter= {setSetter}
            />
        )
    }else if( array == 'skillArray'){
        return(
            <SkillEditer
                data= {data}
                setData= {setData}
                isExpanded= {isExpanded}
                setSetter= {setSetter}
            />
        )
    }else if( array == 'ppArray'){
        return(
            <PpEditer
                data= {data}
                setData= {setData}
                isExpanded= {isExpanded}
                setSetter= {setSetter}
            />
        )
    }


}
export default ArrayEditer