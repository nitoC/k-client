import {
  Button,
  Card,
  Typography,
} from "@material-ui/core";



const Plan = ({ plan, modal }) => {
  return (
    <>
      <div className="plan-cover">
        <div className="p-text-wrap">
          <Typography className="plan" variant="h5">
            {(plan === null || plan === '' || plan === undefined || plan === "Gold") ? "Gold" : plan}
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
      </div>
    </>
  );
};

export default Plan;