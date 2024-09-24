import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query GetTransactions {
    getTransactions {
      _id
      amount
      type
      category
      description
      location
      date
    }
  }
`;
