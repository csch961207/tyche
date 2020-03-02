import { Injectable } from '@angular/core';

const ls = localStorage;

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() { }

  public getToken(): string {
    return ls.getItem('Token');
  }

  public setToken(value: string): void {
    if (!value && value === undefined) { return; }
    ls.setItem('Token', value);
  }
}
