import { useEffect, useState } from 'react'

const BackendSkill = () => {
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
            <div className='backendSkill'>

        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png'/>
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
                <h6> NODE JS  {html-20}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://media.zeemly.com/zeemly/product/expressjs.png'/> </div>
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
            <h6> EXPRESS {(html)-15}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://www.omri.dev/static/media/mongodblogo.ef76cdb9.png'/></div>
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
            <h6>MONGODB {(html)-10}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://certref.com/cdn/cache/1170x780/image/2019/05/23/452ca0a2b79a95a25eb41f961b3dffb5.png'/></div>
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
            <h6>MySQL {(html)-20}%</h6>
        </div>
        </div>
    </>)
}
export default BackendSkill