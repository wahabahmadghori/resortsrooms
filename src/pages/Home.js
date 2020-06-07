import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeatureProducts from '../components/FeatureProducts'

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luririous Rooms" subtitle="deluxe starting at price 299$">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeatureProducts/>
        </>
    )
}

export default Home
