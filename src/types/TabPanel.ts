export interface TabPanel {
  [key: string]: TabPanelTab;
}

export type TabPanelTab<T = string> = {
  id: T;
  elementId?: string;
  name?: string;
}
