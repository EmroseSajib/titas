import { useEffect, useState } from 'react';
import './App.css';
import DashBoard from './screens/DashBoard';
import ManagingDirectorScreen from './screens/ManagingDirectorScreen';
import MinisterScreen from './screens/MinisterScreen';
import RoutineScreen from './screens/RoutineScreen';

function App() {
  const components = [
    DashBoard,
    MinisterScreen,
    ManagingDirectorScreen,
    RoutineScreen,
  ];
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next component in a cyclic manner
      const nextIndex = (currentComponentIndex + 1) % components.length;
      setCurrentComponentIndex(nextIndex);
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval);
  }, [currentComponentIndex]);

  const CurrentComponent = components[currentComponentIndex];

  return (
    <div className=''>
      <CurrentComponent />
      {/* <RoutineScreen /> */}
    </div>
  );
}

export default App;
