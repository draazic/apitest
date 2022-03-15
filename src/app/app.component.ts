import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Colunm } from './column';
import { Content } from './content';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apitest';
  sortOrder={};
  objet={};
  public myColunm:Colunm[]
  public myContent:Content[]
  public myContentFromColum:Content[]
  constructor(private serviceapi : ApiService){}

  ngOnInit() {      
    this.serviceapi.getJSON().subscribe(data => {
      //console.log(data);
      this.myColunm = data.sort((a, b) => (a.position > b.position) ? 1 : -1);
      console.log(this.myColunm);


      //this.order[this.myColunm[0].position]=this.myColunm[0].name;
      //this.sortOrder=this.myColunm.reduce((acc, cur) => ({ ...acc, [cur.position]: cur.name.toLowerCase()}), {});
      this.sortOrder=this.myColunm.reduce((acc, cur) => ({ ...acc, [cur.name.toLowerCase()]: cur.position}), {});
      console.log(this.sortOrder)
    });

    this.serviceapi.getJSON1().subscribe(data => {
      //console.log(data);
      this.myContent = data;
      //console.log(this.myContent);
      this.myContentFromColum = this.myContent.map(o => Object.assign({}, ...Object.keys(o).sort((a, b) => this.sortOrder[a] - this.sortOrder[b]).map(x => { return { [x]: o[x]}})))
      console.log(this.myContentFromColum);

       
    });
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
