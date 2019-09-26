import React, {useMemo, useState, useEffect} from 'react'
import Title from '../Title'

export default function RoomsFilter({rooms,onFilter, types,capacity,searchQuery}){

    const [typeRoomSearch, setTypeRoom ] = useState('all')
    const [capacitySearch, setCapacity] = useState(0)
    const [priceSearch, setPrice] = useState(0)
    const [breakfastSearch, setBreakfast] = useState(false)
    const [petsSearch, setPets] = useState(false)

    const minPrice = Math.min(...rooms.map(room => room.price ))
    const maxPrice = Math.max(...rooms.map(room => room.price ))
    types = ['all', ...types]
    
    const typesOptions = useMemo(() =>{
        return types.map(((type,key) => <option value={type} key={key}>{type}</option>))
    },[types])

    const capacityOptions = useMemo(() =>{
        return capacity.map(((type,key) => <option value={type} key={key}>{type}</option>))
    },[capacity])

    useEffect(() => onFilter() ,[])// eslint-disable-line


    useEffect(()=> {
        if(typeRoomSearch !== 'all'){
           onFilter(typeRoomSearch,'type', ((attribute, term) =>  rooms.filter(room => room[attribute] === term )))
        }
        if(capacitySearch > 1){
            onFilter(capacitySearch, 'capacity', (( attribute, term) => rooms.filter(room => room[attribute] >= term )))
        }
        if(priceSearch > 1){
            onFilter(priceSearch, 'price', (( attribute, term) => rooms.filter(room => room[attribute] >= term )))
        }

        if(breakfastSearch){
            onFilter(breakfastSearch, 'breakfast', (( attribute, term) => rooms.filter(room => room[attribute] === term )))
        }

        if(petsSearch){
            onFilter(petsSearch, 'pets', (( attribute, term) => rooms.filter(room => room[attribute] === term )))
        }

    } ,[typeRoomSearch, capacitySearch, priceSearch, breakfastSearch, petsSearch, onFilter, rooms]) // eslint-disable-line

    function handleChange(e){
        const {name} = e.target
        switch (name) {
            case 'type':
                setTypeRoom(e.target.value)
                break;
            case 'capacity':
                setCapacity(e.target.value)
                break;
            case 'price':
                setPrice(e.target.value)
                break;
            default:
                break;
        }
    }
    
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/** select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={typeRoomSearch} className="form-control" onChange={handleChange}>
                    {typesOptions}
                    </select>
                </div>
                {/** end select type */}
                 {/** select guests */}
                 <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select name="capacity" id="type" value={capacitySearch} className="form-control" onChange={handleChange}>
                    {capacityOptions}
                    </select>
                </div>
                {/** end select guests */}

                 {/** select guests */}
                 <div className="form-group">
                    <label htmlFor="type">Price</label>
                    {priceSearch}
                    <input type="range" name="price" min={minPrice} max={maxPrice} value={priceSearch} onChange={handleChange} className="form-control" />
                </div>
                {/** end select guests */}

                {/** select guests */}
                {/* <div className="form-group">
                    <label htmlFor="type">room size</label>
                   <div className="size-inputs">
                       <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                       <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                   </div>
                </div> */}
                {/** end select guests */}


                {/** select guests */}
                <div className="form-group">
                   <div className="single-extra">
                       
                       <input type="checkbox" name="breakfast" id="breakfast" onChange={ _ => setBreakfast(!breakfastSearch)} checked={breakfastSearch}/>
                       <label htmlFor="breakfast">breakfast</label>
                   </div>
                   <div className="single-extra">
                       
                       <input type="checkbox" name="pets" id="pets" onChange={ _ => setPets(!petsSearch)} checked={petsSearch}/>
                       <label htmlFor="pets">pets</label>
                   </div>
                </div>
                {/** end select guests */}
            </form>
        </section>
    )
}