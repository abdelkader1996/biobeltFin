import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FininterventionPage } from './finintervention.page';

describe('FininterventionPage', () => {
  let component: FininterventionPage;
  let fixture: ComponentFixture<FininterventionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FininterventionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FininterventionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
