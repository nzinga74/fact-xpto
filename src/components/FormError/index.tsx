interface IFormError {
  error: string | undefined;
}
const FormError = ({ error }: IFormError) => {
  return error ? <p className="text-[10px] text-[#F74231]">{error}</p> : <></>;
};

export { FormError };
