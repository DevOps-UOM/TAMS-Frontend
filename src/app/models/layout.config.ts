export interface ILayoutConfig {
    toolBar?: boolean;
    sideNav?: boolean;
}
export class LayoutConfig implements ILayoutConfig {
    constructor(
        public toolBar?: boolean,
        public sideNav?: boolean
    ) {

    }
}