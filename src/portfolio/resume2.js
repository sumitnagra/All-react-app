import BackendSkill from './backendskill'
import './resume2.css'
import SkillMeter from './skillmeter'
import Tools from './toolsandlibrary'
const Resume2 = () => {

    return (<>
        <div className="resume2">
            <h3>Skills & Expertise</h3>
            <h2>Frontend</h2>
            <SkillMeter/>
            <h2>Backend</h2>
            <BackendSkill/>
            <h2>Tools and Library</h2>
            <Tools/>
        </div>
    </>)
}
export default Resume2