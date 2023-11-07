import {
    Button,
    Card,
    Typography,
  } from "@material-ui/core";


const Plan = ({ plan, modal }) => {
    if (plan === null || plan === "") {
      return (
        <div className="plan-cover">
          <Card className="wrap">
            <div className="p-text-wrap">
              <Typography className="p-width" variant="h5">
                Plan:
              </Typography>
              <Typography className="p-width-1 c" variant="h5">
                No plan
              </Typography>
            </div>
            <div className="btn-c">
              <Button
                className="btn"
                onClick={modal}
                variant="contained"
                color="secondary"
              >
                select
              </Button>
            </div>
          </Card>
        </div>
      );
    }
    if (plan == "Gold") {
      return (
        <div className="plan-cover">
          <Card className="wrap">
            <div className="p-text-wrap">
              <Typography className="p-width" variant="h5">
                Plan:
              </Typography>
              <Typography className="p-width-1 c" variant="h5">
                {plan}
              </Typography>
            </div>
            <div className="btn-c">
              <Button
                className="btn"
                onClick={modal}
                variant="contained"
                color="secondary"
              >
                Upgrade
              </Button>
            </div>
          </Card>
        </div>
      );
    }
    if (plan == "Diamond") {
      return (
        <div className="plan-cover">
          <Card className="wrap">
            <div className="p-text-wrap">
              <Typography className="p-width" variant="h5">
                Plan:
              </Typography>
              <Typography className="p-width-1 c" variant="h5">
                {plan}
              </Typography>
            </div>
            <div className="btn-c">
              <Button
                className="btn"
                onClick={modal}
                variant="contained"
                color="secondary"
              >
                Upgrade
              </Button>
            </div>
          </Card>
        </div>
      );
    }
    if (plan == "Platinum") {
      return (
        <div className="plan-cover">
          <Card className="wrap">
            <div className="p-text-wrap">
              <Typography className="p-width" variant="h5">
                Plan:
              </Typography>
              <Typography className="p-width-1 c" variant="h5">
                {plan}
              </Typography>
            </div>
            <div className="btn-c">
              <Button
                className="btn"
                onClick={modal}
                variant="otlined"
                color="primary"
              >
                deposit
              </Button>
            </div>
          </Card>
        </div>
      );
    }
    return null;
  };

  export default Plan;