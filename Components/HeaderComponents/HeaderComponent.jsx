import React, { Component } from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import "./HeaderComponent.css"
import Search from './Search'

export default class HeaderComponent extends Component {
    render() {
        return (
            <section id="HeaderComponent">
                <article>
                {/* <img src="netflixbackground.jpg"/> */}
                        <LeftComponent/>
                        <RightComponent/>
                        {/* <Search/> */}
                        <h1>Unlimited movies, TV</h1>
                        

                </article>
            </section>
        )
    }
}
