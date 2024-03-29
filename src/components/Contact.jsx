import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';
import ContentPanel from './ContentPanel';

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_avs0jkc',
        'template_9z61ko5',
        formRef.current,
        'Kfjj5oTlX2byZ9Vnl'
      )
      .then(
        (response) => {
          console.log(response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <section id="contact" className="py-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <ContentPanel
            title="Contact"
            subtitle="Work with me"
            desc="I'm eager to learn more about your project. Please do not hesitate to contact me."
            className="flex justify-center flex-col items-center text-center"
          />
        </div>
        <div className="flex justify-center -mx-4">
          <div className="w-full lg:w-[75%] px-4">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="text-blue-600 mb-3 text-center font-medium">
                {result && <Result />}
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
                    <Button type="submit" primary>
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
