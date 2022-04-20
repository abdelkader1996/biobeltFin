import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SynchroPage } from './synchro.page';
describe('SynchroPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SynchroPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SynchroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=synchro.page.spec.js.map