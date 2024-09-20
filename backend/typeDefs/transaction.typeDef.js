const transactionTypeDef = `#graphql
    type Transaction {
        _id: ID!
        userId: ID!
        amount: Float!
        type: String!
        category: String!
        date: String!
        description: String!
        location: String
    }

    type Query {
        getTransactions: [Transaction!]
        getTransaction(transactionId: ID!): Transaction
    }

    type Mutation {
        addTransaction(input: AddTransactionInput!): Transaction!
        updateTransaction(input: UpdateTransactionInput!): Transaction!
        deleteTransaction(transactionId: ID!): Transaction!
    }

    input AddTransactionInput {
        amount: Float!
        type: String!
        category: String!
        date: String!
        description: String!
        location: String
    }

    input UpdateTransactionInput {
        transactionId: ID!
        amount: Float
        type: String
        category: String
        date: String
        description: String
        location: String
    }
`;

export default transactionTypeDef;
