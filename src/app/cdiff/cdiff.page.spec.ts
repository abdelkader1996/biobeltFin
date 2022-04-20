import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdiffPage } from './cdiff.page';

describe('CdiffPage', () => {
  let component: CdiffPage;
  let fixture: ComponentFixture<CdiffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdiffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CdiffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
