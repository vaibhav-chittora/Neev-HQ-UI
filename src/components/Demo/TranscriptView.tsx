import { FileText } from 'lucide-react';

interface TranscriptViewProps {
  isPlaying: boolean;
}

export default function TranscriptView({ isPlaying }: TranscriptViewProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Generated Summary</h3>
      </div>
      <div className="space-y-4">
        <div className="animate-pulse space-y-2">
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
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
  );
}