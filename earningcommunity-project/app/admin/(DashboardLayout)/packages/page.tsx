"use client";
import {
  Backdrop,
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
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
import { deleteApi, getApi } from "@/functions/API";
import { AxiosError } from "axios";
import { packageTypes } from "@/types/packageTypes";
import LoaderScreen from "../components/shared/LoaderScreen";
import { toast } from "react-toastify";
import PackageFrom from "../components/forms/PackageFrom";

const Packages = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState<packageTypes[]>();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selected, setSelected] = useState<packageTypes | undefined>();
  const [reload, setReload] = useState<number>(0);
  useEffect(() => {
    getData();
  }, [page, rowsPerPage, reload]);
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
  const getData = async () => {
    try {
      const res = await getApi(`/apis/packages`, {
        take: rowsPerPage,
        skip: page * rowsPerPage,
      });
      setData(res.data.packages);
      setCount(res.data.count);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  const deleteData = async (id: string) => {
    const toastId = toast.loading("Deleting..Please wait");
    try {
      await deleteApi("/apis/admin/packages", {
        id: id,
      });
      // console.log(d);

      toast.update(toastId, {
        render: "Delete Successful",
        type: "success",
        isLoading: false,
      });
      setReload(Math.random());
    } catch (error: any) {
      toast.update(toastId, {
        render: error.response.data.error,
        type: "error",
        isLoading: false,
      });
    } finally {
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
    }
  };
  if (!data) {
    return <LoaderScreen />;
  }
  return (
    <PageContainer
      title="All Packages"
      description="Add your package list from plus icon"
    >
      <DashboardCard title="All Packages">
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
              Add your package from plus icon
            </Typography>
            <div
              onClick={() => {
                setSelected(undefined);
                setOpen(true);
              }}
              className="w-[40px] cursor-pointer shadow-lg hover:bg-sky-700 h-[40px] bg-sky-400 rounded-full flex justify-center items-center text-white"
            >
              <IconPlus />
            </div>
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
                      Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((product, index) => (
                  <TableRow key={product.id}>
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
                            {product.title}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            Max withdraw limit {product.withdrawLimit}
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
                        {product.price} Taka
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {product.duration} Months
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Grid>
                        <IconButton
                          onClick={() => {
                            setSelected(product);
                            setOpen(true);
                          }}
                        >
                          <IconEdit />
                        </IconButton>
                        <IconButton onClick={() => deleteData(product.id)}>
                          <IconTrash />
                        </IconButton>
                      </Grid>
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
      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={Boolean(open)}
        onClose={() => setOpen(false)}
      >
        {/* <PackageFrom onClose={()=>setOpen(false)} onProgress={()=>} /> */}
        {loader ? (
          <LoaderScreen />
        ) : (
          <PackageFrom
            data={selected}
            onClose={() => setOpen(false)}
            onProgress={() => setLoader(true)}
            onProgressEnd={() => {
              setLoader(false);
              setReload(Math.random());
            }}
          />
        )}
      </Modal>
    </PageContainer>
  );
};

export default Packages;
