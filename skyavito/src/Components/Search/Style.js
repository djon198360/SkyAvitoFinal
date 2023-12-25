import styled from "styled-components";

export const MainSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const SearchLogoLink = styled.a`
  /*  display: none; */
`;
export const SearchLogoMobLink = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  display: none;
`;

export const SearchLogoMobImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 32px;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const SearchLogoImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 54px;
  height: auto;
`;
export const SearchForm = styled.form.attrs((props) => ({
  action: props.action,
}))`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
`;
