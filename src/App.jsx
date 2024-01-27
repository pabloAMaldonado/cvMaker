import React, { useState, useEffect } from 'react';
import './App.css';
import Cpersonal from './components/cPersonal';
import ContactWork from './components/workInfo';
import EducacionInfo from './components/educacionInfo';
import Pproyect from './components/personalProyect';
import SkillInfo from './components/skillInfo';
import CvFormat from './components/cvFormat';
import DataUpdater from './components/cvInputUpdater';
import SavePDF from './components/savePDF';


function App() {
  const [fullName, setFullName] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [eMail, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [links, setLinks] = useState(['']);

  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('')
  const [fromDate, setFromDate] = useState(''); 
  const [toDate, setToDate] = useState('');
  const [cargo, setCargo] = useState('');
  const [importantes, setImportantes] = useState(['']);

  const [institucion, setInstitucion] = useState('');
  const [carrera, setCarrera] = useState('');
  const [fromDateUni, setFromDateUni] = useState('');
  const [toDateUni, setToDateUni] = useState('');

  const [proyectName, setProyectName] = useState('');
  const [descProyect, setDescProyect] = useState('');
  const [importanteProyect, setImportanteProyect] = useState(['']);

  const [skillName, setSkillName] = useState('');
  const [descSkill, setdescSkill] = useState('');

  const [isExpandedcP, setIsExpandedcP]= useState(false)
  const [isExpandedEi, setIsExpandedEi]= useState(false)
  const [isExpandedPp, setIsExpandedPp]= useState(false)
  const [isExpandedSi, setIsExpandedSi]= useState(false)
  const [isExpandedWi, setIsExpandedWi]= useState(false)

  const [workArray, setWorkArray] = useState(['']);
  const [eduArray, setEduArray]= useState(['']);
  const [ppArray, setPpArray]= useState(['']);
  const [skillArray, setSkillArray]= useState(['']);

  const [isExpandedArrayWork, setIsExpandedArrayWork]= useState(false)


  const [data, setData] = useState({ 
    nombre: '',
    celular:  '' ,
    email: '',
    links: [''],
    company: '',
    location: '',
    fromDate: '',
    toDate: '',
    cargo: '',
    importantes: [''],
    workArray: [''],
    institucion: '',
    carrera: '',
    fromDateUni: '',
    toDateUni: '',
    eduArray: [''],
    proyectName: '',
    descProyect: '',
    importanteProyect: [''],
    ppArray: [''],
    skillName: '',
    descSkill: '',
    skillArray: [''] 
  });

  const dataUpdater = new DataUpdater(data, setData);
  return (
    <>
      <div className="header"></div>
      <div className="inputer">
        
        <Cpersonal
            className= 'inputs'
            fullName={fullName}
            cellPhone={cellPhone}
            eMail={eMail}
            adress={adress}
            links={links}
            setFullName={setFullName}
            setCellPhone={setCellPhone}
            setEmail={setEmail}
            setAdress={setAdress}
            setLinks={setLinks}
            setSetter={setIsExpandedcP}
            isExpanded={isExpandedcP}
            data={data}
            setData={setData}
        />
        <ContactWork
            company={company}
            location={location}
            fromDate={fromDate}
            toDate={toDate}
            cargo={cargo}
            importantes={importantes}
            array={workArray}
            setArray={setWorkArray}
            setCompany={setCompany}
            setLocation={setLocation}
            setFromDate={setFromDate}
            setToDate={setToDate}
            setCargo={setCargo}
            setImportantes={setImportantes}
            setSetter={setIsExpandedWi}
            isExpanded={isExpandedWi}
            data={data}
            setData={setData}


          />
          <EducacionInfo
            institucion={institucion}
            carrera={carrera}
            fromDateUni={fromDateUni}
            toDateUni={toDateUni}
            array={eduArray}
            setArray={setEduArray}
            setInstitucion={setInstitucion}
            setCarrera={setCarrera}
            setFromDateUni={setFromDateUni}
            setToDateUni={setToDateUni}
            setSetter={setIsExpandedEi}
            isExpanded={isExpandedEi}
            data={data}
            setData={setData}


          />
          <Pproyect
            proyectName={proyectName}
            descProyect={descProyect}
            importanteProyect={importanteProyect}
            array={ppArray}
            setArray={setPpArray}
            setProyectName={setProyectName}
            setDescProyect={setDescProyect}
            setImportanteProyect={setImportanteProyect}
            setSetter={setIsExpandedPp}
            isExpanded={isExpandedPp}
            data={data}
            setData={setData}


          />
          <SkillInfo
          skillName={skillName}
          descSkill={descSkill}
          array={skillArray}
          setArray={setSkillArray}
          setSkillName={setSkillName}
          setdescSkill={setdescSkill}
          setSetter={setIsExpandedSi}
          isExpanded={isExpandedSi}
          data={data}
          setData={setData}

          />
      </div>

        <CvFormat
        data={data}
        setData={setData}
        />
        
        <SavePDF/>
    </>
  );
}

export default App;
