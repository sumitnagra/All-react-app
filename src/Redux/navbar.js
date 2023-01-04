import { useSelector } from "react-redux"
const Navbar=()=>{
    const {value}=useSelector(state=>state.coustom)
    return(
        <>
        <h1>{value}</h1>
        </>
    )
}
export default Navbar