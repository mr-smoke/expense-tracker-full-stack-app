import { useQuery } from "@apollo/client";
import Card from "./Card";
import { GET_TRANSACTIONS } from "../graphql/queries/transaction.query";

const Cards = () => {
  const { data, loading, error } = useQuery(GET_TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {data?.getTransactions.map((card, key) => (
        <Card key={key} card={card} />
      ))}
    </>
  );
};

export default Cards;
