import React from 'react'
import styles from './angular-cheat-sheet.module.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import './angular-cheat-sheet.css'
import angularWhite from './../assets/malcoded-angular-white.svg'
import rocket from './../assets/angular-cheat-sheet-rocket.svg'
import satellite from './../assets/angular-cheat-sheet-satellite.svg'
import lander from './../assets/angular-cheat-sheet-lander.svg'
import rover from './../assets/angular-cheat-sheet-rover.svg'
import pod from './../assets/angular-cheat-sheet-pod.svg'
import car from './../assets/angular-cheat-sheet-car.svg'
import antenna from './../assets/angular-cheat-sheet-antenna.svg'
import malcoded from './../assets/malcoded-logo-light.svg'
import angularCheatSheetPreview from './../assets/angular-cheat-sheet-preview.jpeg'
import angularCheatSheet from './../assets/angular-cheat-sheet.png'
import SEO from '../components/Seo'
import Button from '../components/elements/button/Button'
import { Link } from 'gatsby'

const code = {
  onInit: `export class Component implements OnInit {
    ngOnInit() {}
}`,
  onChanges: `export class Component implements OnChanges {
    ngOnChanges() {}
}`,
  afterViewInit: `export class Component implements AfterV­iewInit {
    ngAfterViewInit() {}
}`,
  onDestroy: `export class Component implements OnDestroy {
    ngOnDestroy() {}
}`,
  oneWayBinding: `<p>{{ name }}</p>`,
  propertyBinding: `<input [value]="name" />`,
  attributeBinding: `<button [attr.aria-label]="OK">OK</button>`,
  twoWayBinding: `<input [(ngModel)]="name"/>`,
  eventBinding: `<input [value]="name" 
       (input)="name = $event.target.value" />`,
  ngStyle: `<p [ngStyle]="{'color': 'blue'}">...</p>`,
  ngClass: `<p [ngClass]="'first second'">...</p>

<p [ngClass]="['first', 'second']">...</p>
  
<p [ngClass]="{'first': true, 'second': false}">...</p>
  
<p [ngClass]="stringExp|arrayExp|objExp">...</p>
  
<p [ngClass]="{'class1 class2 class3' : true}">...</p>`,
  ngIf: `<p *ngIf="expression; else notExpression">
  Expression is true
</p>
<ng-template #notExpression>
  <p>
    Expression is false
  </p>
</ng-template>`,
  ngFor: `<ul>
    <li *ngFor="let element of array"></li>
</ul>`,
  ngSwitch: `<ng-container [ngSwitch]="switch_expression">
    <p *ngSwitchCase="match_expression_1"> 1 </p>
    <p *ngSwitchCase="match_expression_2"> 2 </p>
    <p *ngSwitchDefault> default </p>
</ng-container>`,
  lowercase: `<p> {{name | lowercase}}</p>`,
  uppercase: `<p> {{name | uppercase}}</p>`,
  date: `<p> {{ today | date: 'medium'}}</p>`,
  dateFormat: `<p> {{ today | date: 'y-MM­-d'}}</p>`,
  currency: `<p> {{ 3.5 | currency: '€'}}</p>`,
  percent: `<p> {{ 0.5 | percent: '1.2'}}</p>`,
  number: `<p> {{ 0.5 | number: '1.2'}}</p>`,
  input: `@Input() myProperty;`,
  output: `@Output() myEvent = new EventEmitter();`,
  hostBinding: `@HostBinding('class.error') hasError;`,
  hostListener: `@HostListener('click', ['$event']) onClick(e) {...}`,
  contentChild: `@ContentChild(myPredicate) myChildComponent;`,
  contentChildren: `@ContentChildren(myPredicate) myChildComponents;`,
  viewChild: `@ViewChild(myPredicate) myChildComponent;`,
  viewChildren: `@ViewChildren(myPredicate) myChildComponents;`,
  routerOutlet: `<router-outlet name="aux"></router-outlet>`,
  routerLink: `<a routerLink="/path">

<a [routerLink]="[ '/path', routeParam ]">

<a [routerLink]="[ '/path', 
      { matrixParam: 'value' } ]">

<a [routerLink]="[ '/path' ]" 
     [queryParams]="{ page: 1 }">

<a [routerLink]="[ '/path' ]" 
     fragment="anchor">`,
}

