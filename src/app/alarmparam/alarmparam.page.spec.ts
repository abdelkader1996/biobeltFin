import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmparamPage } from './alarmparam.page';

describe('AlarmparamPage', () => {
  let component: AlarmparamPage;
  let fixture: ComponentFixture<AlarmparamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmparamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmparamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
