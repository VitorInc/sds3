import Footer from 'components/Footer';
import NavBar from 'components/navBar';
import DataTable from 'components/DataTable'
import React from 'react';
import BarChart from 'components/BarChart';
import PizzaChart from 'components/Pizza chart'


function App() {
  return (
    <>
      <NavBar />
      <div className = "container" >
        <h1 className="text-primary py-3">Sales DashBoard</h1>
        
          <div className="row px-3">
            <div className ="col-sm-6">
              <h5 className ="text-center text-secondary">Rate of successful sales %</h5>
                <BarChart />
            </div>
            <div className ="col-sm-6">
              <h5 className ="text-center text-secondary">Rate of successful sales</h5>
                <PizzaChart />
            </div>
            <div className="py-3">
              <h2 className="text-primary">
                  All Sales
              </h2>
            </div>
          </div>      
        
        
        <DataTable />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
