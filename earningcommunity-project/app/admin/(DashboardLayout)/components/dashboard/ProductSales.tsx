import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Fab } from "@mui/material";
import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";
import { useData } from "@/app/providers/DataProvider";
import { useEffect } from "react";
import { putApi } from "@/functions/API";

const ProductSales = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const successlight = theme.palette.success.light;
  const errorlight = "#fdede8";
  const { withdrawData, setWithdrawData } = useData();
  //console.log(withdrawData)
  useEffect(() => {
    putApi("/apis//admin/withdraw").then((res) => {
      setWithdrawData(res.data);
    });
  }, []);
  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: [primary],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
    },
  };
  const seriescolumnchart: any = [
    {
      name: "",
      color: primary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <DashboardCard
      title="Total Withdraw"
      action={<></>}
      footer={
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="area"
          width={"100%"}
          height="60px"
        />
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          {withdrawData.totalWithdraw} BDT
        </Typography>
        {withdrawData.percentageLastMonthWithdraw < 0 ? (
          <Stack direction="row" spacing={1} my={1} alignItems="center">
            <Avatar sx={{ bgcolor: errorlight, width: 21, height: 21 }}>
              <IconArrowDownRight width={18} color="#FA896B" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              -{withdrawData.percentageLastMonthWithdraw}%
            </Typography>
          </Stack>
        ) : (
          <Stack direction="row">
            <Avatar sx={{ bgcolor: successlight, width: 21, height: 21 }}>
              <IconArrowUpLeft width={18} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +{withdrawData.percentageLastMonthWithdraw}%
            </Typography>
          </Stack>
        )}
      </>
    </DashboardCard>
  );
};

export default ProductSales;
