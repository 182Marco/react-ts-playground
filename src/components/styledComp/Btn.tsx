import styled from 'styled-components'

type BtnProps = {
  col?: string
}
const defaultCol = 'salmon'

export const Btn = styled.button<BtnProps>`
  border: ${`2px solid ${defaultCol}`};
  border-color: ${p => p.col ? p.col : defaultCol};
  color:  ${({col}) => col ? col : defaultCol};
  border-radius: 30px;
`;

export const LandingBtn = styled(Btn)`
   background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
   color: #fff;
   font-weight: 700;
   border: none;
   display: inline-block;
   margin-top: 17px;
   padding: 10px 20px;
`;

export default Btn