import React, {useEffect, useState} from 'react';
import {Button, Dropdown, IconButton} from "rsuite";
import {FaStop, FaPlay, IoPlayBack, IoPlayForward} from "react-icons/all";
import MoreIcon from '@rsuite/icons/More';
import {Howl} from 'howler';

const Player = () => {

    const [index, setIndex] = useState(0);
    const [playlist, setPlaylist] = useState([
        {
            title: 'Rave Digger',
            file: 'song1',
            howl: null
        },
        {
            title: '80s Vibe',
            file: 'song2',
            howl: null
        },
        {
            title: 'Running Out',
            file: 'song3',
            howl: null
        }
    ]);
    const [isHidden, setIsHidden] = useState(false);
    const [songLoading, setSongLoading] = useState(false);
    const [timer, setTimer] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [currentSongName, setCurrentSongName] = useState('Нажмите плэй');
    const [isPlay, setIsPlay] = useState(false);

    const play = (playIndex) => {
        setSongLoading(true);
        setIsPlay(true);
        let sound;

        playIndex = typeof playIndex === 'number' ? playIndex : index;
        const data = playlist[playIndex];

        if (data.howl) {
            sound = data.howl;
        } else {
            sound = data.howl = new Howl({
                // src: ['./player/' + data.file + '.webm', './player/' + data.file + '.mp3'],
                src: [window.location.origin + '/player/' + data.file + '.mp3'],
                html5: true,
                onplay: function() {
                    setDuration(formatTime(Math.round(sound.duration())));
                    requestAnimationFrame(step.bind(this));
                    setSongLoading(false);
                },
                onload: function() {
                    setSongLoading(false);
                },
                onend: function() {
                    console.log('end')
                    skip('next');
                },
                onseek: function() {
                    console.log('onseek', formatTime(Math.round(sound.duration())))
                    setDuration(formatTime(Math.round(sound.duration())));
                    requestAnimationFrame(step.bind(this));
                }
            });
        }

        sound.play();

        setCurrentSongName((index + 1) + '. ' + data.title)

        setIndex(playIndex);
    }

    const pause = () => {
        setIsPlay(false);

        const sound = playlist[index].howl;

        sound.pause();
    }

    const skip = (direction) => {

        let skipIndex = 0;
        if (direction === 'prev') {
            skipIndex = index - 1;
            if (skipIndex < 0) {
                skipIndex = playlist.length - 1;
            }
        } else {
            skipIndex = index + 1;
            if (skipIndex >= playlist.length) {
                skipIndex = 0;
            }
        }

        skipTo(skipIndex);
    }

    const skipTo = (skipToIndex) => {

        if (playlist[index].howl) {
            playlist[index].howl.stop();
        }

        play(skipToIndex);
    }

    const step = () => {
        const sound = playlist[index].howl;

        const seek = sound.seek() || 0;

        setTimer(formatTime(Math.round(seek)));

        if (sound.playing()) {
            requestAnimationFrame(step.bind(this));
        }
    }

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60) || 0;
        const seconds = (secs - minutes * 60) || 0;

        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    return !isHidden ? <div className={songLoading ? 'player player-loading' : 'player'}>
            <div className="player-timer">
                <span>{timer}:{duration}</span>
            </div>
            <div className="player-title">
                <span>{currentSongName}</span>
            </div>
            <div className="player-control">
                <IconButton onClick={() => skip('prev')} circle className='player-control-btn shaded' size='sm' icon={<IoPlayBack />} />
                <IconButton onClick={() => isPlay ? pause() : play()} circle className='player-control-btn shaded' size='sm' icon={isPlay ? <FaStop /> : <FaPlay />} />
                <IconButton onClick={() => skip('next')} circle className='player-control-btn shaded' size='sm' icon={<IoPlayForward />} />
                <Dropdown renderToggle={(props, ref) => <IconButton {...props} ref={ref} className="casino-btn" circle icon={<MoreIcon />} />}>
                    <Dropdown.Item onClick={() => setIsHidden(true)} className="casino-btn">Скрыть плеер</Dropdown.Item>
                </Dropdown>
            </div>
        </div>
        :
        <Dropdown renderToggle={(props, ref) => <IconButton {...props} ref={ref} className="casino-btn" circle icon={<MoreIcon />} />}>
            <Dropdown.Item onClick={() => setIsHidden(false)} className="casino-btn">Показать плеер</Dropdown.Item>
        </Dropdown>;
};

export default Player;