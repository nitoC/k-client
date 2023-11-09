import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#2196F3",
        color: "#fff",
        borderRadius: 16,
    },
    planTitle: {
        fontSize: "24px",
    },
    profit: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#FFC107",
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    duration: {
        fontSize: "20px",
        color: "#757575",
    },
    referral: {
        display: "flex",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
    },
    callMadeIcon: {
        fontSize: "35px",
        marginLeft: theme.spacing(1),
    },
}));

const AttractiveCard = ({ plan, profit, minDeposit, duration }) => {
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} elevation={3}>
                <CardContent>
                    <Typography className={classes.planTitle}>{plan}</Typography>
                    <Typography className={classes.label}>Profit:</Typography>
                    <Typography className={classes.profit}>{profit}</Typography>
                    <Typography className={classes.label}>Min Deposit:</Typography>
                    <Typography className={classes.planTitle}>{minDeposit}</Typography>
                    <Typography className={classes.label}>Duration of investment:</Typography>
                    <Typography className={classes.profit}>{duration}</Typography>
                    <Typography className={classes.label}>Referral Bonus:</Typography>
                    <div className={classes.referral}>
                        4%
                        <CallMadeIcon className={classes.callMadeIcon} />
                    </div>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default AttractiveCard;
