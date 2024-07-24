import React, { useState } from 'react';
import TimeRangeDropdown from '@splunk/react-time-range/Dropdown';
import Dashboard from './components/Dashboard';
import { Tooltip, Button } from 'antd';

const initialDateRange = ['-4h@m', 'now'];

export default function App() {
  const [dateRange, setDateRange] = useState(initialDateRange);

  const handleChange = (e, { earliest, latest }) => {
    setDateRange([earliest, latest]);
  };

  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <Tooltip title="Select a time range" placement='bottomLeft'>
        <div>
        <TimeRangeDropdown
          appearance="flat"
          presets={[
            { label: 'Today', earliest: '@d', latest: 'now' },
            { label: 'Last 15 minutes', earliest: '-15m', latest: 'now' },
            { label: 'Last 60 minutes', earliest: '-60m@m', latest: 'now' },
            { label: 'Last 4 hours', earliest: '-4h@m', latest: 'now' },
            { label: 'Last 12 hours', earliest: '-12h@m', latest: 'now' },
          ]}
          onChange={handleChange}
          earliest={dateRange[0]}
          latest={dateRange[1]}
          labelMaxChars={Infinity}
          style={{ margin: '20px' }}
        />
        </div>
      </Tooltip>
      <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</Button>
      <Tooltip title={disabled ? '' : 'prompt text'}>
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
      <Dashboard dateRange={dateRange} />
    </div>
  );
}
