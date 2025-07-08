import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Welcome() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 text-gray-600 dark:text-white">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold ">Privacy Policy</h1>
          <p className="mt-2 text-lg ">
            for Google Chrome Extension <b>ChatGPT to Word or PDF</b> and <b>ChatGPT to Google Docs or PDF</b>
          </p>
        </header>
        Effective Date: December 17, 2024
        <section className="mb-8">
          <p className="mt-4">
            We respect and value your privacy. This Privacy Policy describes how
            we handle and protect your personal information in relation to your
            use of our Google Chrome extension(s).
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Information Collection</h2>
          <p className="mt-4">
            We only collect your email address for communication purposes. We do
            not gather, store, or transmit any other personal information that
            can be used to identify you, such as your name, address, or
            location. Your email address will not be sold or shared with third
            parties.

            
          </p>
          <br/>
          <p>We also do not collect the chatGPT responses while converting them to Google Docs or Word or PDF format.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold ">Changes to this Privacy Policy</h2>
          <p className="mt-4">
            We reserve the right to amend this Privacy Policy at any time. Any
            changes will be effective immediately upon posting the revised
            Privacy Policy, and the "Effective Date" above will be updated. You
            are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </section>
        <section className="mb-8">
          <p className="mt-4">
            By using our Google Chrome Extensions, you signify your consent and
            agreement to the terms of this Privacy Policy. If you do not agree
            with this Privacy Policy, please refrain from using our Google
            Chrome Extensions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Feedback</h2>
          <p className="mt-4">
            If you have questions or concerns about this Privacy Policy, you can &nbsp;
            <a href="/contact" className="text-blue-600 hover:text-blue-800">
              contact us by email
            </a>
            .
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
