import { useState, useCallback } from "react";
import ChildInMemoPlayground from "../ChildInMemoPlayground";

export const MemoPlayground = () => {
  const [text, setText] = useState('');

  const fnToChild = (p: string) => p

  const memCallBackToChild = useCallback((p: string) => fnToChild(p), []) 

  return (
    <div className="MemoPlayground">
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <ChildInMemoPlayground fnToChild={memCallBackToChild} />
    </div>
  );
};

export default MemoPlayground;
