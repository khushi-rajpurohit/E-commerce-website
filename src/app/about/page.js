"use client";

export default function ProductCard() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-2xl mx-auto p-6 sm:p-8 lg:max-w-4xl lg:px-10 rounded-lg shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">About the Website</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          This is an e-commerce website. It's my first project using Next.js, where I implemented a basic design. As I continue to learn, I plan to refine and improve the code. Currently, the website includes a home page with products from various categories, a few pages for specific categories, a login page, and this about page.
        </p>
        
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          The data for this website is fetched only once and then shared across multiple components using a context-based approach. This way, I ensure efficient data handling and reduce redundant network requests.
        </p>

        <h1 className="mt-8 text-3xl font-bold text-center text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          I am seeking a job opportunity in the tech industry. Although I don't have a formal IT background, my interest in technology has driven me to learn and explore. I completed an online bootcamp for product engineering, where I gained knowledge in HTML, JavaScript, CSS, and the MERN stack. I am a quick learner with a lot of enthusiasm, which helps me bring my best to any project. I am now looking for my first job opportunity, where I can continue to learn, implement new skills, and grow in the right direction.
        </p>

        <h1 className="mt-8 text-3xl font-bold text-center text-gray-800">Technical Skills</h1>
        
        
        <ul className="flex flex-wrap gap-4 justify-center mt-6">
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">HTML</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">JavaScript</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">CSS</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">ReactJs</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">NodeJs</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">MERN Stack</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">NextJs</li>
          <li className="px-3 py-2 bg-gray-100 rounded shadow-sm text-gray-800">MySQL</li>
        </ul>
      </div>
    </div>
  );
}
