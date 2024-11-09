// import logo from './logo.svg';
import './Estilos.css';
//import Spline from '@splinetool/react-spline'; // Importa el componente Spline
import React, { useState, useEffect  } from 'react'; 

function App() {
    // Resetear `showResumen` a false al cargar la página
    useEffect(() => {
      setShowResumen(false);
    }, []);  // La dependencia vacía [] asegura que esto solo se ejecute una vez al montar el componente
  




  // Estado para controlar la visibilidad de la sección 'Resumen' y el fondo del botón
  const [showResumen, setShowResumen] = useState(false);
  const [showGaleria, setShowGaleria] = useState(true);
  const [showCotacto, setShowContacto] = useState(false);
  const [showSeleccionado, setShowSeleccionado] = useState(false);


  const [isActiveAdm, setIsActiveAdm] = useState(false); // Estado para 'Acerca de mi'
  const [isActiveProyecto, setIsActiveProyecto] = useState(false); // Estado para 'Proyectos'
  const [isActiveContact, setIsActiveAContac] = useState(false); // Estado para 'Acerca de mi'
  //const [isActiveProyectoE, setIsActiveProyectoE] = useState(false);
  const [seleccion, setSeleccion] = useState(''); // Estado para 'Acerca de mi

  function buscarElementoPorData({ proyecto }) {
      const encontrado = document.querySelectorAll(`[data-nombre="${proyecto}"]`);
  
      if (encontrado.length >= 0) {
        setShowGaleria(false);
        setShowSeleccionado(true);
        setSeleccion(proyecto);
        console.log("Proyecto seleccionado:",proyecto);
        
      } else {
        console.log("Elemento no encontrado.");
      }
  }

  // Añadir useEffect para ver el valor de seleccion después de actualizarlo
  useEffect(() => {
  console.log("Nuevo valor de seleccion:", seleccion);  // Esto muestra el valor actualizado de 'seleccion'
  }, [seleccion]);  // Se ejecuta cada vez que 'seleccion' cambie
  
  function buttom_back(){
    setShowGaleria(true);
    setShowSeleccionado(false);
    setSeleccion('');
    console.log(seleccion)
    console.log("Seleccion después de limpiar:", seleccion);  // Esto puede mostrar el valor previo

  }
  

  const handleButtonClickAdm = () => {
    // Toggle de la visibilidad de la sección y el estilo del botón
    setShowResumen(true);
    setShowGaleria(false);
    setShowContacto(false)
    //setButtonActive(!buttonActive);
    setIsActiveAdm(!isActiveAdm); // Alterna el estado de activo para el botón
    setIsActiveProyecto(false); // Desactiva el otro botón
    setIsActiveAContac(false);
    setShowSeleccionado(false);
  };

  const handleButtonClickProyecto = () => {
    // Toggle de la visibilidad de la sección y el estilo del botón
    setShowResumen(false);
    setShowGaleria(true);
    setShowContacto(false)
    setIsActiveProyecto(!isActiveProyecto); // Alterna el estado de activo para el botón
    setIsActiveAContac(false);
    setIsActiveAdm(false); // Desactiva el otro botón
    setShowSeleccionado(false);
    //setButtonActive(!buttonActive);
  };

  const handleButtomContact = () =>{
    setShowContacto(true)
    setShowResumen(false);
    setShowGaleria(false);
    setShowContacto(true);
    setIsActiveAContac(true);
    setIsActiveAdm(false);
    setIsActiveProyecto(false)
    setShowSeleccionado(false);
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* Puedes agregar contenido adicional en el encabezado si lo deseas */}
      </header>

        <main>
            
          <h1 id='nombre_titulo'>David Cano Sanchez</h1>
          

          <section className="menu">




              <section id='opciones'>
              <button onClick={handleButtonClickAdm}
              className={isActiveAdm ? 'active' : ''} // Aplicar clase 'active' si el botón está activo
              >
                      <span className="text">Acerca de mi</span>
                      <span >Acerca de mi!</span>
                  </button>


                  <button onClick={handleButtonClickProyecto}
                  className={isActiveProyecto ? 'active' : ''} // Aplicar clase 'active' si el botón está activo
                  >
                      <span className="text" id="proyectos" >Proyectos</span>
                      <span>Proyectos!</span>
                  </button>
                  <button onClick={handleButtomContact}
                  className={isActiveContact ? 'active' : ''}>
                      <span className="text" id="contacto">Contacto</span>
                      <span>Contacto!</span>
                  </button>
              </section>
          </section>


          {showResumen &&
          <section id='resumen'>
            <h1 id='titulo'>Portafolio de Arquitectura</h1>
            <p>Soy David, estudiante de Arquitectura en la Universidad Pontificia Bolivariana de Medellín, una institución que ha sido clave en mi formación profesional y personal. Desde que comencé mi carrera, me he sentido profundamente motivado por el poder transformador de la arquitectura: la capacidad de crear espacios que no solo respondan a necesidades funcionales, sino que también generen emociones, conecten con el entorno y, en muchos casos, mejoren la calidad de vida de las personas.</p>
            <p>Mi enfoque está en integrar los conocimientos teóricos con las experiencias prácticas, utilizando el diseño como una herramienta para abordar problemas sociales, culturales y medioambientales. A lo largo de mi formación en la UPB, he tenido la oportunidad de trabajar en proyectos que exploran la relación entre la arquitectura y la sostenibilidad, la innovación tecnológica y el impacto de los espacios en el bienestar humano. Cada proyecto en el que he participado me ha permitido aprender algo nuevo, ya sea sobre materiales, procesos constructivos, o la importancia de la escala humana en el diseño.</p>
            <p>Este portafolio es una recopilación de mis trabajos más significativos durante mi carrera hasta el momento. A través de estos proyectos, he buscado expresar no solo mis habilidades técnicas, sino también mi pasión por crear soluciones que sean funcionales, estéticamente agradables y responsables con el entorno. Estoy convencido de que la arquitectura tiene un papel fundamental en el desarrollo de ciudades más sostenibles, inclusivas y humanas, y ese es el camino que aspiro seguir en mi futura práctica profesional.</p>
            <section id='contenedor_foto_resumen'>
              <img id='foto_resumen' alt=''></img>
            </section>
            

          </section>
          }
          

          {showGaleria &&
          <section id='section_general'>
          
            <section id='contenedor_card'>
              <div className="card" >
                  <div className="content" onClick={() => buscarElementoPorData({ proyecto: 'Local_true_shop' })}>
                    <div className="back">
                      <div className="back-content" id='Local_true_shop'>
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content" id='back_Local_true_shop'>
                        <small className="badge">Diseño conceptual</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Local true shop</strong>
                            </p>
                            <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg">
                              <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                                <g transform="scale(8,8)">
                                  <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="card-footer">
                            Medellin &nbsp; | &nbsp; Antioquia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                
              <div className="card">
                  <div className="content" onClick={() => buscarElementoPorData({ proyecto: 'Proyecto_de_espacio_publico_Bibliocielo' })}>
                    <div className="back">
                      <div className="back-content" id='Proyecto_de_espacio_publico_Bibliocielo'>          
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content" id='back_Proyecto_de_espacio_publico_Bibliocielo'>
                        <small className="badge">Diseño conceptual</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Proyecto de espacio publico Bibliocielo</strong>
                            </p>
                            <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg">
                              <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                                <g transform="scale(8,8)">
                                  <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="card-footer">
                              Medellin &nbsp; | &nbsp; Antioquia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </section>

            <section id='contenedor_card'>
              <div className="card">
                  <div className="content"  onClick={() => buscarElementoPorData({ proyecto: 'Proyecto_de_vivienda_colectiva' })}>
                    <div className="back">
                      <div className="back-content" id='Proyecto_de_vivienda_colectiva'>
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content" id='back_Proyecto_de_vivienda_colectiva'>
                        <small className="badge">Diseño conceptual</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Proyecto de vivienda colectiva</strong>
                            </p>
                          </div>
                          <p className="card-footer">
                            Medellin &nbsp; | &nbsp; Antioquia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="card">
                  <div className="content" onClick={() => buscarElementoPorData({ proyecto: 'Proyecto_de_Vivienda_trifamiliar' })}>
                    <div className="back">
                      <div className="back-content" id='Proyecto_de_Vivienda_trifamiliar'>
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content" id='back_Proyecto_de_Vivienda_trifamiliar'>
                        <small className="badge">Diseño conceptual</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Proyecto de Vivienda trifamiliar</strong>
                            </p>
                          </div>
                          <p className="card-footer">
                            Medellin &nbsp; | &nbsp; Antioquia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </section>

            <section id='contenedor_card'>
            <div className="card">
                  <div className="content" onClick={() => buscarElementoPorData({ proyecto: 'Centro_Agricola' })}>
                    <div className="back">
                      <div className="back-content" id='Centro_Agricola'>
                      </div>
                    </div>
                    <div className="front">
                      <div className="front-content" id='back_Centro_Agricola'>
                        <small className="badge">Diseño conceptual</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Centro de desarrollo agrícola</strong>
                            </p>
                          </div>
                          <p className="card-footer">
                            Angostura &nbsp; | &nbsp; Antioquia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>


            </section>
          </section>
          }

          {showCotacto &&
          <section id="Contacto">
            {/* Aquí puedes agregar el resto de tu contenido, como los cards */}
            {/* From Uiverse.io by Smit-Prajapati */ }
            <div class="card_contacto">
                <div class="border_contacto"></div>
                <div class="content_contacto">
                  <div class="logo_contacto">
                    <div class="logo1_contacto">
                    
                      <svg viewBox="0 0 29.667 31.69" xmlns="http://www.w3.org/2000/svg" id="logo-main_contacto">
                        {/* Letra "D" */}
                        <text x="0" y="20" font-family="Arial" font-size="20" fill="#bd9f67" id="Path_6_contacto">D</text>                            
                        {/* Letra "C" */}
                        <text x="15" y="20" font-family="Arial" font-size="20" fill="#bd9f67" id="Path_7_contacto">C</text>   
                        <path transform="translate(0 -51.963)" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" data-name="Path 8" id="Path_8_contacto"></path>
                      </svg>
                      <p class='logo1_contacto'>Dv</p>   
                    </div>
                    <div class="logo2_contacto">
                    
                      <svg viewBox="0 0 150.014 23.535" xmlns="http://www.w3.org/2000/svg" id="logo-second_contacto">
                        <g transform="translate(-1029.734 -528.273)">
                        
                        </g>
                        <text x="10" y="15" font-family="Arial" font-size="14" fill="#bd9f67">David Cano Sanchez</text>                 
                      </svg>
                      
                    </div> 
                    <span class="trail_contacto"></span>

                  </div>
                  <span class="logo-bottom-text_contacto">
                  TEL:123456
                  <br /><br />CORREO:Cano@gmail.com
                  <br /><br />CEL:090432
                  </span>
                </div>
                <span class="bottom-text_contacto">A tu servicio</span>
                
              </div>
          </section>
          }

{/**/}    
          { showSeleccionado && seleccion === 'Local_true_shop' && (
          <section className='proyecto_especifico' data-nombre="Local_true_shop">
            <section className="ftp" id='Local_true_shop'>
                <div className='descripcion_proyecto'>
                  <div id='div_butom'>
                    <button className="button" onClick={buttom_back}>
                        <div className="button-box">
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                    </button>
                  </div>

                  <h1>Local true shop</h1>
                  <p>
                  Un proyecto de arquitectura es un diseño que plantea la organización y la estética de un espacio, buscando la funcionalidad, la armonía con el entorno y la satisfacción de las necesidades del usuario. Incluye planos, detalles constructivos y una propuesta visual que orienta la construcción de un edificio o espacio urbano.</p>
                </div>
              
            </section>
          </section> 
          )}
          {/**/}
          
          {showSeleccionado && seleccion === 'Proyecto_de_espacio_publico_Bibliocielo' && (
          <section className='proyecto_especifico' data-nombre="Proyecto_de_espacio_publico_Bibliocielo">
            <section className="ftp" id='Proyecto_de_espacio_publico_Bibliocielo'>
                <div className='descripcion_proyecto'>
                  <div id='div_butom'>
                    <button className="button" onClick={buttom_back}>
                        <div className="button-box">
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                    </button>
                  </div>

                  <h1>Proyecto de espacio publico BiblioCielo</h1>
                  <p>
                  Un proyecto de arquitectura es un diseño que plantea la organización y la estética de un espacio, buscando la funcionalidad, la armonía con el entorno y la satisfacción de las necesidades del usuario. Incluye planos, detalles constructivos y una propuesta visual que orienta la construcción de un edificio o espacio urbano.</p>
                </div>
              
            </section>
          </section> 
          )}

          {showSeleccionado && seleccion === 'Proyecto_de_vivienda_colectiva' && (
          <section className='proyecto_especifico' data-nombre="Proyecto_de_vivienda_colectiva">
            <section className="ftp" id='Proyecto_de_vivienda_colectiva'>
                <div className='descripcion_proyecto'>
                  <div id='div_butom'>
                    <button className="button" onClick={buttom_back}>
                        <div className="button-box">
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                    </button>
                  </div>

                  <h1>Proyecto de vivienda colectiva</h1>
                  <p>
                  Un proyecto de arquitectura es un diseño que plantea la organización y la estética de un espacio, buscando la funcionalidad, la armonía con el entorno y la satisfacción de las necesidades del usuario. Incluye planos, detalles constructivos y una propuesta visual que orienta la construcción de un edificio o espacio urbano.</p>
                </div>
              
            </section>
          </section> 
          )}

          {showSeleccionado && seleccion === 'Proyecto_de_Vivienda_trifamiliar' && (
          <section className='proyecto_especifico' data-nombre="Proyecto_de_Vivienda_trifamiliar">
            <section className="ftp" id='Proyecto_de_Vivienda_trifamiliar'>
                <div className='descripcion_proyecto'>
                  <div id='div_butom'>
                    <button className="button" onClick={buttom_back}>
                        <div className="button-box">
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                    </button>
                  </div>

                  <h1>Proyecto de vivienda trifamiliar</h1>
                  <p>
                  Un proyecto de arquitectura es un diseño que plantea la organización y la estética de un espacio, buscando la funcionalidad, la armonía con el entorno y la satisfacción de las necesidades del usuario. Incluye planos, detalles constructivos y una propuesta visual que orienta la construcción de un edificio o espacio urbano.</p>
                </div>
              
            </section>
          </section> 
          )}

          {showSeleccionado && seleccion === 'Centro_Agricola' && (
          <section className='proyecto_especifico' data-nombre="Centro_Agricola">
            <section className="ftp" id='Centro_Agricola'>
                <div className='descripcion_proyecto'>
                  <div id='div_butom'>
                    <button className="button" onClick={buttom_back}>
                        <div className="button-box">
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                          <span className="button-elem">
                            <svg viewBox="0 0 46 40">
                              <path
                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                    </button>
                  </div>

                  <h1>Centro Agricola</h1>
                  <p>
                  Un proyecto de arquitectura es un diseño que plantea la organización y la estética de un espacio, buscando la funcionalidad, la armonía con el entorno y la satisfacción de las necesidades del usuario. Incluye planos, detalles constructivos y una propuesta visual que orienta la construcción de un edificio o espacio urbano.</p>
                </div>
              
            </section>
          </section> 
          )}


        </main>
      </div>
    );
  }

export default App;
