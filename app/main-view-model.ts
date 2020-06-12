import { Observable } from '@nativescript/core';

import { WebViewClientSslImpl } from "./web-view";

export class HelloWorldModel extends Observable {
    private _counter: number;
    private _message: string;
    public webViewSrc = 'https://www.naver.com';
    public result = 'result';
    public tftext = 'https://www.naver.com'
    public enabled = true;
    public webviewclient: WebViewClientSslImpl;

    constructor() {
        super();

        // Initialize default values.
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value);
        }
    }
}
