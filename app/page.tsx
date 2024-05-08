import { signLogBook } from "./actions";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl">Log Book</h1>
        <p>Welcome to the Log Book.Write a message below to let everyone know you were here.</p>
      </header>
      <main>
        <form action={signLogBook}>
          <div className="mb-4">
            <label htmlFor="name" className="mr-2">Name:</label><input type="text" id="name" name="name" className="border-2 border-slate-400 focus:outline-none focus:border-blue-400"/>
          </div>
          <div>
            <label htmlFor="message" className="mr-2">Message:</label><textarea id="message" name="message" className="border-2 border-slate-400 focus:outline-none focus:border-blue-400"></textarea>
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Sign Log Book</button>
          </div>
        </form>
      </main>
    </div>
  );
}