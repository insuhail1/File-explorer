import { useState } from "react";

export default function FileExplorer({ file, addChildren }) {
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState({ show: false });
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    addChildren(file.id, {
      name: inputValue,
      id: Date.now(),
      children: showInput.isFolder ? [] : undefined,
    });
    setInputValue("");
    setShowInput({ show: false });
  }

  return (
    <div
      style={{
        marginLeft: "20px",
        marginBottom: 16,
        maxWidth: 400,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {file.name}
        {file.children && (
          <>
            <button
              onClick={() =>
                setShowInput((prev) => ({ ...prev, show: !prev.show }))
              }
            >
              + File
            </button>
            <button
              onClick={() =>
                setShowInput((prev) => ({
                  ...prev,
                  show: !prev.show,
                  isFolder: true,
                }))
              }
            >
              + Folder
            </button>
            <button onClick={() => setShow((prev) => !prev)}>
              {show ? "Hide" : "Show"}
            </button>
          </>
        )}
      </div>
      {showInput.show && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {file.children &&
        show &&
        file.children.map((file) => (
          <FileExplorer key={file.id} file={file} addChildren={addChildren} />
        ))}
    </div>
  );
}
