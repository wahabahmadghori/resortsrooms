import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from '../components/Title'
export default class Services extends Component {
    state={
        services:[
            {icon:<FaCocktail/>,title:'Free Cocktail',info:'Dolore no dolor ipsum eos magna at lorem sea, amet.'},
            {icon:<FaHiking/>,title:'Endless Hiking',info:'Dolore no dolor ipsum eos magna at lorem sea, amet.'},
            {icon:<FaShuttleVan/>,title:'Free Shuttle',info:'Dolore no dolor ipsum eos magna at lorem sea, amet.'},
            {icon:<FaBeer/>,title:'Free Beer',info:'Dolore no dolor ipsum eos magna at lorem sea, amet.'}

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                        })}
                </div>
            </section>
        )
    }
}
