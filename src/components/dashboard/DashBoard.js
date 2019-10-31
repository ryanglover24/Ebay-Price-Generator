import React, { Component } from 'react';

class Dashboard extends Component {

    state = {
        roi:  0,
        ppu: 0,
        PostageCost: 0,
        price: 0
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // let roi = parseInt(this.state.roi, 10);
        let roi = parseFloat(this.state.roi);
        let ppu = parseFloat(this.state.ppu);
        let postageCost = parseFloat(this.state.PostageCost);
        const feesMultiplier = 0.871;
        const paypalAdminFee = 0.3;
        let step1 = roi * ppu;
        let step2 = step1 + paypalAdminFee; 
        let step3 = step2 + postageCost;
        let step4 = step3 / feesMultiplier;

        let price = Math.round((((roi * ppu) + postageCost + paypalAdminFee) / feesMultiplier) * 100) / 100;
        // let price = step4;
        
        console.log(price);
        console.log(typeof(price));

        this.setState({
            price: price
        })
            
        }
        
    
    
    render() {

        return (
            
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="" onSubmit={this.handleSubmit} >
                                <label htmlFor="roi">ROI</label>
                                <input type="number" step="0.01" name="roi" onChange={(e) => {
                                    this.setState({
                                        roi: e.target.value
                                    })
                                }}/>
                                <label htmlFor="ppu">PPU</label>
                                <input type="number" step="0.01" name="ppu" onChange={(e) => {
                                    this.setState({
                                        ppu: e.target.value
                                    })
                                }}/>
                                <label htmlFor="PostageCost">Postage Cost</label>
                                <input type="number" step="0.01" name="PostageCost" onChange={(e) => {
                                    this.setState({
                                        PostageCost: e.target.value
                                    })
                                }}/>

                                <input type="submit" value="Calculate" />
                            </form>
                        
                            <div>
                                <h4>The Sell Price for this ROI is:</h4>
                                <p>£{this.state.price}</p>
                            </div>              
                        </div>
                    </div>

                </div>

            </section>
        );
    }

}

export default Dashboard;