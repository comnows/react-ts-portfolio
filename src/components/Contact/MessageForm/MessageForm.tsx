import React from "react";

function MessageForm() {
  return (
    <form>
      <div className="w-full">
        <ul>
          <li className="w-full">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full mb-[30px] p-[10px] outline-none border border-black/25 focus:border-black/50"
            />
          </li>
          <li className="w-full">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full mb-[30px] p-[10px] outline-none border border-black/25 focus:border-black/50"
            />
          </li>
        </ul>
      </div>
      <div>
        <textarea
          name=""
          id=""
          placeholder="Message"
          className="resize-none w-full h-[120px] mb-[30px] p-[10px] outline-none border border-black/25 focus:border-black/50"
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
