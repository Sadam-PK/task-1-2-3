const CustomInput = ({ icon, placeholder }) => {
  return (
    <div
      className="border rounded-lg w-full sm:w-[24vw] h-[6vh] outline-none 
    overflow-hidden flex items-center"
    >
      <input
        placeholder={placeholder}
        className="w-full h-full p-2 outline-none indent-3"
      />
      <span className="mr-5 text-gray-300">{icon}</span>
    </div>
  );
};

export default CustomInput;
