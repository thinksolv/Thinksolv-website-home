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
          How to Save a ChatGPT Conversation as a Google Docs or PDF Document
        </title>
      </Head>

      <Header />
      <div className=" text-gray-600 dark:text-white font-sans bg-white dark:border-strokedark dark:bg-black">
        {/* Header */}
        <header className="py-4 px-6 text-center">
          <p className="text-lg font-semibold mb-6">
            Thank you for installing the{" "}
            <span className="text-blue-600 font-bold">
              ChatGPT to Google Docs or PDF
            </span>{" "}
            extension.
          </p>
          <h1 className="text-3xl font-bold">
            How to Save a ChatGPT Conversation as a Google Docs or PDF Document
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
              src="/chatgpt-to-word-pdf-1.png" //use this word image itself because its a blank chatgpt screen
              alt="Open ChatGPT"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>

          {/* Step 2 */}
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl font-bold mb-4">3</span>
            <h2 className="text-xl font-semibold leading-loose	">
              Ask a question to ChatGPT.{" "}
              <p>
                Once, you have received the answer, Click the Google Docs or PDF
                button on the bottom right of the response.
              </p>
            </h2>
            <Image
              src="/chatgpt-to-google-docs-pdf-2.png"
              alt="Select Conversation"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>
          {/* Step 2 */}
          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl font-bold mb-4">3</span>
            <h2 className="text-xl font-semibold leading-loose	">
              First time, the authorization window will open.
              <p>
                The Chrome extension requests only the minimal permissions
                needed to create files on your Google Drive. Authorize it and
                click <b>Ok.</b>. This step is required only once. Once
                authorized, the content will be created as a Google Doc, and the
                document will open automatically.
              </p>
            </h2>
            <Image
              src="/google-auth.jpg"
              alt="Select Conversation"
              width={800}
              height={520}
              className="mt-4 rounded-lg"
            />
          </section>

          <section className="flex flex-col items-center text-center mb-10">
            <span className="text-4xl font-bold mb-4">4</span>
            <h2 className="text-xl font-semibold leading-loose	">
              Going forward, whenever you need a Google Doc, you can create it
              with a single click.
              <p>
                Ask a question to ChatGPT, and once you receive the answer,
                click the <b>Google Docs</b> button at the bottom right of the
                response.
              </p>
              The document will be created automatically without authorization request.
            </h2>
            <Image
              src="/chatgpt-to-google-docs-pdf-2.png"
              alt="Select Conversation"
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
            Features of ChatGPT to Google Docs or PDF Extension
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold">One-click Export</h3>
              <p className="text-sm  mt-2">
                Save your conversation as a Google Docs or PDF file instantly.
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
      <Footer />
    </>
  );
}
