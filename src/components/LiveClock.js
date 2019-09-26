import React, { Component } from 'react';
import Clock from 'react-live-clock';

class LiveClock extends Component {
    render() {
        return (
            <div>
                <Clock format={'YYYY년 MM월 DD일'} ticking={false} timezone={'Asia/Seoul'}/>
            </div>
        )
    }
}

export default LiveClock;