import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {RoomContext} from '../context'
import defaultBcg from '../images/room-2.jpeg'
import StyledHero from '../components/StyledHero'

import {Link} from 'react-router-dom'

import React, { Component } from 'react'

export default class SingleRoom extends Component {
    constructor(props){
      super(props)
      this.state ={
        slug:props.match.params.slug
      }
    }
  static contextType = RoomContext
  render() {
    const {getRoom}=this.context
    const room = getRoom(this.state.slug)
   
      if(!room){
       return(<div class="error">
          <h3>no such room can be found...</h3>
          <Link to="/rooms" className='btn-primary'>Back To Rooms</Link>
        </div>)
      }

      const {
        breakfast,
        capacity,
        description,
        extras,
        images,
        name,
        pets,
        price,
        size,
        type }=room
      const [mainImg, ...defaultImg]= images
      return (
        <>
          <StyledHero img={mainImg||defaultBcg}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className='btn-primary'>Back To Rooms</Link>
            </Banner>
          </StyledHero>  

          <section className="single-room">
            <div className="single-room-images">
              {defaultImg.map((item,index)=>(
                <img key={index} src={item} alt={name}/>
              ))}
            </div>
            <div className="single-room-info">
              <div className="desc">
                <h3>
                  {name}
                </h3>
                <p>
                  {description}
                </p>
              </div>
              <div className="info">
                <h3>Info</h3>
                <h6>{`Price ${price}`}</h6>
                <h6>{`Size ${size}SQFT`}</h6>
                <h6>Max Capcity: {capacity>1?`${capacity} People`:`${capacity} Person`}</h6>
                <h6>Pets: {pets?`Allow Pets`:`No Pet Allow`}</h6>
              </div>
            </div>
          </section>
          <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item,index)=>(
                  <li key={index}>-{item}</li>
                ))}
            </ul>
          </section>
        </>
      )
  }
}

