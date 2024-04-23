import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Link, Typography } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";
import useAuth from "@/hooks/useAuth";

const UpcomingSchedules = () => {
  const { topData } = useAuth();

  return (
    <DashboardCard title="Top Videos">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: { lg: "-40px" },
            "& .MuiTimelineConnector-root": {
              width: "1px",
              backgroundColor: "#efefef",
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
              pb:7
            },
          }}
        >
          {topData?.topVideos?.slice(0,5).map((doc:any, i:number) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>{new Date(doc.date).toDateString()}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
               {doc?.title}
              </TimelineContent>
            </TimelineItem>
          ))}

         
         
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default UpcomingSchedules;
