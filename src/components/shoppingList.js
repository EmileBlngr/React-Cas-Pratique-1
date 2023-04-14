import { useState } from 'react';
import plantList from '../datas/plantList'
import '../styles/shoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem'
function ShoppingList({cart, updateCart}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.type) ? acc : acc.concat(plant.type),
		[]
	)
	
	const [activeCategory, setActiveCategory] = useState('')

	function addToCart(name, price){
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded){
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
		updateCart([
			...cartFilteredCurrentPlant,
			{name, price, amount : currentPlantAdded.amount + 1}
		])
		}
		else{
			updateCart([...cart, {name, price, amount:1}])
		}
	}
	return (
		<div className='shoppinglist-container'>
			<Categories 
				categories={categories}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>

			<ul className='lmj-plant-list'>
            {plantList.map(({ id, cover, name, water, light, price, type }) => (
				!activeCategory ||activeCategory === type ? (
				<div key = {id}>
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						price = {price}
					/>
					<button onClick = {() => addToCart(name, price)} className = 'cart-add-btn'>Ajouter au panier</button>
				</div>
					) : null		
				))}
			</ul>
			
		</div>
	)
}
export default ShoppingList;
