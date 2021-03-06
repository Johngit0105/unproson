import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import { Button, Select } from '@material-ui/core';
class Travel extends Component {

    //this handles the input and changes the travel reducer on input change
    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_TRAVEL', payload: { value: event.target.value, property: event.target.name } })
    } // end handleInputChange

    render() {
        return (
            <>
                <div>
                    <ul class="nobullet">
                        <h2 id="general-header">Airport</h2>
                        <li >
                            <label>Nearest Airport:</label>
                            <TextField id="material-ui" type="text" name='nearest_airport' value={this.props.reduxState.eventsTravelReducer.nearest_airport} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Airport Code:</label>
                            <TextField id="material-ui" type="text" name='airport_code' value={this.props.reduxState.eventsTravelReducer.airport_code} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Flights Booked:</label>
                            <Select name='flights_booked' value={this.props.reduxState.eventsTravelReducer.flights_booked} onChange={(event) => this.handleInputChange(event)}>
                                <option value="false">no</option>
                                <option value="true">yes</option>
                            </Select>
                        </li>
                        <li >
                            <label>Flights Information:</label>
                            <TextField id="material-ui" type="text" name='flight_information' value={this.props.reduxState.eventsTravelReducer.flight_information} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Flights Departure:</label>
                            <TextField id="material-ui" type="date" name='flight_departure' value={moment(this.props.reduxState.eventsTravelReducer.flight_departure).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <li >
                            <label>Flights Return:</label>
                            <TextField id="material-ui" type="date" name='flight_return' value={moment(this.props.reduxState.eventsTravelReducer.flight_return).format('YYYY-MM-DD')} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <h2 id="general-header">Hotel</h2>
                        <li >
                            <label>Hotel Booked:</label>
                            <Select name='hotel_booked' value={this.props.reduxState.eventsTravelReducer.hotel_booked} onChange={(event) => this.handleInputChange(event)}>
                                <option value="false">no</option>
                                <option value="true">yes</option>
                            </Select>
                        </li>
                        <li >
                            <label>Hotel Information:</label>
                            <TextField id="material-ui" type="text" name='hotel_information' value={this.props.reduxState.eventsTravelReducer.hotel_information} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <h2 id="general-header">Car Rental</h2>
                        <li >
                            <label>Car Booked:</label>
                            <Select name='car_booked' value={this.props.reduxState.eventsTravelReducer.car_booked} onChange={(event) => this.handleInputChange(event)}>
                                <option value="false">no</option>
                                <option value="true">yes</option>
                            </Select>
                        </li>
                        <li >
                            <label>Car Information:</label>
                            <TextField id="material-ui" type="text" name='car_information' value={this.props.reduxState.eventsTravelReducer.car_information} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                        <h2 id="general-header">Notes</h2>
                        <li>
                            <label>Travel Notes:</label>
                            <TextField multiline
                                id="material-ui" type="text" name='travel_notes' value={this.props.reduxState.eventsTravelReducer.travel_notes} onChange={(event) => this.handleInputChange(event)}></TextField>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Travel);