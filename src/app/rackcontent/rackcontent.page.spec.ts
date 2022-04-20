import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RackcontentPage } from './rackcontent.page';

describe('RackcontentPage', () => {
  let component: RackcontentPage;
  let fixture: ComponentFixture<RackcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackcontentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RackcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
