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
  console.log(user.user.balance)
  return (
    <div className="balance-cover">
      <div className="p-text-wrap">
        <h2 className="balance_text" >
          {
            Visible ?
              user.user.balance.toFixed(2) :
              '*****'
          }
        </h2>
        <div className="visibility_icon" onClick={() => setVisible(!Visible)}>
          {Visible ?
            <Visibility /> :
            <VisibilityOff />
          }
        </div>
      </div>
      <Profit balance={user.balance} capital={user.capital} />
    </div >
  );
};

export default Capital;