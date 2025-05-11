import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hook";
import { decrementBy, getCount, incrementBy } from "../store/counter";

const CounterPage = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector(getCount);

  const handleIncrement = () => {
    dispatch(incrementBy(3));
  };

  const handleDecrement = () => {
    dispatch(decrementBy(2));
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <h1>Число из стора: {count}</h1>

      <div className="card">
        <button onClick={handleIncrement}>Увеличить число на 3</button>
        <button onClick={handleDecrement}>Уменьшить число на 2</button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default CounterPage;
