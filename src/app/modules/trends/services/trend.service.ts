import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { GetAllTrendsResponse } from '../interfaces/get-all-trends-response.interface';
import { GetOneTrendResponse } from '../interfaces/get-one-trend-response.interface';
import { Trend, TrendFormGroup } from '../interfaces/trend.interface';
import { TrendProvider } from '../types/trend-provider.type';
import { TrendResponse } from '../interfaces/trend-response.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class TrendService {
  private readonly urlBase = environment.avantioAPIHost;

  public readonly trendsUrl = `/v1/trends`; // I used a proxy becouse i had a CORS error
  //public readonly trendsUrl = `${this.urlBase}/v1/trends`;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Trend[]> {
    return this.httpClient
      .get<GetAllTrendsResponse>(this.trendsUrl)
      .pipe(map(({ trends }) => [...trends.map(this.mapToTrendModel)]));
  }

  public getOne(id: string): Observable<Trend> {
    const url = `${this.trendsUrl}/${id}`;
    return this.httpClient
      .get<GetOneTrendResponse>(url)
      .pipe(map(({ trend }) => this.mapToTrendModel(trend)));
  }

  public createOne(trend: TrendFormGroup): Observable<Trend> {
    const url = this.trendsUrl;
    const body = trend;

    return this.httpClient
      .post<GetOneTrendResponse>(url, body)
      .pipe(map(({ trend }) => this.mapToTrendModel(trend)));
  }

  private mapToTrendModel(trendResponse: TrendResponse): Trend {
    return {
      id: trendResponse._id,
      body: trendResponse.body.split('\n\n'),
      createdAt: new Date(trendResponse.createdAt),
      image: trendResponse.image,
      provider: trendResponse.provider as TrendProvider,
      title: trendResponse.title,
      url: trendResponse.url,
    };
  }
}
