import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionbottlePage } from './optionbottle.page';

describe('OptionbottlePage', () => {
  let component: OptionbottlePage;
  let fixture: ComponentFixture<OptionbottlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionbottlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionbottlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
