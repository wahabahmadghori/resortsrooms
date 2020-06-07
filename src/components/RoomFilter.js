import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'


function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        sortedRooms,
        type,
        capacity,
        size,
        price,
        minSize,
        maxSize,
        minPrice,
        maxPrice,
        breakfast,
        pets,
        handleChange
    }=context
    
    const getUnique = (items,name)=>{
        return [...new Set(items.map(item=>item[name]))]
    }
    let types = getUnique(rooms, 'type')
    types = ['all',...types]
    types = types.map((type,index)=>{
        return <option key={index} value={type}>{type}</option>
    })
    let people = getUnique(rooms, 'capacity')
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/*Room Type*/}
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" className="form-control" onChange={handleChange} value={type}>
                            {types}
                    </select>
                </div>
                {/*End Room Type*/}
                {/*Capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity" id="capacity" className="form-control" onChange={handleChange} value={capacity}>
                            {people}
                    </select>
                </div>
                {/*End Room Type*/}
                {/*Price*/}
                <div className="form-group">
                    <label htmlFor="price">Room price {price}</label>
                    <input type="range" name="price" id="price" className="form-control" onChange={handleChange} value={price} min={minPrice} max={maxPrice}/>
                </div>
                {/*End Room Price*/}
                {/*Price*/}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="text" name="minSize" id="size" className="size-input" onChange={handleChange} value={minSize}/>
                        <input type="text" name="maxSize" id="size" className="size-input" onChange={handleChange} value={maxSize}/>
                    </div>
                    
                </div>
                {/*End Room Price*/}
                <div className="form-group">
                {/*Breakfast*/}
                <div className="single-extra">
                    <input
                    type="checkbox"
                    id="breakfast"
                    name="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                    />
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                {/*End Breakfast*/}
                {/*Pets*/}
                <div className="single-extra">
                    <input
                    type="checkbox"
                    id="pets"
                    name="pets"
                    checked={pets}
                    onChange={handleChange}
                    />
                    <label htmlFor="pets">Pets</label>
                </div>
                {/*End Pets*/}
                </div>
            </form>
        </section>
    )
}

export default RoomFilter
