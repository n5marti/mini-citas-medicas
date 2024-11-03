// src/components/AppointmentForm.js
import React, { useState } from 'react';
import { db } from '../firebase';

// Componente de formulario para agendar citas médicas
function AppointmentForm() {
  // Estado para almacenar el nombre del paciente y la hora de la cita
  const [patientName, setPatientName] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    try {
      // Guarda la cita en Firestore en la colección "appointments"
      await db.collection('appointments').add({
        patientName,
        appointmentTime,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Limpia los campos del formulario después de guardar
      setPatientName('');
      setAppointmentTime('');
      alert("¡Cita agendada con éxito!");
    } catch (error) {
      console.error("Error al agendar la cita:", error);
      alert("Error al agendar la cita.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre del paciente */}
      <input
        type="text"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        placeholder="Nombre del paciente"
        required
      />

      {/* Campo de entrada para la hora de la cita */}
      <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        required
      />

      {/* Botón para enviar el formulario */}
      <button type="submit">Agendar Cita</button>
    </form>
  );
}

export default AppointmentForm;
