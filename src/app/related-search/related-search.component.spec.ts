/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from '../app.component';
import { IndexComponent } from '../index/index.component';
import { ResultsComponent } from '../results/results.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AdvancedsearchComponent } from '../advancedsearch/advancedsearch.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { reducer } from '../reducers/index';
import { FooterNavbarComponent } from '../footer-navbar/footer-navbar.component';
import { AboutComponent } from '../about/about.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ContactComponent } from '../contact/contact.component';
import {InfoboxComponent} from "../infobox/infobox.component";
import { RelatedSearchComponent } from './related-search.component';
import {KnowledgeapiService} from "../knowledgeapi.service";
import {AutocompleteService} from "../autocomplete.service";
import {AutoCompleteComponent} from "../auto-complete/auto-complete.component";
import { ThemeComponent } from '../theme/theme.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import {SocialmediaComponent} from "../socialmedia/socialmedia.component";
import {MediaWallComponent} from "../media-wall/media-wall.component";
import {MediaWallLinkerComponent} from "../wall-linker/wall-linker.component";
import {IntelligenceComponent} from "../intelligence/intelligence.component";

describe('RelatedSearchComponent', () => {
  let component: RelatedSearchComponent;
  let fixture: ComponentFixture<RelatedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        IndexComponent,
        ResultsComponent,
        NotFoundComponent,
        AdvancedsearchComponent,
        SearchBarComponent,
        FooterNavbarComponent,
        AboutComponent,
        ContactComponent,
        ModalComponent,
        InfoboxComponent,
        RelatedSearchComponent,
        AutoCompleteComponent,
        ThemeComponent,
        DropdownComponent,
        SocialmediaComponent,
        MediaWallComponent,
        MediaWallLinkerComponent,
        IntelligenceComponent
      ],
      providers: [
        KnowledgeapiService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
