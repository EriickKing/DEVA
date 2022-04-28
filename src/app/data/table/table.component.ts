import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['year', 'title', 'cast', 'genres'];
  public dataSource: any
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  public toggleModal: boolean = false;
  constructor(
    private dataService: DataService
  ) {
    this.GetData()
  }


  ToggleModal($event: any) {
    this.toggleModal = $event
  }



  GetData() {
    this.dataService.GetData().subscribe({
      next: data =>
        this.dataSource = new MatTableDataSource(data),
      complete: () => {
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort;
      }
    })
  }



}
