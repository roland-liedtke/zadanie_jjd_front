import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row, Button, Card } from 'react-bootstrap';


const RegionItem = ({ region, technicians }) => {
  console.log(region)
  const [editMode, setEditMode] = useState(false);
  const [technicianId, setTechnicianId] = useState(region.technicianId);
  const [activities, setActivities] = useState([]);
  const [activityDescription, setActivityDescription] = useState('');
  const [duration, setDuration] = useState('');

  const fetchActivities = async () => {
    const resultActivities = await axios(`http://localhost:8080/api/activities?regionId=${region.id}`);
    setActivities(resultActivities.data);
  };

  const handleEdit = () => {
    setEditMode(true);
    fetchActivities();
  };

  const handleSave = async () => {
    await axios.patch(`http://localhost:8080/api/regions/${region.id}`, { technicianId });
    setEditMode(false);
  };

  const handleAddActivity = async () => {
    await axios.post('http://localhost:8080/api/activities', {
      regionId: region.id,
      desciption: activityDescription,
      duration: parseInt(duration)
    });
    fetchActivities();
    setActivityDescription('');
    setDuration('');
  };

  return (
    <Col className='text-center py-4'>
      <Card className='py-4'>
      <h2>{region.name}</h2>
      
      {editMode ? (
        <Col>
          <div>
            <select value={technicianId} onChange={(e) => setTechnicianId(parseInt(e.target.value))}>
              {technicians.map(technician => (
              <option key={technician.id} value={technician.technician_id}>{technician.last_name}</option>
              ))}
            </select>
            <Button onClick={handleSave} className='btn btn-secondary'>Zapisz</Button>
          </div>
          
          
          <div>
            <h3>Działania</h3>
            <input
              type="text"
              placeholder="Opis działania"
              value={activityDescription}
              onChange={(e) => setActivityDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Planowany czas (min)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <br />
            <Button className='btn btn-secondary' onClick={handleAddActivity}>Dodaj Działanie</Button>
            <ul>
              {activities.map(activity => (
                <li key={activity.id}>{activity.desciption} - {activity.duration} min</li>
              ))}
            </ul>
          </div>
        </Col>
      ) : (
        <div>
          <p>Serwisant: {technicians.find(s => s.id === region.technicianId)?.nazwisko || 'Brak przypisanego serwisanta'}</p>
          <Button onClick={handleEdit} className='btn btn-secondary'>Edytuj</Button>
        </div>
      )}
    </Card>
    </Col>
  );
};

export default RegionItem;
