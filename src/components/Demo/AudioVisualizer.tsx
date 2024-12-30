import { Mic, Play, Pause } from 'lucide-react';

interface AudioVisualizerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function AudioVisualizer({ isPlaying, onPlayPause }: AudioVisualizerProps) {
  return (
    <div className="bg-blue-50 rounded-xl p-6 relative">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onPlayPause}
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <div className="flex-1">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`w-2 rounded-full bg-blue-600 transition-all duration-150 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: isPlaying ? `${Math.random() * 40 + 10}px` : '4px',
                }}
              />
            ))}
          </div>
        </div>
        <Mic className="w-6 h-6 text-blue-600" />
      </div>
      <p className="text-sm text-gray-600">
        "Patient presents with recurring headaches and mild dizziness..."
      </p>
    </div>
  );
}