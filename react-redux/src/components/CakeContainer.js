import React from 'react'
import { buyCake } from '../redux'

 
// connect function
import { connect } from 'react-redux'

 
function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy a Cake</button>

 
        </div>
    )
}


 
// Dispatch: it defines the function(buyCake) to dispatch the action(BUY_CAKE)
//general name: mapStateToProps
// mapStateToProps - state as parameter and returns object


 
// to pass state as a props
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}


 
//only in redux Dispatch: store.dispatch(buyCake())
// in react-redux : a function name mapDispatchToProps
//mapDispatchToProps : it takes dispatch as parameter and return object
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)