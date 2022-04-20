import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottleTypesModalPage } from './bottle-types-modal.page';

describe('BottleTypesModalPage', () => {
  let component: BottleTypesModalPage;
  let fixture: ComponentFixture<BottleTypesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleTypesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottleTypesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
