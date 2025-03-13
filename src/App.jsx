import { useState } from "react";
import FileExplorer from "./FileExplorer";
import { defaultData } from "./data";

function App() {
  const [fileExplorer, setFileExplorer] = useState(defaultData);

  function addChildren(id, inputValue) {
    const temp = fileExplorer.map((file) =>
      handleChildAdd(file, id, inputValue)
    );

    setFileExplorer(temp);
  }

  function handleChildAdd(file, id, inputValue) {
    if (file.id === id) {
      return {
        ...file,
        children: [...file.children, inputValue],
      };
    }

    if (file.children) {
      return {
        ...file,
        children: file.children.map((child) =>
          handleChildAdd(child, id, inputValue)
        ),
      };
    }
    return file;
  }

  return (
    <>
      {fileExplorer.map((file) => (
        <FileExplorer key={file.id} file={file} addChildren={addChildren} />
      ))}
    </>
  );
}

export default App;
