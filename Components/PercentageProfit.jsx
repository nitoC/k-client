import {
  Card,
  Typography,
} from "@material-ui/core";
import { memo } from 'react';

const Profit = ({ balance, capital }) => {
  console.log(balance);
  console.log(capital);
  let nval = ((balance - capital) / capital) * 100;

  return (
    <div className="profit_cover">
      <div className="profit_text">
        <Typography variant="h5" className={nval < 0 ? 'loss' : nval > 0 ? 'gain' : 'profit-text'}>
          {nval < 0 ? '-' : nval > 0 ? '+' : ''}{isNaN(nval) ? '' : Math.round(nval)}
        </Typography>
      </div>
    </div>
  );
};

export default memo(Profit);