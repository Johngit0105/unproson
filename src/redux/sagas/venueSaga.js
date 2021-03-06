import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* venueSaga() {
    yield takeLatest('POST_VENUE', createVenue);
    yield takeEvery('GET_VENUES', getVenues);
}

function* createVenue(action){
    //sends inputted user value to server side post route
    try {
        console.log('in create venue saga',action)
        yield axios.post('/api/venue', action.payload);
        yield put({ type: 'GET_VENUES', payload: action.payload })
    } catch (error) {
        console.log('error posting venue', error);  
    }
}

function* getVenues() {
    try {
        const venuesResponse = yield axios.get('/api/venue');
        console.log('in getVenues saga, response to GET is:', venuesResponse.data);
        yield put({ type: 'SET_VENUES', payload: venuesResponse.data });
    } catch (error) {
        console.log('error fetching venues', error);
    }
}

export default venueSaga;