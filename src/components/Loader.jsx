import { RotateLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <RotateLoader size={100} color="#F92FD3"></RotateLoader>
    </div>
  );
};

export default Loader;
