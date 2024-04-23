import { getApi, postApi, putApi } from "@/functions/API";
import millisecondToSecondMinuteHour from "@/functions/millisecondToSecondMinuteHour";
import secondMinuteHourToMillisecond from "@/functions/secondMinuteHourToMillisecond";
import { categoryTypes } from "@/types/categoryTypes";
import { packageTypes, packageTypesString } from "@/types/packageTypes";
import { videoTypes } from "@/types/videoTypes";
import {
  Box,
  Button,
  duration,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
interface Props {
  data?: videoTypes;
  onClose: () => void;
  onProgress: () => void;
  onProgressEnd: () => void;
  type?: string;
}
interface durationTypes {
  hour: string;
  minute: string;
  second: string;
}

export default function VideoForm({
  data,
  onClose,
  onProgress,
  onProgressEnd,
  type,
}: Props) {
  const [formData, setFormData] = useState<videoTypes>({
    title: "",
    categoryId: "",
    duration: 1,
    date: "",
    id: "",
    platformType: type || "YT",
    videoUrl: "",
    watchHistory: [],
  });
  const [category, setCategory] = useState<categoryTypes[]>([]);
  const [duration, setDuration] = useState<durationTypes>({
    hour: "",
    minute: "",
    second: "",
  });
  useEffect(() => {
    getApi("/apis/category").then((res) => {
      setCategory(res.data);
    });
  }, []);

  useEffect(() => {
    if (data) {
      setFormData(data);
      setDuration({
        minute: millisecondToSecondMinuteHour(data.duration)
          .split(" ")[1]
          .split("m")[0],
        hour: millisecondToSecondMinuteHour(data.duration)
          .split(" ")[0]
          .split("h")[0],
        second: millisecondToSecondMinuteHour(data.duration)
          .split(" ")[2]
          .split("s")[0],
      });
    }
  }, [data]);
  useEffect(() => {
    setFormData((d) => ({
      ...d,
      duration: secondMinuteHourToMillisecond(
        duration.hour,
        duration.minute,
        duration.second
      ),
    }));
  }, [duration]);
  const addPackage = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    onProgress();
    try {
      await postApi("/apis/admin/video", {
        title: formData.title,
        duration: formData.duration,
        videoUrl: formData.videoUrl,
        platformType: type || "YT",
        categoryId: formData.categoryId,
      });
      onProgressEnd();
      onClose();
      toast.success("Package added successfully");
    } catch (error: any) {
      onProgressEnd();
      onClose();
      toast.error(error.response.data.error);
    }
  };
  const updatePackage = async (e: any) => {
    e.preventDefault();

    onProgress();
    try {
      await putApi("/apis/admin/video", {
        title: formData.title,
        duration: formData.duration,
        videoUrl: formData.videoUrl,
        platformType: type || "YT",
        categoryId: formData.categoryId,
        videoId:formData.id
      });
      onProgressEnd();
      onClose();
      toast.success("Package updated successfully");
    } catch (error: any) {
      onProgressEnd();
      onClose();
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="w-[calc(100%-20px)] lg:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-md">
      <p className="font-medium text-xl text-center mt-4 mb-6">
        {data ? "Update" : "Add"} Video
      </p>
      <form onSubmit={data ? updatePackage : addPackage}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextField
            name="title"
            required
            onChange={(e) =>
              setFormData((d) => ({ ...d, title: e.target.value }))
            }
            InputProps={{ inputProps: { maxLength: 150, minLength: 5 } }}
            value={formData.title}
            sx={{ width: "100%" }}
            placeholder="max 150 letter and min 5 letter"
            label="Video Title"
            variant={"standard"}
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Select Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={formData.categoryId}
              onChange={(e) =>
                setFormData((d) => ({ ...d, categoryId: e.target.value }))
              }
              label="Select Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {category.map((d) => (
                <MenuItem key={d.id} value={d.id}>{d.title}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name="videoUrl"
            required
            onChange={(e) =>
              setFormData((d) => ({
                ...d,
                videoUrl: e.target.value,
              }))
            }
            value={formData.videoUrl}
            sx={{ width: "100%" }}
            placeholder="https://"
            label="Video Link"
            variant={"standard"}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <div>Video Duration</div>
            <TextField
              name="hour"
              required
              onChange={(e) => {
                setDuration((d) => ({
                  ...d,
                  hour: e.target.value,
                }));
              }}
              value={duration.hour}
              sx={{ width: "100%" }}
              placeholder="Eg. 1"
              label="Hour"
              variant={"standard"}
            />
            <TextField
              name="minute"
              required
              onChange={(e) => {
                setDuration((d) => ({
                  ...d,
                  minute: e.target.value,
                }));
              }}
              value={duration.minute}
              sx={{ width: "100%" }}
              placeholder="Eg. 1"
              label="Minute"
              variant={"standard"}
            />
            <TextField
              name="second"
              required
              onChange={(e) => {
                setDuration((d) => ({
                  ...d,
                  second: e.target.value,
                }));
              }}
              value={duration.second}
              sx={{ width: "100%" }}
              placeholder="Eg. 1"
              label="Second"
              variant={"standard"}
            />
          </Box>
        </div>

        <Button
          type={"submit"}
          className="bg-blue-400 w-full mt-6 mb-3 rounded-md"
          variant="contained"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
