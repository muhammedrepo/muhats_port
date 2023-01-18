import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avs0jkc",
        "template_9z61ko5",
        form.current,
        "Kfjj5oTlX2byZ9Vnl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  // hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <section id="contact" className="py-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-[600px] mx-auto text-center mb-[50px]">
              <span className="font-bold text-lg blue-text block mb-2">
                CONTACT
              </span>
              <h2 className="sub-heading">Have a Project in Mind?</h2>
              <p className="paragraph">
                Contact me today for a free consultation and no-obligation
                estimate on website design or digital marketing.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center -mx-4">
          <div className="w-full lg:w-[75%] px-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="text-blue-600 mb-3 text-center font-medium">
                {result ? <Result /> : null}
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Phone number (Optional)"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Tell me about your project"
                      className="input-field resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <Button primary rounded>
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
