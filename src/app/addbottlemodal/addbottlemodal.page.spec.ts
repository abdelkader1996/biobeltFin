import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbottlemodalPage } from './addbottlemodal.page';

describe('AddbottlemodalPage', () => {
  let component: AddbottlemodalPage;
  let fixture: ComponentFixture<AddbottlemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbottlemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
