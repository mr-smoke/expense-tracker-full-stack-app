import { gql } from "@apollo/client";

export const ADD_TRANSACTION = gql`
  mutation AddTransaction($input: AddTransactionInput!) {
    addTransaction(input: $input) {
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
