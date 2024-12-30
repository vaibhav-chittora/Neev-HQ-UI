import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function TeamMembers() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold p-3 my-5 ">
        Meet our Team Members
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-5 my-10 p-5">
        <div className="bg-white border border-gray-300 shadow-md w-64 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Profile Picture */}
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />

            {/* Social Icons */}
            <div className="flex gap-4 items-center justify-evenly">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/cybcob"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">Abhinav Singh</h3>
            <p className="text-sm text-gray-500">AI/ML Engineer, IIT Madras</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 shadow-md w-64 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Profile Picture */}
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />

            {/* Social Icons */}
            <div className="flex gap-4 items-center justify-evenly">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Sau_rbh"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Dr. Saurabh Bajpai
            </h3>
            <p className="text-sm text-gray-500">Doctor, Leading Research</p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 shadow-md w-64 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Profile Picture */}
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />

            {/* Social Icons */}
            <div className="flex gap-4 items-center justify-evenly">
              <a
                href="https://www.linkedin.com/in/mayankagrawal2/"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a target="_blank" className="text-gray-700 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">Mayank Aggarwal</h3>
            <p className="text-sm text-gray-500">CA, SRCC Alumnus</p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 shadow-md w-64 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Profile Picture */}
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />

            {/* Social Icons */}
            <div className="flex gap-4 items-center justify-evenly">
              <a
                href=""
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/prabeshgoyal"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">Prabesh Goyal</h3>
            <p className="text-sm text-gray-500">Data Engineer</p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 shadow-md w-64 p-6 rounded-xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Profile Picture */}
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />

            {/* Social Icons */}
            <div className="flex gap-4 items-center justify-evenly">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/rickybahrey"
                target="_blank"
                className="text-gray-700 hover:text-blue-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-gray-900">Rickey Bahrey</h3>
            <p className="text-sm text-gray-500">Product Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}
