import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from "@angular/core";
import { LogService } from "../logger/log.service";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    cropWidth: number = 75;

    constructor(private logService: LogService) {

    }

    OnClicked(): void {
        this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75 / 5;
        this.logService.info('cropWidth ' + this.cropWidth.toString());
    }

}