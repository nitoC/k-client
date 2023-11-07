import {
    Card,
    Typography,
  } from "@material-ui/core";

const Profit = ({ balance, capital }) => {
  console.log(balance);
  console.log(capital);
  let nval = ((balance - capital) / capital) * 100;

  return (
    <div className="balance-cover">
      <Card className="wrap">
        <div className="p-text-wrap">
          <Typography className="p-width-1 p-width" variant="h5">
            profit:
          </Typography>
          <Typography variant="h5" className="p-width-1 c">
            %{isNaN(nval) ? 0 : Math.round(nval)}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Profit;