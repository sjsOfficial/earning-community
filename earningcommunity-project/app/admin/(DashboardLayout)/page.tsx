'use client'
import { Grid, Box } from '@mui/material';

// components
// import ProfitExpenses from '@/app/(DashboardLayout)/components/dashboard/ProfitExpenses';
// import TrafficDistribution from '@/app/(DashboardLayout)/components/dashboard/TrafficDistribution';
// import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
// import TopPayingClients from '@/app/(DashboardLayout)/components/dashboard/TopPayingClients';
// import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
// import ProductSales from '@/app/(DashboardLayout)/components/dashboard/ProductSales';
import PageContainer from './components/container/PageContainer';
import ProfitExpenses from './components/dashboard/ProfitExpenses';
import TrafficDistribution from './components/dashboard/TrafficDistribution';
import ProductSales from './components/dashboard/ProductSales';
import UpcomingSchedules from './components/dashboard/UpcomingSchedules';
import TopPayingClients from './components/dashboard/TopPayingClients';


const Dashboard = () => {

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ProfitExpenses />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TrafficDistribution />
              </Grid>
              <Grid item xs={12}>
                <ProductSales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <UpcomingSchedules />
          </Grid>
          <Grid item xs={12} lg={8}>
            <TopPayingClients />
          </Grid>
          {/* <Grid item xs={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
