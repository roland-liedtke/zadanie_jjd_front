// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Container, Form } from 'react-bootstrap';

// const ActivityReport = () => {
//   const [technicians, setTechnicians] = useState([]);
//   const [selectedTechniciantId, setSelecteTechnicianId] = useState(null);
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchTechnicians = async () => {
//       const result = await axios('http://localhost:8080/api/technicians');
//       setTechnicians(result.data);
//     };
//     fetchTechnicians();
//   }, []);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       if (selectedTechniciantId) {
//         const result = await axios(`http://localhost:8080/api/technicians/${selectedTechniciantId}/activities`);
//         setActivities(result.data);
//       }
//     };
//     fetchActivities();
//   }, [selectedTechniciantId]);

//   return (
//     <Container>
//       <h2>Lista zaplanowanych działań dla serwisanta</h2>
//       <Form.Group controlId="serwisantSelect">
//         <Form.Label>Wybierz serwisanta</Form.Label>
//         <Form.Control as="select" value={selectedTechniciantId} onChange={(e) => setSelecteTechnicianId(e.target.value)}>
//           <option value="">Wybierz serwisanta</option>
//           {technicians.map(technician => (
//             <option key={technician.id} value={technician.id}>
//               {technician.nazwisko}
//             </option>
//           ))}
//         </Form.Control>
//       </Form.Group>
//       {activities.length > 0 && (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Opis Działania</th>
//               <th>Planowany Czas</th>
//               <th>Obszar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {activities.map(activity => (
//               <tr key={activity.id}>
//                 <td>{activity.opisDzialania}</td>
//                 <td>{activity.planowanyCzas} min</td>
//                 <td>{activity.obszar.nazwa}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default ActivityReport;
