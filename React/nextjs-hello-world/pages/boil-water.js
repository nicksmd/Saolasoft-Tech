/**
 * Created by quangh on 9/21/2017.
 */
import React from 'react'
function BoilindVerdict(props){
    if (props.celsius>=100){
        return <p>The water is boiling</p>
    }
    return <p>The water is not boiling yet</p>
}

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TempInput extends React.Component{
    constructor(props){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTempChange(e.target.value);
    }

    render(){
        return (
            <fieldset>
                <legend>Enter temp in {scaleName[this.props.scale]}</legend>
                <input
                    value={this.props.tem}
                    onChange ={this.handleChange}
                />
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component{
    constructor() {
        super();


        this.handleCelsiusChange= this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            tem: '',
            scale: "c"
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TempInput
                    scale="c"
                    tem={celsius}
                    onTempChange={this.handleCelsiusChange}
                />
                <TempInput
                    scale="f"
                    tem={fahrenheit}
                    onTempChange={this.handleFahrenheitChange}
                />
                <BoilindVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator