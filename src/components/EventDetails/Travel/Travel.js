import React, { Component } from 'react';
import { connect } from 'react-redux';

class Travel extends Component {

    componentDidMount() {
        console.log('this.props.eventId is:',this.props.eventId)
        this.props.dispatch({ type: 'FETCH_TRAVEL_TABLE', payload: this.props.eventId });
    }

    handleInputChange = (columnName, event) => {
        this.props.dispatch({ type:'EDIT_TRAVEL_TABLE', payload: [columnName, event.target, this.props.eventId ] })
    }

    render() {
        return (
            <div>
                <h3>Travel Component</h3>
                <ul class="nobullet">
                <li><button className="tabButtonPosition">Save Changes</button></li>
                        <li >
                            <label>Nearest Airport:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.nearest_airport} onChange={(event) => this.handleInputChange(event, 'nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Airport Code:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Booked:</label>
                            <input type="checkbox" onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Information:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Departure:</label>
                            <input type="date" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Flights Return:</label>
                            <input type="date" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Hotel Booked:</label>
                            <input type="checkbox" onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Hotel Information:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Car Booked:</label>
                            <input type="checkbox" onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Car Information:</label>
                            <input type="text" value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={() => this.handleInputChange('nearest_airport')}></input>
                        </li>
                        <li >
                            <label>Travel Notes:</label>
                            <input type="text"></input>
                        </li>
                    </ul>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Travel);