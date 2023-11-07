import { useState } from "react";
import { deposit } from "../apis/api";
import { Alert } from "@material-ui/lab";
import {
    Button,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
    Select,
  } from "@material-ui/core";


const Deposit = ({ balance, modal, removeModal, email, address }) => {
    const bal = balance;
    let depStatus;
    const [disable, setdisable] = useState(true);
    const [Text, setText] = useState("100-5000");
    const [statmessage, setstatmessage] = useState(
      `copy the USDT or alternatively the BTC address and make deposit before submiting your deposit request`
    );
    const [plan, setplan] = useState("Gold");
    const [disp, setdisp] = useState({ display: "block", width: "100%" });
    const [capital, setcapital] = useState(0);
    const handleSelect = (event) => {
      setplan(event.target.value);
    };
  
    const handleDeposit = (event) => {
      let min =
        plan === "Gold"
          ? 100
          : plan === "Diamond"
          ? 1000
          : plan === "Platinum"
          ? 5000
          : 0;
      let diff = min - bal;
      let reText =
        event.target.value < diff
          ? `less than min deposit $${min}`
          : event.target.value == null || event.target.value == ""
          ? "100-5000"
          : min + "-5000";
      event.target.value < diff ? setdisable(true) : setdisable(false);
      setcapital(event.target.value);
      console.log(capital);
      setText(reText);
    };
    const deposithandle = async () => {
      try {
        depStatus = await deposit({ email, plan, capital, address });
        setstatmessage(depStatus.data);
      } catch (err) {
        if (err) {
          console.log(err.message);
        }
      }
    };
    const handleUsdt = () => {
      navigator.clipboard.writeText(address.usdt);
    };
    const handleBtc = () => {
      navigator.clipboard.writeText(address.btc);
    };
    return (
      <>
        <div
          className="modal"
          onClick={() => {
            removeModal();
            setstatmessage(
              `copy the USDT or alternatively the BTC address and make deposit before submiting your deposit request`
            );
          }}
          style={modal.modal}
        ></div>
        <div className="deposit-cover" style={modal.deposit}>
          <div className="disp">
            <Alert style={disp} severity="info">
              {statmessage}
            </Alert>
          </div>
          <div className="address">
            <h6>usdt address</h6>
            <p>{address.usdt}</p>
            <button onClick={handleUsdt}>copy</button>
          </div>
          <div className="address">
            <h6> btc address</h6> <p>{address.btc}</p>
            <button onClick={handleBtc}>copy</button>
          </div>
          <div className="dep-card">
            <div className="dep-row pb">
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="plan">plan</InputLabel>
                <Select id="plan" value={plan} fullWidth onChange={handleSelect}>
                  <MenuItem value="Gold">Gold</MenuItem>
                  <MenuItem value="Diamond">Diamond</MenuItem>
                  <MenuItem value="Platinum">Platinum</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="dep-row pb">
              <TextField
                type="number"
                margin="dense"
                required
                onChange={handleDeposit}
                label={Text}
                fullWidth
                variant="filled"
              />
            </div>
            <div className="dep-row dep-btn">
              <Button
                onClick={() => {
                  removeModal();
                  setstatmessage(
                    `copy the USDT or alternatively the BTC address and make deposit before submiting your deposit request`
                  );
                }}
                variant="outlined"
                color="primary"
                size="large"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={deposithandle}
                disabled={disable}
                size="large"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Deposit;