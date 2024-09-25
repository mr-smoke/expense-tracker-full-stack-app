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

export const GET_TRANSACTION = gql`
  query GetTransaction($id: ID!) {
    getTransaction(transactionId: $id) {
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

export const GET_STATISTICS = gql`
  query GetStatistics {
    getStatistics {
      category
      total
    }
  }
`;
