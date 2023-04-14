import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <div className='test'>
               {name} {price}€
			    <div>
				<CareScale water={water} light={light} />
			    </div> 
            </div>
			
		</li>
	)
}

export default PlantItem
