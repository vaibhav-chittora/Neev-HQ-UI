import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Neev has revolutionized how I document patient visits. I can finally focus entirely on my patients during consultations.",
    author: "Dr. Sarah Chen",
    role: "Primary Care Physician",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    quote:
      "The accuracy of the transcriptions and summaries is remarkable. It's like having a skilled medical scribe, but more efficient.",
    author: "Dr. Michael Roberts",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    quote:
      "Integration with our EMR was seamless. The time saved on documentation has allowed us to see more patients.",
    author: "Dr. Emily Thompson",
    role: "Family Medicine",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what medical professionals are saying about Neev
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
