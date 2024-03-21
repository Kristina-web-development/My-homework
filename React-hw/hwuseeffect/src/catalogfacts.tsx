import { FC } from "react";

interface CatalogFactsProps {
    showFact : string
}
const CatalogFacts: FC<CatalogFactsProps> = ({showFact}) => {
  return <div>{showFact.length > 0 ? showFact : "No Fact"}</div>;
};

export default CatalogFacts;
