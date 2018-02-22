import { TestBed, getTestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BwcProvider } from './bwc';
import { NgLoggerModule, Level } from '@nsalaun/ng-logger';
import { Logger } from '../../providers/logger/logger';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

fdescribe('BwcProvider', () => {
  let injector: TestBed;
  let service: BwcProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgLoggerModule.forRoot(Level.LOG),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        BwcProvider,
        Logger
      ]
    });
    injector = getTestBed();
    service = injector.get(BwcProvider);
    httpMock = injector.get(HttpTestingController);
  });

  it('should get bitcore', () => {
    let response = service.getBitcore();
  });

  it('should get bitcore cash', () => {
    let response = service.getBitcoreCash();
  });

  it('should get errors', () => {
    let response = service.getErrors();
  });

  it('should get sjcl', () => {
    let response = service.getSJCL();
  });

  it('should get utils', () => {
    let response = service.getUtils();
  });

  it('should get client', () => {
    let response = service.getClient();
  });
});
