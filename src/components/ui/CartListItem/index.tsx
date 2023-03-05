import React from 'react';
import { CartItemProps } from 'models/cart';
import {
  Cross as CloseIcon,
  Plus as PlusIcon,
  Minus as MinusIcon
} from '@styled-icons/icomoon';
import * as S from './styles';
import { currencyFormatter } from 'utils/currencyFormatter';
import useCart from 'hooks/useCart';

const CartListItem = ({
  id,
  title,
  brand,
  image,
  price,
  quantity
}: CartItemProps) => {
  const { handleItemQuantity, removeItem } = useCart();

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={image} alt={`${title}`} />
        <S.ProductCount>{quantity > 99 ? '99+' : quantity}</S.ProductCount>
      </S.ImageWrapper>

      <S.DescriptionWrapper>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.Brand>{brand}</S.Brand>
        </S.TitleWrapper>
        <S.Price>{currencyFormatter(price)}</S.Price>
      </S.DescriptionWrapper>

      <S.ActionWrapper>
        <button onClick={() => removeItem(id)}>
          <CloseIcon size={10} />
        </button>

        <S.QuantityHandlerWrapper>
          <button
            onClick={() =>
              quantity === 1
                ? removeItem(id)
                : handleItemQuantity(id, '-')
            }
          >
            <MinusIcon size={10} />
          </button>
          <button onClick={() => handleItemQuantity(id, '+')}>
            <PlusIcon size={10} />
          </button>
        </S.QuantityHandlerWrapper>
      </S.ActionWrapper>
    </S.Wrapper>
  );
};

export default CartListItem;
