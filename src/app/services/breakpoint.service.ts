import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import {
  startWith,
  map,
  distinctUntilChanged,
  shareReplay,
} from 'rxjs/operators';

const QUERY: Map<string, string> = new Map([
  ['xxl', '(min-width: 1440px)'],
  ['xl', '(min-width: 1200px)'],
  ['lg', '(min-width: 992px)'],
  ['md', '(min-width: 768px)'],
  ['sm', '(min-width: 576px)'],
  ['xs', '(min-width: 0px)'],
]);

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private size$: Observable<string>;
  public static readonly mobileSizes = ['md', 'sm', 'xs'];
  public static readonly tabletSizes = ['md'];
  public static readonly desktopSizes = ['lg', 'xl'];
  public static readonly wideScreenSizes = ['xxl'];
  public static readonly mobileBreakpoint = 1;
  public static readonly smallDesktopBreakpoint = 2;
  public static readonly desktopBreakpoint = 3;
  public static readonly WIDESCREEN_BREAKPOINT_LABEL = 'Widescreen';
  public static readonly DESKTOP_BREAKPOINT_LABEL = 'Desktop';
  public static readonly TABLET_BREAKPOINT_LABEL = 'Tablet';
  public static readonly MOBILE_BREAKPOINT_LABEL = 'Mobile';

  constructor() {
    this.size$ = fromEvent(window, 'resize').pipe(
      startWith(this.getScreenSize()),
      map((event: Event) => this.getScreenSize()),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  private getScreenSize(): string | any {
    const [[newSize = 'never']] = Array.from(QUERY.entries()).filter(
      ([size, mediaQuery]) => window.matchMedia(mediaQuery).matches
    );
    return newSize;
  }

  public isMobile$(): Observable<boolean> {
    return this.size$.pipe(
      map((size) => BreakpointService.mobileSizes.includes(size)),
      distinctUntilChanged()
    );
  }

  public isDesktop$(): Observable<boolean> {
    return this.size$.pipe(
      map((size) => BreakpointService.desktopSizes.includes(size)),
      distinctUntilChanged()
    );
  }
}
