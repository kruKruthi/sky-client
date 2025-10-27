export interface Review {
  id: string;
  content: string;
  date: string;
  user: {
    username: string;
    email: string;
    __typename?: string;
  };
  __typename?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  images: { url: string; altText: string }[];
  createdAt: string;
  updatedAt: string;
  reviews: Review[];
}

export interface HeaderMenu {
  label: string;
  link: string;
  submenus?: { label: string; link: string }[];
}

import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const PRODUCT_DETAIL_FRAGMENT = gql`
  fragment ProductDetail on Product {
    id
    title
    description
    images {
      url
      altText
    }
    createdAt
  }
`;

const HEADER_MENU_FRAGMENT = gql`
  fragment HeaderMenuDetail on HeaderMenu {
    label
    link
    submenus {
      label
      link
    }
  }
`;

export const DISPLAY_HEADER_MENU_QUERY = gql`
  query GetHeaderMenu {
    HeaderMenus {
      ...HeaderMenuDetail
    }
  }
  ${HEADER_MENU_FRAGMENT}
`;


export const PRODUCTS_QUERY = gql`
  query Products {
    products {
      ...ProductDetail
    }
  }
  ${PRODUCT_DETAIL_FRAGMENT}
`;

export const PRODUCT_BY_ID_QUERY = gql`
  query ProductById($id: ID!) {
    product(id: $id) {
      ...ProductDetail
    }
  }
  ${PRODUCT_DETAIL_FRAGMENT}
`;

