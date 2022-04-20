import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottlemodalPage } from './bottlemodal.page';

describe('BottlemodalPage', () => {
  let component: BottlemodalPage;
  let fixture: ComponentFixture<BottlemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottlemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
