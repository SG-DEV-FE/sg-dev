const skills = ["JavaScript", "React", "Node.js", "CSS", "Cloudinary"];

export default function SkillsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <ul className="list-disc pl-6">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">{skill}</li>
        ))}
      </ul>
    </main>
  );
}