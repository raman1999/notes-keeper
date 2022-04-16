import { useEffect } from "react";
export const useDocumentTitle = (docTitle) => {
  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);
};
