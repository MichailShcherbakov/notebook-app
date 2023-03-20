import React from "react";
import { useRemark } from "react-remark";
import { TextViewerLayout, TextViewerLayoutProps } from "./TextViewerLayout";

export interface TextViewerProps extends TextViewerLayoutProps {
  children: string;
  onEditRequire?: () => void;
}

export function TextViewer({
  children,
  onEditRequire,
  onClick,
  ...props
}: TextViewerProps) {
  const [markdownSource, setMarkdownSource] = useRemark();

  React.useEffect(() => {
    setMarkdownSource(children);
  }, [children, setMarkdownSource]);

  function clickHandler(e: React.MouseEvent<HTMLDivElement>) {
    onEditRequire?.();
    onClick?.(e);
  }

  return (
    <TextViewerLayout {...props} onClick={clickHandler}>
      {markdownSource}
    </TextViewerLayout>
  );
}
