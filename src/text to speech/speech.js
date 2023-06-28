import './speech.css'
import { useState, useEffect } from 'react';
const Speech = () => {
    const [speechText, setText] = useState('')
    const [voices, setVoices] = useState([])
    const [selectedVoice, setSelectedVoice] = useState()


    useEffect(() => {
        window.speechSynthesis.onvoiceschanged = () => {
            setVoices(window.speechSynthesis.getVoices())
           window.speechSynthesis.cancel();
        }
    }, [])

    const handleText = (e) => {
        setText(e.target.value)
    }

    const voiceSelect = (e) => {
              const selectedVoiceIndex = e.target.value;
            const selectedVoice = voices[selectedVoiceIndex];
              setSelectedVoice(selectedVoice);
          };
          
    
    const startSpeeking = () => {
        const speech = new SpeechSynthesisUtterance()
        speech.text = speechText;
        speech.voice=selectedVoice;
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
        else {
            speech.text = speechText;
            speech.voice=selectedVoice;
           window.speechSynthesis.speak(speech);
        }
    }

    const pauseSpeech=()=> {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          speechSynthesis.pause();
        }
      }
    return (<>
        <div className='containerDiv'>
            <div className="hero">
                <h1>Text To Speech<span> Converter</span> </h1>
                <textarea placeholder="Enter Text Here" value={speechText} onChange={handleText}></textarea>
                <div className="drop">
                    <select onChange={voiceSelect}>
                        {
                            voices.map((voice, i) => <option key={i} value={i}>{voice.name}</option>)
                        }
                    </select>
                    <botton className="listen" onClick={startSpeeking}> Listen</botton>
                    <botton className="stop" onClick={pauseSpeech}> Stop</botton>
                </div>
            </div>
        </div>
    </>)
}

export default Speech;