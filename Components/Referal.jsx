import { useEffect, useState, memo, useCallback } from "react";
import { getReferrals, referfunc } from "../apis/api";
import {
  Card,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import { Skeleton } from "@material-ui/lab";


const Refer = ({ id }) => {


  const [referNo, setreferNo] = useState();
  let referralLink = `${window.location.protocol}//${window.location.host}/referral/${id}`
  const [alert, setAlert] = useState(false)

  let userId = localStorage.getItem('userId')
  userId = JSON.parse(userId)
  console.log(id);



  const copyClipHandler = () => {
    // Get the text field
    var copyText = referralLink

    // // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    setAlert(true);
    setTimeout(() => {
      setAlert(false)
    }, 3000);
  }

  const fetchReferrals = useCallback(async () => {
    let data;
    try {
      data = await getReferrals(userId);
      console.log(data.data, 'ind');
    } catch (error) {
      if (error) console.log(error);
    }
    if (data) return setreferNo(data.data.payload);
  }, [userId]);



  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);


  return (
    <div className="referrals">
      <div className="badge">
        <div className="badge_image_wrapper">
          <Image layout="fill" objectFit="contain" className="badge_image" src='/Group.png' alt="group" />
        </div>
        <sup className="refers">{!isNaN(referNo) ? referNo : <Skeleton variant="text" animation="wave" />}</sup>
      </div>
      <div className="referral_alert_wrapper">
        <p className={alert ? `referral_alert` : `referral_no_alert`}>referral link copied !</p>
      </div>
      <div className="referral_link_wrapper">
        <div className="referral_btn_wrapper">
          <button onClick={copyClipHandler} className="referral_btn">copy</button>

        </div>
        <div className="referral_text">
          <Typography className="referral_link" variant="subtitle1">
            {referralLink}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default memo(Refer);