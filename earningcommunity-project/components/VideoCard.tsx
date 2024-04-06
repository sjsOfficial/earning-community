import React from 'react';
import { VideoCardProps } from '@/app/types'; // Assuming you have defined VideoCardProps in a types file

const VideoCard: React.FC<VideoCardProps> = ({ videoData,minWidth }) => {
  const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const formattedTime = `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
    return formattedTime.trim();
  };
  const formattedDuration = formatDuration(videoData.duration);

  return (
    <div className="px-2">
      <div className={`relative w-full max-w-lg overflow-hidden bg-[#2E4053] shadow-lg rounded-[10px] mx-auto ${minWidth && `${minWidth}`}`}>
        {/* YouTube video iframe */}
        <iframe
          title={videoData.title}
          className="w-full h-[160px] md:h-[180px] lg:h-[200px]"
          src={`https://www.youtube.com/embed/${videoData.videoUrl}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Video details */}
        <div className="md:p-4 p-2">
          <h2 className="md:text-[16px] text-[14px] text-[#FFFFFF] md:font-medium line-clamp-2">{videoData.title}</h2>
          <div className="flex justify-between">
            <p className="text-[12px] md:text-[14px] text-[#FFFFFF] md:font-medium">{videoData.date}</p>
            <p className="text-[12px] md:text-[14px] text-[#FFFFFF] md:font-medium">{formattedDuration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;