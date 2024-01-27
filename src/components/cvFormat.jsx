import React from 'react';
import Phone from '../assets/phone-call.png'
import Mail from '../assets/mail.png'
import WorkHandler from './workHandler'
import EduHandler from './eduHandler'
import PpHandler from './ppHandler'
import SkillHandler from './skillHandler'
import DataUpdater from './cvInputUpdater'
import './cvFormat.css'


function CvFormat({data, setData}
    // nombre, celular, links, email,
    // company, location, fromDate, toDate, cargo, importantes, workArray,
    // institucion, carrera, fromDateUni, toDateUni, descUni, eduArray,
    // proyectName, descProyect, importanteProyect, ppArray,
    // skillName, descSkill, skillArray
    ){
        const dataUpdater = new DataUpdater(data, setData);
    return(
        <div className="cVDisplayer" id='cVDisplayer'>
            <div className="infoContacto">
                <h2 className='textHeader'>{data.nombre}</h2>

                <div className="datosContacto">
                    {data.celular !== '' && (
                    <span>
                        <img src={Phone} alt="celular" />
                        <h3>{data.celular}</h3>
                    </span>
                    )}

                    {data.email !== '' && (
                    <span>
                        <img src={Mail} alt="email" />
                        <h3>{data.email}</h3>
                    </span>
                    )}
                    
                    {data.links[0] !== '' &&(
                    <ul className="links">
                    {data.links.map((link, index) => (
                    <li key={index}>{link}</li>
                    ))}
                    </ul>)}
                </div>
                
            </div>
            <div className="workInfo">
                <h2 className='textHeader'>Experiencia Laboral</h2>
                <hr />
                <div className="trabajo">
                        <WorkHandler
                        data={data}
                        setData={setData}
                        />
                        <div className="work">
                        <div className="headerWork">
                            <span className='topTxt'>
                                <h2>{data.company} </h2>
                                {data.location !== '' &&(
                                    <h2>-</h2>
                                )}
                                {data.location !== '' &&(
                                    <h2>{data.location}</h2>
                                )}
                                {data.cargo !== '' &&(
                                    <p>|</p>
                                )}
                                {data.cargo !== '' &&(
                                    <h2>   {data.cargo}</h2>
                                )}
                            </span>
                            <span>
                            <h2>{data.fromDate}</h2>
                            {data.toDate !== '' &&(
                                <h2> - {data.toDate}</h2>
                            )}
                            </span>
                        </div>
                        
                            {data.importantes[0] !== '' &&(
                                <ul>
                                {data.importantes.map((elemento, index) => (
                                    <li key={index}>{elemento}</li>
                                ))}
                                </ul>
                            )}
                            </div>
                </div>
            </div>
            <div className="eduInfo">
                <h2 className='textHeader'>Educacion</h2>
                <hr />
                <div className="estudios">
                        <EduHandler
                            data={data}
                            setData={setData}
                        />
                        <div className="edu">
                        <div className="headerEdu">
                            <span className='topTxt topTxtEdu'>
                                    <h2>{data.institucion}</h2>
                                    {data.carrera !== '' &&(
                                        <h2>  {data.carrera}</h2>
                                    )}
                                    
                            </span>
                            <span>
                                <h2>{data.fromDateUni}</h2>
                                {data.toDateUni !== '' &&(
                                    <h2>-</h2>
                                )}
                                 {data.toDateUni !== '' &&(
                                    <h2>{data.toDateUni}</h2>
                                )}
                            </span>
                        </div>
                        </div>
                </div>
            </div>
            <div className="projPersonales">
                <h2 className='textHeader'>Projectos Personales</h2>
                <hr />
                <div className="projectos">
                        <PpHandler
                            data={data}
                            setData={setData}
                        />
                       <div className="pp">
                        <div className="headerPp">
                                <h2 className='topTxt'>{data.proyectName}</h2>
                                {data.descProyect !== '' &&(
                                    <h2>   {data.descProyect}</h2>
                                )}
                        </div>
                        {data.importanteProyect[0] !== '' &&(
                            <ul>
                                {data.importanteProyect.map((elemento, index) => (
                                    <li key={index}>{elemento}</li>
                                ))}
                            </ul>
                            )}
                        </div>
                </div>
            </div>
            <div className="skillList">
                <h2 className='textHeader'>Habilidades</h2>
                <hr />
                <div className="skills">
                    <SkillHandler
                            data={data}
                            setData={setData}
                      />
                    <div className="skill">
                        <h2 className='topTxt'>{data.skillName}</h2>
                        {data.descSkill !== '' &&(
                            <h2>-</h2>
                        )}
                        {data.descSkill !== '' &&(
                            <h2>{data.descSkill}</h2>
                        )}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CvFormat