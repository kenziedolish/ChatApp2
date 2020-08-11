import * as React from 'react';
import { connect } from 'react-redux';
;

const Home = () => (
   
    <div id="body">
        <div className="card bg-dark text-black">
            <img className="card-img" src={require('../DSC_0188.png')} alt="Card image"/>
                <div className="card-img-overlay">
                    <h1 className="card-title">Welcome</h1>
                    <h6 className="card-text">To Kenzie's Corner</h6>
                </div>
</div>
        
        </div>
);

export default connect()(Home);
