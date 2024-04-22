"use client";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import PageContainer from "../components/container/PageContainer";
import DashboardCard from "../components/shared/DashboardCard";
import {
  IconEdit,
  IconPlus,
  IconRecycle,
  IconTrash,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { getApi } from "@/functions/API";
import { toast } from "react-toastify";
import LoaderScreen from "../components/shared/LoaderScreen";

export interface Root {
  id: string;
  title: string;
  price: number;
  duration: number;
  withdrawLimit: number;
  description: string;
  date: string;
  packageHistory: PackageHistory[];
}

export interface PackageHistory {
  id: string;
  package: Package;
  price: number;
  duration: number;
  withdrawLimit: number;
  date: string;
  userId: string;
  packageId: string;
}

export interface Package {
  id: string;
  title: string;
  price: number;
  duration: number;
  withdrawLimit: number;
  description: string;
  date: string;
}

const Purchase = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState<Root[] | undefined>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();
  }, [page, rowsPerPage]);
  const getData = async () => {
    try {
      const res = await getApi(`/apis/admin/purchase`, {
        take: rowsPerPage,
        skip: page * rowsPerPage,
      });

      setData(res.data.packages);
      setCount(res.data.count);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  if (!data) {
    return <LoaderScreen />;
  }
  return (
    <PageContainer
      title="All Packages"
      description="Add your package list from plus icon"
    >
      <DashboardCard title="Purchase Packages">
        <Box>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={16}>
              Members who purchase package of any
            </Typography>
          </Box>
          <Box sx={{ marginY: 2, width: "100%" }}>
            <Table
              sx={{
                whiteSpace: "wrap",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Duration
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight={600}>
                      Total Purchase
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((doc, index) => (
                  <TableRow key={doc.title}>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {(page + 1) * (index + 1)}
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
                            {doc.title}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {doc.withdrawLimit} withdraw limit
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {doc.price} BDT
                      </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {doc.duration} Months
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                    <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {doc.packageHistory.length} Purchase
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={count}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default Purchase;
