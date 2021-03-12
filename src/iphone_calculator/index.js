import React from 'react'
import { Provider } from 'react-redux'
import store from './assets/redux/store'
import App from './App'
import './scss/main.scss'

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Index



// //React-Redux

// const mapStateToProps = (state) => {
//   return {
//     op: state.op,
//     arg1: state.arg1,
//     arg2: state.arg2,
//     input: state.input
//     result: state.result,
//     display: state.display,
//   }
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateDisplay: display => dispatch(updateDisplay(display)),
//     changeArg1: arg1 => dispatch(changeArg1(arg1)),
//     changeArg2: arg2 => dispatch(changeArg2(arg2)),
//     changeOp: op => dispatch(changeOp(op)),
//     updateResult: result => dispatch(updateResult(result)),
//     updateInput: input => dispatch(updateInput(input))
//     }
//   }
// };
// const Container = connect(mapStateToProps, mapDispatchToProps)(App);
// Tools = connect(mapStateToProps, mapDispatchToProps)(Tools);
// NumPad = connect(mapStateToProps, mapDispatchToProps)(NumPad);
// Operators = connect(mapStateToProps, mapDispatchToProps)(Operators);

