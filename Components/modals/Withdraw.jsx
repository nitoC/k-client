import { useState, useMemo, memo, useRef } from "react";
import { withdraw } from "../../apis/api";
import { Alert } from "@material-ui/lab";
import {
  Button,
  CircularProgress,
  TextField,
} from "@material-ui/core";


const Withdraw = ({ balance, modal, removeModal }) => {

  let depStatus;
  let userId = localStorage.getItem('userId')
  userId = JSON.parse(userId)
  const bal = balance;
  let text = `withdrawal requests are usually processed  within 24 hours`


  const [disable, setdisable] = useState(true);
  const [balText, setbalText] = useState(`maxmimum ${bal}`);
  const [statmessage, setstatmessage] = useState(text);
  const [disp, setdisp] = useState({ display: "block", width: "100%" });
  const [amount, setamount] = useState("");
  const [address, setaddress] = useState("");
  const [loading, setloading] = useState(false)
  const controller = useRef()




  const removeWithdrawHandler = () => {
    setamount('')
    setaddress('');
    removeModal('')
  }

  const handleAddress = (event) => {
    setaddress(event.target.value);
  };
  const handleAmount = (event) => {
    let reText =
      event.target.value > bal ? `More than wallet balance $${bal}` : "";
    event.target.value > bal || event.target.value === 0 || event.target.value === '' || event.target.value === null || event.target.value === undefined ? setdisable(true) : setdisable(false);
    setbalText(reText);
    setamount(event.target.value);
  };

  const withdrawhandle = async () => {
    setloading(true)
    try {


      if (controller.current) {
        console.log('hello')
        controller.current.abort("cancelling and creating new request")
      }
      console.log('creating new controller')
      controller.current = new AbortController();

      let signal = controller.current.signal;

      depStatus = await withdraw({ userId, value: amount }, signal);

      if (depStatus.status === 200) {
        setstatmessage("withdrawal request has been made and is currently being processed");
        setamount('')
        setaddress('');
        setloading(false)
        setdisable(true)
      }

    } catch (err) {
      setloading(false)
      if (err) {
        console.log(err.message);
      }

    }

  };
  return (
    <>
      <div className="modal" onClick={removeWithdrawHandler} style={modal.modal1}></div>
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
              value={address}
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
              value={amount}
            />
          </div>
          <div className="dep-row dep-btn">
            <Button
              onClick={removeWithdrawHandler}
              variant="outlined"
              color="primary"
              size="large"
            >
              Cancel
            </Button>
            {loading ? <CircularProgress /> :
              <Button
                variant="contained"
                color="primary"
                onClick={withdrawhandle}
                disabled={disable}
                size="large"
              >
                withdraw
              </Button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Withdraw);