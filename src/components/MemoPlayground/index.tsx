import { useState, useCallback } from "react";
import ChildInMemoPlayground from "../ChildInMemoPlayground";
import './style.scss'

export const MemoPlayground = () => {
  const [text, setText] = useState("");

  const fnToChild = (p: string) => p;

  const memCallBackToChild = useCallback((p: string) => fnToChild(p), []);

  return (
    <div className="MemoPlayground">
      <h2>Memo() wraper and useCallBack demo</h2>
      <p>
        {`If you write in this controlled input the child component should uselessly re-render -> thanks to the build in memo fn that wraps the child it doesn't -> then we passed a fn and the memo() wraper didn't work anymore -> so we wraped the fn we're passing in a useCallBack `}
      </p>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='type something!' />
      <ChildInMemoPlayground fnToChild={memCallBackToChild} />
    </div>
  );
};

export default MemoPlayground;
