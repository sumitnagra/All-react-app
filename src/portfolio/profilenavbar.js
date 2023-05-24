import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const navigateProject = () => {
        navigate("/project")
    }
    const navigateContact=()=>{
        navigate("/contact")
    }
    return (<>
        <div className="profileNav">
            <span className='ProfilenavItem' onClick={navigateContact}>Contact</span>
            <span className="spanProject ProfilenavItem"  onClick={navigateProject}>Projects</span>
            <span className='ProfilenavItem' onClick={()=>{navigate("/resume")}}>Resume </span>
        <div className="name" onClick={()=>{navigate("/")}}><div style={{ width: "29px", height: "29px", borderRadius: "50%", backgroundColor: "rgba(238,163,2,255)", marginRight: "10px", position: "relative", top: "2px" }}></div><span>Sumit Nagra</span></div>
        </div>
    </>)
}
export default Navbar