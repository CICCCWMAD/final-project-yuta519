import ReactDOM from "react-dom/client";
import styled from "@emotion/styled";

import Header from "./components/Header";
import { App } from "./App";

const StyledContainer = styled.div`
  margin-top: 100px;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Header />
    <StyledContainer>
      <App />
    </StyledContainer>
  </>
);
