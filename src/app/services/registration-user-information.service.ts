import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError,} from 'rxjs/operators'
import { environment } from 'src/environment/environment';
 
@Injectable({
  providedIn: 'root'
})
export class RegistrationUserInformationService {

  constructor(private http: HttpClient) { }

  getUserRegistrationDetails(formDetails: any) {
    let uri = environment.backendUrl + "/user/add-update-blog-details/save-add-update-user-details";
    let formData = formDetails;
    console.log("formData:",formData);
    return this.http.patch<any>(uri, formData).pipe(
      map((response: { data: any; }) => response.data),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.error);
  }
}
