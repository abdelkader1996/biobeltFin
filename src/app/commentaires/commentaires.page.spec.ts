import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentairesPage } from './commentaires.page';

describe('CommentairesPage', () => {
  let component: CommentairesPage;
  let fixture: ComponentFixture<CommentairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentairesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
