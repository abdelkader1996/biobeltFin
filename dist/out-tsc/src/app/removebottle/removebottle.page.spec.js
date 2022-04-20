import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RemovebottlePage } from './removebottle.page';
describe('RemovebottlePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RemovebottlePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RemovebottlePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=removebottle.page.spec.js.map