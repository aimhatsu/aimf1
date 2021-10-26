export class GraphModel {
    data:   Datum[];
    layout: Layout;
}

export interface Datum {
    y:         number[];
    x:         number[];
    z:         number[];
    type:      string;
    hoverinfo: string;
    marker:    Marker;
}

export interface Marker {
    size:    number;
    symbol:  string;
    line:    Line;
    opacity: number;
}

export interface Line {
    width: number;
}

export interface Layout {
    autosize: boolean;
    scene:    Scene;
    margin:any
}

export interface Scene {
    xaxis:       Xaxis;
 
}

export interface Aspectratio {
    x: number;
    y: number;
    z: number;
}

export interface Xaxis {
    autorange: string;
}