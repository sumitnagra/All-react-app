import { useEffect, useState } from 'react'

const BackendSkillMeter = (props) => {
    const [html, setHtml] = useState(0)
    const targetValue = 80;
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
            <div className='backendskillmeter'>

        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png'/>
                </div>
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
                <h6> Node Js {html}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://clipartcraft.com/images/html5-logo-transparent-background-4.png'/> </div>
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
            <h6> CSS {(html)-10}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://avatars1.githubusercontent.com/u/18371059?s=280&v=4'/></div>
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
            <h6>JAVSCRIPT {(html)-20}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://cdn.auth0.com/blog/react-js/react.png'/></div>
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
            <h6>REACT {(html)-20}%</h6>
        </div>
        </div>
    </>)
}
export default BackendSkillMeter