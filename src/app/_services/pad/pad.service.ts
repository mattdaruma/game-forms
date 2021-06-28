import { Injectable } from '@angular/core';
import { GamepadService } from 'ngx-gamepad';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PadService {
  public PadConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private buttonPressed: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  public ButtonPressed: BehaviorSubject<boolean>[] = [new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false), new BehaviorSubject<boolean>(false)];
  public ButtonPress: Subject<boolean>[] = [new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>(), new Subject<boolean>()];
  private dirMap = ['up', 'right', 'down', 'left']
  private dirPressed: boolean[] = [false, false, false, false];
  private dirTimeout: any[] = [];
  public DirPressed: BehaviorSubject<boolean>[] = [new BehaviorSubject<boolean>(false),new BehaviorSubject<boolean>(false),new BehaviorSubject<boolean>(false),new BehaviorSubject<boolean>(false)]
  public DirPress: Subject<boolean>[] = [new Subject(), new Subject(), new Subject(), new Subject()]
  private dirAltPressed: boolean[] = [false, false, false, false];
  private dirAltTimeout: any[] = [];
  public DirAltPressed: BehaviorSubject<boolean>[] = [new BehaviorSubject<boolean>(false),new BehaviorSubject<boolean>(false),new BehaviorSubject<boolean>(false),new BehaviorSubject<boolean>(false)]
  public DirAltPress: Subject<boolean>[] = [new Subject(), new Subject(), new Subject(), new Subject()]
  constructor(
    private gamepad: GamepadService
  ){
    this.gamepad.connect().subscribe((padconn: any)=>{
      this.PadConnected.next(true);
      for(let i=0; i<16; i++){
        this.gamepad.on(`button${i}`).subscribe(()=>{
          if(!this.buttonPressed[i]){
            this.buttonPressed[i] = true;
            this.ButtonPressed[i].next(true);
            this.ButtonPress[i].next(true);
          }
        })
        this.gamepad.after(`button${i}`).subscribe(()=>{
          this.buttonPressed[i]=false;
          this.ButtonPressed[i].next(false);
        })
      }
      for(let i=0; i<4; i++){
        this.gamepad.on(this.dirMap[i]).subscribe(()=>{
          if(!this.dirPressed[i]){
            this.dirPressed[i] = true;
            this.DirPress[i].next(true);
            this.DirPressed[i].next(true);
            this.dirTimeout[i] = this.buildTimeout(i, false, 600)
          }
        })
        this.gamepad.after(this.dirMap[i]).subscribe(()=>{
          this.dirPressed[i]= false;
          clearTimeout(this.dirTimeout[i]);
          this.DirPressed[i].next(false);
        })
        this.gamepad.on(`${this.dirMap[i]}0`).subscribe(()=>{
          if(!this.dirPressed[i]){
            this.dirPressed[i] = true;
            this.DirPress[i].next(true);
            this.DirPressed[i].next(true);
            this.dirTimeout[i] = this.buildTimeout(i, false, 600)
          }
        })
        this.gamepad.after(`${this.dirMap[i]}0`).subscribe(()=>{
          this.dirPressed[i]= false;
          clearTimeout(this.dirTimeout[i]);
          this.DirPressed[i].next(false);
        })
        this.gamepad.on(`${this.dirMap[i]}1`).subscribe(()=>{
          if(!this.dirAltPressed[i]){
            this.dirAltPressed[i] = true;
            this.DirAltPress[i].next(true);
            this.DirAltPressed[i].next(true);
            this.dirAltTimeout[i] = this.buildTimeout(i, true, 600)
          }
        })
        this.gamepad.after(`${this.dirMap[i]}1`).subscribe(()=>{
          this.dirAltPressed[i]= false;
          clearTimeout(this.dirAltTimeout[i]);
          this.DirAltPressed[i].next(false);
        })
      }
    })
  }
  private buildTimeout(dirIndex: number, alt: boolean, timeout: number){
    return setTimeout(() => {
      if(alt) this.DirAltPress[dirIndex].next(true);
      else this.DirPress[dirIndex].next(true);
      if(timeout > 50) timeout = Math.floor(timeout * .66);
      if(alt) this.dirAltTimeout[dirIndex] = this.buildTimeout(dirIndex, alt, timeout);
      else this.dirTimeout[dirIndex] = this.buildTimeout(dirIndex, alt, timeout);
    }, timeout);
  }
}
