import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRootComponent } from './app-root.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppRootComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-ngrx-base'`, () => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-ngrx-base');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppRootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'ng-ngrx-base app is running!'
    );
  });
});