export interface AngularCheatSheetProps {}

export interface AngularCheatSheetState {}

class AngularCheatSheet extends React.Component<
  AngularCheatSheetProps,
  AngularCheatSheetState
> {
  constructor(props: AngularCheatSheetProps) {
    super(props)
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  toCode(code: string, lang: string) {
    var result
    if (Prism.languages[lang]) {
      result = Prism.highlight(code, Prism.languages[lang])
    } else {
      result = this.escapeHtml(code)
    }
    return result
  }

  render() {
    return (
      <div className={styles.root}>
        <SEO
          title="Angular Cheat Sheet"
          description="The malcoded.com Angular Cheat Sheet"
          image={angularCheatSheetPreview}
        />
        <img
          src={angularWhite}
          style={{
            height: 250,
            position: 'absolute',
            opacity: 0.1,
            zIndex: 0,
          }}
        />
        <Link
          to="/"
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={malcoded}
            style={{
              height: 50,
              position: 'absolute',

              zIndex: 0,
            }}
          />
        </Link>

        <Typography
          color="inherit"
          variant="h2"
          component="h1"
          align="center"
          style={{ marginTop: 64, fontWeight: 500 }}
        >
          Angular Cheat Sheet
        </Typography>
        <a
          style={{ marginTop: 32 }}
          download="angular-cheat-sheet.png"
          href="/angular-cheat-sheet.png"
          title="Angular Cheat Sheet"
        >
          <Button>Download</Button>
        </a>
        <div className={styles.grid}>
          <div style={{ width: '100%' }}>
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={rocket} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Lifecycle Hooks
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        OnInit
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.onInit, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        OnChanges
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.onChanges, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        AfterV­iewInit
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.afterViewInit, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        OnDestroy
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.onDestroy, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br />
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={rover} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Structural Directives
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        *ngIf
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.ngIf, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        *ngFor
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.ngFor, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        *ngSwitchCase
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.ngSwitch, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br />
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={pod} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Class Field Decorators
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Input
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.input, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Output
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.output, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Host Binding
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.hostBinding, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Host Listener
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.hostListener, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Content Child
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.contentChild, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Content Children
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(
                            code.contentChildren,
                            'typescript'
                          ),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        View Child
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.viewChild, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        View Children
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.viewChildren, 'typescript'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div>
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={satellite} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Data Binding
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        One Way Binding
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.oneWayBinding, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Property Binding
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.propertyBinding, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Attribute Binding
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.attributeBinding, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Tow Way Binding
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.twoWayBinding, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Event Binding
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.eventBinding, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br />
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={lander} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Styling
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        ngStyle
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.ngStyle, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        ngClass
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.ngClass, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br />
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={antenna} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Pipes
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Lowercase
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.lowercase, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Uppercase
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.uppercase, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Date
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.date, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Date Format
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.dateFormat, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Currency
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.currency, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Percent
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.percent, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Number
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.number, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br />
            <ExpansionPanel className={styles.card} defaultExpanded>
              <ExpansionPanelSummary className={styles.cardHeader}>
                <div>
                  <img src={car} style={{ width: '100%', zIndex: 100 }} />
                  <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                  >
                    Routing
                  </Typography>
                </div>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails className={styles.cardContent}>
                <ul className={styles.list}>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Router Outlet
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.routerOutlet, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                  <li className={styles.listElement}>
                    <div>
                      <Typography color="inherit" variant="h6">
                        Router Link
                      </Typography>
                    </div>
                    <pre>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: this.toCode(code.routerLink, 'html'),
                        }}
                      />
                    </pre>
                  </li>
                </ul>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    )
  }
}

export default AngularCheatSheet
