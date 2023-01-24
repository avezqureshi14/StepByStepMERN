import React from 'react'
const Home = () => {
    const divStyle = {
  width: '80%', 
  height: '300px', 
  borderRadius: '21px 21px 0 0'
}
    return (
        <div>
            <div  className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div  className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1  className="display-4 font-weight-normal">Punny headline</h1>
                    <p  className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <a  className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div  className="product-device box-shadow d-none d-md-block"></div>
                <div  className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
            </div>

    )
}

export default Home