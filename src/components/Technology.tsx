import { Brain, Network, Shield } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Precision AI for Modern Healthcare
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Custom-built intelligence to simplify, secure, and redefine patient care.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Medically Fine-Tuned Models</h3>
            <p className="text-gray-600">
              Our transcription and summarization models ensure accurate capture of clinical terms, diagnoses, and treatment details.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Network className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">RAG Architecture</h3>
            <p className="text-gray-600">
              Our Retrieval Augmented Graph (RAG) powered systems enhance accuracy in real-time transcriptions and summaries.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Secure, Grade-A Data Privacy</h3>
            <p className="text-gray-600">
              We prioritize patient confidentiality with robust, Grade-A data encryption and storage, safeguarding sensitive information at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}