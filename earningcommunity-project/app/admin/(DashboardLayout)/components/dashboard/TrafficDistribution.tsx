import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import { IconArrowDownRight, IconArrowUpLeft } from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";
import { useData } from "@/app/providers/DataProvider";
import useAuth from "@/hooks/useAuth";

const TrafficDistribution = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const error = theme.palette.error.main;
  const secondary = theme.palette.secondary.light;
  const successlight = theme.palette.success.light;
  const errorlight = "#fdede8";
  const { purchasePackageData,withdrawData } = useAuth();

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 170,
    },
    colors: [primary, error],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
          background: "transparent",
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [purchasePackageData?.totalSell, withdrawData?.totalWithdraw];

  return (
    <DashboardCard title="Package Sells">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={6} sm={7}>
          <Typography variant="h3" fontWeight="700">
            {purchasePackageData?.totalSell} BDT
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            mt={1}
            alignItems="center"
          >
            {purchasePackageData?.percentageLastMonthSales < 0 ? (
              <Stack direction="row" spacing={1} my={1} alignItems="center">
                <Avatar sx={{ bgcolor: errorlight, width: 21, height: 21 }}>
                  <IconArrowDownRight width={18} color="#FA896B" />
                </Avatar>
                <Typography variant="subtitle2" fontWeight="600">
                  -{purchasePackageData?.percentageLastMonthSales}%
                </Typography>
              </Stack>
            ) : (
              <Stack direction="row">
                <Avatar sx={{ bgcolor: successlight, width: 21, height: 21 }}>
                  <IconArrowUpLeft width={18} color="#39B69A" />
                </Avatar>
                <Typography variant="subtitle2" fontWeight="600">
                  +{purchasePackageData?.percentageLastMonthSales}%
                </Typography>
              </Stack>
            )}

            <Typography variant="subtitle2" color="textSecondary">
              sell last month
            </Typography>
          </Stack>
          <Stack spacing={3} mt={3} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primary,
                  svg: { display: "none" },
                }}
              ></Avatar>
              <Typography
                variant="subtitle2"
                fontSize="12px"
                color="textSecondary"
              >
                Total Sell
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: error,
                  svg: { display: "none" },
                }}
              ></Avatar>
              <Typography
                variant="subtitle2"
                fontSize="12px"
                color="textSecondary"
              >
                Total Withdraw
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={6} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            width={"100%"}
            height="150px"
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default TrafficDistribution;
