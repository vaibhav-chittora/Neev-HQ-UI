import { Mic, FileText, ArrowRight, Pause, Play } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connecting <span></span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                Patients
              </span>
              <span> </span>
              and Providers Through Precision
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Making healthcare simple, smart, and more human centric by
              reducing admin work, saving time, and enabling doctors to focus on
              what truly matters - Patients
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            {/* <div className="w-full h-[400px] bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 flex items-center justify-center">
              <div className="flex items-center gap-8">
                <Mic className="w-16 h-16 text-blue-600 animate-pulse" />
                <div className="w-48 h-32 bg-white rounded-lg shadow-lg p-4">
                  <FileText className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                <div className="flex flex-col gap-8 items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
