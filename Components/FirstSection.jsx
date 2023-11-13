import {
  Button,
  Typography,

} from "@material-ui/core";


const FirstSection = ({ handlers }) => {
  return (
    <div className="row1">
      <div className="btn-sec">
        <Button
          className="btn"
          onClick={() => handlers.handleDashboardPage('Home')}
          variant="text"
          color="primary"
          size="small"
        >
          dashboard
        </Button>
      </div>
      <div className="btn-sec">
        <Button
          className="btn"
          onClick={() => handlers.handleDashboardPage('Market')}
          variant="text"
          color="primary"
          size="small"
        >
          market
        </Button>
      </div>
      <div className="btn-sec">
        <Button
          className="btn"
          onClick={() => handlers.handleDashboardPage('Exchange')}
          variant="text"
          color="primary"
          size="small"
        >
          exchange
        </Button>
      </div>
      <div className="btn-sec">
        <Button
          className="btn"
          onClick={() => handlers.handleDashboardPage('News')}
          variant="text"
          color="primary"
          size="small"
        >
          news
        </Button>
      </div>
      <div className="btn-sec">
        <Button
          className="btn"
          onClick={handlers.handleModal1}
          variant="text"
          color="primary"
          size="small"
        >
          withdraw
        </Button>
      </div>

      <div className="btn-sec">
        <Button
          className="btn"
          onClick={handlers.handleModal}
          variant="text"
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