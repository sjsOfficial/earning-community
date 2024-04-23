"use client";
import {
  Box,
  Button,
  Chip,
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
import { videoTypes } from "@/types/videoTypes";
import { toast } from "react-toastify";
import { deleteApi, getApi } from "@/functions/API";
import LoaderScreen from "../components/shared/LoaderScreen";
import millisecondToSecondMinuteHour from "@/functions/millisecondToSecondMinuteHour";
import VideoForm from "../components/forms/VideoForm";

const Facebook = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState<videoTypes[] | undefined>();
  const [count, setCount] = useState(0);
  const [reload, setReload] = useState<number>(0);
  const [message, setMessage] = useState<string>();
  const [open, setOpen] = React.useState(false);
  const [currentData, setCurrentData] = useState<videoTypes>();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, [page, rowsPerPage, reload]);

  const getData = async () => {
    try {
      const res = await getApi(`/apis/admin/video`, {
        take: rowsPerPage,
        skip: page * rowsPerPage,
        platformType:"FB"
      });

      setData(res.data.videos);
      setCount(res.data.count);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  const deleteData = async (id: string) => {
    const toastId = toast.loading("Deleting..Please wait");
    try {
      await deleteApi("/apis/admin/video", {
        videoId: id,
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
  const handleClickOpen = () => {
    setCurrentData(undefined);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <DashboardCard title="Facebook Videos">
        <Box>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={16}>Your All Facebook videos</Typography>
            <div
              onClick={handleClickOpen}
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
                      Title & Date
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Duration
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Total Views
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight={600}>
                      Action
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((doc, index) => (
                  <TableRow key={doc.id}>
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
                            {new Date(doc.date).toLocaleDateString()}
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
                        {millisecondToSecondMinuteHour(doc.duration)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {doc.watchHistory.length}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Grid>
                        <IconButton>
                          <IconEdit
                            onClick={() => {
                              setCurrentData(doc);
                              setOpen(true);
                            }}
                          />
                        </IconButton>
                        <IconButton onClick={()=>deleteData(doc.id)}>
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
          <Modal
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            open={Boolean(open)}
            onClose={handleClose}
          >
            {loader ? (
              <LoaderScreen />
            ) : (
              <VideoForm
                data={currentData}
                onClose={() => setOpen(false)}
                onProgress={() => setLoader(true)}
                onProgressEnd={() => {
                  setLoader(false);
                  setReload(Math.random());
                }}
                type="FB"
              />
            )}
          </Modal>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default Facebook;
