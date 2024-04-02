import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllCoursesService {

  constructor(private http: HttpClient) {}

  // Method to read text from a local text file
  readLocalTextFile(filePath: string): Promise<string> {
    return this.http.get(filePath, { responseType: 'text' }).toPromise()
      .then(data => {
        return data as string; // Return the text content
      })
      .catch(error => {
        console.error('Error reading local text file:', error);
        throw error;
      });
  }
}
