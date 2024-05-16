import { FaPhone, FaEnvelopeOpen, FaFacebook, FaGithub } from "react-icons/fa6";
import MessageForm from "./MessageForm/MessageForm";
import Heading from "../General/Heading/Heading";

function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-6 lg:px-24 py-[72px]">
        <Heading sectionName="Contact" subName="Get in Touch" />
        <div className="flex max-sm:flex-col gap-5 max-sm:gap-8">
          <div className="basis-1/4 max-2xl:basis-2/6 max-xl:basis-1/2 max-sm:basis-full max-sm:text-center">
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
            <div className="flex max-sm:justify-center gap-4">
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
          <div className="basis-3/4 max-2xl:basis-4/6 max-lg:basis-1/2 max-sm:basis-full">
            <MessageForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
