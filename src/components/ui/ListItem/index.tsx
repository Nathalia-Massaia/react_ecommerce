import { Link } from 'react-router-dom';
import { CategoryProps } from 'models/category';
import { ProductProps } from 'models/product';
import { currencyFormatter } from 'utils/currencyFormatter';
import useCart from 'hooks/useCart';
import * as S from './styles';

export type ListItemProps = {
  item: ProductProps | CategoryProps;
};

const ListItem = ({ item }: ListItemProps) => {
  const isProduct = 'brand' in item;
  const { addItem } = useCart();

  return (
    <S.Wrapper>
      <Link to={item.slug}>
        <S.ImageWrapper>
          <img src={item.image} alt="product img" />
        </S.ImageWrapper>
        {!isProduct && <S.Title>{item.title}</S.Title>}

        {isProduct && (
          <S.DescriptionWrapper>
            <S.DescriptionContent>
              {<p>{item.brand}</p>}
              {<p>{item.title}</p>}
              {<p>{item.category}</p>}
            </S.DescriptionContent>

            <S.PriceContent>
              <span>{currencyFormatter(item.price)}</span>
            </S.PriceContent>
          </S.DescriptionWrapper>
        )}
      </Link>

      {isProduct && (
        <S.AddToCart>
          <button onClick={() => addItem(item)}>Add to cart</button>
        </S.AddToCart>
      )}
    </S.Wrapper>
  );
};

export default ListItem;
