import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopingPage } from './developing.page';

describe('DevelopingPage', () => {
  let component: DevelopingPage;
  let fixture: ComponentFixture<DevelopingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
