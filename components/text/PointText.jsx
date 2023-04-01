import React from 'react';
import classes from './PointText.module.scss';
import clsx from 'clsx';
import Text from './Text';

function PointText({className, children}) {
  return (
    <div className={clsx(classes.pointText, className)}>
      <div className={classes.circle}></div>
      <Text>{children}</Text>
    </div>
  )
}

export default PointText
