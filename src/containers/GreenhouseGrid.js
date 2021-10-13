import React from 'react';
import GreenhouseHeader from '../components/GreenhouseHeader';
import GreenhouseList from '../components/GreenhouseList';


export default function GreenhouseGrid({ loggedUser }) {
  return (
    <>
      <GreenhouseHeader />
      <GreenhouseList loggedUser={loggedUser}/>
    </>
  );
}
