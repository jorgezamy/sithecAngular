export interface IPoke {
  count: number;
  next: string;
  previous: string | null;
  results: IResults[];
}

interface IResults {
  name: string;
  url: string;
}
