// Parte de  Productos :)
import React from 'react'

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

const CardGrid2Example = () => {
  return ( 
    <CRow xs={{ cols: 1, gutter: 5 }} md={{ cols: 5 }}>
      {/* Producto 1*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.1.jpeg" />
          <CCardBody>
            <CCardTitle>Smartphone Galaxi S22</CCardTitle>
            <CCardText>
            Celular alta gama con pantalla AMOLED de 6.1\", 128GB de almacenamiento y camara de 50MG".
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
{/* Producto 2*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.2.jpeg" />
          <CCardBody>
            <CCardTitle>Laptop Lenovo</CCardTitle>
            <CCardText>
           Notebook ultradelgada con procesador Intel i7, 16GB RAM y SSD de 512GB.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 3*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.3.jpeg" />
          <CCardBody>
            <CCardTitle>Arduino Uno R3</CCardTitle>
            <CCardText>
           Placa de desarrollo basada en ATmega328P ideal para proyectos de robotica y automatizacion.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 4*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.4.jpeg" />
          <CCardBody>
            <CCardTitle>Disco duro externo 1TB</CCardTitle>
            <CCardText>
           Almacenamiento portatil de alta velocidad con conexion USB 3.0.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 5*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.5.jpeg" />
          <CCardBody>
            <CCardTitle>Teclado mecanico RGB</CCardTitle>
            <CCardText>
           Teclado para gaming con switches mecanicos y retroiluminacion RGB personalizable.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 6*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.6.jpeg" />
          <CCardBody>
            <CCardTitle>Cable HDMI</CCardTitle>
            <CCardText>
           Cable de alta velocidad para transmision de video en 4K.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 7*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.7.jpeg" />
          <CCardBody>
            <CCardTitle>Monitor Samsung 24\ Full HD</CCardTitle>
            <CCardText>
           Pantalla LED con resolucion 1920x1080 y tecnologia antirreflejo.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 8*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.8.jpeg" />
          <CCardBody>
            <CCardTitle>Impresora Multifuncion HP</CCardTitle>
            <CCardText>
           Impresora con capacidad de escaneo fotocopia y conexion WI-FI.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 9*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.1.9.jpeg" />
          <CCardBody>
            <CCardTitle>Memoria RAM 8GB DDR4</CCardTitle>
            <CCardText>
           Modulo de memoria RAM para mejorar el rendimiento de computadoras y laptops.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/*Producto 10*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/producto1.1.webp"/>
          <CCardBody>
            <CCardTitle>Parlante Bluetooth JBL</CCardTitle>
            <CCardText>
            Altavoz portátil con sonido estéreo y batería de larga duración.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 11*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto.2.2.jpeg" />
          <CCardBody>
            <CCardTitle>Smartwatch</CCardTitle>
            <CCardText>
            Reloj inteligente con monitoreo de actividad física y sensor de oxígeno en sangre.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 12*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto3.3.jpeg" />
          <CCardBody>
            <CCardTitle>Cámara Web Full HD Logitech</CCardTitle>
            <CCardText>
            Webcam con resolución 1080p y micrófono integrado
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 13*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto4.4.jpeg" />
          <CCardBody>
            <CCardTitle>Router Wi-Fi TP-Link</CCardTitle>
            <CCardText>
            Dispositivo de red con tecnología dual-band y de cobertura amplia
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 14*/}
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src="src/assets/images/Producto5.5.jpeg" />
          <CCardBody>
            <CCardTitle>SSD NVMe 512GB Kingston</CCardTitle>
            <CCardText>
            Unidad de estado sólido de alta velocidad para computadoras
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      {/* Producto 15*/}
    <CCol xs>
    <CCard>
    <CCardImage orientation="top" src="src/assets/images/Producto6.6.jpg" />
      <CCardBody>
        <CCardTitle>Fuente de Poder 650W Corsair</CCardTitle>
        <CCardText>
        Fuente de alimentación para computadoras con certificación 80 Plus Bronze
        </CCardText>
      </CCardBody>
      <CCardFooter>
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </CCardFooter>
    </CCard>
  </CCol>
{/* Producto 16 */}
 <CCol xs>
 <CCard>
 <CCardImage orientation="top" src="src/assets/images/Producto7.7.jpeg" />
   <CCardBody>
     <CCardTitle>Kit de Sensores para Arduino</CCardTitle>
     <CCardText>
     Conjunto de sensores de temperatura, humedad y movimiento para proyectos de robótica
     </CCardText>
   </CCardBody>
   <CCardFooter>
     <small className="text-body-secondary">Last updated 3 mins ago</small>
   </CCardFooter>
 </CCard>
</CCol>
{/* Producto 17 */}
<CCol xs>
 <CCard>
 <CCardImage orientation="top" src="src/assets/images/Producto8.8.jpeg" />
   <CCardBody>
     <CCardTitle>Mouse inalámbrico Logitech</CCardTitle>
     <CCardText>
     Ratón ergonómico con conexión Bluetooth y sensor óptico de alta precisión
     </CCardText>
   </CCardBody>
   <CCardFooter>
     <small className="text-body-secondary">Last updated 3 mins ago</small>
   </CCardFooter>
 </CCard>
</CCol>
{/* Producto 18 */}
<CCol xs>
 <CCard>
 <CCardImage orientation="top" src="src/assets/images/Producto9.9.jpeg" />
   <CCardBody>
     <CCardTitle> Tarjeta Gráfica Nvidia RTX 3060</CCardTitle>
     <CCardText>
     GPU de alto rendimiento para gaming y edición de video
     </CCardText>
   </CCardBody>
   <CCardFooter>
     <small className="text-body-secondary">Last updated 3 mins ago</small>
   </CCardFooter>
 </CCard>
</CCol>
{/* Producto 19 */}
<CCol xs>
 <CCard>
 <CCardImage orientation="top" src="src/assets/images/Producto10.10.jpg" />
   <CCardBody>
     <CCardTitle> Cable de Red Cat6</CCardTitle>
     <CCardText>
     Cable Ethernet de alta velocidad para conexiones de Internet
     </CCardText>
   </CCardBody>
   <CCardFooter>
     <small className="text-body-secondary">Last updated 3 mins ago</small>
   </CCardFooter>
 </CCard>
</CCol>
{/* Producto 20 */}
<CCol xs>
 <CCard>
 <CCardImage orientation="top" src="src/assets/images/Producto11.jpeg"/>
   <CCardBody>
     <CCardTitle>Cámara de Seguridad Wi-Fi</CCardTitle>
     <CCardText>
     Cámara con visión nocturna y detección de movimiento para monitoreo remoto
     </CCardText>
   </CCardBody>
   <CCardFooter>
     <small className="text-body-secondary">Last updated 3 mins ago</small>
   </CCardFooter>
 </CCard>
</CCol>
</CRow> 
  
  )
}

export default CardGrid2Example
