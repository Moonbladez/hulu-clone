import { Thumbnail } from "./Thumbnail";

import { ResultsProps } from "./../pages/index";

export const Results = ({ results }): JSX.Element => {
  return (
    <div>
      {results.map((result: ResultsProps) => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
};
