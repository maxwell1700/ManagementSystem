import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
       <div className="container-fluid mb-5">
           <div className="row">
               
               <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                            <li className="nav-item">
                              <NavLink className="nav-link active" aria-current="page" to="#">
                                 <svg
                                    xmlns="https://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap='round'
                                    stroke-linejoin="round"
                                    class="feather feather-shopping-cart"
                                    aria-hidden="true"
                                 
                                 > 
                                 <circle cx="9" cy="21" r="1"></circle>
                                 <circle cx="20" cy="21" r="1"></circle>
                                 <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2 - 1.61L23 6H6"></path>
                                 </svg>
                                 CLAIMS  
                                </NavLink>      
                            </li>
                            <li class="nav-item">
                                
                            
                            </li>

                    </ul>
                    
                </div>

               </nav>



               <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                 <div className="chartjs-size-monitor">
                     <div className="chartjs-size-monitor-expand">
                         <div class=""></div>
                    </div>

                    <div className="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>  
                 <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h1 class="h1">Dashboard</h1>
                     <div class="btn-toolbar mb-2 mb-md-0">
                         <div clas="btn-group me-2">
                             <button type="button" class="btn btn-sm btn-outline-secondary">
                                 filter
                            </button>
                        </div>
                    </div>
                </div>


                <h2>Section Title</h2>
                <div class="table-responsive">
                   <table class="table table-striped table-sm">
                       <thead>
                           <tr>

                               <th scope="col">#</th>
                               <th scope="col">Header</th>
                               <th scope="col">Header</th>
                               <th scope="col">Header</th>
                               <th scope="col">Header</th>
                           </tr>
                       </thead>
                       <tbody>

                           <tr>
                               <td>1,0001</td>
                               <td>random</td>
                               <td>data</td>
                               <td>placeholder</td>
                               <td>claim</td>
                           </tr>
                           <tr>
                               <td>1,0001</td>
                               <td>random</td>
                               <td>data</td>
                               <td>placeholder</td>
                               <td>claim</td>
                           </tr>
                           <tr>
                               <td>1,0001</td>
                               <td>random</td>
                               <td>data</td>
                               <td>placeholder</td>
                               <td>claim</td>
                           </tr>
                       </tbody>
                    </table> 
                </div> 

                   
                </main>
            </div>
           
        </div>
        
    </div>
  )
}

export default Dashboard