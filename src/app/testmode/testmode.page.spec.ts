import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestmodePage } from './testmode.page';

describe('TestmodePage', () => {
  let component: TestmodePage;
  let fixture: ComponentFixture<TestmodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestmodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
