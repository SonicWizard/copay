import { TestBed, getTestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { LanguageProvider } from './language';
import { NgLoggerModule, Level } from '@nsalaun/ng-logger';
import { Logger } from '../../providers/logger/logger';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { ConfigProvider } from '../../providers/config/config';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { PlatformProvider } from '../platform/platform';
import { Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';

describe('LanguageProvider', () => {
  let injector: TestBed;
  let service: LanguageProvider;
  let httpMock: HttpTestingController;
  let urls = [
    'assets/appConfig.json',
    'assets/externalServices.json'
  ];

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
        LanguageProvider,
        Logger,
        LanguageProvider,
        ConfigProvider,
        PersistenceProvider,
        PlatformProvider,
        Platform,
        File,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });

    injector = getTestBed();
    service = injector.get(LanguageProvider);
    httpMock = injector.get(HttpTestingController);
  });

  xit('should load', () => {
    service.load();
  });

  xit('should set language', () => {
    service.set('es');
    expect(service.getCurrent()).toBe('es');
  });

  it('should get name of language', () => {
    let name = service.getName('en');
    expect(name).toBe('English');
  });

  it('should get current', () => {
    let currentLang = service.getCurrent();
    expect(currentLang).toBe(undefined);

    // TODO change language and test it
  });

  it('should get available languages', () => {
    let availableLangs = service.getAvailables();
    expect(JSON.stringify(availableLangs)).toEqual('[{"name":"English","isoCode":"en"},{"name":"Español","isoCode":"es"},{"name":"Français","isoCode":"fr"},{"name":"Italiano","isoCode":"it"},{"name":"Polski","isoCode":"pl"},{"name":"Deutsch","isoCode":"de"},{"name":"日本語","isoCode":"ja","useIdeograms":true},{"name":"中文（简体）","isoCode":"zh","useIdeograms":true},{"name":"Pусский","isoCode":"ru"},{"name":"Português","isoCode":"pt"}]');
  });

  it('should catch an error when loading fails', () => {
  });
});
