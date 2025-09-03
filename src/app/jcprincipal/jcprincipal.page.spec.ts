import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JCprincipalPage } from './jcprincipal.page';

describe('JCprincipalPage', () => {
  let component: JCprincipalPage;
  let fixture: ComponentFixture<JCprincipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JCprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
