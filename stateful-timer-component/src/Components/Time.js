import React from "react";

class Timer extends React.Component{

  constructor(props){
      super(props)
      this.state = {
          status: false,
          runningTime: 0,
          seconds:0,
          hours:0,
          minutes:0
      }
    
      setInterval(
          () => {
          if(this.state.status){ 
          this.setState({
              runningTime: this.state.runningTime + 1000
          })
          this.msToHMS(this.state.runningTime)
      } 
      },
          1000
          )
      }
  
  
  msToHMS = ( ms ) => {
      this.setState({
      hours: Math.floor(ms / 3600000),
      minutes: Math.floor((ms - (this.state.hours * 3600000)) / 60000),
      seconds: parseInt((ms - (this.state.hours * 3600000) - (this.state.minutes * 60000)) / 1000)
      })
  }

  Click = () => {
      this.setState( {status: !this.state.status} )
  }

  Reset = () => {
      this.setState({ status:false, runningTime: 0, seconds:0, hours:0, minutes:0 });
  };
  render() {
    return (
      <div className="container">
        <div className="time">
          <div className="bloc">
             <span>{String(this.state.hours).padStart(2, '0')}</span> 
            <span className="txt">Hours</span>
          </div>
          :
          <div className="bloc">
           <span>{String(this.state.minutes).padStart(2, '0')}</span> 
            <span className="txt">Minutes</span>
          </div>
          :
          <div className="bloc">
            {<span>{String(this.state.seconds).padStart(2, '0')}</span>}
            <span className="txt">Seconds</span>
          </div>
        </div>

        <div className="btn">
          <button className="S" onClick={this.Click}> {this.state.status ? 'Stop' : 'Start'}</button>
          <button className="R" onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
