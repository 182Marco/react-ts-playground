import logo from "./../../logo.svg";

export const FallBackUI = () => {
  return (
    <div className="FallBackUI">
      <h2>
        The post is awaiting the imgs...
        <img src={logo} className="App-logo" alt="logo" />
        <p>...Post is loading</p>
      </h2>
    </div>
  );
};

export default FallBackUI;
