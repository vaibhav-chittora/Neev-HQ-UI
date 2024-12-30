import { Users, Clock, Award, Ambulance } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      value: "10,000+",
      label: "Healthcare Providers",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      value: "2 Hours",
      label: "Saved Per Day",
    },
    {
      icon: <Ambulance className="w-6 h-6 text-blue-600" />,
      value: "500+",
      label: "Medical Facilities",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      value: "99.9%",
      label: "Accuracy Rate",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
