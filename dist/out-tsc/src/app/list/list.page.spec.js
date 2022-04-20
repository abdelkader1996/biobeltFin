import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';
describe('ListPage', () => {
    let component;
    let fixture;
    let listPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have a list of 10 elements', () => {
        listPage = fixture.nativeElement;
        const items = listPage.querySelectorAll('ion-item');
        expect(items.length).toEqual(10);
    });
});
//# sourceMappingURL=list.page.spec.js.map