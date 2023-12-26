import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const tabTitles = [
  'NBA',
  'NFL',
  'MLB',
  'Wimbledon',
  'PL',
  'ICC',
  'PGA',
  'NHL',
  'UFC',
  'F1',
  'NRL',
  'NVA',
];

const PopularScroll = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: '100%',
        height: '3em',
        backgroundColor: '#ffffff',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {tabTitles.map((x) => (
          <Tab label={x} sx={{ color: '#296BB2' }} />
        ))}
      </Tabs>
    </Box>
  );
};

export default PopularScroll;
