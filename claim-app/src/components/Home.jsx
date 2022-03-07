import React from 'react'

const Home = () => {
  return (
    <div>
        <section id="home">
                <div className="container">
                    <div className="row justify-content-center" >
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                                Start your claims today 
                            </h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4  rounded-pill px-4 py-2">
                                    Get started
                                </button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">
                                    Our Service
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Home