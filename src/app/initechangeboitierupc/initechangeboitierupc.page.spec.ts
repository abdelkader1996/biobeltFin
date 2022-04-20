import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitechangeboitierupcPage } from './initechangeboitierupc.page';

describe('InitechangeboitierupcPage', () => {
  let component: InitechangeboitierupcPage;
  let fixture: ComponentFixture<InitechangeboitierupcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitechangeboitierupcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitechangeboitierupcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
