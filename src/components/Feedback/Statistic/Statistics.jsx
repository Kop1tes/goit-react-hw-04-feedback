import React from "react";
import PropTypes from "prop-types";
import { StatisticList, StatisticItem } from "./Statistic.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticList>
            <StatisticItem>Good: <span>{ good }</span></StatisticItem>
            <StatisticItem>Neutral: <span>{ neutral }</span></StatisticItem>
            <StatisticItem>Bad: <span>{ bad }</span></StatisticItem>
            <StatisticItem>Total: <span>{ total }</span></StatisticItem>
            <StatisticItem>Positive feddback: <span>{ positivePercentage + "%" }</span></StatisticItem>
        </StatisticList>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};