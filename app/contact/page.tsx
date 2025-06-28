import Link from 'next/link';

export default function Contact() {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link href="/">Home</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p>Email: raditya.tamam@binus.ac.id</p>
      <p>Name : Raditya Tamam</p>
    </div>
  );
}