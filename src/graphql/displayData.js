import { useQuery, gql } from '@apollo/client/react';

const DISPLAY_DATA_QUERY = gql`
  query GetDisplayData {
  HeaderMenus {
    label
    link
    submenus {
      label
      link
    }
  }
}
`;

export const displayData = useQuery(DISPLAY_DATA_QUERY);