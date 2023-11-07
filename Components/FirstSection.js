import {
  Button,
  Typography,

} from "@material-ui/core";


const FirstSection = ({ user, modal }) => {
    return (
      <div className="row1">
        <div className="text-sec">
          <Typography variant="h5" style={{ color: "" }}>
            <span style={{ color: "" }}>@</span>
            {user.username}
          </Typography>
        </div>
  
        <div className="btn-sec">
          <Button
            className="btn"
            onClick={modal.handleModal1}
            variant="outlined"
            color="primary"
            size="small"
          >
            withdraw
          </Button>
        </div>
  
        <div className="btn-sec">
          <Button
            className="btn"
            onClick={modal.handleModal}
            variant="contained"
            color="primary"
            size="small"
          >
            deposit
          </Button>
        </div>
      </div>
    );
  };

  export default FirstSection;