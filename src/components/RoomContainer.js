import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'
import {withRoomConsumer} from '../context'


function RoomContainer({context}){
    const {sortedRooms,rooms,loading}=context
            if(loading){
                return  <Loading/>
            }
            return (
                <>
                    <RoomFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                </>
            )
}
export default withRoomConsumer(RoomContainer)


// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import Loading from './Loading'
// import {RoomConsumer} from '../context'

// function RoomContainer() {
//     return(
//     <RoomConsumer>
//         {value=>{
//             const {sortedRooms,rooms,loading}=value
//             if(loading){
//                 return  <Loading/>
//             }
//             return (
//                 <>
//                     <RoomFilter/>
//                     <RoomList/>
//                 </>
//             )
//         }}
//     </RoomConsumer>
//     ) 
// }

// export default RoomContainer
