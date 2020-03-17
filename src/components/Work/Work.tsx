import React, { useState } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import classes from './Work.module.scss';

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: '#121212',
    border: '0',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#121212',
    borderBottom: '1px solid rgba(50, 50, 50, .75)',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    justifyContent: 'space-between',
    margin: '6px 0',
    '&$expanded': {
      margin: '6px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: '8px 16ox',
  },
}))(MuiExpansionPanelDetails);

const Work:React.FC<any> = ({ workName, workStartDate, workEndDate, workRole, workDescription }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={classes.singleWork}>
      <ExpansionPanel square expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <div>
            <div className={classes.singleWorkName}><b>{workName}</b></div>
            <div className={classes.singleWorkRole}>{workRole}</div>
          </div>
          <div className={classes.singleWorkDates}>
            <div className={classes.singleWorkStartEndDate}><span>{workStartDate}</span> - <span>{workEndDate}</span></div>
            <div className={classes.singleWorkTimelineContainer}><span className={classes.singleWorkTimeline}></span></div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.singleWorkDescription}>{workDescription}</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
};

export default Work;