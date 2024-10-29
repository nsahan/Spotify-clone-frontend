import React, { useContext } from 'react';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import Player from './components/Player';   // Import Player component
import Display from './components/Display'; // Import Display component
import { PlayerContext } from './context/playerContext';

const App = () => {
  const { audioRef,track } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
        <div>
          <Player />
          <audio ref={audioRef} src={track.file} preload='auto'></audio>
        </div>
      </div>
    </div>
  );
};

export default App;
