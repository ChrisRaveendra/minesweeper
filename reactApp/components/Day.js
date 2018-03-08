import React from 'react';
import { connect } from 'react-redux';

const inlineStyle = () => ({
    'display': 'flex',
    'flexDirection': 'column',
    'backgroundColor': '#c3c3c3',
    'borderRadius': '5px'

});

const textStyle = () => ({
    'fontSize': '25px',
});

const inlineStyle2 = () => ({
    'border': 'solid',
    'width': '400px',
    'height': '50px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    // 'backgroundColor': 'green'
});

const hours = ['9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9']

class Day extends React.Component {
    render() {
        return(
            <div style={{ 'display': 'flex', 'flexDirection': 'row', }}>
                <div style={{
                    'display': 'flex',
                    'flexDirection': 'column',
                }}> 
                    <div>
                        {hours.map(hour =>
                            <div>
                                <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>  
                                    <div style={textStyle()}>
                                        {hour}:00
                                    </div>
                                    <text>am</text>
                                </div>
                                <div>
                                    {hour}:30
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                
                <div style={{ 'display': 'flex', 'flexDirection': 'column', }}> 
                    box 
                </div>
            </div>
            
        )
    }
};

export default Day;
