import { TrendProvider } from '../types/trend-provider.type';

export interface Trend {
  id: string;
  title: string;
  body: string[];
  provider: TrendProvider;
  image: string;
  url: string;
  createdAt: Date;
}

export interface TrendFormGroup {
  title: string;
  body: string;
  provider: TrendProvider;
  image: string;
  url: string;
}
