import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Paper,
} from "@mui/material";

import TableContainer from "@mui/material/TableContainer";
import BlankCard from "../shared/BlankCard";
import DashboardCard from "../shared/DashboardCard";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { videoTypes } from "@/types/videoTypes";
import secondMinuteHourToMillisecond from "@/functions/secondMinuteHourToMillisecond";
import millisecondToSecondMinuteHour from "@/functions/millisecondToSecondMinuteHour";

const TopPayingClients = () => {
  const { topData } = useAuth();
  return (
    <DashboardCard title="Top Visitors">
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <Table
            sx={{
              whiteSpace: "wrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Assigned
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Watch Time
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Withdraw
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight={600}>
                    Balance
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topData?.topVisitors?.slice(0, 4).map((doc: any, i: number) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {i + 1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {doc.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {doc.device}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Watch history={doc.watchHistory} />
                  </TableCell>
                  <TableCell>
                    <Withdraw history={doc.withdrawHistory} />
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">৳{doc.balance}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default TopPayingClients;

interface History {
  amount: number;
}
const Withdraw = ({ history }: { history: History[] }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    history?.forEach((d) => {
      totalAmount += d.amount;
    });
    setCount(totalAmount);
  }, [history]);

  return (
    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
      {count}
    </Typography>
  );
};
const Watch = ({ history }: { history: videoTypes[] }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let totalMillisecond = 0;
    history?.forEach((d) => {
      totalMillisecond += d.duration;
    });
    setCount(totalMillisecond);
  }, [history]);

  return (
    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
      {millisecondToSecondMinuteHour(count)}
    </Typography>
  );
};
