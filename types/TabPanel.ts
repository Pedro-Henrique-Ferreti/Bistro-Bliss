export type TabPanel = Record<string, TabPanelTab>;

export interface TabPanelTab<T = string> {
  id: T;
  elementId?: string;
  name?: string;
}
