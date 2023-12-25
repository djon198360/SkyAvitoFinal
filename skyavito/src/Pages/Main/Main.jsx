import { RenderHeader } from "../../Components/Header/Header";
import { RenderSearch } from "../../Components/Search/Search";
import * as S from "./Style";

export const Main = () => (
  <S.Wrapper>
    <S.Container>
      <RenderHeader />
      <S.Main>
        <RenderSearch />
        <S.MainContainer>
          <S.H2>Объявления</S.H2>
          <S.MainContent>{/*   <RenderCard /> */}</S.MainContent>
        </S.MainContainer>
      </S.Main>
      {/*   <RenderFooter /> */}
    </S.Container>
  </S.Wrapper>
);
