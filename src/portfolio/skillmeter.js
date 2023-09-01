import { useEffect, useState } from 'react'

const SkillMeter = (props) => {
    const [html, setHtml] = useState(0)
    const targetValue = 90;

    useEffect(() => {
        let intervalId;

        if (html < targetValue) {
            intervalId = setInterval(() => {
                const newValue = html + 1;
                setHtml(newValue > targetValue ? targetValue : newValue);
            }, 20);
        }

        return () => clearInterval(intervalId);
    }, [html, targetValue]);
    return (<>
            <div className='skillmeter'>

        <div className='skill'>
            <div className='outer'>
                <div className='inner'><b>HTML {html}%</b></div>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="180px" height="182px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor='#e91e63' />
                            <stop offset="100%" stopColor='#673ab7' />
                        </linearGradient>
                    </defs>
                    <circle cx="84" cy="82" r="77" strokeLinecap='round' />
                </svg>
            </div>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><b>CSS {(html)-20}%</b></div>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="180px" height="180px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor='#e91e63' />
                            <stop offset="100%" stopColor='#673ab7' />
                        </linearGradient>
                    </defs>
                    <circle cx="84" cy="82" r="77" strokeLinecap='round' />
                </svg>
            </div>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><b>JAVSCRIPT {(html)-20}%</b></div>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="180px" height="180px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor='#e91e63' />
                            <stop offset="100%" stopColor='#673ab7' />
                        </linearGradient>
                    </defs>
                    <circle cx="84" cy="82" r="77" strokeLinecap='round' />
                </svg>
            </div>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><b>REACT {(html)-20}%</b></div>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="180px" height="180px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor='#e91e63' />
                            <stop offset="100%" stopColor='#673ab7' />
                        </linearGradient>
                    </defs>
                    <circle cx="84" cy="82" r="77" strokeLinecap='round' />
                </svg>
            </div>
        </div>
        </div>
    </>)
}
export default SkillMeter