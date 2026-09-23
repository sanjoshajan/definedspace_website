'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { STUDIO_VIDEOS, VideoItem } from '@/data/portfolioData';
import VideoModal from '@/components/VideoModal';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div className="pt-28 pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#006D5B] px-3.5 py-1 rounded-full">
            Video Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
            Project Videos
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative bg-black rounded-xl overflow-hidden border border-[#E4EFE7] shadow-xs hover:shadow-md cursor-pointer transition-all aspect-[16/9]"
            >
              <video
                src={video.videoSrc}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-black ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
