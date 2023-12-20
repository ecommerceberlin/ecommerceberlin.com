import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const WidgetVideo = ({ videoId }) => {
  const classes = useStyles();

  const aspectRatio = 9 / 16;

  return (
    <div className={classes.container} style={{ paddingBottom: `${100 * aspectRatio}vw` }}>
      <iframe
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={classes.iframe}
      />
    </div>
  );
};

export default WidgetVideo;
