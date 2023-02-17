import { useRef, useState } from "react";
import ImperModal from "../ImperModal";
import "./style.scss";

export const DemoUseImperative = () => {
  const [openImperModal, setOpenImperModal] = useState(false);
  const myRef = useRef<any>(null)

  return (
    <div className="DemoUseImperative">
      <h2>Demo of useImperativeHandle()</h2>
      {openImperModal ? (
        <>
          <button onClick={() => myRef.current?.focusConfirmBtn()}>focus yes</button>
          <button onClick={() => myRef.current?.focusDenyBtn()}>focus no</button>
          <button onClick={() => myRef.current?.focusCloseBtn()}>focus close</button>
        </>
      ) : (
        <button onClick={() => setOpenImperModal(true)}>open modal</button>
      )}
      {openImperModal && <ImperModal setOpen={setOpenImperModal} ref={myRef} />}
    </div>
  );
};

export default DemoUseImperative;
