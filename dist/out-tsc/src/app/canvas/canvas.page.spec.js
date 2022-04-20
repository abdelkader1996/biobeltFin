import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CADCanvasComponent } from './canvas.page';
describe('CanvasPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CADCanvasComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CADCanvasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=canvas.page.spec.js.map