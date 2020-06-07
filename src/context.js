import React, { Component } from 'react'
import Client from './contentful'
import items from "./data"

const RoomContext = React.createContext()



class RoomProvider extends Component {
    state={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        size:0,
        minSize:0,
        maxSize:0,
        minPrice:0,
        maxPrice:0,
        breakfast:false,
        pets:false

    }

     getData= async()=> {
        try {
           let response= await Client
            .getEntries({
              content_type:"resortRooms",
              order:'-fields.price'
            }) 
            let rooms = this.formatData(response.items)
    
            let featuredRooms = rooms.filter(room=>room.featured===true)
            let maxSize = Math.max(...rooms.map(room=>room.size))
            let maxPrice = Math.max(...rooms.map(room=>room.price))


            console.log(featuredRooms)
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxSize,
                maxPrice
            }) 

        } catch (error) {
            console.log(error)
        }
    }
componentDidMount(){
    this.getData()
}
formatData(items){
    let tempRooms= items.map(item=>{
        let id = item.sys.id
        let images = item.fields.images.map(image=>image.fields.file.url)
        let room= {...item.fields,id,images}
        return room
    })
    return tempRooms
}  

handleChange = event=>{
     const target = event.target
     const value = target.type ==='checkbox'?target.checked:target.value
     const name =  target.name

     this.setState({
         [name]:value
     },this.filterRooms)
   
    
}

filterRooms = ()=>{
    let {
        rooms,
        type,
        capacity,
        price,
        size,
        minSize,
        maxSize,
        minPrice,
        maxPrice,
        breakfast,
        pets
    }=this.state
    capacity = parseInt(capacity)
    let tempRooms =[...rooms]
    //filter by type
    if(type!=='all'){
        tempRooms = tempRooms.filter(room=>room.type===type)
    }
    //filter by capacity
    if(capacity!==1){
        tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
    }

    //filter by price
    tempRooms = tempRooms.filter(room=>room.price <= price)
    //filter by size
    minSize=parseInt(minSize)
    maxSize=parseInt(maxSize)

    tempRooms = tempRooms.filter(room=>room.size >= minSize && room.size <= maxSize)

    //filter by breakfast
    if(breakfast){
        tempRooms = tempRooms.filter(room=>room.breakfast === breakfast)
    }
    
    //filter by pet
    if(pets){
        tempRooms = tempRooms.filter(room=>room.pets === pets)
    }
    
    this.setState({
        sortedRooms:tempRooms
    })

}

getRoom=slug=>{
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find((room)=>room.slug===slug)
    return room
}  
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
    return function RoomWrapper(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export {RoomProvider,RoomConsumer,RoomContext}
