import { TextArea } from "./TextArea";
import { TextEditorLayout, TextEditorLayoutProps } from "./TextEditorLayout";

export interface TextEditorProps
  extends Omit<TextEditorLayoutProps, "onChange"> {
  value: string;
  onChange: (text: string) => void;
}

export function TextEditor({ value, onChange, ...props }: TextEditorProps) {
  return (
    <TextEditorLayout {...props}>
      <TextArea value={value} onChange={onChange} />
    </TextEditorLayout>
  );
}
