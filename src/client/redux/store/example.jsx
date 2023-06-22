import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'



const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'})
  };

  const reducerName = useSelector(state => state.nameReducer.name)

  //console.log("Counter", counter)

  const showCounter = useSelector(state => state.counterReducer.counter)
 
  
  const dispatch = useDispatch()

  function incrementHandler()
  {
    dispatch({type: 'CHANGE_FIRST'})
  }

  function decrementHandler()
  {
    dispatch({type: 'DECREMENT'})
  }

  function increaseHandler()
  {
    dispatch({type: 'INCREASE' , ammount : 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <h1>{reducerName}</h1>
      <h1>{showCounter}</h1>
     
      {/* {showCounter && <div className={classes.value}>{counter}</div>} */}
      <div>
        <button onClick = {incrementHandler}>increment</button>
        <button onClick = {decrementHandler}>decrement</button>
        <button onClick = {increaseHandler}>increase by five</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
