"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

import Head from "next/head";

import Image from "next/image";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
export default function Welcome() {
  useEffect(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: object) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    // Trigger the confetti on page load
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          How to Save a ChatGPT Conversation as a Word or PDF Document
        </title>
      </Head>


      <div className=" text-gray-600 dark:text-white font-sans bg-white dark:border-strokedark dark:bg-black">
        {/* Header */}
        <header className="py-4 px-6 text-center">
          <p className="text-lg font-semibold mb-6">
            Thank you for installing the{" "}
            <span className="text-blue-600 font-bold">
              ChatGPT to Word or PDF
            </span>{" "}
            extension.
          </p>

{/* --- START: Export Features Section --- */}
<div className="mb-16 py-12 bg-gradient-to-b dark:from-black to-white dark:to-gray-900 rounded-b-3xl">
  <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
    ChatGPT to Word or PDF - Export Options
  </h2>

  {/* Grid for export options */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

    {/* Feature 1: Export Single Response */}
    <div className="text-center p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
      <div className="w-16 h-16 mb-6 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-sm">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12h6m-3 3v-6M3 16h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        Export Single Response
      </h3>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        Save any individual ChatGPT response instantly as a well-formatted Word or PDF file.
      </p>
    </div>

    {/* Feature 2: Export Full Conversation */}
    <div className="text-center p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
      <div className="w-16 h-16 mb-6 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-sm">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M3 16h18a2 2 0 002-2V9a2 2 0 00-2-2H3a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        Download Entire Conversation
      </h3>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        Export your full ChatGPT conversation—questions and answers—as a Word or PDF document.
      </p>
    </div>

    {/* Feature 3: Export ChatGPT Output Only */}
    <div className="text-center p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
      <div className="w-16 h-16 mb-6 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 flex items-center justify-center shadow-sm">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9.75 16.5h4.5m-2.25-13.5v1.5m6.364 1.636l-1.06 1.06M16.5 12H3m13.5 9h2a2 2 0 002-2V6a2 2 0 00-2-2h-13a2 2 0 00-2 2v12a2 2 0 002 2h2" /></svg>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        ChatGPT Output Only
      </h3>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        Create a clean document that includes only the responses from ChatGPT, excluding your inputs.
      </p>
    </div>

  </div>

  {/* Extra Note */}
  <p className="mt-12 text-center text-base italic text-gray-800 dark:text-gray-200 px-4">
    <span className="font-medium">Bonus:</span> Exports preserve advanced formatting like LaTeX equations and tables with high fidelity in both Word and PDF.
  </p>
</div>
{/* --- END: Export Features Section --- */}




          <h1 className="text-3xl font-bold">
            How to Save a ChatGPT Conversation as a Word or PDF Document
          </h1>
        </header>

        <main className="max-w-4xl mx-auto mt-8 p-6 bg-white dark:border-strokedark dark:bg-black text-gray-600 dark:text-white ">
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl font-bold mb-4">1</span>
            <h2 className="text-xl font-semibold">
              Open chatpgpt.com. If its already open, refresh it after
              installing the add-on.
            </h2>
            <Image
              src="/chatgpt-to-word-pdf-1.png" // Replace with actual image path
              alt="Open ChatGPT"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>

          {/* Step 2 */}
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl font-bold mb-4">2</span>
            <h2 className="text-xl font-semibold leading-loose	">
              Ask a question to ChatGPT.{" "}
              <p>
                Once, you have received the answer, Click the Word or PDF button
                on the bottom right of the response.
              </p>
            </h2>
            <Image
              src="/chatgpt-to-word-pdf-2.png" // Replace with actual image path
              alt="Select Conversation"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>

          {/* Step 2 - Modified for Entire Conversation Export */}
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl font-bold mb-4">3</span>
            <h2 className="text-xl font-semibold leading-loose  ">
              Export your entire conversation{" "}
              <p>
                Look for the export buttons in the top right corner of the conversation window.
              </p>
            </h2>
            {/* Replace with an image showing the top right corner buttons for export */}
            <Image
              src="/chatgpt-to-word-pdf-3.png" // Replace with actual image path relevant to top-right export buttons
              alt="Export Entire Conversation"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>        
          {/* Demo Video Section */}
        </main>

        {/* Features Section */}
        <section className="max-w-4xl mx-auto my-12 p-6 bg-white dark:border-strokedark dark:bg-black text-gray-600 dark:text-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-8">
            Features of ChatGPT to Word or PDF Extension
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold">One-click Export</h3>
              <p className="text-sm  mt-2">
                Save your conversation as a Word or PDF file instantly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Supports Images</h3>
              <p className="text-sm  mt-2">
                Retain all images in the exported document.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Preserves Formatting</h3>
              <p className="text-sm  mt-2">
                Keep text, tables, and code blocks formatted perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center my-8 bg-white dark:border-strokedark dark:bg-black">
          <a
            href="#"
            className="inline-block" /* Ensures proper alignment for the image as a button */
          >
            <img
              src="/chrome-badge.png"
              alt="Download the Extension"
              className="hover:opacity-90 transition duration-300"
            />
          </a>
        </section>
      </div>
    </>
  );
}
