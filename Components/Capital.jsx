import {
  Card,
  Typography,
} from "@material-ui/core";

import {
  Visibility,
  VisibilityOff
} from "@material-ui/icons";
import { useState } from "react";

import Profit from './PercentageProfit';

const Capital = ({ user }) => {
  const [Visible, setVisible] = useState(false);
  return (
    <div className="balance-cover">
      <div className="p-text-wrap">
        <Typography className="" variant="h5">
          {
            Visible ?
              user.balance :
              '*****'
          }
        </Typography>
        <div className="visibility_icon" onClick={() => setVisible(!Visible)}>
          {Visible ?
            <Visibility /> :
            <VisibilityOff />
          }
        </div>
      </div>
      <Profit balance={user.balance} capital={user.capital} />
    </div>
  );
};

export default Capital;