import { useEffect, useState } from "react";
import { referfunc } from "../apis/api";
import { Group } from "@material-ui/icons";
import {
    Card,
    Typography,
  } from "@material-ui/core";


const Refer = ({ email }) => {
    const [referNo, setreferNo] = useState(0);
    console.log(email);
    const fetchReferrals = async () => {
      let data;
      try {
        data = await referfunc({ email: email });
        console.log(data.data);
      } catch (error) {
        if (error) console.log(error);
      }
      if (data) return setreferNo(data.data);
    };
    useEffect(() => {
      fetchReferrals();
    }, []);
    return (
      <div className="balance-cover">
        <Card className="wrap">
          <div className="p-text-wrap refer">
            <Typography className="p-width-2 p-width-3" variant="h5">
              Referral:
            </Typography>
            <div className="align">
              <Typography className="refl" variant="subtitle1">
                {`${window.location.protocol}//${window.location.host}/Referral/
                ${email}
                "  "`}
              </Typography>
              <div className="badge">
                <Group />
                <div className="spref">{Number(referNo) ? referNo : 0}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  export default Refer;