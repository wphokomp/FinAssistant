import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, RequestOptions, Http} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  private bankApi = 'https://hackit.grindrodbank.co.za/api';
  private myToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzeV9tSW9TNENacGNTWmppSHgzXzV5eDRIWTJQT0lPcVRDcnRHZ2k0Sl9FIn0.eyJqdGkiOiIyODEyMTI5Zi00MWVlLTRkMWUtOWUzZC1kOTQxNGFiOGJiYzIiLCJleHAiOjE1MzgyNjM5NjYsIm5iZiI6MCwiaWF0IjoxNTM4MjYwOTY2LCJpc3MiOiJodHRwczovL2hhY2tpdGF1dGguZ3JpbmRyb2RiYW5rLmNvLnphL2F1dGgvcmVhbG1zL2dyaW5kcm9kIiwiYXVkIjoiQ3J1aXhlcnMiLCJzdWIiOiJmOmNkNDM0ODQ3LTZiM2MtNGM0ZC04YmUzLTg4MzZmOGQ0ODBiNzoyMDU4VEVTVElEIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiQ3J1aXhlcnMiLCJhdXRoX3RpbWUiOjE1MzgyNjA5NjQsInNlc3Npb25fc3RhdGUiOiJhYjZlZDZiNS1hMTRhLTQwZjUtYmQ2MC1kM2M3NWI5Y2Q5MjUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImNyZWF0ZV9jdXN0b21lciIsImFwcHJvdmVfY3VzdG9tZXIiLCJhcHByb3ZlX2FjY291bnQiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInJlYWRfYWNjb3VudCIsImNyZWF0ZV9hY2NvdW50IiwicmVhZF90cmFuc2FjdGlvbnMiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJncm91cF9tZW1iZXJzaGlwIjpbIi9hZ2VudF9yZWFkZXIiLCIvYWdlbnRfY2FwdHVyZSIsIi9hZ2VudF9hcHByb3ZlciJdLCJhZ2VudF9pZCI6WyIxNTUyIl0sInByZWZlcnJlZF91c2VybmFtZSI6IjIwNThURVNUSUQiLCJlbWFpbCI6IlRFU1QyMDU4QGVtYWlsLmNvbSJ9.M1yVN7u6WlHXipSZCYYfi9v3yDKoFAb_Z4lHyHxffYapKaBJP4VzchmmAzRweqiGOYHO9g34-MM6C0XVlCCNad_w16YPNV-64pcGVid4nMz0owTpunsrtzqF6TdNdjvei2D5oHg80Ig5t0RDltZfmKhC3zPNjGVrXajlYzkJ2sTIzJg7wvkOBbV8U4vq99eqRHCtA3IjU6VqY2twKuOcniRXwLiCy1Nwi30SLgZtvScCDsK7GuiK_e_MbYlS8ADQ2UcEV-Y5vP761TqoFU-hQuPCAmNSdBU3HtyoLoZKQyHpuc53G93nkbdS-wFn2WFy0Uqx4vI-fj6e0T7ov_0VUQ';

  getAccounts() {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.myToken
      });

    this.http.get(this.bankApi + '/accounts', {headers})
      .subscribe(data => 
        console.log(data)
      );
  }
}
