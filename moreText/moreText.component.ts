/**
 * Created by Fantasy on 2017/5/5.
 */
import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    Renderer, ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'more-text',
    template: `
        <div class="more-text-wrap">
            <ng-content></ng-content>
        </div>
        <div class="more-text-button" *ngIf="isShowMore">
            <a class="button-a" (click)="showMore()"
               [ngClass]="{'button-transform':!defaultSwitch}"></a>
        </div>
    `,
    styleUrls: ['./moreText.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MoreTextComponent implements OnInit, AfterViewInit {

    @Input()
    public showLine: number = 0;

    @Input()
    public lineHeight: number = 0;

    public isShowMore: boolean = false;
    public defaultSwitch: boolean = true;
    private _el: HTMLElement;

    private moreTextEl: HTMLElement;

    private originalText: string = '';

    private cutFinalText: string = '';

    constructor(public element: ElementRef,
                public renderer: Renderer) {
        this._el = <HTMLElement> element.nativeElement;
    }

    public ngOnInit() {
        this.renderer.setElementStyle(this._el, 'line-height', this.lineHeight + 'px');
    }

    public ngAfterViewInit(): void {
        this.cutWordOneByOne();
    }

    public showMore(): void {
        this.moreTextEl.textContent = this.defaultSwitch ? this.originalText : this.cutFinalText;
        this.defaultSwitch = !this.defaultSwitch;
    }

    private cutWordOneByOne(): void {
        this.moreTextEl = <HTMLElement> this._el.children[0];
        this.originalTextFuc();
        while (this.showTextHeight() <= this.currentTextHeight()) {
            this.isShowMore = true;
            this.moreTextEl.textContent = this.moreTextEl
                .textContent
                .replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, '...');
        }
        this.cutFinalText = this.moreTextEl.textContent;
    }

    private originalTextFuc(): void {
        this.originalText = this.moreTextEl.textContent;
    }

    private showTextHeight(): number {
        return this.lineHeight * this.showLine || 0;
    }

    private currentTextHeight(): number {
        return this.moreTextEl.offsetHeight || 0;
    }
}
