import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/playerContext';

const Player = () => {
    const { track, seekBar, seekBg, plaStatus, play, pause, time,previous, next, seekSong } = useContext(PlayerContext); // Corrected 'plaStatus' typo from playStatus

    return (
        <div className='h-[10%] w-full bg-black fixed bottom-0 left-0 flex justify-between items-center text-white px-4'>

            <div className='flex items-center gap-4'>
                <img className='w-12' src={track.image} alt={track.name} />
                <div>
                    <p className='font-bold'>{track.name}</p>
                    <p className='text-sm text-gray-400'>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center w-full'>
                <div className='flex gap-4 justify-center'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
                    
                    {/* Conditional Rendering for Play/Pause Button */}
                    {plaStatus ? (
                        <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" />
                    ) : (
                        <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
                    )}
                    
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
                </div>

                <div className='flex items-center gap-5'>
                    <p>
                        {time.currentTime?.minute}:{time.currentTime?.second}
                    </p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>
                        {time.totalTime?.minute}:{time.totalTime?.second}
                    </p>
                </div>
            </div>

            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    );
};

export default Player;
