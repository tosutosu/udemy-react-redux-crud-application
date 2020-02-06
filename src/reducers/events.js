import _ from 'lodash'
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT
} from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENT:
        case CREATE_EVENT:
        case UPDATE_EVENT:
            // {id: 5, title: "Let's have an event 5!", body: "This is the body for event 5."}
            const data = action.response.data;
            return { ...events, [data.id]:data }
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
            delete events[action.id];
            console.log(events);
            return { ...events };
        default:
            return events;
    }
}  