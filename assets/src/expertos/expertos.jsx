import React from 'react';
import Tarjeta from './tarjeta';
const Expertos = () => {
    const [expertosData, setExpertosData] = useState([]);
    const datosFalsos = [
        {
            id: 1,
            fullName: 'Carla Lopez',
            title: 'Psicólogo',
            location: 'Neuquen, Neuquén ',
            phoneNumber: '+5429922567',
            additionalInfo: 'Trabaja de lunes a viernes de 8am a 3pm solo acepta pacientes con turno. ',
        },
      ];
    };


function ExpertosPage() {
  return (
        <div>
            <Tarjeta />
        </div>
  );
}

export default  ExpertosPage ;