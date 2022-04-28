import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ value, setValue }) => {
  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
    "code",
  ];
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "code"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };
  return (
    <div className="flex-grow">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Take a note..."
        value={value}
        onChange={setValue}
        dangerouslySetInnerHTML={{ __html: value }}
        className="h-[85%]"
      />
    </div>
  );
};
