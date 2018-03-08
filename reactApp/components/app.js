import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Day from './Day';

const events = [{ start: 30, end: 150 }, { start: 540, end: 600 }, { start: 560, end: 620 }, { start: 610, end: 670 }];

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };
    }

    //this takes an array of objects & updates each event to have a new numConflicts variable
    layOutDay(events) {
        // events.sort((a,b) => {return a.start - b.start});

        let active = [];

        /*traverse sorted list where the following is checked at each event's start & end time:
            1.  maintaining an array of active events 
            2.  determining overlap between concurrent events  
        */
        for(let i = 0; i < events.length; ++i) {
            active.push(events[i]);

            //check start time of current event & 
            //    1. remove events that are no longer active

            for(let j = 0; j < active.length; ++j) {
                if(active[j].end < events[i].start) active.splice(j,1);
            }

            //update numConflicts for all current active events
            //note must do this on another pass due to updating size on last pass?
            for (let j = 0; j < active.length; ++j) {
                active[j].numConflicts = active.length;
            }

        }
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                <Day />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
