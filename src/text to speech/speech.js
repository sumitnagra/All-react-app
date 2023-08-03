import './speech.css'
import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Speech = () => {
    const [speechText, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState();
    const [voicesLoaded, setVoicesLoaded] = useState(false);
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    useEffect(() => {
        getVoices();
        window.speechSynthesis.onvoiceschanged = getVoices;
    }, []);

    const getVoices = () => {
        setVoices(window.speechSynthesis.getVoices());
        setVoicesLoaded(true);
    };

    const handleText = (e) => {
        setText(e.target.value);
    };

    const voiceSelect = (e) => {
        const selectedVoiceIndex = e.target.value;
        const selectedVoice = voices[selectedVoiceIndex];
        setSelectedVoice(selectedVoice);
    };

    const startSpeaking = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = speechText;
        speech.voice = selectedVoice;
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        } else {
            speech.text = speechText;
            speech.voice = selectedVoice;
            window.speechSynthesis.speak(speech);
        }
    };

    const speechTotext = () => {
SpeechRecognition.startListening();
setText(transcript)
    }

    return (
        <>
            <div className="containerDiv">
                <div className="hero">
                    <h1>
                        Text To Speech<span> Converter</span>{' '}
                    </h1>
                    <textarea
                        placeholder="Enter Text Here"
                        value={transcript}
                        onChange={handleText}
                    ></textarea>
                    <div className="drop">
                        {voicesLoaded ? (
                            <select onChange={voiceSelect}>
                                {voices.map((voice, i) => (
                                    <option key={i} value={i}>
                                        {voice.name}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <p>Loading voices...</p>
                        )}
                        <button className="listen" onClick={startSpeaking}>
                            Listen
                        </button>
                        <button className="stop" onClick={speechTotext}>
                            Speeck
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Speech;
