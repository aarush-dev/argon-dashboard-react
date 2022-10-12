import React, { useState, useEffect, useRef, Fragment } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaUndo, FaRedo } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function Player(props) {

    const waveformRef = useRef();
    const trackRef = useRef(); // Separated track playing from waveplayer to support bigger audio files
    const [waveSurfer, setWaveSurfer] = useState(null); // Holds the reference to created wavesurfer object

    const [playingAudio, setPlayingAudio] = useState(false);

    const playAudio = () => {
        if (!props.hideWave)
            waveSurfer.play();
        else
            trackRef.current.play();
        setPlayingAudio(true);
    };

    const pauseAudio = () => {
        if (!props.hideWave)
            waveSurfer.pause();
        else
            trackRef.current.pause();
        setPlayingAudio(false);
    };

    useEffect(() => {
        if (waveformRef.current && trackRef.current && !props.hideWave) {
            const wavesurfer =WaveSurfer.create({
                    container: "#waveform",
                    responsive: true,
                    backend: "MediaElement",
                    barHeight: 50,
                    normalize:true
                });
            // Load the waveForm json if provided
            props.waveJson  
                ? wavesurfer.load(trackRef.current)
                : wavesurfer.load(trackRef.current, props.waveJson);
            wavesurfer.setHeight(86);
            wavesurfer.setProgressColor("#f96332");
            wavesurfer.setCursorColor("#ffffff00");
            


            wavesurfer.on("ready", () => {
                setWaveSurfer(wavesurfer);
                // Returns the instance to call methods on
                if (typeof props.getWaveSurferInstance === 'function') {
                    props?.getWaveSurferInstance(waveSurfer)
                }
                
            waveSurfer.on("finish", () => {
                setPlayingAudio(false);
            });
            


            });

            if (props?.events) {
                Object.entries(props.events).map(([key, value]) => {
                    waveSurfer.on(key, value);
                })
            }
        }
    }, [
        props.audioUrl,
        props.health,
        props.date
    ]);

    return (
        <>
            <tr>
                <th scope="row" className="pt-0 pb-0">
                    <div style={{ maxWidth: "20vh", maxHeight: "86px" }}>
                        <div ref={waveformRef} id="waveform" />
                        <audio src={props.audioUrl} ref={trackRef} />
                    </div>
                </th>
                <td>
                    {playingAudio ? (
                        <FaPause
                            style={{ margin: "20px", cursor: "pointer" }}
                            onClick={() => (playingAudio ? pauseAudio() : playAudio())}
                        />
                    ) : (
                        <FaPlay
                            style={{ margin: "20px", cursor: "pointer" }}
                            onClick={() => (playingAudio ? pauseAudio() : playAudio())}
                        />
                    )}
                </td>
                <td>{props.date} October 2022</td>
                <td>
                    {props.health}
                </td>
            </tr>
        </>
    );
}