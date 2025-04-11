export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form
        action="https://formsubmit.co/your-email"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-lg font-medium">Name:</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Message:</label>
          <textarea
            name="message"
            required
            className="w-full border rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </main>
  );
}