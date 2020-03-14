import React, { useState } from 'react';

import Modal from '../common/Modal/Modal';

import classes from './Work.module.scss';

const Work:React.FC<any> = ({ workName, workStartDate, workEndDate, workRole, workDescription }) => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.singleWork}>
      <div className={classes.singleWorkName}><b>{workName}</b></div>
      <div className={classes.singleWorkDates}><span>{workStartDate}</span> <span className={classes.singleWorkTimeline}></span> <span>{workEndDate}</span></div>
      <div className={classes.singleWorkRole}>{workRole}</div>
      <div className={classes.singleWorkSeeMore}><button onClick={() => setModalOpen(true)} className={classes.singleWorkSeeMoreButton}>see job description</button></div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className={classes.singleWorkDescription}>{workDescription}</div>
      </Modal>
    </div>
  )
};

export default Work;