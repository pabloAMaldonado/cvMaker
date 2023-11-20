import React from "react";
import { useRef, useState, useEffect, useCallback} from "react";
import Menu from '../assets/menu.png'

const Collapse= ({ IsExpanded, children, formName, setSetter, isExpanded }) => {
    const ref= useRef(null);
    const [contentHeight, setcontentHeight]= useState(0);

    useEffect(() => {
        if (ref.current) {
            setcontentHeight(ref.current.clientHeight);
        }
    }, [children]);
    const toggleIsExpanded= useCallback(() => {
        setSetter((isExpanded) => !isExpanded)
    }, [isExpanded, setSetter])

    const collapseClassName = isExpanded ? 'collapse open' : 'collapse';

  return (
    <div>
        <div className="headerInput">
      <p>{formName}</p>
      <button 
        onClick={toggleIsExpanded}
        className= 'menu'
      >
        <img src={Menu} alt="button to collapse" />
      </button>
      </div>
      <div className={collapseClassName}>
        <div 
        ref={ref}
        >
            {children}</div>
      </div>
    </div>
  );
};


export default Collapse