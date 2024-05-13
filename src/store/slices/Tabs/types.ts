interface tab {
  id?: number;
  name: string;
  link: string;
  count: number;
  current: boolean;
  icon?: any;
}

export interface TabState {
  active: tab;
  tabs: tab[];
}
