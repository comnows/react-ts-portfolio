type ButtonProps = {
  isMenuShow: boolean;
  setIsMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerButton({ isMenuShow, setIsMenuShow }: ButtonProps) {
  const handleOnclick = () => {
    setIsMenuShow((isShow) => !isShow);
  };

  return (
    <button onClick={handleOnclick} className="lg:hidden">
      <div className="relative w-[30px] h-[24px]">
        <div
          className={
            "absolute w-[30px] h-[2px] bg-white before:block before:absolute before before:w-[30px] before:h-[2px] before:bg-white before:top-[10px] after:block after:absolute after after:w-[30px] after:h-[2px] after:bg-white after:top-[20px] transition before:transition after:transition" +
            (isMenuShow
              ? " rotate-45 translate-y-[10px] before:w-0 before:-rotate-45 before:-translate-x-[10px] before:opacity-0 after:-rotate-90 after:-translate-y-[20px]"
              : "")
          }
        ></div>
      </div>
    </button>
  );
}

export default HamburgerButton;
