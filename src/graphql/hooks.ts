import { useQuery } from '@apollo/client/react';
import { PRODUCT_BY_ID_QUERY, PRODUCTS_QUERY, type Product, DISPLAY_HEADER_MENU_QUERY, type HeaderMenu } from './queries';

interface ProductsData {
  products?: Product[];
}

interface ProductData {
  product?: Product;
}

interface HeaderMenuData {
  HeaderMenus?: HeaderMenu;
}

export const useProducts = () => {
  const { loading, error, data } = useQuery<ProductsData>(PRODUCTS_QUERY, {
    fetchPolicy: 'network-only',
  });
  return {
    loading,
    error,
    products: data?.products ?? [],
  };
};

export const useProduct = (id: string | number) => {
  const { loading, error, data } = useQuery<ProductData>(PRODUCT_BY_ID_QUERY, {
    variables: { id },
  });

  return {
    loading,
    error,
    product: data?.product,
  };
};

export const useHeaderMenus = () => {
  const { loading, error, data } = useQuery<HeaderMenuData>(DISPLAY_HEADER_MENU_QUERY);
  return {
    loading,
    error,
    headerMenus: data?.HeaderMenus ?? [],
  };
}
