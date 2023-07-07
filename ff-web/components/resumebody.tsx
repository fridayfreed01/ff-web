import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLink } from "react-icons/fi";

export const ResumeBody = () => {
  return (
    <div className="flex-grow min-h-screen py-4 flex flex-col bg-[#3a3a3a]">
      <div className="max-h-fit min-h-fit bg-slate-200 rounded-lg shadow-lg px-8 py-6 md:py-8 mx-auto w-full md:w-3/4">
        <div className="flex items-center mb-2">
          <h2 className="text-3xl font-bold">Seth Freitag</h2>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">
            <a href="mailto:s.freitag2001@gmail.com">
              <FaEnvelope className="inline-block align-text-top" />{" "}
              s.freitag2001@gmail.com
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="text-gray-600">
            B.A. Computer Science, University of Wisconsin-Madison, expected
            05/2023
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Experience</h3>
          <div className="mb-4">
            <h4 className="text-lg font-medium">
              Software Developer, Rustle Up, LLC
            </h4>
            <p className="text-gray-600">May 2021 - Aug 2022</p>
            <ul className="list-disc pl-6">
              <li>
                Used and learned React and Next.js framework to implement a
                user-friendly sign-up flow and restaurant ordering platform
              </li>
              <li>
                Implemented Tailwind UI for web design and user experience
                components
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium">
              Senior CS Capstone, Amazon/Shopbop
            </h4>
            <p className="text-gray-600">Sept 2022 - Dec 2022</p>
            <ul className="list-disc pl-6">
              <li>Used React and Next.js to create an outfit-designing game</li>
              <li>
                Used Typescript and Tailwind CSS to help design a branded
                website
              </li>
              <li>Utilized JIRA, GitHub, Slack, and agile methodologies</li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <h4 className="text-lg font-medium">Web Design</h4>
              <p className="text-gray-600">
                React, Next.js, Tailwind, HTML, CSS, JavaScript, TypeScript
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Professional</h4>
              <p className="text-gray-600">
                Agile Methodologies, Google Design Sprints, Kanban, Scrum,
                GitHub, Figma, Notion
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Computer Graphics</h4>
              <p className="text-gray-600">Canvas API, SVG, Three.js</p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Game Development</h4>
              <p className="text-gray-600">
                C#, Unity Engine, VR development for Oculus
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Other languages</h4>
              <p className="text-gray-600">Java, R, C</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Projects</h3>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="https://www.rustleup.com/"
                className="text-blue-500 hover:underline"
              >
                Professional sign-up flow and landing page (www.rustleup.com)
              </a>
              : Used React & Next.js with Tailwind CSS
            </li>
            <li>
              Online ordering platform: Worked with a team on a business-side
              application for managing the ordering settings at Rustle Up, LLC
            </li>
            <li>
              Muzzle Flash: Used Unity and Oculus Integration Package for FPS
              Sci-Fi game for Oculus Quest II
            </li>
            <li>Personal game projects: Used C# scripting and Unity Engine</li>
            <li>
              Dog finder demo app: Next.js app for browsing dogs from an API to
              &lsquolike&rsquo dogs and generate a match
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Relevant Courses</h3>
          <ul className="list-disc pl-6">
            <li>
              Technology Entrepreneurship: Lean startup model, market and
              industry analysis, object modeling
            </li>
            <li>
              Game Design 1 & 2: C# scripting, Unity development, worked with
              designers and artists
            </li>
            <li>
              Virtual Reality: Theory behind VR, Unity, Blender 3D modeling, C#
              scripting
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Links</h3>
          <p className="text-gray-600">
            <a
              href="https://github.com/fridayfreed01"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FiGithub className="mr-1" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seth-freitag-5b1586235/"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FiLink className="mr-1" /> LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
