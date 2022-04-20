import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BottlesPage } from './bottles.page';
describe('BottlesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BottlesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BottlesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottles.page.spec.js.map