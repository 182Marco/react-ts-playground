import "./style.scss";
import Display from "../../components/Display";
import { genRandom } from "../../utils/number";
import FallBackUI from "../../components/FallBackUi";
import ShowPost from "../../components/ShowPost";
import { Suspense } from "react";

export const SuspenceDemo = () => {
    
  const url = `${process.env.REACT_APP_API}/photos/`;

  return (
    <div className="SuspenceDemo">
      <h2>{`Demo of react18 <Suspense /> component`}</h2>
      <Suspense fallback={<FallBackUI />}>
        <header>
          {[...Array(3)].map((e, i) => (
            <Display key={i} url={url + genRandom(1, 40)} />
          ))}
          <ShowPost />
        </header>
      </Suspense>
    </div>
  );
};

export default SuspenceDemo;
