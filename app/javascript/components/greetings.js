import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting, selectGreeting } from '../features/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    // Fetch the random greeting from the API
    fetchRandomGreeting();
  }, []);

  const fetchRandomGreeting = async () => {
    const response = await fetch('/api/random_greeting');
    const data = await response.json();
    dispatch(setGreeting(data.greeting));
  };

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
