import BackendSkillMeter from './backendSkillmeter'
import './resume2.css'
import SkillMeter from './skillmeter'
const Resume2 = () => {

    return (<>
        <div className="resume2">
            <h3>Skills & Expertise</h3>
            <h1>Frontend</h1>
            <SkillMeter />
            <h1>Backend</h1>
            <BackendSkillMeter/>
        </div>
    </>)
}
export default Resume2