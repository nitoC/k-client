import {
  Card,
  Typography,
} from "@material-ui/core";


const Capital = ({ capital }) => {
    return (
      <div className="balance-cover">
        <Card className="wrap">
          <div className="p-text-wrap">
            <Typography className="p-width" variant="h5">
              Capital:
            </Typography>
            <Typography className="p-width-1 c" variant="h5">
              ${capital}
            </Typography>
          </div>
        </Card>
      </div>
    );
  };

  export default Capital;