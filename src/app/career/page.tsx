const careerData = [
  { title: "Frontend Developer", image: "/frontend.jpg", description: "Worked on React projects." },
  { title: "Backend Developer", image: "/backend.jpg", description: "Built scalable APIs." },
];

export default function CareerPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Career</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerData.map((job, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <img src={job.image} alt={job.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{job.title}</h2>
            <p className="mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}