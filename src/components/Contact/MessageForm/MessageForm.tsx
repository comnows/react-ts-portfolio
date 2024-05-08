import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa6";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

function MessageForm() {
  const { register, handleSubmit, reset } = useForm<FormFields>();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        console.log(response.text);
        setIsMessageSent(true);
        reset();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isMessageSent && (
        <div className="text-green-700 mb-2">
          <FaCheck className="inline-block" />
          <span className="pl-1 align-middle">
            Thank you for contacting me and will be in touch with you very soon.
          </span>
        </div>
      )}
      <div className="w-full">
        <ul>
          <li className="w-full">
            <input
              id="name"
              {...register("name", {
                required: true,
              })}
              type="text"
              placeholder="Name"
              className="w-full mb-[30px] p-[10px] outline-none border border-black/25 focus:border-black/50"
            />
          </li>
          <li className="w-full">
            <input
              id="email"
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="Email"
              className="w-full mb-[30px] p-[10px] outline-none border border-black/25 focus:border-black/50"
            />
          </li>
        </ul>
      </div>
      <div>
        <textarea
          id="message"
          {...register("message", {
            required: true,
          })}
          placeholder="Message"
          className="resize-none w-full h-[120px] mb-[30px] p-[10px] outline-none border border-black/25 focus:border-black/50"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-yellow-400 text-white font-medium rounded-full px-10 py-3"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
