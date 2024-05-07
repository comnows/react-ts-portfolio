import { FaPhone, FaEnvelopeOpen, FaFacebook, FaGithub } from "react-icons/fa6";
import MessageForm from "./MessageForm/MessageForm";

function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-24 py-[72px]">
        <div className="relative flex text-center mb-6">
          <h2 className="text-gray-200 text-[calc(1.95rem+8.4vw)] xl:text-[8.25rem] font-bold opacity-40 uppercase w-full">
            contact
          </h2>
          <div className="absolute self-center text-4xl font-bold w-full">
            Get in Touch
          </div>
        </div>
        <div className="flex gap-5">
          <div className="basis-1/4 mr-">
            <h3 className="text-xl font-bold uppercase mb-4">Where am I</h3>
            <div className="mb-6">
              I'm currently living in Bangkok, Thailand
            </div>
            <div className="mb-6">
              <div className="mb-1">
                <FaPhone
                  className="inline-block text-yellow-400"
                  fontSize="20px"
                />
                <span className="pl-2 align-middle">
                  {"("}+66{")"} 081 964 2050
                </span>
              </div>
              <div>
                <FaEnvelopeOpen
                  className="inline-block text-yellow-400"
                  fontSize="20px"
                />
                <span className="pl-2 align-middle">
                  watthanandh.l@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="" className="group/facebook">
                <FaFacebook
                  className="text-gray-600 group-hover/facebook:text-[#3b5998]"
                  fontSize="24px"
                />
              </a>
              <a href="" className="group/github">
                <FaGithub
                  className="text-gray-600 group-hover/github:text-black"
                  fontSize="24px"
                />
              </a>
            </div>
          </div>
          <div className="basis-3/4">
            <MessageForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;