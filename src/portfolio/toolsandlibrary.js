import { useEffect, useState } from 'react'

const Tools = () => {
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
            <div className='libraray'>

        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://roidayan.net/images/bootstrap-logo.png'/>
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
                <h6> BOOTSTRAP {html-15}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://logodix.com/logo/941120.png'/> </div>
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
            <h6> JQuery {(html)-25}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'/></div>
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
            <h6>REDUX Toolkit {(html)-10}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://front.id/sites/default/files/2017-05/scss.png'/></div>
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
            <h6>SCSS {html}%</h6>
        </div>
        <div className='skill'>
            <div className='outer'>
                <div className='inner'><img src='https://www.disquisitioner.com/img/github-icon-x.png'/></div>
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
            <h6>Git & Github {html-10}%</h6>
        </div>
        </div>
    </>)
}
export default Tools