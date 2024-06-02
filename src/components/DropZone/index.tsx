import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { MdSlowMotionVideo } from "react-icons/md";

const baseStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderWidth: 1,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#181818",
  color: "#999",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const DropZone = () => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div>
            <div className="flex justify-center text-2xl mb-4">
              <MdSlowMotionVideo />
            </div>
            <p className="text-center text-sm">
              Arraste e solte o vídeo aqui ou clique para selecionar vídeo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DropZone;
