import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchuserdetailsService {

  user_profile_data:any;

  constructor(private http: HttpClient) { }

  async loadUserProfileData() {
    const user_profile_data_path = 'assets/user_profile_data.json';
    return await new Promise((resolve, reject) => {
      this.http.get<any>(user_profile_data_path).toPromise().then(data => {
        this.user_profile_data = data;
        resolve(this.user_profile_data);
      }).catch(() => {
        reject(`Couldn't Load File "${user_profile_data_path}" : ${JSON.stringify(this.user_profile_data)}`);
      })
    })
  }

}
