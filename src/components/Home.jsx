import { useReducer } from "react"

 const reducer=(state,action)=>{
    switch(action.type){
        case "Increase":
        return state +2
        case "IncreaseByAmountHandler":
        return state+action.payload
        case "Reset":
        return 0
        case "Decrease":
        return state -1
        default:
        throw new Error("Invalid Action")
    }
 }
const Home = () => {
    const [count,dispatch]=useReducer(reducer,0)
    const increaseHandler=()=>{
        dispatch({type:"Increase"})
    }
    const decreaseHandler=()=>{
        dispatch({type:"Decrease"})
    }
    const increaseByAmountHandler=()=>{
        dispatch({type:"IncreaseByAmountHandler",payload:15})
    }
    const resetHandler=()=>{
        dispatch({type:"Reset"})
    }
  return (
    <div className="m-5">

        {count}

        <button className="bg-green-600 p-4 m-2 rounded-lg" onClick={increaseHandler}>Increase</button>
        <button className="bg-green-600 p-4 m-2 rounded-lg" onClick={increaseByAmountHandler}>IncreaseByAmount</button>
        <button className="bg-green-600 p-4 m-2 rounded-lg" onClick={resetHandler}>Reset</button>
        <button className="bg-green-600 p-4 m-2 rounded-lg" onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}

export default Home