import { useState } from "react";
import { RenderInput } from "../Form/input";
import { RenderButton } from "../Form/Button";
import * as S from "./Style";

export const RenderSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <S.MainSearch>
      <S.SearchLogoLink>
        <S.SearchLogoImg src="img/logo.png" alt="Logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobLink>
        <S.SearchLogoMobImg src="img/logo-mob.png" alt="Logo" />
      </S.SearchLogoMobLink>

      <S.SearchForm action="#">
        <RenderInput
          type="search"
          value={searchValue}
          name="search"
          placeholder="Поиск по объявлениям"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          width="100%"
        />

        <RenderButton
          type="button"
          onClick={() => {
            setSearchValue();
          }}
        >
          Найти
        </RenderButton>
      </S.SearchForm>
    </S.MainSearch>
  );
};
