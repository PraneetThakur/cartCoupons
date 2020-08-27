import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  post(url, data): Observable<any> {
		// const headers = new HttpHeaders({ additionalHeaders: this.getAdditionalHeaders });
		return this.http.post<any>(`${environment.api_url}/${url}`, data);
	}

	openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  downloadFile(blob: Blob, filetype: string, filename: string) {
    var newBlob = new Blob([blob], { type: filetype });
    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(newBlob);
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = data;
    link.download = filename;
    link.click();
    setTimeout(function() {
      // For Firefox it is necessary to delay revoking the ObjectURL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(data);
    }, 100);
  }

	put(url, data): Observable<any> {
		// const headers = new HttpHeaders({ additionalHeaders: this.getAdditionalHeaders });
		return this.http.put<any>(`${environment.api_url}/${url}`, data);
  }
  getAll(url, data, isLoading: boolean = true): Observable<any> {
		// const headers = new HttpHeaders({ additionalHeaders: this.getAdditionalHeaders });
		// isLoading && this.loadingStateSubject.next(true);
		return this.http.get<any>(`${environment.api_url}/${url}`).pipe(
			map((res) => {
				// isLoading && this.loadingStateSubject.next(false);
				return res;
			})
		);
	}

	getById(url, data, isLoading: boolean = true): Observable<any> {
		// const headers = new HttpHeaders({ additionalHeaders: this.getAdditionalHeaders });
		return this.http.get<any>(`${environment.api_url}/${url}`).pipe(
			map((res) => {
				// isLoading && this.loadingStateSubject.next(false);
				return res;
			})
		);
  }
  
  download(url, data, isLoading: boolean = true,headers): Observable<any> {
		return this.http.get(`${environment.api_url}/${url}`, { headers: headers, responseType: 'blob' });

		// const headers = new HttpHeaders({ additionalHeaders: this.getAdditionalHeaders });
		// return this.http.get<any>(`${environment.api_url}/${url}`, { headers: headers, responseType: 'blob' }).pipe(
		// 	map((res) => {
		// 		// isLoading && this.loadingStateSubject.next(false);
		// 		return res;
		// 	})
		// );
	}
}
