import { Loader } from "../Loader";

interface IButtonLoadingProps {
  type: "submit" | "reset" | "button";
  className: string;
  isLoading: boolean;
}
const LoadingButton = ({ className, type, isLoading }: IButtonLoadingProps) => {
  return (
    <>
      <button type={type} className={className} disabled={isLoading}>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <p className="-0 m-0"> Registrar</p>
        )}
      </button>
    </>
  );
};
export { LoadingButton };
