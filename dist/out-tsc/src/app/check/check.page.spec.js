import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CheckPage } from './check.page';
describe('CheckPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CheckPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=check.page.spec.js.map