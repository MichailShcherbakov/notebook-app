export enum ViewModeEnum {
  LIST = "LIST",
  GRID = "GRID",
}

export enum EditorModeEnum {
  READ = "READ",
  EDIT = "EDIT",
}

export type ViewState = {
  viewMode: ViewModeEnum;
  editorMode: EditorModeEnum;
};
