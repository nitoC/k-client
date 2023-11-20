import { useState, useMemo, memo } from "react";
import { withdraw } from "../../apis/api";
import { Alert } from "@material-ui/lab";
import {
  Button,
  TextField,
} from "@material-ui/core";


const Withdraw = ({ balance, modal, removeModal, email }) => {
  const bal = balance;
  let depStatus;
  const [disable, setdisable] = useState(true);
  const [balText, setbalText] = useState(`maxmimum ${bal}`);
  const [statmessage, setstatmessage] = useState(
    `withdrawal requests are usually processed  within 24 hours`
  );
  const [disp, setdisp] = useState({ display: "block", width: "100%" });
  const [amount, setamount] = useState("");
  const [address, setaddress] = useState("");

  const handleAddress = (event) => {
    setaddress(event.target.value);
  };
  const handleAmount = (event) => {
    let reText =
      event.target.value > bal ? `More than wallet balance $${bal}` : "";
    event.target.value > bal || event.target.value === 0 || event.target.value === '' || event.target.value === null || typeof Number(event.target.value) === 'number' || event.target.value === undefined ? setdisable(true) : setdisable(false);
    setbalText(reText);
    setamount(event.target.value);
  };

  const withdrawhandle = async () => {
    try {
      depStatus = await withdraw({ userId, value: amount, type: 'Debit' });
      setstatmessage(depStatus.data);
    } catch (err) {
      if (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <>
      <div className="modal" onClick={removeModal} style={modal.modal1}></div>
      <div className="deposit-cover" style={modal.withdraw}>
        <div className="disp">
          <Alert style={disp} severity="info">
            {statmessage}
          </Alert>
        </div>
        <div className="dep-card">
          <div className="dep-row pb">
            <TextField
              type="text"
              margin="dense"
              required
              onChange={handleAddress}
              label="Enter USDT address"
              fullWidth
              variant="filled"
            />
          </div>
          <div className="dep-row pb">
            <TextField
              type="number"
              margin="dense"
              required
              onChange={handleAmount}
              label={balText}
              fullWidth
              variant="filled"
            />
          </div>
          <div className="dep-row dep-btn">
            <Button
              onClick={removeModal}
              variant="outlined"
              color="primary"
              size="large"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={withdrawhandle}
              disabled={disable}
              size="large"
            >
              withdraw
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Withdraw);