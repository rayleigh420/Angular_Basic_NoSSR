import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-test3',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './test3.component.html',
    styleUrl: './test3.component.css',
})
export class Test3Component
    implements
        OnChanges,
        DoCheck,
        AfterViewInit,
        AfterViewChecked,
        AfterContentInit,
        AfterContentChecked
{
    nb: number = 0;
    ngOnChanges(changes: SimpleChanges): void {
        console.log('On Change');
    }

    ngDoCheck(): void {
        console.log('Do check');
    }

    ngAfterViewInit(): void {
        console.log('View init');
    }

    ngAfterViewChecked(): void {
        console.log('View checked');
    }

    ngAfterContentInit(): void {
        console.log('Content init');
    }

    ngAfterContentChecked(): void {
        console.log('Content checked');
    }

    handleIncrease(): void {
        this.nb = this.nb + 1;
    }
}
