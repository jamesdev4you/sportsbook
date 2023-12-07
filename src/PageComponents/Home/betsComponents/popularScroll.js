import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
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
        maxWidth: { xs: 320, sm: '100%' },
        height: '3em',
        backgroundColor: '#ffffff',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'
      >
        {tabTitles.map((x) => (
          <Tab label={x} sx={{ color: '#296BB2' }} />
        ))}
      </Tabs>
    </Box>
  );
};

export default PopularScroll;
