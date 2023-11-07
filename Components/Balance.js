import {
    Card,
    Typography,
  } from "@material-ui/core";



const Balance = ({ balance }) => {
    return (
      <div className="balance-cover">
        <Card className="wrap">
          <div className="p-text-wrap">
            <Typography className="p-width-1 p-width" variant="h5">
              Bal:
            </Typography>
            <Typography variant="h5" className="p-width-1 c">
              {"  $" + balance}
            </Typography>
          </div>
        </Card>
      </div>
    );
  };

  export default Balance;