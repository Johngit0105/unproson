import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {Button, Select} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
import SecondaryContacts from './SecondaryContacts/SecondaryContacts';

class VenueGeneral extends Component {

    componentDidMount() {
        console.log('this.props.match.params.id is:', this.props.match.params.id)
        this.props.dispatch({ type: 'FETCH_VENUES_GENERAL_TABLE', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_CONTACTS', payload: this.props.match.params.id });
    }

    handleInputChange = (event) => {
        this.props.dispatch({ type: 'SET_EXISTING_VENUES_GENERAL', payload: { value: event.target.value, property: event.target.name } });
    }


    handleSaveChangesButtonClick = () => {
        this.props.dispatch({ type: 'SAVE_VENUES_GENERAL', payload: this.props.reduxState.venueDetailsReducer });
    }
    
    handleDeleteButtonClick = (venueId) => {
        this.props.dispatch({ type: 'DELETE_VENUE', payload: venueId });
        this.props.history.push('/home');
    }

    render() {
        return (
            <>
            <div>
                <h3 id="general-header">Venue Details</h3>
                <ul className="nobullet">
                    <li>
                        <Button startIcon={<Icon>delete</Icon>} variant="contained"color="secondary" className="tabButtonPosition" onClick={() => { if (window.confirm('Are you sure you wish to delete this venue? This cannot be undone and will delete all event information tied to venue as well.')) this.handleDeleteButtonClick(this.props.reduxState.venueDetailsReducer.id) }}>Delete Venue</Button>
                        <Button startIcon={<Icon>save</Icon>} variant="contained" color="primary" className="tabButtonPosition" onClick={this.handleSaveChangesButtonClick}>Save Changes</Button>

                    </li>
                    <li>
                        <label>Venue Type:</label>
                        <Select id="material-ui" type='text' name="venue_type" value={this.props.reduxState.venueDetailsReducer.venue_type || ''} onChange={(event) => this.handleInputChange(event)}>
                            <option value="prison">Prison</option>
                            <option value="conference">Conference</option>
                            <option value="school">School/University</option>
                            <option value="other">Other</option>
                        </Select>
                    </li>
                    <li>
                        <label>Street Address:</label>
                        <TextField id="material-ui"type="text" name='street_address' value={this.props.reduxState.venueDetailsReducer.street_address || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>City:</label>
                        <TextField id="material-ui"type="text" name='city' value={this.props.reduxState.venueDetailsReducer.city || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>State:</label>
                        <TextField id="material-ui"type="text" name='state' value={this.props.reduxState.venueDetailsReducer.state || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Country:</label>
                        <TextField id="material-ui"type="text" name='country' value={this.props.reduxState.venueDetailsReducer.country || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
                    </li>
                    <li>
                        <label>Zip:</label>
                        <TextField id="material-ui"type="text" name='zip' value={this.props.reduxState.venueDetailsReducer.zip || ''} onChange={(event) => this.handleInputChange(event)}></TextField>
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


export default withRouter(connect(mapStateToProps)(VenueGeneral));

