import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  currentTab: string = 'income';
  constructor(private router: Router, private route: ActivatedRoute) {}

  changeTab(tabName: string) {
    this.currentTab = tabName;
    switch (tabName) {
      case 'income':
        this.changeTabUrl(0);
        break;
      case 'outcome':
        this.changeTabUrl(1);
        break;
      case 'loans':
        this.changeTabUrl(2);
        break;
      case 'investments':
        this.changeTabUrl(3);
        break;
    }
  }

  changeTabUrl(tabOrder: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: tabOrder,
      },
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      const clickedTabOrder = Number(params.tab);
      switch (clickedTabOrder) {
        case 0:
          this.currentTab = 'income';
          break;
        case 1:
          this.currentTab = 'outcome';
          break;
        case 2:
          this.currentTab = 'loans';
          break;
        case 3:
          this.currentTab = 'investments';
          break;
      }
    });
  }
}
