import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import { TextFormat } from "./TextFormatMenu";
import { TextFormatEnum } from "./type";

export const TEXT_FORMATS: TextFormat[] = [
  {
    id: TextFormatEnum.BOLD,
    label: "Bold",
    icon: <FormatBoldOutlinedIcon />,
    format: (text: string) => `**${text}**`,
    pinned: true,
    group: "format1",
  },
  {
    id: TextFormatEnum.ITALIC,
    label: "Italic",
    icon: <FormatItalicOutlinedIcon />,
    format: (text: string) => `*${text}*`,
    pinned: true,
    group: "format2",
  },
  {
    id: TextFormatEnum.STRIKETHROUGH,
    label: "Strikethrough",
    icon: <StrikethroughSOutlinedIcon />,
    format: (text: string) => `~~${text}~~`,
    pinned: true,
    group: "format3",
  },
  {
    id: TextFormatEnum.TITLE,
    label: "Title",
    format: (text: string) => `# ${text}`,
    pinned: false,
    group: "font",
  },
  {
    id: TextFormatEnum.HEADING,
    label: "Heading",
    format: (text: string) => `## ${text}`,
    pinned: false,
    group: "font",
  },
  {
    id: TextFormatEnum.SUBHEADING,
    label: "Subheading",
    format: (text: string) => `### ${text}`,
    pinned: false,
    group: "font",
  },
  {
    id: TextFormatEnum.BODY,
    label: "Body",
    format: (text: string) => `${text}`,
    pinned: false,
    group: "font",
  },
  {
    id: TextFormatEnum.ORDERED_LIST,
    label: "Ordered List",
    format: (text: string) => `1. ${text}`,
    pinned: false,
    group: "component",
  },
  {
    id: TextFormatEnum.UNORDERED_LIST,
    label: "Unordered List",
    format: (text: string) => `- ${text}`,
    pinned: false,
    group: "component",
  },
];
