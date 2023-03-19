import React from "react";
import { useRemark } from "react-remark";
import { TextViewerLayout, TextViewerLayoutProps } from "./TextViewerLayout";
import { fromMarkdown } from "mdast-util-from-markdown";

export interface TextViewerProps extends TextViewerLayoutProps {
  children: string;
  onEditRequire?: () => void;
}

export function TextViewer({
  children,
  onEditRequire,
  ...props
}: TextViewerProps) {
  const [markdownSource, setMarkdownSource] = useRemark();

  React.useEffect(() => {
    setMarkdownSource(children);
  }, [children, setMarkdownSource]);

  function clickHandler() {
    // TODO: don't forget about the native 'onClick' event
    // onEditRequire?.();
  }

  return (
    <TextViewerLayout {...props} onClick={clickHandler}>
      {markdownSource}
    </TextViewerLayout>
  );
}
