import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const SendEmail = ({ regions, technicians }) => {
  const handleSendEmails = async () => {
    for (const technician of technicians) {
      const assignedAreas = regions.filter(region => region.idSerwisanta === technician.id);
      const emailContent = assignedAreas.map(region => region.name).join(', ');
      await axios.post('http://localhost:8080/api/send-email', {
        email: technician.email,
        content: `Przypisane obszary: ${emailContent}`
      });
    }
    alert('Wiadomości email zostały wysłane.');
  };

  return <Button onClick={handleSendEmails}>Wyślij maile do serwisantów</Button>;
};

export default SendEmail;
