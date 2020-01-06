import React, { Component } from 'react';
import { connect } from 'react-redux';

class Financials extends Component {
    componentDidMount() {
        console.log('this.props.eventId is:',this.props.eventId)
        this.props.dispatch({ type: 'FETCH_FINANCIALS_TABLE', payload: this.props.eventId });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type:'SET_EXISTING_FINANCIALS', payload: { value: event.target.value, property: event.target.name } })
    }
    render() {
        return (
            <div>
                <h3>Financials</h3>
                <ul class="nobullet">
                <li><button className="tabButtonPosition">Save Changes</button></li>
                    <h1>Contributions</h1>
                        <li >
                            <label>Prison Contribution:</label>
                            <input type="number"name='prison_contribution' value={this.props.reduxState.eventsFinancialsReducer.prison_contribution} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Public Event Fee Paid:</label>
                            <input type="number" name='public_event_fee_paid' value={this.props.reduxState.eventsFinancialsReducer.public_event_fee_paid} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Public Event Donations:</label>
                            <input type="number" name='public_event_donations' value={this.props.reduxState.eventsFinancialsReducer.public_event_donations} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>Total Income:</li>

                        <h1>Travel Costs</h1>
                        <li >
                            <label>Travel:</label>
                            <input type="number" name='expenses_travel' value={this.props.reduxState.eventsFinancialsReducer.expenses_travel} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Air:</label>
                            <input type="number" name='expenses_air' value={this.props.reduxState.eventsFinancialsReducer.expenses_air} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Hotel:</label>
                            <input type="number"  name='expenses_hotel' value={this.props.reduxState.eventsFinancialsReducer.expenses_hotel} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Car:</label>
                            <input type="number"name='expenses_car' value={this.props.reduxState.eventsFinancialsReducer.expenses_car} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Meals:</label>
                            <input type="number"name='expenses_meals' value={this.props.reduxState.eventsFinancialsReducer.expenses_meals} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li>Total Travel</li>

                        <h1>Supplies Cost</h1>
                        <li >
                            <label>Supplies:</label>
                            <input type="number" name='expenses_supplies' value={this.props.reduxState.eventsFinancialsReducer.expenses_supplies} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Printing:</label>
                            <input type="number" name='expenses_printing' value={this.props.reduxState.eventsFinancialsReducer.expenses_printing} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Purchases</label>
                            <input type="number" name='expenses_purchases' value={this.props.reduxState.eventsFinancialsReducer.expenses_purchases} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Pre time costs:</label>
                            <input type="number" name='expenses_prep_time_costs' value={this.props.reduxState.eventsFinancialsReducer.expenses_prep_time_costs} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Staffing/consultants:</label>
                            <input type="number" name='expenses_staffing_consultants' value={this.props.reduxState.eventsFinancialsReducer.expenses_staffing_consultants} onChange={(event) => this.handleInputChange(event)}></input>
                        </li>
                        <li >
                            <label>Total Other:</label>
                            
                        </li>
                        <li >
                            <label>Total Expenses:</label>
                            
                        </li>
                        <li >
                            <label>Expenses Notes:</label>
                            <input type="text"></input>
                        </li>
                        <button>+add expenses notes</button>
                        </ul>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Financials);
	
	

