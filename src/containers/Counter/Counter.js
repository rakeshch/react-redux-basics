import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actonCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult =>(
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch(actonCreators.increment()),
        onDecrementCounter: () => dispatch(actonCreators.decrement()),
        onAddCounter: () => dispatch(actonCreators.add(10)),
        onSubtractCounter: () => dispatch(actonCreators.subtract(5)),
        onStoreResult:(result) => dispatch(actonCreators.storeResult(result)),
        onDeleteResult:(id) => dispatch(actonCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);