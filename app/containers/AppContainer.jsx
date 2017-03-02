import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function(props) {

    return (
      <div id="body">
        <Navbar />
        { props.children && React.cloneElement(props.children, props) }
        {/*<Footer />*/}
      </div>
    )


}
