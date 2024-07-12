import  { useReducer } from 'react'

const initialState={count:0,number:1}

const reducer=(state,action)=>{

  switch(action.type){
    case "Increase":
      return {...state, count:state.count +11}

    case "IncreaseByAmountHandler":
        return {...state, count:state.count+action.paylaod}
      
    case "Reset":
      return {...state,count:0}
    case "Decrease":
      return {...state,count:state.count - 10}
      case "Up":
        return {...state,number:state.number +3 }
    default:
      throw new Error ("Invalid Action")
  }
}


const AppInitialState = () => {
  const [state,dispatch]=useReducer(reducer,initialState)

const increaseHandler=()=>{
  dispatch({type:"Increase"})
}

const increaseByAmountHandler=()=>{
  dispatch({type:"IncreaseByAmountHandler",paylaod:50})
}

const decreaseHandler=()=>{
  dispatch({type:"Decrease"})
}

const resetHandler=()=>{
  dispatch({type:"Reset"})
}

  return (
    <div>
      <h1>AppInitialState</h1>
      <p className="bg-purple-800 p-4 m-2 rounded-lg">{state.count}</p>
      <button className="bg-purple-700 text-white p-4 m-2 rounded-lg" onClick={increaseByAmountHandler}>Increase By Amount</button>
      <button className="bg-purple-700 text-white p-4 m-2 rounded-lg" onClick={resetHandler}>Reset</button>
      <button className="bg-purple-700 text-white p-4 m-2 rounded-lg" onClick={decreaseHandler}>Decrease</button>
      <button className="bg-purple-700 text-white p-4 m-2 rounded-lg" onClick={increaseHandler}>Increase</button>
      <hr />
      <p className="bg-gray-700 text-red-500 p-4 m-2 rounded-lg">{state.number}</p>
      <button className="bg-red-700 text-white p-4 m-2 rounded-lg" onClick={()=>dispatch({type:"Up"})}>UP</button>
    </div>
  )
}

export default AppInitialState