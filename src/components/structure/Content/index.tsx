import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Category from 'pages/category';
import * as S from './styles';

const Content = () => (
  <S.Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<Category />} />
    </Routes>
  </S.Wrapper>
);

export default Content;
