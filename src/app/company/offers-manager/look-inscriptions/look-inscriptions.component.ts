import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from 'src/app/interfaces/user';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-look-inscriptions',
  templateUrl: './look-inscriptions.component.html',
  styleUrls: ['./look-inscriptions.component.css'],
})
export class LookInscriptionsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: any;
  sus?: Subscription;
  displayedColumns: string[] = ['username', 'names', 'surnames', 'career'];
  userList:user[]= []
  offerID!:number
  constructor(private _InscriptionService: InscriptionService, private _ActivatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.getUsers(this.offerID = this._ActivatedRoute.snapshot.params["id"])
  }

  loadTable(users: user[]) {
    console.log(users)
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers(offerID: number) {
    this.sus = this._InscriptionService.getUsers(offerID).subscribe((res)=>{
      this.loadTable(res)
      this.userList = res
    })
  }
  applyFilterGlobal($event: any, stringVal: string) {
    const text = $event.target.value;
    this.dataSource.filter = text.trim().toLowerCase();
  }
  ngOnDestroy() {
    if (this.sus) {
      this.sus.unsubscribe();
    }
  }
}
