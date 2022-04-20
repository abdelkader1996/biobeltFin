import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosestockPage } from './choosestock.page';

describe('ChoosestockPage', () => {
  let component: ChoosestockPage;
  let fixture: ComponentFixture<ChoosestockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosestockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosestockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
