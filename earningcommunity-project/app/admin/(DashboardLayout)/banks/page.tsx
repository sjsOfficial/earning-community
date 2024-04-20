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
import { adminWalletTypes } from "@/types/adminWalletTypes";
import { deleteApi, getApi } from "@/functions/API";
import { toast } from "react-toastify";
import LoaderScreen from "../components/shared/LoaderScreen";
import Image from "next/image";
import BankForm from "../components/forms/BankForm";

const Banks = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState<adminWalletTypes[] | undefined>();
  const [count, setCount] = useState(0);
  const [reload, setReload] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selected, setSelected] = useState<adminWalletTypes | undefined>();

  useEffect(() => {
    getData();
  }, [page, rowsPerPage, reload]);
  const getData = async () => {
    try {
      const res = await getApi(`/apis/admin/wallet`, {
        take: rowsPerPage,
        skip: page * rowsPerPage,
      });

      setData(res.data.wallet);
      setCount(res.data.count);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  const deleteData = async (id: string) => {
    const toastId = toast.loading("Deleting..Please wait");
    try {
      await deleteApi("/apis/admin/wallet", {
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
                      Date
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
                        {doc.wallet && (
                          <Image
                            src={doc.wallet.icon}
                            height={50}
                            width={50}
                            alt={doc.wallet.name}
                          />
                        )}
                        <Box
                          sx={{
                            ml: 2,
                          }}
                        >
                          <Typography variant="subtitle2" fontWeight={600}>
                            {doc.wallet?.name}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            sx={{
                              fontSize: "13px",
                            }}
                          >
                            {doc.number}
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
                        {new Date(doc.date).toDateString()}
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      <Grid>
                        {/* <IconButton onClick={() => {
                            setSelected(doc);
                            setOpen(true);
                          }}>
                          <IconEdit />
                        </IconButton> */}
                        <IconButton onClick={() => deleteData(doc.id)}>
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
          <BankForm
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

export default Banks;
