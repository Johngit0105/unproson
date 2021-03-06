import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import VenueListItem from './VenueListItem/VenueListItem';
import './VenueList.css';
// styling imports
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';


class VenueList extends Component {

  state = {
      name: "",
      venue_type: "",
      contact_name_one: "",
  }

  componentDidMount() {
    // on ready function
    this.props.dispatch({ type: 'GET_VENUES' })
  }

  // add a new venue
  newVenueAdded = () => {
    console.log('Creating venue');
    this.props.dispatch({ type: 'POST_VENUE', payload: this.state })
    this.setState({
        name: "",
        venue_type: "",
        contact_name_one: "",
    });
  } //end newVenueAdded

  
  handleVenueInput = (event) => {
    // captures user input for venue name in state
    this.setState({
        ...this.state,
        name: event.target.value,
    });
  } // end handleVenueInput

  // captures user input for contact name in state
  handleContactInput = (event) => {
    this.setState({
        ...this.state,
        contact_name_one: event.target.value,
    });
  }// end handleContactInput

  // captures user input for venue type in state
  handleDropDown = propertyName => (event) => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
    });
  } // end handleDropDown

  render() {
    return (
      <div className="venueContainer">
        <Container>
          <h1 className="h1-main">Venue List</h1>
          <div className="listOptions">
            <div id="inputlabel">
              <TextField
                label="Venue Name"
                id="smallInput1"
                variant="outlined"
                size="small"
                value={this.state.name}
                onChange={this.handleVenueInput}
              />
              <span>&nbsp;</span>
              <TextField
                label="Venue Contact"
                id="smallInput2"
                variant="outlined"
                size="small"
                value={this.state.contact_name_one}
                onChange={this.handleContactInput}
              />
              <span>&nbsp;</span>
              <Select
                labelId="simple-outlined-drop"
                id="selectVenues"
                variant="outlined"
                displayEmpty
                style={{ width: `140px`, height: '40px'  }}
                value={this.state.venue_type}
                onChange={this.handleDropDown('venue_type')}
              >
                <MenuItem value="prison">Prison</MenuItem>
                <MenuItem value="conference">Conference</MenuItem>
                <MenuItem value="school">School</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <Button variant="contained"  color="primary" className="venueButtons" onClick={this.newVenueAdded}>Add Venue</Button>
            </div>
          </div>
          <div className="listVenues"></div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Venue</TableCell>
                <TableCell>Primary Contact</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell></TableCell>
                {/* <TableCell align="right">Order By: <Select
                labelId="selectUnlined"
                id="sortDrop"
                style={{ width: `140px`, height: `30px` }}
              >
                <MenuItem>
                  <em>Order By</em>
                </MenuItem>
                <MenuItem value="prison">Prison</MenuItem>
                <MenuItem value="conference">Conference</MenuItem>
                <MenuItem value="school">School</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.venueReducer.map((venue) => {
                return (
                  <VenueListItem key={venue.id} venue={venue} />
                );
              })}
            </TableBody>
          </Table>
        </Container>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(VenueList));
