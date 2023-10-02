import { EntityState } from '@ngrx/entity';
import { Trend } from '../../interfaces/trend.interface';

export interface TrendState extends EntityState<Trend> {
  selectedTrend: Trend | null;
}
