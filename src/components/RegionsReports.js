// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Container } from 'react-bootstrap';

// const RegionReport = () => {
//   const [regions, setRegions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('http://localhost:8080/api/regions');
//       setRegions(result.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <Container>
//       <h2>Lista obszarów z przypisanym serwisantem</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Obszar</th>
//             <th>Serwisant</th>
//           </tr>
//         </thead>
//         <tbody>
//           {regions.map(region => (
//             <tr key={region.id}>
//               <td>{region.name}</td>
//               <td>{region.technician_id ? region.technician_id.last_name : 'Brak przypisanego serwisanta'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default RegionReport;
