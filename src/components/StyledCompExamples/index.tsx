import Btn, { DarkBtn, LandingBtn, SubmitBtn } from "../styledComp/Btn";
import SpinningLogo from "../styledComp/SpinningLogo";
import "./style.scss";
import { ThemeProvider } from "styled-components";
import theme from "../styledComp/theme";
import { GlobalStyles } from "../styledComp/globalStyle";

export const StyledCompExamples = () => {

  return (
    <div className="StyledCompExamples">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h2>Examples of styled btns triggering nothing</h2>
        <Btn>simple Styled comp</Btn>
        <p>Below example of btn with his particular prop for color</p>
        <Btn col="teal">I am a nice btn</Btn>
        <p>{`Below an eample of styled btn with 'as' attribut to become an <a></a>`}</p>
        <LandingBtn as="a">{`btn as <a> with styled comp`}</LandingBtn>
        <p>{`Example of putting the type='submit' attribute to a btn that could be reusable and exending the same styles of <Btn></Btn>`}</p>
        <SubmitBtn>I'm a submit btn if you check in the inspector</SubmitBtn>
        <p>
          {`Below an example of animation with styled component ->`} <br />
          <small>
            {`js const which contains the keyframe method (desctructured from
          styled-component) with the rules passed inside (same sintax of css)
          -> than just intepolete it in the styled comp rule for animation like this : animation: ${`$`}{mySpin} infinite 1s linear`}
          </small>
        </p>
        <SpinningLogo />
        <p>{`You can also use themes with styled-components -> it makes use of the react contex api -> so this componet which shows examples of styled-com is wrapped inside <ThemeProvider theme={theme}> (destructured from styled-component) -> the btn below is making use of the data comming from the context as props`}</p>
        <DarkBtn>Dark btn</DarkBtn>
      </ThemeProvider>
    </div>
  );
};

export default StyledCompExamples;
