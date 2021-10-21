import React from 'react';
import GreenhouseHeader from '../components/GreenhouseHeader';
import GreenhouseList from '../components/GreenhouseList';
import { useHistory } from 'react-router-dom';
import { useUser } from '../hooks/UserProvider';

export default function GreenhouseGrid() {
  const history = useHistory();
  const { user } = useUser();

  // You'll likely want to check if the user is currently being loaded
  if (!user) {
    history.push('/login');
    return null;
  }

  return (
    <>
      <GreenhouseHeader />
      <GreenhouseList />
    </>
  );
}
