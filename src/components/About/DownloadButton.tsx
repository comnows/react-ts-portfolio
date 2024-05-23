import { FaDownload } from "react-icons/fa6";

type ButtonProps = {
  fileLink: string;
  name: string;
};

function DownloadButton({ fileLink, name }: ButtonProps) {
  return (
    <a
      href={fileLink}
      target="_blank"
      className="group/download-cv relative inline-block border border-yellow-400 rounded-full py-4 pl-[35px] pr-[70px] overflow-hidden mr-4 before:absolute before:bg-yellow-400 before:inset-0 before:z-0 before:translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-out"
    >
      <span className="relative font-bold uppercase transition-colors duration-300 group-hover/download-cv:text-white">
        {name}
      </span>
      <span className="absolute flex justify-center items-center text-lg w-14 h-14 bottom-0 right-[-1px] rounded-full bg-yellow-400">
        <FaDownload color="white" />
      </span>
    </a>
  );
}

export default DownloadButton;
