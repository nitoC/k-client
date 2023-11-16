import { useEffect, useState, memo, useCallback } from "react";
import { referfunc } from "../apis/api";
import {
  Card,
  Typography,
} from "@material-ui/core";
import Image from "next/image";


const Refer = ({ id }) => {
  const [referNo, setreferNo] = useState(0);
  console.log(id);
  const fetchReferrals = useCallback(async () => {
    let data;
    try {
      data = await referfunc({ id: id });
      console.log(data.data);
    } catch (error) {
      if (error) console.log(error);
    }
    if (data) return setreferNo(data.data);
  }, [id]);
  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);
  return (
    <div className="referrals">
      <div className="badge">
        <div className="badge_image_wrapper">
          <Image layout="fill" objectFit="contain" className="badge_image" src='/Group.png' alt="group" />
        </div>
        <sup className="refers">{Number(referNo) ? referNo : 0}</sup>
      </div>
      <div className="referral_link_wrapper">
        <Typography className="referral_link" variant="subtitle1">
          {`${window.location.protocol}//${window.location.host}/referral/${id} `}
        </Typography>
      </div>
    </div>
  );
};

export default memo(Refer);