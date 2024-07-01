import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegionItem from './RegionItem';
import SendEmail from './SenEmail';
import { Row } from 'react-bootstrap';

const RegionList = () => {
  const [regions, setRegions] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultRegions = await axios('http://localhost:8080/api/regions');
      const resultTechnicians = await axios('http://localhost:8080/api/technicians');
      setRegions(resultRegions.data);
      setTechnicians(resultTechnicians.data);
    };
    fetchData();
  }, []);

  return (
    <Row className='py-4 px-4'>
      {regions.map(region => (
        <RegionItem key={region.id} region={region} technicians={technicians} />
      ))}
      <SendEmail regions={regions} technicians={technicians} />
    </Row>
  );
};

export default RegionList;
