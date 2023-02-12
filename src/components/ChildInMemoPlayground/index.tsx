import { memo } from "react";

export const ChildInMemoPlayground = ({
  fnToChild,
}: {
  fnToChild: (p: string) => string;
}) => {
    
  console.log("ChildInMemoPlayground has rendered");

  fnToChild("param from the child");

  return <div className="ChildInMemoPlayground"></div>;
};

export default memo(ChildInMemoPlayground);
