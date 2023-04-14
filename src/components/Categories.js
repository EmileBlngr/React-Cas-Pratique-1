import '../styles/Categories.css'
function Categories({categories, activeCategory, setActiveCategory}){
    
    return (
        <div>
            {console.log(categories)}
        <select 
            value = {activeCategory}
            onChange = {(e) => setActiveCategory(e.target.value)}
            className='category-list'
        >
            <option value = ''>---</option>
            {categories.map((cat) => (
                <option key = {cat} value = {cat} className='category-list-element'>{cat}</option>
            ))}
        </select>
        <button onClick ={() => setActiveCategory('')}>Afficher tous</button>
        </div>
    )
}
export default Categories;