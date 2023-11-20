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
  console.log(user.user.capital)
  return (
    <div className="balance-cover">
      <div className="p-text-wrap">
        <h2 className="balance_text" >
          {
            Visible ?
              user.user.capital.toFixed(2) :
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
    </div >
  );
};

export default Capital;
//<Profit balance={user.user.capital} capital={user.user.capital} />