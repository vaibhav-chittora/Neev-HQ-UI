import { Mic, FileText, ArrowRight, Play, Pause } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(true);

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
              {/* Left side - Audio Visualization */}
              <div className="flex-1 w-full">
                <div className="bg-blue-50 rounded-xl p-6 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex gap-1">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 rounded-full bg-blue-600 transition-all duration-150 ${
                              isPlaying ? "animate-pulse" : ""
                            }`}
                            style={{
                              height: isPlaying
                                ? `${Math.random() * 40 + 10}px`
                                : "4px",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <Mic className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">
                    "Patient presents with recurring headaches and mild
                    dizziness..."
                  </p>
                </div>
              </div>

              {/* Right side - Generated Notes */}
              <div className="flex-1 w-full">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Generated Summary</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="animate-pulse space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    {isPlaying && (
                      <div className="mt-4 text-sm text-gray-600 transition-opacity">
                        <p className="font-semibold">Chief Complaint:</p>
                        <p>Recurring headaches with associated dizziness</p>
                        <p className="font-semibold mt-2">Duration:</p>
                        <p>2 weeks, increasing in frequency</p>
                      </div>
                    )}
                  </div>
                </div>
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
