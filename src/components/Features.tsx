import { Mic, Users, Database } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: "Transcribe Conversations",
      description:
        "Record and summarise doctor-patient interactions with speaker diarisation.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Empower Patients",
      description:
        "Share Patient Visit Summaries (PVS) for continuity in care.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Integrate Seamlessly",
      description: "Send summaries directly to EMR.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Effortless Documentation For <span></span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
              Smarter Healthcare
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Automate your documentation process with{" "}
            <strong className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
              Neev
            </strong>{" "}
            - seamless, accurate, and ready for your EMRs.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
