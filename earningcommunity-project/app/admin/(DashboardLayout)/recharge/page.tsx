"use client";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { IconCircleCheck, IconCircleX, IconPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { rechargeHistoryTypes } from "@/types/rechargeHistoryTypes";
import { getApi, postApi } from "@/functions/API";
import { toast } from "react-toastify";
import Image from "next/image";
import LoaderScreen from "../components/shared/LoaderScreen";

const Recharge = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState<rechargeHistoryTypes[] | undefined>();
  const [count, setCount] = useState(0);
  const [reload, setReload] = useState<number>(0);
  const [message, setMessage] = useState<string>();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState<string>();

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getData = async () => {
    try {
      const res = await getApi(`/apis/admin/recharge`, {
        take: rowsPerPage,
        skip: page * rowsPerPage,
      });

      setData(res.data.history);
      setCount(res.data.count);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  const changeRechargeStatus = async (
    isAccepted: boolean,
    id: string,
    message: string | undefined
  ) => {
    
    const toastId = toast.loading("Please wait...");

    try {
      await postApi("/apis/admin/recharge", {
        accept: isAccepted ? "fsfsfd" : "",
        message: message,
        requestId: id,
      });
      setReload(Math.random());
      toast.update(toastId, {
        render: "Update successful",
        type: "success",
        isLoading: false,
      });
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
      <DashboardCard title="Recharge Request">
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
              Members who send mony into your account
            </Typography>
            {/* <div className="w-[40px] cursor-pointer shadow-lg hover:bg-sky-700 h-[40px] bg-sky-400 rounded-full flex justify-center items-center text-white">
              <IconPlus />
            </div> */}
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
                      Wallet & Wallet Number
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Amount & Transaction ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Status & Date
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
                {data?.map((doc, index) => (
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
                        <div className="flex gap-1">
                          <Image
                            height={50}
                            width={50}
                            src={doc.wallet.icon}
                            alt={doc.wallet.name}
                          />
                          <div>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {doc.wallet.name}
                            </Typography>
                            <Typography
                              color="textSecondary"
                              sx={{
                                fontSize: "13px",
                              }}
                            >
                              {doc.adminWallet.number}
                            </Typography>
                          </div>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <div>
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"
                          fontWeight={600}
                        >
                          {doc.amount} BDT
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"
                          fontWeight={400}
                        >
                          {doc.transactionId}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <Chip
                          sx={{
                            px: "4px",
                            backgroundColor:
                              doc.status === "PENDING" ? "#FE9900" :doc.status==="REJECTED"?"red": "#7DDA58",
                            color: "#fff",
                            mb: "4px",
                          }}
                          size="small"
                          label={doc.status}
                        ></Chip>
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"
                          fontWeight={400}
                        >
                          {new Date(doc.date).toDateString()}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {doc.status !== "PENDING" ? (
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"
                          fontWeight={800}
                        >
                          {doc.status}
                        </Typography>
                      ) : (
                        <Grid>
                          <IconButton
                            onClick={() =>
                              changeRechargeStatus(true, doc.id, undefined)
                            }
                          >
                            <IconCircleCheck color="green" />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              handleClickOpen();
                              setId(doc.id);
                            }}
                          >
                            <IconCircleX color="red" />
                          </IconButton>
                        </Grid>
                      )}
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
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Send a message to user why you cancel the recharge request
            </DialogTitle>
            <DialogContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  changeRechargeStatus(false, id as string, message);
                  handleClose();
                }}
              >
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                  placeholder="Write a message"
                  className="w-full border rounded-sm outline-none px-3 py-2"
                  minLength={10}
                  rows={4}
                  maxLength={200}
                />
                <Button type="submit" autoFocus>
                  Send
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default Recharge;
