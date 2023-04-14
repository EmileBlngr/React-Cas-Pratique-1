import '../styles/CareScale.css'
function CareScale({light, water}) {
    function careWord(param){
        let careWord = '';
        switch (param){
            case 1:
                careWord = 'peu';
            break;
            case 2:
                careWord = 'modérément';
            break;
            case 3:
                careWord = 'beaucoup';
            break;
            default:
                careWord = 'pas';
        }
        return(careWord)
    }
    const careRange = [1,2,3];

    function carescaleClick(light, water){
        let lightString = careWord(light);
        let waterString = careWord(water);
        alert("Cette plante requiert " + waterString + " d'arrosage et " + lightString + " de lumière");
    }

    
    return(
        <div onClick={() => carescaleClick(light, water)} className='emoji-container'>
            {careRange.map((rangeElem) =>
            light >= rangeElem ? <span key = {rangeElem.toString()} className='emoji'>☀️</span> : null)}
            {careRange.map((rangeElem) =>
            water >= rangeElem ? <span key = {rangeElem.toString()} className='emoji'>💧</span> : null)}
        </div>
    )
}
export default CareScale; 