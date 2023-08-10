import img1 from '../images/loading.gif';


function Loading() {
  
    return (
        <>
        <div className="text-center">

            <img style={{"mixBlendMode":"darken"}}  height={100} src={img1} alt="image" />
            <h3>Loading...</h3>
        </div>
        </>
    )
}
export default Loading;