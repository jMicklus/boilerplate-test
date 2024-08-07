import React from 'react';

import { DashboardContextProvider } from '@splunk/dashboard-context';
import EnterprisePreset from '@splunk/dashboard-presets/EnterprisePreset';
import DashboardCore from '@splunk/dashboard-core';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import definition from '../dashboards/def1.json';

const themeToVariant = {
  enterprise: { colorScheme: 'light', family: 'enterprise' },
  enterpriseDark: { colorScheme: 'dark', family: 'enterprise' },
  prisma: { colorScheme: 'dark', family: 'prisma' },
};

const Dashboard = ({ dateRange }) => {
  const appTokenBindings = {
    default: {
      earliest: dateRange[0],
      latest: dateRange[1],
    },
  };

  return (
    <SplunkThemeProvider {...themeToVariant.enterprise} data-testid="provider">
      <DashboardContextProvider>
        <DashboardCore
          data-testid="dashboard"
          width="100%"
          height="100%"
          definition={definition}
          preset={EnterprisePreset}
          tokenBinding={appTokenBindings}
        />
      </DashboardContextProvider>
    </SplunkThemeProvider>
  );
};

export default Dashboard;
