import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {LayOut} from 'features/common'
import {Flower,Goal,Graph} from 'features/review'
import 'features/review/style/reviewStyle.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <LayOut>
        <div className= 'review-container'>
            <box className="review-box">
            <div className="reviewText"  position="static">
                <Tabs 
                value={value}
                onChange={handleChange}
                indicatorColor="wheat"
                textColor="lightcoral"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="Flower" {...a11yProps(0)} />
                <Tab label="Goal" {...a11yProps(1)} />
                <Tab label="Review" {...a11yProps(2)} />
                </Tabs>
            </div>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                <Flower/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <Goal/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                <Graph/>
                </TabPanel>
            </SwipeableViews>
            </box>
        </div>
    </LayOut>
  );
}
