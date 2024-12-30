import { ArrowRight } from "lucide-react";
import { useState } from "react";
import AudioVisualizer from "./AudioVisualizer";
import TranscriptView from "./TranscriptView";

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            See Neev in Action
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Watch how we transform doctor-patient conversations into structured
            notes
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 w-full">
                <AudioVisualizer
                  isPlaying={isPlaying}
                  onPlayPause={() => setIsPlaying(!isPlaying)}
                />
              </div>
              <div className="flex-1 w-full">
                <TranscriptView isPlaying={isPlaying} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center gap-2 mx-auto">
            Try Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
