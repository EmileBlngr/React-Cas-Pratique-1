import Leaf from '../assets/images/leaf.png'
import '../styles/banner.css'

function Banner(){
    return (
        <div className='banner-container'>

            <img src={Leaf} alt ='logo feuille' className='logo-feuille'/>
            <h1 className='titre'>Bandeau site React</h1>
        </div>
    )
}
export default Banner