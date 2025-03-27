'use strict';

const vendors = require('./vendors.js');

function _mergeNamespaces(n, m) {
    for (var i = 0; i < m.length; i++) {
        const e = m[i];
        if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
            if (k !== 'default' && !(k in n)) {
                const d = Object.getOwnPropertyDescriptor(e, k);
                if (d) {
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: () => e[k]
                    });
                }
            }
        } }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

const DEFAULT_EMPTY_ARRAY = '[]';
const NO_DEFAULT_VALUE = '';
const DEFAULT_TRUE = '!0';
const DEFAULT_FALSE = '!1';
const touchEvents = {
    bindTouchStart: NO_DEFAULT_VALUE,
    bindTouchMove: NO_DEFAULT_VALUE,
    bindTouchEnd: NO_DEFAULT_VALUE,
    bindTouchCancel: NO_DEFAULT_VALUE,
    bindLongTap: NO_DEFAULT_VALUE
};
const animation = {
    animation: NO_DEFAULT_VALUE,
    bindAnimationStart: NO_DEFAULT_VALUE,
    bindAnimationIteration: NO_DEFAULT_VALUE,
    bindAnimationEnd: NO_DEFAULT_VALUE,
    bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
    return `'${s}'`;
}
const View$1 = Object.assign(Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '50', 'hover-stay-time': '400' }, touchEvents), animation);
const Icon = {
    type: NO_DEFAULT_VALUE,
    size: '23',
    color: NO_DEFAULT_VALUE
};
const MapComp = Object.assign({ longitude: NO_DEFAULT_VALUE, latitude: NO_DEFAULT_VALUE, scale: '16', markers: DEFAULT_EMPTY_ARRAY, covers: NO_DEFAULT_VALUE, polyline: DEFAULT_EMPTY_ARRAY, circles: DEFAULT_EMPTY_ARRAY, controls: DEFAULT_EMPTY_ARRAY, 'include-points': DEFAULT_EMPTY_ARRAY, 'show-location': NO_DEFAULT_VALUE, 'layer-style': '1', bindMarkerTap: NO_DEFAULT_VALUE, bindControlTap: NO_DEFAULT_VALUE, bindCalloutTap: NO_DEFAULT_VALUE, bindUpdated: NO_DEFAULT_VALUE }, touchEvents);
const Progress = {
    percent: NO_DEFAULT_VALUE,
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: DEFAULT_FALSE,
    'active-mode': singleQuote('backwards'),
    'show-info': DEFAULT_FALSE
};
const RichText = {
    nodes: DEFAULT_EMPTY_ARRAY
};
const Text$1 = Object.assign({ selectable: DEFAULT_FALSE, space: NO_DEFAULT_VALUE, decode: DEFAULT_FALSE }, touchEvents);
const Button = Object.assign({ size: singleQuote('default'), type: NO_DEFAULT_VALUE, plain: DEFAULT_FALSE, disabled: NO_DEFAULT_VALUE, loading: DEFAULT_FALSE, 'form-type': NO_DEFAULT_VALUE, 'open-type': NO_DEFAULT_VALUE, 'hover-class': singleQuote('button-hover'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '20', 'hover-stay-time': '70', name: NO_DEFAULT_VALUE, bindagreeprivacyauthorization: NO_DEFAULT_VALUE }, touchEvents);
const Checkbox = {
    value: NO_DEFAULT_VALUE,
    disabled: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE
};
const CheckboxGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Form = {
    'report-submit': DEFAULT_FALSE,
    bindSubmit: NO_DEFAULT_VALUE,
    bindReset: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Input = {
    value: NO_DEFAULT_VALUE,
    type: singleQuote(NO_DEFAULT_VALUE),
    password: DEFAULT_FALSE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'cursor-spacing': '0',
    focus: DEFAULT_FALSE,
    'confirm-type': singleQuote('done'),
    'confirm-hold': DEFAULT_FALSE,
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: NO_DEFAULT_VALUE,
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Label = Object.assign({ for: NO_DEFAULT_VALUE, name: NO_DEFAULT_VALUE }, touchEvents);
const Picker = {
    mode: singleQuote('selector'),
    disabled: NO_DEFAULT_VALUE,
    range: NO_DEFAULT_VALUE,
    'range-key': NO_DEFAULT_VALUE,
    value: NO_DEFAULT_VALUE,
    start: NO_DEFAULT_VALUE,
    end: NO_DEFAULT_VALUE,
    fields: singleQuote('day'),
    'custom-item': NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    bindCancel: NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    bindColumnChange: NO_DEFAULT_VALUE
};
const PickerView = {
    value: NO_DEFAULT_VALUE,
    'indicator-style': NO_DEFAULT_VALUE,
    'indicator-class': NO_DEFAULT_VALUE,
    'mask-style': NO_DEFAULT_VALUE,
    'mask-class': NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const PickerViewColumn = {
    name: NO_DEFAULT_VALUE
};
const Radio = {
    value: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE
};
const RadioGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: NO_DEFAULT_VALUE,
    value: '0',
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': DEFAULT_FALSE,
    bindChange: NO_DEFAULT_VALUE,
    bindChanging: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Switch = {
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const Textarea = {
    value: NO_DEFAULT_VALUE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'auto-focus': DEFAULT_FALSE,
    focus: DEFAULT_FALSE,
    'auto-height': DEFAULT_FALSE,
    fixed: DEFAULT_FALSE,
    'cursor-spacing': '0',
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindLineChange: NO_DEFAULT_VALUE,
    bindInput: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE
};
const CoverImage = {
    src: NO_DEFAULT_VALUE,
    bindLoad: 'eh',
    bindError: 'eh'
};
const CoverView = Object.assign({ 'scroll-top': DEFAULT_FALSE }, touchEvents);
const MovableArea = {
    'scale-area': DEFAULT_FALSE
};
const MovableView = Object.assign(Object.assign({ direction: 'none', inertia: DEFAULT_FALSE, 'out-of-bounds': DEFAULT_FALSE, x: NO_DEFAULT_VALUE, y: NO_DEFAULT_VALUE, damping: '20', friction: '2', disabled: NO_DEFAULT_VALUE, scale: DEFAULT_FALSE, 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', bindChange: NO_DEFAULT_VALUE, bindScale: NO_DEFAULT_VALUE, bindHTouchMove: NO_DEFAULT_VALUE, bindVTouchMove: NO_DEFAULT_VALUE, width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents), animation);
const ScrollView = Object.assign(Object.assign({ 'scroll-x': DEFAULT_FALSE, 'scroll-y': DEFAULT_FALSE, 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': NO_DEFAULT_VALUE, 'scroll-left': NO_DEFAULT_VALUE, 'scroll-into-view': NO_DEFAULT_VALUE, 'scroll-with-animation': DEFAULT_FALSE, 'enable-back-to-top': DEFAULT_FALSE, bindScrollToUpper: NO_DEFAULT_VALUE, bindScrollToLower: NO_DEFAULT_VALUE, bindScroll: NO_DEFAULT_VALUE }, touchEvents), animation);
const Swiper = Object.assign({ 'indicator-dots': DEFAULT_FALSE, 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: DEFAULT_FALSE, current: '0', interval: '5000', duration: '500', circular: DEFAULT_FALSE, vertical: DEFAULT_FALSE, 'previous-margin': singleQuote('0px'), 'next-margin': singleQuote('0px'), 'display-multiple-items': '1', bindChange: NO_DEFAULT_VALUE, bindTransition: NO_DEFAULT_VALUE, bindAnimationFinish: NO_DEFAULT_VALUE }, touchEvents);
const SwiperItem = {
    'item-id': NO_DEFAULT_VALUE
};
const Navigator = {
    url: NO_DEFAULT_VALUE,
    'open-type': singleQuote('navigate'),
    delta: '1',
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': DEFAULT_FALSE,
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: NO_DEFAULT_VALUE,
    bindFail: NO_DEFAULT_VALUE,
    bindComplete: NO_DEFAULT_VALUE
};
const Audio = {
    id: NO_DEFAULT_VALUE,
    src: NO_DEFAULT_VALUE,
    loop: DEFAULT_FALSE,
    controls: DEFAULT_FALSE,
    poster: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    author: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindPlay: NO_DEFAULT_VALUE,
    bindPause: NO_DEFAULT_VALUE,
    bindTimeUpdate: NO_DEFAULT_VALUE,
    bindEnded: NO_DEFAULT_VALUE
};
const Camera = {
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    bindStop: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE
};
const Image = Object.assign({ src: NO_DEFAULT_VALUE, mode: singleQuote('scaleToFill'), 'lazy-load': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE, bindLoad: NO_DEFAULT_VALUE }, touchEvents);
const LivePlayer = Object.assign({ src: NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, muted: DEFAULT_FALSE, orientation: singleQuote('vertical'), 'object-fit': singleQuote('contain'), 'background-mute': DEFAULT_FALSE, 'min-cache': '1', 'max-cache': '3', bindStateChange: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindNetStatus: NO_DEFAULT_VALUE }, animation);
const Video = Object.assign({ src: NO_DEFAULT_VALUE, duration: NO_DEFAULT_VALUE, controls: DEFAULT_TRUE, 'danmu-list': NO_DEFAULT_VALUE, 'danmu-btn': NO_DEFAULT_VALUE, 'enable-danmu': NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, loop: DEFAULT_FALSE, muted: DEFAULT_FALSE, 'initial-time': '0', 'page-gesture': DEFAULT_FALSE, direction: NO_DEFAULT_VALUE, 'show-progress': DEFAULT_TRUE, 'show-fullscreen-btn': DEFAULT_TRUE, 'show-play-btn': DEFAULT_TRUE, 'show-center-play-btn': DEFAULT_TRUE, 'enable-progress-gesture': DEFAULT_TRUE, 'object-fit': singleQuote('contain'), poster: NO_DEFAULT_VALUE, 'show-mute-btn': DEFAULT_FALSE, bindPlay: NO_DEFAULT_VALUE, bindPause: NO_DEFAULT_VALUE, bindEnded: NO_DEFAULT_VALUE, bindTimeUpdate: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindWaiting: NO_DEFAULT_VALUE, bindError: NO_DEFAULT_VALUE }, animation);
const Canvas = Object.assign({ 'canvas-id': NO_DEFAULT_VALUE, 'disable-scroll': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE }, touchEvents);
const Ad = {
    'unit-id': NO_DEFAULT_VALUE,
    'ad-intervals': NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindClose: NO_DEFAULT_VALUE
};
const WebView = {
    src: NO_DEFAULT_VALUE,
    bindMessage: NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE
};
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: NO_DEFAULT_VALUE
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: NO_DEFAULT_VALUE
};
const NativeSlot = {
    name: NO_DEFAULT_VALUE
};
const Script = {};
const internalComponents = {
    View: View$1,
    Icon,
    Progress,
    RichText,
    Text: Text$1,
    Button,
    Checkbox,
    CheckboxGroup,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    Video,
    Canvas,
    Ad,
    WebView,
    Block,
    Map: MapComp,
    Slot,
    SlotView,
    NativeSlot,
    Script,
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea'
]);

var PLATFORM_TYPE;
(function (PLATFORM_TYPE) {
    PLATFORM_TYPE["MINI"] = "mini";
    PLATFORM_TYPE["WEB"] = "web";
    PLATFORM_TYPE["RN"] = "rn";
    PLATFORM_TYPE["HARMONY"] = "harmony";
    PLATFORM_TYPE["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
({
    h5: {
        type: PLATFORM_TYPE.WEB
    },
    harmony: {
        type: PLATFORM_TYPE.HARMONY
    },
    mini: {
        type: PLATFORM_TYPE.MINI
    },
    rn: {
        type: PLATFORM_TYPE.RN
    },
    quickapp: {
        type: PLATFORM_TYPE.QUICK
    },
});

class Events {
    constructor(opts) {
        var _a;
        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
    }
    on(eventName, callback, context) {
        let event, tail, _eventName;
        if (!callback) {
            return this;
        }
        if (typeof eventName === 'symbol') {
            _eventName = [eventName];
        }
        else {
            _eventName = eventName.split(Events.eventSplitter);
        }
        this.callbacks || (this.callbacks = {});
        const calls = this.callbacks;
        while ((event = _eventName.shift())) {
            const list = calls[event];
            const node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        }
        while ((event = _events.shift())) {
            let node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            const tail = node.tail;
            while ((node = node.next) !== tail) {
                const cb = node.callback;
                const ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events, ...args) {
        let event, node, calls, _events;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (typeof events === 'symbol') {
            _events = [events];
        }
        else {
            _events = events.split(Events.eventSplitter);
        }
        while ((event = _events.shift())) {
            if ((node = calls[event])) {
                const tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, args);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

class PageEvts extends Events {
    constructor() {
        super(...arguments);
        this.exeList = [];
    }
    on(eventName, callback) {
        super.on(eventName, callback, this);
        this.exeList = this.exeList.reduce((prev, item) => {
            if (item.eventName === eventName) {
                super.trigger(item.eventName, item.data);
            }
            else {
                prev.push(item);
            }
            return prev;
        }, []);
        return this;
    }
    emit(events, data) {
        // eslint-disable-next-line
        routeChannel.trigger(events, data);
    }
}
const pageChannel = new PageEvts();
class RouteEvts extends Events {
    emit(events, data) {
        pageChannel.off(events);
        pageChannel.exeList.push({
            eventName: events,
            data
        });
    }
    addEvents(events) {
        if (!events || typeof events !== 'object')
            return;
        Object.keys(events).forEach(key => {
            this.off(key);
            this.on(key, events[key], this);
        });
    }
}
const routeChannel = new RouteEvts();

function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isNull(o) {
    return o === null;
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    if (Number.isFinite)
        return Number.isFinite(o);
    return typeof o === 'number';
}
const isArray = Array.isArray;

var HOOK_TYPE;
(function (HOOK_TYPE) {
    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
const defaultMiniLifecycle = {
    app: [
        'onLaunch',
        'onShow',
        'onHide'
    ],
    page: [
        'onLoad',
        'onUnload',
        'onReady',
        'onShow',
        'onHide',
        [
            'onPullDownRefresh',
            'onReachBottom',
            'onPageScroll',
            'onResize',
            'defer:onTabItemTap', // defer: 需要等页面组件挂载后再调用
            'onTitleClick',
            'onOptionMenuClick',
            'onPopMenuClick',
            'onPullIntercept',
            'onAddToFavorites'
        ],
        [
            'onShareAppMessage',
            'onShareTimeline'
        ]
    ],
    component: [
        'attached',
        'detached'
    ]
};
function TaroHook(type, initial) {
    return {
        type,
        initial: initial || null
    };
}
class TaroHooks extends Events {
    constructor(hooks, opts) {
        super(opts);
        this.hooks = hooks;
        for (const hookName in hooks) {
            const { initial } = hooks[hookName];
            if (isFunction(initial)) {
                this.on(hookName, initial);
            }
        }
    }
    tapOneOrMany(hookName, callback) {
        const list = isFunction(callback) ? [callback] : callback;
        list.forEach(cb => this.on(hookName, cb));
    }
    tap(hookName, callback) {
        const hooks = this.hooks;
        const { type, initial } = hooks[hookName];
        if (type === HOOK_TYPE.SINGLE) {
            this.off(hookName);
            this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
        }
        else {
            initial && this.off(hookName, initial);
            this.tapOneOrMany(hookName, callback);
        }
    }
    call(hookName, ...rest) {
        var _a;
        const hook = this.hooks[hookName];
        if (!hook)
            return;
        const { type } = hook;
        const calls = this.callbacks;
        if (!calls)
            return;
        const list = calls[hookName];
        if (list) {
            const tail = list.tail;
            let node = list.next;
            let args = rest;
            let res;
            while (node !== tail) {
                res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
                if (type === HOOK_TYPE.WATERFALL) {
                    const params = [res];
                    args = params;
                }
                node = node.next;
            }
            return res;
        }
    }
    isExist(hookName) {
        var _a;
        return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
    }
}
const hooks = new TaroHooks({
    getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, defaultConfig => defaultConfig),
    getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
        return this.call('getMiniLifecycle', defaultMiniLifecycle);
    }),
    getLifecycle: TaroHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
    modifyRecursiveComponentConfig: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
    getPathIndex: TaroHook(HOOK_TYPE.SINGLE, indexOfNode => `[${indexOfNode}]`),
    getEventCenter: TaroHook(HOOK_TYPE.SINGLE, Events => new Events()),
    isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, eventName => {
        /**
         * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
         * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
         */
        const BUBBLE_EVENTS = new Set([
            'touchstart',
            'touchmove',
            'touchcancel',
            'touchend',
            'touchforcechange',
            'tap',
            'longpress',
            'longtap',
            'transitionend',
            'animationstart',
            'animationiteration',
            'animationend'
        ]);
        return BUBBLE_EVENTS.has(eventName);
    }),
    getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, () => ['view', 'text', 'image']),
    onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
    batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
    mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
    modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
    createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
    getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
    modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
    transferHydrateData: TaroHook(HOOK_TYPE.SINGLE),
    modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
    modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
    onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
    proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function (proxyObj) {
        return proxyObj;
    }),
    modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
    modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
        try {
            // 有些小程序的事件对象的某些属性只读
            this.call('modifyMpEvent', e);
        }
        catch (error) {
            console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
        }
    }),
    injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
    modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
    dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, (e, node) => {
        node.dispatchEvent(e);
    }),
    dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
    modifyTaroEventReturn: TaroHook(HOOK_TYPE.SINGLE, () => undefined),
    modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
    initNativeApi: TaroHook(HOOK_TYPE.MULTI),
    patchElement: TaroHook(HOOK_TYPE.MULTI),
    modifyAddEventListener: TaroHook(HOOK_TYPE.SINGLE),
    modifyRemoveEventListener: TaroHook(HOOK_TYPE.SINGLE),
    getMemoryLevel: TaroHook(HOOK_TYPE.SINGLE),
});

const EMPTY_OBJ = {};
const noop = (..._) => { };
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (!condition) {
        {
            throw new Error(msg);
        }
    }
}
let _uniqueId = 1;
const _loadTime = (new Date()).getTime().toString();
function getUniqueKey() {
    return _loadTime + (_uniqueId++);
}
function mergeInternalComponents(components) {
    Object.keys(components).forEach(name => {
        if (name in internalComponents) {
            Object.assign(internalComponents[name], components[name]);
        }
        else {
            internalComponents[name] = components[name];
        }
    });
    return internalComponents;
}
function getComponentsAlias$1(origin) {
    const mapping = {};
    const viewAttrs = origin.View;
    const extraList = {
        '#text': {},
        StaticView: viewAttrs,
        StaticImage: origin.Image,
        StaticText: origin.Text,
        PureView: viewAttrs,
        CatchView: viewAttrs,
        ClickView: viewAttrs,
    };
    origin = Object.assign(Object.assign({}, origin), extraList);
    Object.keys(origin)
        .sort((a, b) => {
        const reg = /^(Static|Pure|Catch|Click)*(View|Image|Text)$/;
        const isACommonly = reg.test(a);
        const isBCommonly = reg.test(b);
        if (isACommonly && isBCommonly) {
            return a > b ? 1 : -1;
        }
        else if (isACommonly) {
            return -1;
        }
        else if (isBCommonly) {
            return 1;
        }
        else {
            return a >= b ? 1 : -1;
        }
    })
        .forEach((key, num) => {
        const obj = {
            _num: String(num)
        };
        Object.keys(origin[key])
            .filter(attr => !(/^bind/.test(attr)) && !['focus', 'blur'].includes(attr))
            .sort()
            .forEach((attr, index) => {
            obj[toCamelCase(attr)] = 'p' + index;
        });
        mapping[toDashed(key)] = obj;
    });
    return mapping;
}
function mergeReconciler(hostConfig, hooksForTest) {
    const obj = hooksForTest || hooks;
    const keys = Object.keys(hostConfig);
    keys.forEach(key => {
        obj.tap(key, hostConfig[key]);
    });
}
function nonsupport(api) {
    return function () {
        console.warn(`小程序暂不支持 ${api}`);
    };
}
function setUniqueKeyToRoute(key, obj) {
    const routerParamsPrivateKey = '__key_';
    const useDataCacheApis = [
        'navigateTo',
        'redirectTo',
        'reLaunch',
        'switchTab'
    ];
    if (useDataCacheApis.indexOf(key) > -1) {
        const url = obj.url = obj.url || '';
        const hasMark = url.indexOf('?') > -1;
        const cacheKey = getUniqueKey();
        obj.url += (hasMark ? '&' : '?') + `${routerParamsPrivateKey}=${cacheKey}`;
    }
}

const needPromiseApis$1 = new Set([
    'addPhoneContact',
    'authorize',
    'canvasGetImageData',
    'canvasPutImageData',
    'canvasToTempFilePath',
    'checkSession',
    'chooseAddress',
    'chooseImage',
    'chooseInvoiceTitle',
    'chooseLocation',
    'chooseVideo',
    'clearStorage',
    'closeBLEConnection',
    'closeBluetoothAdapter',
    'closeSocket',
    'compressImage',
    'connectSocket',
    'createBLEConnection',
    'downloadFile',
    'exitMiniProgram',
    'getAvailableAudioSources',
    'getBLEDeviceCharacteristics',
    'getBLEDeviceServices',
    'getBatteryInfo',
    'getBeacons',
    'getBluetoothAdapterState',
    'getBluetoothDevices',
    'getClipboardData',
    'getConnectedBluetoothDevices',
    'getConnectedWifi',
    'getExtConfig',
    'getFileInfo',
    'getImageInfo',
    'getLocation',
    'getNetworkType',
    'getSavedFileInfo',
    'getSavedFileList',
    'getScreenBrightness',
    'getSetting',
    'getStorage',
    'getStorageInfo',
    'getSystemInfo',
    'getUserInfo',
    'getWifiList',
    'hideHomeButton',
    'hideShareMenu',
    'hideTabBar',
    'hideTabBarRedDot',
    'loadFontFace',
    'login',
    'makePhoneCall',
    'navigateBack',
    'navigateBackMiniProgram',
    'navigateTo',
    'navigateToBookshelf',
    'navigateToMiniProgram',
    'notifyBLECharacteristicValueChange',
    'hideKeyboard',
    'hideLoading',
    'hideNavigationBarLoading',
    'hideToast',
    'openBluetoothAdapter',
    'openDocument',
    'openLocation',
    'openSetting',
    'pageScrollTo',
    'previewImage',
    'queryBookshelf',
    'reLaunch',
    'readBLECharacteristicValue',
    'redirectTo',
    'removeSavedFile',
    'removeStorage',
    'removeTabBarBadge',
    'requestSubscribeMessage',
    'saveFile',
    'saveImageToPhotosAlbum',
    'saveVideoToPhotosAlbum',
    'scanCode',
    'sendSocketMessage',
    'setBackgroundColor',
    'setBackgroundTextStyle',
    'setClipboardData',
    'setEnableDebug',
    'setInnerAudioOption',
    'setKeepScreenOn',
    'setNavigationBarColor',
    'setNavigationBarTitle',
    'setScreenBrightness',
    'setStorage',
    'setTabBarBadge',
    'setTabBarItem',
    'setTabBarStyle',
    'showActionSheet',
    'showFavoriteGuide',
    'showLoading',
    'showModal',
    'showShareMenu',
    'showTabBar',
    'showTabBarRedDot',
    'showToast',
    'startBeaconDiscovery',
    'startBluetoothDevicesDiscovery',
    'startDeviceMotionListening',
    'startPullDownRefresh',
    'stopBeaconDiscovery',
    'stopBluetoothDevicesDiscovery',
    'stopCompass',
    'startCompass',
    'startAccelerometer',
    'stopAccelerometer',
    'showNavigationBarLoading',
    'stopDeviceMotionListening',
    'stopPullDownRefresh',
    'switchTab',
    'uploadFile',
    'vibrateLong',
    'vibrateShort',
    'writeBLECharacteristicValue'
]);
function getCanIUseWebp(taro) {
    return function () {
        var _a;
        const res = (_a = taro.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(taro);
        if (!res) {
            return false;
        }
        const { platform } = res;
        const platformLower = platform.toLowerCase();
        if (platformLower === 'android' || platformLower === 'devtools') {
            return true;
        }
        return false;
    };
}
function getNormalRequest(global) {
    return function request(options) {
        options = options
            ? (isString(options)
                ? { url: options }
                : options)
            : {};
        const originSuccess = options.success;
        const originFail = options.fail;
        const originComplete = options.complete;
        let requestTask;
        const p = new Promise((resolve, reject) => {
            options.success = res => {
                originSuccess && originSuccess(res);
                resolve(res);
            };
            options.fail = res => {
                originFail && originFail(res);
                reject(res);
            };
            options.complete = res => {
                originComplete && originComplete(res);
            };
            requestTask = global.request(options);
        });
        equipTaskMethodsIntoPromise(requestTask, p);
        p.abort = (cb) => {
            cb && cb();
            if (requestTask) {
                requestTask.abort();
            }
            return p;
        };
        return p;
    };
}
function processApis(taro, global, config = {}) {
    const patchNeedPromiseApis = config.needPromiseApis || [];
    const _needPromiseApis = new Set([...patchNeedPromiseApis, ...needPromiseApis$1]);
    const preserved = [
        'getEnv',
        'interceptors',
        'Current',
        'getCurrentInstance',
        'options',
        'nextTick',
        'eventCenter',
        'Events',
        'preload',
        'webpackJsonp'
    ];
    const apis = new Set(!config.isOnlyPromisify
        ? Object.keys(global).filter(api => preserved.indexOf(api) === -1)
        : patchNeedPromiseApis);
    if (config.modifyApis) {
        config.modifyApis(apis);
    }
    apis.forEach(key => {
        if (_needPromiseApis.has(key)) {
            const originKey = key;
            taro[originKey] = (options = {}, ...args) => {
                let key = originKey;
                // 第一个参数 options 为字符串，单独处理
                if (typeof options === 'string') {
                    if (args.length) {
                        return global[key](options, ...args);
                    }
                    return global[key](options);
                }
                // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
                if (config.transformMeta) {
                    const transformResult = config.transformMeta(key, options);
                    key = transformResult.key;
                    options = transformResult.options;
                    // 新 key 可能不存在
                    if (!global.hasOwnProperty(key)) {
                        return nonsupport(key)();
                    }
                }
                let task = null;
                const obj = Object.assign({}, options);
                // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
                setUniqueKeyToRoute(key, options);
                // Promise 化
                const p = new Promise((resolve, reject) => {
                    obj.success = res => {
                        var _a, _b;
                        (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
                        (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                        if (key === 'connectSocket') {
                            resolve(Promise.resolve().then(() => task ? Object.assign(task, res) : res));
                        }
                        else {
                            resolve(res);
                        }
                    };
                    obj.fail = res => {
                        var _a;
                        (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                        reject(res);
                    };
                    obj.complete = res => {
                        var _a;
                        (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[key](obj, ...args);
                    }
                    else {
                        task = global[key](obj);
                    }
                });
                // 给 promise 对象挂载属性
                if (['uploadFile', 'downloadFile'].includes(key)) {
                    equipTaskMethodsIntoPromise(task, p);
                    p.progress = cb => {
                        task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
                        return p;
                    };
                    p.abort = cb => {
                        cb === null || cb === void 0 ? void 0 : cb();
                        task === null || task === void 0 ? void 0 : task.abort();
                        return p;
                    };
                }
                return p;
            };
        }
        else {
            let platformKey = key;
            // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
            if (config.transformMeta) {
                platformKey = config.transformMeta(key, {}).key;
            }
            // API 不存在
            if (!global.hasOwnProperty(platformKey)) {
                taro[key] = nonsupport(key);
                return;
            }
            if (isFunction(global[key])) {
                taro[key] = (...args) => {
                    if (config.handleSyncApis) {
                        return config.handleSyncApis(key, global, args);
                    }
                    else {
                        return global[platformKey].apply(global, args);
                    }
                };
            }
            else {
                taro[key] = global[platformKey];
            }
        }
    });
    !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */
function equipCommonApis(taro, global, apis = {}) {
    taro.canIUseWebp = getCanIUseWebp(taro);
    taro.getCurrentPages = getCurrentPages || nonsupport('getCurrentPages');
    taro.getApp = getApp || nonsupport('getApp');
    taro.env = global.env || {};
    try {
        taro.requirePlugin = requirePlugin || nonsupport('requirePlugin');
    }
    catch (error) {
        taro.requirePlugin = nonsupport('requirePlugin');
    }
    // request & interceptors
    const request = apis.request || getNormalRequest(global);
    function taroInterceptor(chain) {
        return request(chain.requestParams);
    }
    const link = new taro.Link(taroInterceptor);
    taro.request = link.request.bind(link);
    taro.addInterceptor = link.addInterceptor.bind(link);
    taro.cleanInterceptors = link.cleanInterceptors.bind(link);
    taro.miniGlobal = taro.options.miniGlobal = global;
    taro.getAppInfo = function () {
        return {
            platform: "mini" ,
            taroVersion: "4.0.9" ,
            designWidth: taro.config.designWidth
        };
    };
    taro.createSelectorQuery = delayRef(taro, global, 'createSelectorQuery', 'exec');
    taro.createIntersectionObserver = delayRef(taro, global, 'createIntersectionObserver', 'observe');
}
/**
 * 将Task对象中的方法挂载到promise对象中，适配小程序api原生返回结果
 * @param task Task对象 {RequestTask | DownloadTask | UploadTask}
 * @param promise Promise
 */
function equipTaskMethodsIntoPromise(task, promise) {
    if (!task || !promise)
        return;
    const taskMethods = ['abort', 'onHeadersReceived', 'offHeadersReceived', 'onProgressUpdate', 'offProgressUpdate', 'onChunkReceived', 'offChunkReceived'];
    task && taskMethods.forEach(method => {
        if (method in task) {
            promise[method] = task[method].bind(task);
        }
    });
}
function delayRef(taro, global, name, method) {
    return function (...args) {
        const res = global[name](...args);
        const raw = res[method].bind(res);
        res[method] = function (...methodArgs) {
            taro.nextTick(() => raw(...methodArgs));
        };
        return res;
    };
}

// 字符串简写
var Shortcuts;
(function (Shortcuts) {
    Shortcuts["Container"] = "container";
    Shortcuts["Childnodes"] = "cn";
    Shortcuts["Text"] = "v";
    Shortcuts["NodeType"] = "nt";
    Shortcuts["NodeName"] = "nn";
    // Attrtibutes
    Shortcuts["Sid"] = "sid";
    Shortcuts["Style"] = "st";
    Shortcuts["Class"] = "cl";
    Shortcuts["Src"] = "src";
})(Shortcuts || (Shortcuts = {}));

const needPromiseApis = new Set([
    'addFileToFavorites',
    'addVideoToFavorites',
    'authPrivateMessage',
    'checkIsAddedToMyMiniProgram',
    'chooseContact',
    'cropImage',
    'disableAlertBeforeUnload',
    'editImage',
    'enableAlertBeforeUnload',
    'getBackgroundFetchData',
    'getChannelsLiveInfo',
    'getChannelsLiveNoticeInfo',
    'getFuzzyLocation',
    'getGroupEnterInfo',
    'getLocalIPAddress',
    'getShareInfo',
    'getUserProfile',
    'getWeRunData',
    'join1v1Chat',
    'openChannelsActivity',
    'openChannelsEvent',
    'openChannelsLive',
    'openChannelsUserProfile',
    'openCustomerServiceChat',
    'openVideoEditor',
    'saveFileToDisk',
    'scanItem',
    'setEnable1v1Chat',
    'setWindowSize',
    'sendBizRedPacket',
    'startFacialRecognitionVerify',
]);

function initNativeApi(taro) {
    processApis(taro, wx, {
        needPromiseApis,
        modifyApis(apis) {
            // fix https://github.com/NervJS/taro/issues/9899
            apis.delete('lanDebug');
        },
        transformMeta(api, options) {
            var _a;
            if (api === 'showShareMenu') {
                options.menus = (_a = options.showShareItems) === null || _a === void 0 ? void 0 : _a.map(item => item === 'wechatFriends' ? 'shareAppMessage' : item === 'wechatMoment' ? 'shareTimeline' : item);
            }
            return {
                key: api,
                options
            };
        }
    });
    taro.cloud = wx.cloud;
    taro.getTabBar = function (pageCtx) {
        var _a;
        if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === 'function') {
            return (_a = pageCtx.getTabBar()) === null || _a === void 0 ? void 0 : _a.$taroInstances;
        }
    };
    taro.getRenderer = function () {
        var _a, _b, _c;
        return (_c = (_b = (_a = taro.getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.renderer) !== null && _c !== void 0 ? _c : 'webview';
    };
}

const _true = 'true';
const _false = 'false';
const _empty = '';
const _zero = '0';
const _object = '{}';
const components = {
    // ======== 调整属性 ========
    Progress: {
        'border-radius': _zero,
        'font-size': '16',
        duration: '30',
        bindActiveEnd: _empty
    },
    RichText: {
        space: _empty,
        'user-select': _false,
        mode: "'default'"
    },
    Text: {
        'user-select': _false,
        overflow: 'visible',
        'max-lines': ''
    },
    Map: {
        polygons: '[]',
        subkey: _empty,
        rotate: _zero,
        skew: _zero,
        'max-scale': '20',
        'min-scale': '3',
        'enable-3D': _false,
        'show-compass': _false,
        'show-scale': _false,
        'enable-overlooking': _false,
        'enable-auto-max-overlooking': _false,
        'enable-zoom': _true,
        'enable-scroll': _true,
        'enable-rotate': _false,
        'enable-satellite': _false,
        'enable-traffic': _false,
        'enable-poi': _true,
        'enable-building': _true,
        setting: _object,
        bindLabelTap: _empty,
        bindRegionChange: _empty,
        bindPoiTap: _empty,
        bindPolylineTap: _empty,
        bindAbilitySuccess: _empty,
        bindAbilityFailed: _empty,
        bindAuthSuccess: _empty,
        bindInterpolatePoint: _empty,
        bindError: _empty,
        bindAnchorPointTap: _empty
    },
    Button: {
        lang: 'en',
        'session-from': _empty,
        'send-message-title': _empty,
        'send-message-path': _empty,
        'send-message-img': _empty,
        'app-parameter': _empty,
        'show-message-card': _false,
        'business-id': _empty,
        bindGetUserInfo: _empty,
        bindContact: _empty,
        bindGetPhoneNumber: _empty,
        bindGetRealTimePhoneNumber: _empty,
        bindChooseAvatar: _empty,
        bindError: _empty,
        bindOpenSetting: _empty,
        bindLaunchApp: _empty,
        bindAgreePrivacyAuthorization: _empty
    },
    Form: {
        'report-submit-timeout': _zero
    },
    Input: {
        'always-embed': _false,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'safe-password-cert-path': '',
        'safe-password-length': '',
        'safe-password-time-stamp': '',
        'safe-password-nonce': '',
        'safe-password-salt': '',
        'safe-password-custom-hash': '',
        'auto-fill': _empty,
        'cursor-color': '',
        bindKeyboardHeightChange: _empty,
        bindNicknameReview: _empty,
        bindSelectionChange: _empty,
        bindKeyboardCompositionStart: _empty,
        bindKeyboardCompositionUpdate: _empty,
        bindKeyboardCompositionEnd: _empty,
    },
    Picker: {
        'header-text': _empty,
        level: 'region'
    },
    PickerView: {
        'immediate-change': _false,
        bindPickStart: _empty,
        bindPickEnd: _empty
    },
    Slider: {
        color: "'#e9e9e9'",
        'selected-color': "'#1aad19'"
    },
    Textarea: {
        'show-confirm-bar': _true,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'disable-default-padding': _false,
        'confirm-type': "'return'",
        'confirm-hold': _false,
        'adjust-keyboard-to': "'cursor'",
        bindKeyboardHeightChange: _empty,
        bindSelectionChange: _empty,
        bindKeyboardCompositionStart: _empty,
        bindKeyboardCompositionUpdate: _empty,
        bindKeyboardCompositionEnd: _empty,
    },
    ScrollView: {
        'enable-flex': _false,
        'scroll-anchoring': _false,
        enhanced: _false,
        'using-sticky': _false,
        'paging-enabled': _false,
        'enable-passive': _false,
        'refresher-enabled': _false,
        'refresher-threshold': '45',
        'refresher-default-style': "'black'",
        'refresher-background': "'#FFF'",
        'refresher-triggered': _false,
        bounces: _true,
        'show-scrollbar': _true,
        'fast-deceleration': _false,
        type: "'list'",
        'associative-container': "''",
        reverse: _false,
        clip: _true,
        'enable-back-to-top': _false,
        'cache-extent': _empty,
        'min-drag-distance': '18',
        'scroll-into-view-within-extent': _false,
        'scroll-into-view-alignment': "'start'",
        padding: '[0,0,0,0]',
        'refresher-two-level-enabled': _false,
        'refresher-two-level-triggered': _false,
        'refresher-two-level-threshold': '150',
        'refresher-two-level-close-threshold': '80',
        'refresher-two-level-scroll-enabled': _false,
        'refresher-ballistic-refresh-enabled': _false,
        'refresher-two-level-pinned': _false,
        bindDragStart: _empty,
        bindDragging: _empty,
        bindDragEnd: _empty,
        bindRefresherPulling: _empty,
        bindRefresherRefresh: _empty,
        bindRefresherRestore: _empty,
        bindRefresherAbort: _empty,
        bindScrollStart: _empty,
        bindScrollEnd: _empty,
        bindRefresherWillRefresh: _empty,
        bindRefresherStatusChange: _empty
    },
    StickySection: {
        'push-pinned-header': _true,
        padding: '[0, 0, 0, 0]'
    },
    GridView: {
        type: "'aligned'",
        'cross-axis-count': '2',
        'max-cross-axis-extent': _zero,
        'main-axis-gap': _zero,
        'cross-axis-gap': _zero,
        padding: '[0, 0, 0, 0]'
    },
    GridBuilder: {
        type: "'aligned'",
        list: '[]',
        'cross-axis-count': '2',
        'max-cross-axis-extent': _zero,
        'main-axis-gap': _zero,
        'cross-axis-gap': _zero,
        padding: '[0, 0, 0, 0]',
        bindItemBuild: _empty,
        bindItemDispose: _empty
    },
    ListView: {
        padding: '[0, 0, 0, 0]'
    },
    ListBuilder: {
        list: '[]',
        type: 'static',
        padding: '[0, 0, 0, 0]',
        'child-count': _empty,
        'child-height': _empty,
        bindItemBuild: _empty,
        bindItemDispose: _empty
    },
    StickyHeader: {
        'offset-top': '0',
        padding: '[0, 0, 0, 0]'
    },
    Swiper: {
        'snap-to-edge': _false,
        'easing-function': "'default'",
        'layout-type': "'normal'",
        'transformer-type': "'scaleAndFade'",
        'indicator-type': "'normal'",
        'indicator-margin': '10',
        'indicator-spacing': '4',
        'indicator-radius': '4',
        'indicator-width': '8',
        'indicator-height': '8',
        'indicator-alignment': "'auto'",
        'indicator-offset': '[0, 0]',
        'scroll-with-animation': _true,
        'cache-extent': '0',
    },
    SwiperItem: {
        'skip-hidden-item-layout': _false
    },
    Navigator: {
        target: "'self'",
        'app-id': _empty,
        path: _empty,
        'extra-data': _empty,
        version: "'version'"
    },
    Camera: {
        mode: "'normal'",
        resolution: "'medium'",
        'frame-size': "'medium'",
        bindInitDone: _empty,
        bindScanCode: _empty
    },
    Image: {
        webp: _false,
        'show-menu-by-longpress': _false,
        'fade-in': _false
    },
    LivePlayer: {
        mode: "'live'",
        'sound-mode': "'speaker'",
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'picture-in-picture-mode': '[]',
        'enable-auto-rotation': _false,
        'referrer-policy': "'no-referrer'",
        'enable-casting': _false,
        bindstatechange: _empty,
        bindfullscreenchange: _empty,
        bindnetstatus: _empty,
        bindAudioVolumeNotify: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty,
        bindCastingUserSelect: _empty,
        bindCastingStateChange: _empty,
        bindCastingInterrupt: _empty
    },
    Video: {
        title: _empty,
        'play-btn-position': "'bottom'",
        'enable-play-gesture': _false,
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'vslide-gesture': _false,
        'vslide-gesture-in-fullscreen': _true,
        'show-bottom-progress': _true,
        'ad-unit-id': _empty,
        'poster-for-crawler': _empty,
        'show-casting-button': _false,
        'picture-in-picture-mode': '[]',
        // picture-in-picture-show-progress 属性先注释掉的原因如下：
        // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
        // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
        // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
        // 'picture-in-picture-show-progress': 'false',
        'enable-auto-rotation': _false,
        'show-screen-lock-button': _false,
        'show-snapshot-button': _false,
        'show-background-playback-button': _false,
        'background-poster': _empty,
        'referrer-policy': "'no-referrer'",
        'is-drm': _false,
        'is-live': _false,
        'provision-url': _empty,
        'certificate-url': _empty,
        'license-url': _empty,
        'preferred-peak-bit-rate': _empty,
        bindProgress: _empty,
        bindLoadedMetadata: _empty,
        bindControlsToggle: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty,
        bindSeekComplete: _empty,
        bindCastingUserSelect: _empty,
        bindCastingStateChange: _empty,
        bindCastingInterrupt: _empty,
        bindAdLoad: _empty,
        bindAdError: _empty,
        bindAdClose: _empty,
        bindAdPlay: _empty
    },
    Canvas: {
        type: _empty
    },
    Ad: {
        'ad-type': "'banner'",
        'ad-theme': "'white'"
    },
    CoverView: {
        'marker-id': _empty,
        slot: _empty
    },
    // ======== 额外组件 ========
    Editor: {
        'read-only': _false,
        placeholder: _empty,
        'show-img-size': _false,
        'show-img-toolbar': _false,
        'show-img-resize': _false,
        focus: _false,
        bindReady: _empty,
        bindFocus: _empty,
        bindBlur: _empty,
        bindInput: _empty,
        bindStatusChange: _empty,
        name: _empty
    },
    MatchMedia: {
        'min-width': _empty,
        'max-width': _empty,
        width: _empty,
        'min-height': _empty,
        'max-height': _empty,
        height: _empty,
        orientation: _empty
    },
    FunctionalPageNavigator: {
        version: "'release'",
        name: _empty,
        args: _empty,
        bindSuccess: _empty,
        bindFail: _empty,
        bindCancel: _empty
    },
    LivePusher: {
        url: _empty,
        mode: "'RTC'",
        autopush: _false,
        muted: _false,
        'enable-camera': _true,
        'auto-focus': _true,
        orientation: "'vertical'",
        beauty: _zero,
        whiteness: _zero,
        aspect: "'9:16'",
        'min-bitrate': '200',
        'max-bitrate': '1000',
        'audio-quality': "'high'",
        'waiting-image': _empty,
        'waiting-image-hash': _empty,
        zoom: _false,
        'device-position': "'front'",
        'background-mute': _false,
        mirror: _false,
        'remote-mirror': _false,
        'local-mirror': _false,
        'audio-reverb-type': _zero,
        'enable-mic': _true,
        'enable-agc': _false,
        'enable-ans': _false,
        'audio-volume-type': "'voicecall'",
        'video-width': '360',
        'video-height': '640',
        'beauty-style': "'smooth'",
        filter: "'standard'",
        'picture-in-picture-mode': '[]',
        animation: _empty,
        bindStateChange: _empty,
        bindNetStatus: _empty,
        bindBgmStart: _empty,
        bindBgmProgress: _empty,
        bindBgmComplete: _empty,
        bindAudioVolumeNotify: _empty
    },
    OfficialAccount: {
        bindLoad: _empty,
        bindError: _empty
    },
    OpenData: {
        type: _empty,
        'open-gid': _empty,
        lang: "'en'",
        'default-text': _empty,
        'default-avatar': _empty,
        bindError: _empty
    },
    NavigationBar: {
        title: _empty,
        loading: _false,
        'front-color': "'#000000'",
        'background-color': _empty,
        'color-animation-duration': _zero,
        'color-animation-timing-func': "'linear'"
    },
    PageMeta: {
        'background-text-style': _empty,
        'background-color': _empty,
        'background-color-top': _empty,
        'background-color-bottom': _empty,
        'root-background-color': _empty,
        'scroll-top': "''",
        'scroll-duration': '300',
        'page-style': "''",
        'root-font-size': "''",
        'page-orientation': "''",
        bindResize: _empty,
        bindScroll: _empty,
        bindScrollDone: _empty
    },
    VoipRoom: {
        openid: _empty,
        mode: "'camera'",
        'device-position': "'front'",
        bindError: _empty
    },
    AdCustom: {
        'unit-id': _empty,
        'ad-intervals': _empty,
        bindLoad: _empty,
        bindError: _empty
    },
    PageContainer: {
        show: _false,
        duration: '300',
        'z-index': '100',
        overlay: _true,
        position: "'bottom'",
        round: _false,
        'close-on-slide-down': _false,
        'overlay-style': _empty,
        'custom-style': _empty,
        bindBeforeEnter: _empty,
        bindEnter: _empty,
        bindAfterEnter: _empty,
        bindBeforeLeave: _empty,
        bindLeave: _empty,
        bindAfterLeave: _empty,
        bindClickOverlay: _empty
    },
    ShareElement: {
        mapkey: _empty,
        transform: _false,
        duration: '300',
        'easing-function': "'ease-out'",
        'transition-on-gesture': _false,
        'shuttle-on-push': "'to'",
        'shuttle-on-pop': "'to'",
        'rect-tween-type': "'materialRectArc'"
    },
    KeyboardAccessory: {},
    RootPortal: {
        enable: _true
    },
    ChannelLive: {
        'feed-id': _empty,
        'finder-user-name': _empty
    },
    ChannelVideo: {
        'feed-id': _empty,
        'finder-user-name': _empty,
        'feed-token': _empty,
        autoplay: _false,
        loop: _false,
        muted: _false,
        'object-fit': "'contain'",
        bindError: _empty
    },
    Snapshot: {
        mode: "'view'",
    },
    Span: {},
    OpenContainer: {
        transitionType: "'fade'",
        transitionDuration: '300',
        closedColor: "'white'",
        closedElevation: _zero,
        closeBorderRadius: _zero,
        middleColor: _empty,
        openColor: "'white'",
        openElevation: _zero,
        openBorderRadius: _zero
    },
    DraggableSheet: {
        initialChildSize: '0.5',
        minChildSize: '0.25',
        maxChildSize: '1.0',
        snap: _false,
        snapSizes: '[]'
    },
    NestedScrollHeader: {},
    NestedScrollBody: {},
    // skyline手势组件
    DoubleTapGestureHandler: {},
    ForcePressGestureHandler: {},
    HorizontalDragGestureHandler: {},
    LongPressGestureHandler: {},
    PanGestureHandler: {},
    ScaleGestureHandler: {},
    TapGestureHandler: {},
    VerticalDragGestureHandler: {},
};

const hostConfig$1 = {
    initNativeApi,
    getMiniLifecycle(config) {
        const methods = config.page[5];
        if (methods.indexOf('onSaveExitState') === -1) {
            methods.push('onSaveExitState');
        }
        return config;
    },
    transferHydrateData(data, element, componentsAlias) {
        var _a;
        if (element.isTransferElement) {
            const pages = getCurrentPages();
            const page = pages[pages.length - 1];
            data["nn" /* Shortcuts.NodeName */] = element.dataName;
            page.setData({
                [toCamelCase(data.nn)]: data
            });
            return {
                sid: element.sid,
                ["v" /* Shortcuts.Text */]: '',
                ["nn" /* Shortcuts.NodeName */]: ((_a = componentsAlias['#text']) === null || _a === void 0 ? void 0 : _a._num) || '8'
            };
        }
    },
};

mergeReconciler(hostConfig$1);
mergeInternalComponents(components);

const PROPERTY_THRESHOLD = 2046;
const TARO_RUNTIME = 'Taro runtime';
const HOOKS_APP_ID$1 = 'taro-app';
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';
const ROOT_STR = 'root';
const HTML = 'html';
const HEAD = 'head';
const BODY = 'body';
const APP = 'app';
const CONTAINER = 'container';
const DOCUMENT_ELEMENT_NAME = '#document';
const DOCUMENT_FRAGMENT = 'document-fragment';
const ID = 'id';
const UID = 'uid';
const CLASS = 'class';
const STYLE = 'style';
const FOCUS = 'focus';
const VIEW = 'view';
const STATIC_VIEW = 'static-view';
const PURE_VIEW = 'pure-view';
const CLICK_VIEW = 'click-view';
const PROPS = 'props';
const DATASET = 'dataset';
const OBJECT = 'object';
const VALUE = 'value';
const INPUT = 'input';
const CHANGE = 'change';
const CUSTOM_WRAPPER = 'custom-wrapper';
const TARGET = 'target';
const CURRENT_TARGET = 'currentTarget';
const TYPE = 'type';
const CONFIRM = 'confirm';
const TIME_STAMP = 'timeStamp';
const KEY_CODE = 'keyCode';
const TOUCHMOVE = 'touchmove';
const DATE = 'Date';
const SET_TIMEOUT = 'setTimeout';
const COMPILE_MODE = 'compileMode';
const CATCHMOVE = 'catchMove';
const CATCH_VIEW = 'catch-view';
const COMMENT = 'comment';
const ON_LOAD = 'onLoad';
const ON_READY = 'onReady';
const ON_SHOW = 'onShow';
const ON_HIDE = 'onHide';
const OPTIONS = 'options';
const EXTERNAL_CLASSES = 'externalClasses';
const EVENT_CALLBACK_RESULT = 'e_result';
const BEHAVIORS = 'behaviors';
const A$1 = 'a';
/**
 * 页面上下文切换时的行为
 */
var CONTEXT_ACTIONS;
(function (CONTEXT_ACTIONS) {
    CONTEXT_ACTIONS["INIT"] = "0";
    CONTEXT_ACTIONS["RESTORE"] = "1";
    CONTEXT_ACTIONS["RECOVER"] = "2";
    CONTEXT_ACTIONS["DESTORY"] = "3";
})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));

const observers = [];
/** Match two TaroNodes by sid. */
const sidMatches = (observerTarget, target) => {
    return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
const isConcerned = (record, options) => {
    const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options;
    switch (record.type) {
        case "characterData" /* MutationRecordType.CHARACTER_DATA */:
            if (characterData) {
                if (!characterDataOldValue)
                    record.oldValue = null;
                return true;
            }
            return false;
        case "attributes" /* MutationRecordType.ATTRIBUTES */:
            if (attributes) {
                if (!attributeOldValue)
                    record.oldValue = null;
                return true;
            }
            return false;
        case "childList" /* MutationRecordType.CHILD_LIST */:
            if (childList) {
                return true;
            }
            return false;
    }
};
let pendingMuatations = false;
function logMutation(observer, record) {
    observer.records.push(record);
    if (!pendingMuatations) {
        pendingMuatations = true;
        Promise
            .resolve()
            .then(() => {
            pendingMuatations = false;
            observers.forEach(observer => {
                return observer.callback(observer.takeRecords());
            });
        });
    }
}
function recordMutation(record) {
    observers.forEach(observer => {
        const { options } = observer;
        for (let t = record.target; t; t = t.parentNode) {
            if (sidMatches(observer.target, t) && isConcerned(record, options)) {
                logMutation(observer, record);
                break;
            }
            if (!options.subtree)
                break;
        }
    });
}

class MutationObserver {
    constructor(callback) {
        {
            this.core = {
                observe: noop,
                disconnect: noop,
                takeRecords: noop
            };
        }
    }
    observe(...args) {
        this.core.observe(...args);
    }
    disconnect() {
        this.core.disconnect();
    }
    takeRecords() {
        return this.core.takeRecords();
    }
    static record(record) {
        recordMutation(record);
    }
}

const eventCenter = hooks.call('getEventCenter', Events);

const env = {
    window: EMPTY_OBJ,
    document: EMPTY_OBJ
};

// Note: 小程序端 vite 打包成 commonjs，const getComputedStyle = xxx 会报错，所以把 GetComputedStyle 改为 taroGetComputedStyleProvider
const taroGetComputedStyleProvider = function (element) {
    return element.style;
};

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
 */
class RuntimeCache {
    constructor(name) {
        this.cache = new Map();
        this.name = name;
    }
    has(identifier) {
        return this.cache.has(identifier);
    }
    set(identifier, ctx) {
        if (identifier && ctx) {
            this.cache.set(identifier, ctx);
        }
    }
    get(identifier) {
        if (this.has(identifier))
            return this.cache.get(identifier);
    }
    delete(identifier) {
        this.cache.delete(identifier);
    }
}

var _TaroHistory_instances, _TaroHistory_location, _TaroHistory_stack, _TaroHistory_cur, _TaroHistory_window, _TaroHistory_reset;
const cache$1 = new RuntimeCache('history');
class TaroHistory extends Events {
    constructor(location, options) {
        super();
        _TaroHistory_instances.add(this);
        /* private property */
        _TaroHistory_location.set(this, void 0);
        _TaroHistory_stack.set(this, []);
        _TaroHistory_cur.set(this, 0);
        _TaroHistory_window.set(this, void 0);
        __classPrivateFieldSet(this, _TaroHistory_window, options.window, "f");
        __classPrivateFieldSet(this, _TaroHistory_location, location, "f");
        __classPrivateFieldGet(this, _TaroHistory_location, "f").on('__record_history__', (href) => {
            var _a;
            __classPrivateFieldSet(this, _TaroHistory_cur, (_a = __classPrivateFieldGet(this, _TaroHistory_cur, "f"), _a++, _a), "f");
            __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f")), "f");
            __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
                state: null,
                title: '',
                url: href
            });
        }, null);
        __classPrivateFieldGet(this, _TaroHistory_location, "f").on('__reset_history__', (href) => {
            __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this, href);
        }, null);
        // 切换上下文行为
        this.on(CONTEXT_ACTIONS.INIT, () => {
            __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
            cache$1.set(pageId, {
                location: __classPrivateFieldGet(this, _TaroHistory_location, "f"),
                stack: __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(),
                cur: __classPrivateFieldGet(this, _TaroHistory_cur, "f")
            });
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
            if (cache$1.has(pageId)) {
                const ctx = cache$1.get(pageId);
                __classPrivateFieldSet(this, _TaroHistory_location, ctx.location, "f");
                __classPrivateFieldSet(this, _TaroHistory_stack, ctx.stack, "f");
                __classPrivateFieldSet(this, _TaroHistory_cur, ctx.cur, "f");
            }
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
            cache$1.delete(pageId);
        }, null);
        __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
    }
    /* public property */
    get length() {
        return __classPrivateFieldGet(this, _TaroHistory_stack, "f").length;
    }
    get state() {
        return __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].state;
    }
    /* public method */
    go(delta) {
        if (!isNumber(delta) || isNaN(delta))
            return;
        let targetIdx = __classPrivateFieldGet(this, _TaroHistory_cur, "f") + delta;
        targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
        __classPrivateFieldSet(this, _TaroHistory_cur, targetIdx, "f");
        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].url);
        __classPrivateFieldGet(this, _TaroHistory_window, "f").trigger('popstate', __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")]);
    }
    back() {
        this.go(-1);
    }
    forward() {
        this.go(1);
    }
    pushState(state, title, url) {
        if (!url || !isString(url))
            return;
        __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f") + 1), "f");
        __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
            state,
            title,
            url
        });
        __classPrivateFieldSet(this, _TaroHistory_cur, this.length - 1, "f");
        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
    }
    replaceState(state, title, url) {
        if (!url || !isString(url))
            return;
        __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")] = {
            state,
            title,
            url
        };
        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
    }
    // For debug
    get cache() {
        return cache$1;
    }
}
_TaroHistory_location = new WeakMap(), _TaroHistory_stack = new WeakMap(), _TaroHistory_cur = new WeakMap(), _TaroHistory_window = new WeakMap(), _TaroHistory_instances = new WeakSet(), _TaroHistory_reset = function _TaroHistory_reset(href = '') {
    __classPrivateFieldSet(this, _TaroHistory_stack, [
        {
            state: null,
            title: '',
            url: href || __classPrivateFieldGet(this, _TaroHistory_location, "f").href
        }
    ], "f");
    __classPrivateFieldSet(this, _TaroHistory_cur, 0, "f");
};
const History = TaroHistory;

const Current = {
    app: null,
    router: null,
    page: null
};
const getCurrentInstance = () => Current;

var _dict, _a;
const findReg = /[!'()~]|%20|%00/g;
const plusReg = /\+/g;
const replaceCharMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00',
};
function replacer(match) {
    return replaceCharMap[match];
}
function appendTo(dict, name, value) {
    const res = isArray(value) ? value.join(',') : value;
    if (name in dict)
        dict[name].push(res);
    else
        dict[name] = [res];
}
function addEach(value, key) {
    appendTo(this, key, value);
}
function decode(str) {
    return decodeURIComponent(str.replace(plusReg, ' '));
}
function encode(str) {
    return encodeURIComponent(str).replace(findReg, replacer);
}
const URLSearchParams = (_a = class {
        constructor(query) {
            _dict.set(this, Object.create(null));
            query !== null && query !== void 0 ? query : (query = '');
            const dict = __classPrivateFieldGet(this, _dict, "f");
            if (typeof query === 'string') {
                if (query.charAt(0) === '?') {
                    query = query.slice(1);
                }
                for (let pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
                    const value = pairs[i];
                    const index = value.indexOf('=');
                    // 针对不规范的 url 参数做容错处理，如：word=你%好
                    try {
                        if (index > -1) {
                            appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
                        }
                        else if (value.length) {
                            appendTo(dict, decode(value), '');
                        }
                    }
                    catch (err) {
                    }
                }
            }
            else {
                if (isArray(query)) {
                    for (let i = 0, length = query.length; i < length; i++) {
                        const value = query[i];
                        appendTo(dict, value[0], value[1]);
                    }
                }
                else if (query.forEach) {
                    query.forEach(addEach, dict);
                }
                else {
                    for (const key in query) {
                        appendTo(dict, key, query[key]);
                    }
                }
            }
        }
        append(name, value) {
            appendTo(__classPrivateFieldGet(this, _dict, "f"), name, value);
        }
        delete(name) {
            delete __classPrivateFieldGet(this, _dict, "f")[name];
        }
        get(name) {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            return name in dict ? dict[name][0] : null;
        }
        getAll(name) {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            return name in dict ? dict[name].slice(0) : [];
        }
        has(name) {
            return name in __classPrivateFieldGet(this, _dict, "f");
        }
        keys() {
            return Object.keys(__classPrivateFieldGet(this, _dict, "f"));
        }
        set(name, value) {
            __classPrivateFieldGet(this, _dict, "f")[name] = ['' + value];
        }
        forEach(callback, thisArg) {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            Object.getOwnPropertyNames(dict).forEach(function (name) {
                dict[name].forEach(function (value) {
                    callback.call(thisArg, value, name, this);
                }, this);
            }, this);
        }
        toJSON() {
            return {};
        }
        toString() {
            const dict = __classPrivateFieldGet(this, _dict, "f");
            const query = [];
            for (const key in dict) {
                const name = encode(key);
                for (let i = 0, value = dict[key]; i < value.length; i++) {
                    query.push(name + '=' + encode(value[i]));
                }
            }
            return query.join('&');
        }
    },
    _dict = new WeakMap(),
    _a);

var _TaroURL_hash, _TaroURL_hostname, _TaroURL_pathname, _TaroURL_port, _TaroURL_protocol, _TaroURL_search;
class TaroURL {
    static createObjectURL() {
        throw new Error('Oops, not support URL.createObjectURL() in miniprogram.');
    }
    static revokeObjectURL() {
        throw new Error('Oops, not support URL.revokeObjectURL() in miniprogram.');
    }
    constructor(url, base) {
        /* private property */
        _TaroURL_hash.set(this, '');
        _TaroURL_hostname.set(this, '');
        _TaroURL_pathname.set(this, '');
        _TaroURL_port.set(this, '');
        _TaroURL_protocol.set(this, '');
        _TaroURL_search.set(this, void 0);
        if (!isString(url))
            url = String(url);
        const parseResult = parseUrlBase(url, base);
        const { hash, hostname, pathname, port, protocol, search } = parseResult;
        __classPrivateFieldSet(this, _TaroURL_hash, hash, "f");
        __classPrivateFieldSet(this, _TaroURL_hostname, hostname, "f");
        __classPrivateFieldSet(this, _TaroURL_pathname, pathname || '/', "f");
        __classPrivateFieldSet(this, _TaroURL_port, port, "f");
        __classPrivateFieldSet(this, _TaroURL_protocol, protocol, "f");
        __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(search), "f");
    }
    /* public property */
    get protocol() {
        return __classPrivateFieldGet(this, _TaroURL_protocol, "f");
    }
    set protocol(val) {
        isString(val) && (__classPrivateFieldSet(this, _TaroURL_protocol, val.trim(), "f"));
    }
    get host() {
        return this.hostname + (this.port ? ':' + this.port : '');
    }
    set host(val) {
        if (val && isString(val)) {
            val = val.trim();
            const { hostname, port } = parseUrl(`//${val}`);
            this.hostname = hostname;
            this.port = port;
        }
    }
    get hostname() {
        return __classPrivateFieldGet(this, _TaroURL_hostname, "f");
    }
    set hostname(val) {
        val && isString(val) && (__classPrivateFieldSet(this, _TaroURL_hostname, val.trim(), "f"));
    }
    get port() {
        return __classPrivateFieldGet(this, _TaroURL_port, "f");
    }
    set port(val) {
        isString(val) && (__classPrivateFieldSet(this, _TaroURL_port, val.trim(), "f"));
    }
    get pathname() {
        return __classPrivateFieldGet(this, _TaroURL_pathname, "f");
    }
    set pathname(val) {
        if (isString(val)) {
            val = val.trim();
            const HEAD_REG = /^(\/|\.\/|\.\.\/)/;
            let temp = val;
            while (HEAD_REG.test(temp)) {
                temp = temp.replace(HEAD_REG, '');
            }
            if (temp)
                __classPrivateFieldSet(this, _TaroURL_pathname, '/' + temp, "f");
            else
                __classPrivateFieldSet(this, _TaroURL_pathname, '/', "f");
        }
    }
    get search() {
        const val = __classPrivateFieldGet(this, _TaroURL_search, "f").toString();
        return (val.length === 0 || val.startsWith('?')) ? val : `?${val}`;
    }
    set search(val) {
        if (isString(val)) {
            val = val.trim();
            __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(val), "f");
        }
    }
    get hash() {
        return __classPrivateFieldGet(this, _TaroURL_hash, "f");
    }
    set hash(val) {
        if (isString(val)) {
            val = val.trim();
            if (val)
                __classPrivateFieldSet(this, _TaroURL_hash, val.startsWith('#') ? val : `#${val}`, "f");
            else
                __classPrivateFieldSet(this, _TaroURL_hash, '', "f");
        }
    }
    get href() {
        return `${this.protocol}//${this.host}${this.pathname}${this.search}${this.hash}`;
    }
    set href(val) {
        if (val && isString(val)) {
            val = val.trim();
            const { protocol, hostname, port, hash, search, pathname } = parseUrl(val);
            this.protocol = protocol;
            this.hostname = hostname;
            this.pathname = pathname;
            this.port = port;
            this.hash = hash;
            this.search = search;
        }
    }
    get origin() {
        return `${this.protocol}//${this.host}`;
    }
    set origin(val) {
        if (val && isString(val)) {
            val = val.trim();
            const { protocol, hostname, port } = parseUrl(val);
            this.protocol = protocol;
            this.hostname = hostname;
            this.port = port;
        }
    }
    get searchParams() {
        return __classPrivateFieldGet(this, _TaroURL_search, "f");
    }
    // public method
    toString() {
        return this.href;
    }
    toJSON() {
        return this.toString();
    }
    // convenient for deconstructor
    _toRaw() {
        return {
            protocol: this.protocol,
            port: this.port,
            host: this.host,
            hostname: this.hostname,
            pathname: this.pathname,
            hash: this.hash,
            search: this.search,
            origin: this.origin,
            href: this.href,
        };
    }
}
_TaroURL_hash = new WeakMap(), _TaroURL_hostname = new WeakMap(), _TaroURL_pathname = new WeakMap(), _TaroURL_port = new WeakMap(), _TaroURL_protocol = new WeakMap(), _TaroURL_search = new WeakMap();
// Note: 小程序端 vite 打包成 commonjs，const URL = xxx 会报错，所以把 URL 改为 TaroURLProvider
const TaroURLProvider = TaroURL;
function parseUrl(url = '') {
    const result = {
        href: '',
        origin: '',
        protocol: '',
        hostname: '',
        host: '',
        port: '',
        pathname: '',
        search: '',
        hash: ''
    };
    if (!url || !isString(url))
        return result;
    url = url.trim();
    const PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    const matches = url.match(PATTERN);
    if (!matches)
        return result;
    // TODO: username & password ?
    result.protocol = matches[1] || 'https:';
    result.hostname = matches[6] || 'taro.com';
    result.port = matches[8] || '';
    result.pathname = matches[9] || '/';
    result.search = matches[10] || '';
    result.hash = matches[12] || '';
    result.href = url;
    result.origin = result.protocol + '//' + result.hostname;
    result.host = result.hostname + (result.port ? `:${result.port}` : '');
    return result;
}
function parseUrlBase(url, base) {
    const VALID_URL = /^(https?:)\/\//i;
    let fullUrl = '';
    let parsedBase = null;
    if (!isUndefined(base)) {
        base = String(base).trim();
        if (!VALID_URL.test(base))
            throw new TypeError(`Failed to construct 'URL': Invalid base URL`);
        parsedBase = parseUrl(base);
    }
    url = String(url).trim();
    if (VALID_URL.test(url)) {
        fullUrl = url;
    }
    else if (parsedBase) {
        if (url) {
            if (url.startsWith('//')) {
                fullUrl = parsedBase.protocol + url;
            }
            else {
                fullUrl = parsedBase.origin + (url.startsWith('/') ? url : `/${url}`);
            }
        }
        else {
            fullUrl = parsedBase.href;
        }
    }
    else {
        throw new TypeError(`Failed to construct 'URL': Invalid URL`);
    }
    return parseUrl(fullUrl);
}

var _TaroLocation_instances, _TaroLocation_url, _TaroLocation_noCheckUrl, _TaroLocation_window, _TaroLocation_reset, _TaroLocation_getPreValue, _TaroLocation_rollBack, _TaroLocation_recordHistory, _TaroLocation_checkUrlChange;
const INIT_URL = 'https://taro.com';
const cache = new RuntimeCache('location');
class TaroLocation extends Events {
    constructor(options) {
        super();
        _TaroLocation_instances.add(this);
        /* private property */
        _TaroLocation_url.set(this, new TaroURLProvider(INIT_URL));
        _TaroLocation_noCheckUrl.set(this, false);
        _TaroLocation_window.set(this, void 0);
        __classPrivateFieldSet(this, _TaroLocation_window, options.window, "f");
        __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
        this.on('__set_href_without_history__', (href) => {
            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
            const lastHash = __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
            __classPrivateFieldGet(this, _TaroLocation_url, "f").href = generateFullUrl(href);
            if (lastHash !== __classPrivateFieldGet(this, _TaroLocation_url, "f").hash) {
                __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger('hashchange');
            }
            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
        }, null);
        // 切换上下文行为
        this.on(CONTEXT_ACTIONS.INIT, () => {
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
            cache.set(pageId, {
                lastHref: this.href,
            });
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
            // 数据恢复时，不需要执行跳转
            if (cache.has(pageId)) {
                const ctx = cache.get(pageId);
                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
                __classPrivateFieldGet(this, _TaroLocation_url, "f").href = ctx.lastHref;
                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
            }
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
            cache.delete(pageId);
        }, null);
    }
    /* public property */
    get protocol() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol;
    }
    set protocol(val) {
        const REG = /^(http|https):$/i;
        if (!val || !isString(val) || !REG.test(val.trim()))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get host() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").host;
    }
    set host(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").host = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get hostname() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname;
    }
    set hostname(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get port() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").port;
    }
    set port(val) {
        const xVal = Number((val = val.trim()));
        if (!isNumber(xVal) || xVal <= 0)
            return;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").port = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get pathname() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname;
    }
    set pathname(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get search() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").search;
    }
    set search(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        val = val.startsWith('?') ? val : `?${val}`;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").search = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get hash() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
    }
    // 小程序的navigateTo存在截断hash字符串的问题
    set hash(val) {
        if (!val || !isString(val))
            return;
        val = val.trim();
        val = val.startsWith('#') ? val : `#${val}`;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").hash = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get href() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").href;
    }
    set href(val) {
        const REG = /^(http:|https:)?\/\/.+/;
        if (!val || !isString(val) || !REG.test((val = val.trim())))
            return;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").href = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    get origin() {
        return __classPrivateFieldGet(this, _TaroLocation_url, "f").origin;
    }
    set origin(val) {
        const REG = /^(http:|https:)?\/\/.+/;
        if (!val || !isString(val) || !REG.test((val = val.trim())))
            return;
        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
        __classPrivateFieldGet(this, _TaroLocation_url, "f").origin = val;
        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
    }
    /* public method */
    assign() {
    }
    reload() {
    }
    replace(url) {
        this.trigger('__set_href_without_history__', url);
    }
    toString() {
        return this.href;
    }
    // For debug
    get cache() {
        return cache;
    }
}
_TaroLocation_url = new WeakMap(), _TaroLocation_noCheckUrl = new WeakMap(), _TaroLocation_window = new WeakMap(), _TaroLocation_instances = new WeakSet(), _TaroLocation_reset = function _TaroLocation_reset() {
    const Current = getCurrentInstance();
    const router = Current.router;
    if (router) {
        const { path, params } = router;
        const searchArr = Object.keys(params).map((key) => {
            return `${key}=${params[key]}`;
        });
        const searchStr = searchArr.length > 0 ? '?' + searchArr.join('&') : '';
        const url = `${INIT_URL}${path.startsWith('/') ? path : '/' + path}${searchStr}`;
        __classPrivateFieldSet(this, _TaroLocation_url, new TaroURLProvider(url), "f");
        this.trigger('__reset_history__', this.href);
    }
}, _TaroLocation_getPreValue = function _TaroLocation_getPreValue() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
}, _TaroLocation_rollBack = function _TaroLocation_rollBack(href) {
    __classPrivateFieldGet(this, _TaroLocation_url, "f").href = href;
}, _TaroLocation_recordHistory = function _TaroLocation_recordHistory() {
    this.trigger('__record_history__', this.href);
}, _TaroLocation_checkUrlChange = function _TaroLocation_checkUrlChange(preValue) {
    if (__classPrivateFieldGet(this, _TaroLocation_noCheckUrl, "f")) {
        return false;
    }
    const { protocol, hostname, port, pathname, search, hash } = __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
    // 跨域三要素不允许修改
    if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
        __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
        return false;
    }
    // pathname
    if (pathname !== preValue.pathname) {
        return true;
    }
    // search
    if (search !== preValue.search) {
        return true;
    }
    // hashchange
    if (hash !== preValue.hash) {
        __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger('hashchange');
        return true;
    }
    __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
    return false;
};
const Location = TaroLocation;
function generateFullUrl(val = '') {
    const origin = INIT_URL;
    if (/^[/?#]/.test(val)) {
        return origin + val;
    }
    return val;
}

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const msg = '(' + machine + '; ' + arch + ') ' + engine;
const nav = {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 ' + msg,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'Taro',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 ' + msg,
    vendor: 'Joyent',
    vendorSub: ''
};

// https://github.com/myrne/performance-now
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = () => performance.now();
    }
    else if (Date.now) {
        loadTime = Date.now();
        now = () => Date.now() - loadTime;
    }
    else {
        loadTime = new Date().getTime();
        now = () => new Date().getTime() - loadTime;
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
const _raf = function (callback) {
    const _now = now();
    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
const _caf = function (seed) {
        // fix https://github.com/NervJS/taro/issues/7749
        clearTimeout(seed);
    };

class TaroWindow extends Events {
    constructor() {
        super();
        this.navigator = nav;
        this.requestAnimationFrame = _raf;
        this.cancelAnimationFrame = _caf;
        this.getComputedStyle = taroGetComputedStyleProvider;
        const globalProperties = [
            ...Object.getOwnPropertyNames(global || {}),
            ...Object.getOwnPropertySymbols(global || {})
        ];
        globalProperties.forEach(property => {
            if (property === 'atob' || property === 'document')
                return;
            if (!Object.prototype.hasOwnProperty.call(this, property)) {
                // 防止小程序环境下，window 上的某些 get 属性在赋值时报错
                try {
                    this[property] = global[property];
                }
                catch (e) {
                }
            }
        });
        this.Date || (this.Date = Date);
        // 应用启动时，提供给需要读取历史信息的库使用
        this.location = new Location({ window: this });
        // @ts-ignore
        this.history = new History(this.location, { window: this });
        this.initEvent();
    }
    initEvent() {
        const _location = this.location;
        const _history = this.history;
        this.on(CONTEXT_ACTIONS.INIT, (pageId) => {
            // 页面onload，为该页面建立新的上下文信息
            _location.trigger(CONTEXT_ACTIONS.INIT, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
            // 页面onshow，恢复当前页面的上下文信息
            _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
            _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
            // 页面onhide，缓存当前页面的上下文信息
            _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
            _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
        }, null);
        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
            // 页面onunload，清除当前页面的上下文信息
            _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
            _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
        }, null);
    }
    get document() {
        return env.document;
    }
    addEventListener(event, callback) {
        if (!isString(event))
            return;
        this.on(event, callback, null);
    }
    removeEventListener(event, callback) {
        if (!isString(event))
            return;
        this.off(event, callback, null);
    }
    setTimeout(...args) {
        return setTimeout(...args);
    }
    clearTimeout(...args) {
        return clearTimeout(...args);
    }
}
// Note: 小程序端 vite 打包成 commonjs，const window = xxx 会报错，所以把 window 改为 taroWindowProvider，location 和 history 同理
const taroWindowProvider = (env.window = new TaroWindow());
const taroLocationProvider = taroWindowProvider.location;
const taroHistoryProvider = taroWindowProvider.history;

const incrementId = () => {
    const chatCodes = [];
    // A-Z
    for (let i = 65; i <= 90; i++) {
        chatCodes.push(i);
    }
    // a-z
    for (let i = 97; i <= 122; i++) {
        chatCodes.push(i);
    }
    const chatCodesLen = chatCodes.length - 1;
    const list = [0, 0];
    return () => {
        const target = list.map(item => chatCodes[item]);
        const res = String.fromCharCode(...target);
        let tailIdx = list.length - 1;
        list[tailIdx]++;
        while (list[tailIdx] > chatCodesLen) {
            list[tailIdx] = 0;
            tailIdx = tailIdx - 1;
            if (tailIdx < 0) {
                list.push(0);
                break;
            }
            list[tailIdx]++;
        }
        return res;
    };
};
function isElement(node) {
    return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* NodeType.TEXT_NODE */;
}
function isComment(node) {
    return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
    const res = Object.keys(el.props).find(prop => {
        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
    });
    return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
    var _a;
    while ((node = (node === null || node === void 0 ? void 0 : node.parentElement) || null)) {
        if (!node || node.nodeName === ROOT_STR || node.nodeName === 'root-portal') {
            return false;
        }
        else if ((_a = node.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
            return true;
        }
    }
    return false;
}
function shortcutAttr(key) {
    switch (key) {
        case STYLE:
            return "st" /* Shortcuts.Style */;
        case ID:
            return UID;
        case CLASS:
            return "cl" /* Shortcuts.Class */;
        default:
            return key;
    }
}
const customWrapperCache = new Map();
function extend(ctor, methodName, options) {
    if (isFunction(options)) {
        options = {
            value: options
        };
    }
    Object.defineProperty(ctor.prototype, methodName, Object.assign({ configurable: true, enumerable: true }, options));
}
let componentsAlias$1;
function getComponentsAlias() {
    if (!componentsAlias$1) {
        componentsAlias$1 = getComponentsAlias$1(internalComponents);
    }
    return componentsAlias$1;
}
function convertNumber2PX(value) {
    return value + 'px';
}

class ClassList {
    constructor(className, el) {
        this.tokenList = [];
        this.el = el;
        className.trim().split(/\s+/).forEach(token => this.tokenList.push(token));
    }
    get value() {
        return this.toString();
    }
    get length() {
        return this.tokenList.length;
    }
    add() {
        let index = 0;
        let updated = false;
        const tokens = arguments;
        const length = tokens.length;
        const tokenList = this.tokenList;
        do {
            const token = tokens[index];
            if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
                tokenList.push(token);
                updated = true;
            }
        } while (++index < length);
        if (updated) {
            this._update();
        }
    }
    remove() {
        let i = 0;
        let updated = false;
        const tokens = arguments;
        const length = tokens.length;
        const tokenList = this.tokenList;
        do {
            const token = tokens[i] + '';
            if (!this.checkTokenIsValid(token))
                continue;
            const index = tokenList.indexOf(token);
            if (~tokenList.indexOf(token)) {
                tokenList.splice(index, 1);
                updated = true;
            }
        } while (++i < length);
        if (updated) {
            this._update();
        }
    }
    contains(token) {
        if (!this.checkTokenIsValid(token))
            return false;
        return !!~this.tokenList.indexOf(token);
    }
    toggle(token, force) {
        const result = this.contains(token);
        const method = result ? force !== true && 'remove' : force !== false && 'add';
        if (method) {
            // @ts-ignore
            this[method](token);
        }
        if (force === true || force === false) {
            return force;
        }
        else {
            return !result;
        }
    }
    replace(token, replacement_token) {
        if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token))
            return;
        const index = this.tokenList.indexOf(token);
        if (~index) {
            this.tokenList.splice(index, 1, replacement_token);
            this._update();
        }
    }
    toString() {
        return this.tokenList.filter(v => v !== '').join(' ');
    }
    checkTokenIsValid(token) {
        if (token === '' || /\s/.test(token))
            return false;
        return true;
    }
    _update() {
        this.el.className = this.value;
    }
}

class EventSource extends Map {
    removeNode(child) {
        const { sid, uid } = child;
        this.delete(sid);
        if (uid !== sid && uid)
            this.delete(uid);
    }
    removeNodeTree(child) {
        this.removeNode(child);
        const { childNodes } = child;
        childNodes.forEach(node => this.removeNodeTree(node));
    }
}
const eventSource = new EventSource();

let SPECIAL_NODES;
let componentsAlias;
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
    var _a;
    // 初始化 componentsAlias
    componentsAlias || (componentsAlias = getComponentsAlias());
    // 初始化 SPECIAL_NODES
    SPECIAL_NODES || (SPECIAL_NODES = hooks.call('getSpecialNodes'));
    const nodeName = node.nodeName;
    let compileModeName = null;
    if (isText(node)) {
        return {
            sid: node.sid,
            ["v" /* Shortcuts.Text */]: node.nodeValue,
            ["nn" /* Shortcuts.NodeName */]: ((_a = componentsAlias[nodeName]) === null || _a === void 0 ? void 0 : _a._num) || '8'
        };
    }
    const data = {
        ["nn" /* Shortcuts.NodeName */]: nodeName,
        sid: node.sid
    };
    if (node.uid !== node.sid) {
        data.uid = node.uid;
    }
    if (SPECIAL_NODES.indexOf(nodeName) > -1) {
        if (!node.isAnyEventBinded()) {
            data["nn" /* Shortcuts.NodeName */] = `static-${nodeName}`;
            if (nodeName === VIEW && !isHasExtractProp(node)) {
                data["nn" /* Shortcuts.NodeName */] = PURE_VIEW;
            }
        }
        if (nodeName === VIEW && node.isOnlyClickBinded() && !isHasExtractProp(node)) {
            data["nn" /* Shortcuts.NodeName */] = CLICK_VIEW;
        }
    }
    const { props } = node;
    for (const prop in props) {
        const propInCamelCase = toCamelCase(prop);
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== CLASS &&
            prop !== STYLE &&
            prop !== ID &&
            propInCamelCase !== CATCHMOVE &&
            propInCamelCase !== COMPILE_MODE) {
            data[propInCamelCase] = props[prop];
        }
        if (nodeName === VIEW &&
            propInCamelCase === CATCHMOVE &&
            props[prop] !== false) {
            data["nn" /* Shortcuts.NodeName */] = CATCH_VIEW;
        }
        if (propInCamelCase === COMPILE_MODE) {
            compileModeName = props[prop];
        }
    }
    // Children
    data["cn" /* Shortcuts.Childnodes */] = node.childNodes.filter(node => !isComment(node)).map(hydrate);
    if (node.className !== '') {
        data["cl" /* Shortcuts.Class */] = node.className;
    }
    const cssText = node.cssText;
    if (cssText !== '' && nodeName !== 'swiper-item') {
        data["st" /* Shortcuts.Style */] = cssText;
    }
    hooks.call('modifyHydrateData', data, node);
    const nn = data["nn" /* Shortcuts.NodeName */];
    const componentAlias = componentsAlias[nn];
    if (componentAlias) {
        data["nn" /* Shortcuts.NodeName */] = componentAlias._num;
        for (const prop in data) {
            if (prop in componentAlias) {
                data[componentAlias[prop]] = data[prop];
                delete data[prop];
            }
        }
    }
    if (compileModeName !== null) {
        data["nn" /* Shortcuts.NodeName */] = compileModeName;
    }
    const resData = hooks.call('transferHydrateData', data, node, componentAlias);
    return resData || data;
}

class TaroEventTarget {
    constructor() {
        this.__handlers = {};
    }
    addEventListener(type, handler, options) {
        type = type.toLowerCase();
        hooks.call('onAddEvent', type, handler, options, this);
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.addEventListener('begin', handler, options);
            this.addEventListener('end', handler, options);
            return;
        }
        let isOnce = false;
        if (isObject(options)) {
            Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function () {
                handler.apply(this, arguments); // this 指向 Element
                this.removeEventListener(type, wrapper);
            };
            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
            return;
        }
        // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
        // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
        // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
        // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
        const oldHandler = handler;
        handler = function () {
            return oldHandler.apply(this, arguments); // this 指向 Element
        };
        handler.oldHandler = oldHandler;
        const handlers = this.__handlers[type];
        if (isArray(handlers)) {
            handlers.push(handler);
        }
        else {
            this.__handlers[type] = [handler];
        }
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.removeEventListener('begin', handler);
            this.removeEventListener('end', handler);
            return;
        }
        if (!handler) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!isArray(handlers)) {
            return;
        }
        const index = handlers.findIndex(item => {
            if (item === handler || item.oldHandler === handler)
                return true;
        });
        handlers.splice(index, 1);
    }
    isAnyEventBinded() {
        const handlers = this.__handlers;
        const isAnyEventBinded = Object.keys(handlers).find(key => handlers[key].length);
        return Boolean(isAnyEventBinded);
    }
    isOnlyClickBinded() {
        const handlers = this.__handlers;
        const isOnlyClickBinded = handlers.tap && Object.keys(handlers).length === 1;
        return Boolean(isOnlyClickBinded);
    }
}

const CHILDNODES = "cn" /* Shortcuts.Childnodes */;
const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
    constructor() {
        super();
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => hydrate(node);
        this.uid = '_' + nodeId(); // dom 节点 id，开发者可修改
        this.sid = this.uid; // dom 节点全局唯一 id，不可被修改
        eventSource.set(this.sid, this);
    }
    updateChildNodes(isClean) {
        const cleanChildNodes = () => [];
        const rerenderChildNodes = () => {
            const childNodes = this.childNodes.filter(node => !isComment(node));
            return childNodes.map(hydrate);
        };
        this.enqueueUpdate({
            path: `${this._path}.${CHILDNODES}`,
            value: isClean ? cleanChildNodes : rerenderChildNodes
        });
    }
    updateSingleChild(index) {
        this.childNodes.forEach((child, childIndex) => {
            if (isComment(child))
                return;
            if (index && childIndex < index)
                return;
            this.enqueueUpdate({
                path: child._path,
                value: this.hydrate(child)
            });
        });
    }
    get _root() {
        var _a;
        return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
    findIndex(refChild) {
        const index = this.childNodes.indexOf(refChild);
        ensure(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
    get _path() {
        const parentNode = this.parentNode;
        if (parentNode) {
            // 计算路径时，先过滤掉 comment 节点
            const list = parentNode.childNodes.filter(node => !isComment(node));
            const indexOfNode = list.indexOf(this);
            const index = hooks.call('getPathIndex', indexOfNode);
            return `${parentNode._path}.${CHILDNODES}.${index}`;
        }
        return '';
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
    get previousSibling() {
        const parentNode = this.parentNode;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
    get parentElement() {
        const parentNode = this.parentNode;
        if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const childNodes = this.childNodes;
        return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    // eslint-disable-next-line accessor-pairs
    set textContent(text) {
        const removedNodes = this.childNodes.slice();
        const addedNodes = [];
        // Handle old children' data structure & ref
        while (this.firstChild) {
            this.removeChild(this.firstChild, { doUpdate: false });
        }
        if (text === '') {
            this.updateChildNodes(true);
        }
        else {
            const newText = env.document.createTextNode(text);
            addedNodes.push(newText);
            this.appendChild(newText);
            this.updateChildNodes();
        }
        // @Todo: appendChild 会多触发一次
        MutationObserver.record({
            type: "childList" /* MutationRecordType.CHILD_LIST */,
            target: this,
            removedNodes,
            addedNodes
        });
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
     * @scenario
     * [A,B,C]
     *   1. insert D before C, D has no parent
     *   2. insert D before C, D has the same parent of C
     *   3. insert D before C, D has the different parent of C
     */
    insertBefore(newChild, refChild, isReplace) {
        if (newChild.nodeName === DOCUMENT_FRAGMENT) {
            newChild.childNodes.reduceRight((previousValue, currentValue) => {
                this.insertBefore(currentValue, previousValue);
                return currentValue;
            }, refChild);
            return newChild;
        }
        // Parent release newChild
        //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
        //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
        newChild.remove({ cleanRef: false });
        let index = 0;
        // Data structure
        newChild.parentNode = this;
        if (refChild) {
            // insertBefore & replaceChild
            index = this.findIndex(refChild);
            this.childNodes.splice(index, 0, newChild);
        }
        else {
            // appendChild
            this.childNodes.push(newChild);
        }
        const childNodesLength = this.childNodes.length;
        // Serialization
        if (this._root) {
            if (!refChild) {
                // appendChild
                const isOnlyChild = childNodesLength === 1;
                if (isOnlyChild) {
                    this.updateChildNodes();
                }
                else {
                    this.enqueueUpdate({
                        path: newChild._path,
                        value: this.hydrate(newChild)
                    });
                }
            }
            else if (isReplace) {
                // replaceChild
                this.enqueueUpdate({
                    path: newChild._path,
                    value: this.hydrate(newChild)
                });
            }
            else {
                // insertBefore 有两种更新模式
                // 比方说有 A B C 三个节点，现在要在 C 前插入 D
                // 1. 插入 D，然后更新整个父节点的 childNodes 数组
                // setData({ cn: [A, B, D, C] })
                // 2. 插入 D，然后更新 D 以及 D 之后每个节点的数据
                // setData ({
                //   cn.[2]: D,
                //   cn.[3]: C,
                // })
                // 由于微信解析 ’cn.[2]‘ 这些路径的时候也需要消耗时间，
                // 所以根据 insertBefore 插入的位置来做不同的处理
                const mark = childNodesLength * 2 / 3;
                if (mark > index) {
                    // 如果 insertBefore 的位置在 childNodes 的 2/3 前，则为了避免解析路径消耗过多的时间，采用第一种方式
                    this.updateChildNodes();
                }
                else {
                    // 如果 insertBefore 的位置在 childNodes 的 2/3 之后，则采用第二种方式，避免 childNodes 的全量更新
                    this.updateSingleChild(index);
                }
            }
        }
        MutationObserver.record({
            type: "childList" /* MutationRecordType.CHILD_LIST */,
            target: this,
            addedNodes: [newChild],
            removedNodes: isReplace
                ? [refChild] /** replaceChild */
                : [],
            nextSibling: isReplace
                ? refChild.nextSibling /** replaceChild */
                : (refChild || null), /** insertBefore & appendChild */
            previousSibling: newChild.previousSibling
        });
        return newChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @scenario
     * [A,B,C]
     *   1. append C, C has no parent
     *   2. append C, C has the same parent of B
     *   3. append C, C has the different parent of B
     */
    appendChild(newChild) {
        return this.insertBefore(newChild);
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     * @scenario
     * [A,B,C]
     *   1. replace B with C, C has no parent
     *   2. replace B with C, C has no parent, C has the same parent of B
     *   3. replace B with C, C has no parent, C has the different parent of B
     */
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode !== this)
            return;
        // Insert the newChild
        this.insertBefore(newChild, oldChild, true);
        // Destroy the oldChild
        //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
        //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
        oldChild.remove({ doUpdate: false });
        return oldChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
     * @scenario
     * [A,B,C]
     *   1. remove A or B
     *   2. remove C
     */
    removeChild(child, options = {}) {
        const { cleanRef, doUpdate } = options;
        if (cleanRef !== false && doUpdate !== false) {
            // appendChild/replaceChild/insertBefore 不应该触发
            // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
            MutationObserver.record({
                type: "childList" /* MutationRecordType.CHILD_LIST */,
                target: this,
                removedNodes: [child],
                nextSibling: child.nextSibling,
                previousSibling: child.previousSibling
            });
        }
        // Data Structure
        const index = this.findIndex(child);
        this.childNodes.splice(index, 1);
        child.parentNode = null;
        // Set eventSource
        if (cleanRef !== false) {
            eventSource.removeNodeTree(child);
        }
        // Serialization
        if (this._root && doUpdate !== false) {
            this.updateChildNodes();
        }
        return child;
    }
    remove(options) {
        var _a;
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        var _a;
        (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
    get ownerDocument() {
        return env.document;
    }
    static extend(methodName, options) {
        extend(TaroNode, methodName, options);
    }
}

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const WEBKIT = 'webkit';
const styleProperties = [
    'all',
    'appearance',
    'blockOverflow',
    'blockSize',
    'bottom',
    'clear',
    'contain',
    'content',
    'continue',
    'cursor',
    'direction',
    'display',
    'filter',
    'float',
    'gap',
    'height',
    'inset',
    'isolation',
    'left',
    'letterSpacing',
    'lightingColor',
    'markerSide',
    'mixBlendMode',
    'opacity',
    'order',
    'position',
    'quotes',
    'resize',
    'right',
    'rowGap',
    'tabSize',
    'tableLayout',
    'top',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'zIndex',
    'pointerEvents',
    'aspectRatio'
    /** 非常用 style */
    // 'azimuth',
    // 'backfaceVisibility',
    // 'baselineShift',
    // 'captionSide',
    // 'chains',
    // 'dominantBaseline',
    // 'elevation',
    // 'emptyCells',
    // 'forcedColorAdjust',
    // 'glyphOrientationVertical',
    // 'hangingPunctuation',
    // 'hyphenateCharacter',
    // 'hyphens',
    // 'imageOrientation',
    // 'imageResolution',
    // 'orphans',
    // 'playDuring',
    // 'pointerEvents',
    // 'regionFragment',
    // 'richness',
    // 'running',
    // 'scrollBehavior',
    // 'speechRate',
    // 'stress',
    // 'stringSet',
    // 'unicodeBidi',
    // 'willChange',
    // 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
    !excludeSelf && styleProperties.push(prefix);
    list.forEach(item => {
        styleProperties.push(prefix + item);
        if (prefix === WEBKIT) {
            styleProperties.push('Webkit' + item);
        }
    });
}
const color = 'Color';
const style = 'Style';
const width = 'Width';
const image = 'Image';
const size = 'Size';
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, 'Radius'];
const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
const endRadius_startRadius = ['EndRadius', 'StartRadius'];
const bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
const end_start = ['End', 'Start'];
const content_items_self = ['Content', 'Items', 'Self'];
const blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
const after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [...color_style_width, 'Offset']);
combine('border', [...color_style_width, 'Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']);
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [...bottom_left_right_top, 'Trim']);
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [...after_before, ...end_start, 'Anchor', 'Distance', 'Path', 'Position', 'Rotate']);
combine('perspective', ['Origin']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [...after_before, 'Inside'], true);
combine('wrap', [...after_before, 'Flow', 'Inside', 'Through'], true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [...blockSize_height_inlineSize_width, 'Lines'], true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
combine(WEBKIT, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);

function recordCss(obj) {
    MutationObserver.record({
        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
        target: obj._element,
        attributeName: 'style',
        oldValue: obj.cssText
    });
}
function enqueueUpdate(obj) {
    const element = obj._element;
    if (element._root) {
        element.enqueueUpdate({
            path: `${element._path}.${"st" /* Shortcuts.Style */}`,
            value: obj.cssText
        });
    }
}
function setStyle$1(newVal, styleKey) {
    const old = this[styleKey];
    if (old === newVal)
        return;
    !this._pending && recordCss(this);
    if (isNull(newVal) || isUndefined(newVal) || newVal === '') {
        this._usedStyleProp.delete(styleKey);
        delete this._value[styleKey];
    }
    else {
        this._usedStyleProp.add(styleKey);
        this._value[styleKey] = newVal;
    }
    !this._pending && enqueueUpdate(this);
}
function initStyle(ctor, styleProperties) {
    const properties = {};
    for (let i = 0; i < styleProperties.length; i++) {
        const styleKey = styleProperties[i];
        if (ctor[styleKey])
            return;
        properties[styleKey] = {
            get() {
                const val = this._value[styleKey];
                return isNull(val) || isUndefined(val) ? '' : val;
            },
            set(newVal) {
                setStyle$1.call(this, newVal, styleKey);
            }
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
    return /^--/.test(propertyName);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle$1.call(this, newVal, styleKey);
            }
        });
    }
    get cssText() {
        if (!this._usedStyleProp.size)
            return '';
        const texts = [];
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if (isNull(val) || isUndefined(val))
                return;
            let styleName = isCssVariable(key) ? key : toDashed(key);
            if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
                styleName = `-${styleName}`;
            }
            texts.push(`${styleName}: ${val};`);
        });
        return texts.join(' ');
    }
    set cssText(str) {
        this._pending = true;
        recordCss(this);
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '' || isUndefined(str) || isNull(str)) {
            this._pending = false;
            enqueueUpdate(this);
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            // 可能存在 'background: url(http:x/y/z)' 的情况
            const [propName, ...valList] = rule.split(':');
            const val = valList.join(':');
            if (isUndefined(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
        this._pending = false;
        enqueueUpdate(this);
    }
    setProperty(propertyName, value) {
        if (propertyName[0] === '-') {
            // 支持 webkit 属性或 css 变量
            this.setCssVariables(propertyName);
        }
        else {
            propertyName = toCamelCase(propertyName);
        }
        if (isNull(value) || isUndefined(value)) {
            this.removeProperty(propertyName);
        }
        else {
            this[propertyName] = value;
        }
    }
    removeProperty(propertyName) {
        propertyName = toCamelCase(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = undefined;
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = toCamelCase(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style, styleProperties);
hooks.tap('injectNewStyleProperties', (newStyleProperties) => {
    if (isArray(newStyleProperties)) {
        initStyle(Style, newStyleProperties);
    }
    else {
        if (typeof newStyleProperties !== 'string')
            return;
        initStyle(Style, [newStyleProperties]);
    }
});

function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    const array = [];
    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    let object = root;
    while (object) {
        if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    const firstChild = el.firstChild;
    const isElmentTypeValid = el.nodeType === 1 /* NodeType.ELEMENT_NODE */ || el.nodeType === 9 /* NodeType.DOCUMENT_NODE */;
    // 如果当前 el 不是 element 或 document 元素，则可以直接不递归他的子元素了
    if (firstChild && isElmentTypeValid) {
        return firstChild;
    }
    let current = el;
    do {
        if (current === root) {
            return null;
        }
        const nextSibling = current.nextSibling;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}

class TaroElement extends TaroNode {
    constructor() {
        super();
        this.props = {};
        this.dataset = EMPTY_OBJ;
        this.nodeType = 1 /* NodeType.ELEMENT_NODE */;
        this.style = new Style(this);
        hooks.call('patchElement', this);
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!isArray(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
    get id() {
        return this.getAttribute(ID);
    }
    set id(val) {
        this.setAttribute(ID, val);
    }
    get className() {
        return this.getAttribute(CLASS) || '';
    }
    set className(val) {
        this.setAttribute(CLASS, val);
    }
    get cssText() {
        return this.getAttribute(STYLE) || '';
    }
    get classList() {
        return new ClassList(this.className, this);
    }
    get children() {
        return this.childNodes.filter(isElement);
    }
    get attributes() {
        const props = this.props;
        const propKeys = Object.keys(props);
        const style = this.style.cssText;
        const attrs = propKeys.map(key => ({ name: key, value: props[key] }));
        return attrs.concat(style ? { name: STYLE, value: style } : []);
    }
    get textContent() {
        let text = '';
        const childNodes = this.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            text += childNodes[i].textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    hasAttribute(qualifiedName) {
        return !isUndefined(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    get focus() {
        return function () {
            this.setAttribute(FOCUS, true);
        };
    }
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    set focus(value) {
        this.setAttribute(FOCUS, value);
    }
    blur() {
        this.setAttribute(FOCUS, false);
    }
    setAttribute(qualifiedName, value) {
        const isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
        if (qualifiedName !== STYLE) {
            MutationObserver.record({
                target: this,
                type: "attributes" /* MutationRecordType.ATTRIBUTES */,
                attributeName: qualifiedName,
                oldValue: this.getAttribute(qualifiedName)
            });
        }
        switch (qualifiedName) {
            case STYLE:
                this.style.cssText = value;
                break;
            case ID:
                if (this.uid !== this.sid) {
                    // eventSource[sid] 永远保留，直到组件卸载
                    // eventSource[uid] 可变
                    eventSource.delete(this.uid);
                }
                value = String(value);
                this.props[qualifiedName] = this.uid = value;
                eventSource.set(value, this);
                break;
            default:
                this.props[qualifiedName] = value;
                if (qualifiedName.startsWith('data-')) {
                    if (this.dataset === EMPTY_OBJ) {
                        this.dataset = Object.create(null);
                    }
                    this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
                }
                break;
        }
        // Serialization
        if (!this._root)
            return;
        const componentsAlias = getComponentsAlias();
        const _alias = componentsAlias[this.nodeName];
        const viewAlias = componentsAlias[VIEW]._num;
        const clickViewAlias = componentsAlias[CLICK_VIEW]._num;
        const staticViewAlias = componentsAlias[STATIC_VIEW]._num;
        const catchViewAlias = componentsAlias[CATCH_VIEW]._num;
        const _path = this._path;
        qualifiedName = shortcutAttr(qualifiedName);
        const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
        const payload = {
            path: `${_path}.${qualifiedNameInCamelCase}`,
            value: isFunction(value) ? () => value : value
        };
        hooks.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
        if (_alias) {
            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
            payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
        }
        this.enqueueUpdate(payload);
        if (this.nodeName === VIEW) {
            if (qualifiedNameInCamelCase === CATCHMOVE) {
                // catchMove = true: catch-view
                // catchMove = false: view or click-view or static-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: value ? catchViewAlias : (this.isOnlyClickBinded() && !isHasExtractProp(this) ? clickViewAlias : (this.isAnyEventBinded() ? viewAlias : staticViewAlias))
                });
            }
            else if (isPureView && isHasExtractProp(this)) {
                // pure-view => static-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: staticViewAlias
                });
            }
        }
    }
    removeAttribute(qualifiedName) {
        const isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
        MutationObserver.record({
            target: this,
            type: "attributes" /* MutationRecordType.ATTRIBUTES */,
            attributeName: qualifiedName,
            oldValue: this.getAttribute(qualifiedName)
        });
        if (qualifiedName === STYLE) {
            this.style.cssText = '';
        }
        else {
            const isInterrupt = hooks.call('onRemoveAttribute', this, qualifiedName);
            if (isInterrupt) {
                return;
            }
            if (!this.props.hasOwnProperty(qualifiedName)) {
                return;
            }
            delete this.props[qualifiedName];
        }
        // Serialization
        if (!this._root)
            return;
        const componentsAlias = getComponentsAlias();
        const _alias = componentsAlias[this.nodeName];
        const viewAlias = componentsAlias[VIEW]._num;
        const staticViewAlias = componentsAlias[STATIC_VIEW]._num;
        const pureViewAlias = componentsAlias[PURE_VIEW]._num;
        const clickViewAlias = componentsAlias[CLICK_VIEW]._num;
        const _path = this._path;
        qualifiedName = shortcutAttr(qualifiedName);
        const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
        const payload = {
            path: `${_path}.${qualifiedNameInCamelCase}`,
            value: ''
        };
        hooks.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
        if (_alias) {
            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
            payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
        }
        this.enqueueUpdate(payload);
        if (this.nodeName === VIEW) {
            if (qualifiedNameInCamelCase === CATCHMOVE) {
                // catch-view => view or click-view or static-view or pure-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: this.isOnlyClickBinded() && !isHasExtractProp(this) ? clickViewAlias : (this.isAnyEventBinded() ? viewAlias : (isHasExtractProp(this) ? staticViewAlias : pureViewAlias))
                });
            }
            else if (isStaticView && !isHasExtractProp(this)) {
                // static-view => pure-view
                this.enqueueUpdate({
                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
                    value: pureViewAlias
                });
            }
        }
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    getElementsByTagName(tagName) {
        return treeToArray(this, (el) => {
            return el.nodeName === tagName || (tagName === '*' && this !== el);
        });
    }
    getElementsByClassName(className) {
        const classNames = className.trim().split(/\s+/);
        return treeToArray(this, (el) => {
            const classList = el.classList;
            return classNames.every(c => classList.contains(c));
        });
    }
    dispatchEvent(event) {
        const cancelable = event.cancelable;
        const listeners = this.__handlers[event.type];
        if (!isArray(listeners)) {
            return false;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                hooks.call('modifyDispatchEvent', event, this);
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (!isUndefined(result) && event.mpEvent) {
                const res = hooks.call('modifyTaroEventReturn', this, event, result);
                if (res) {
                    event.mpEvent[EVENT_CALLBACK_RESULT] = result;
                }
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        return listeners != null;
    }
    addEventListener(type, handler, options) {
        const name = this.nodeName;
        const SPECIAL_NODES = hooks.call('getSpecialNodes');
        let sideEffect = true;
        if (isObject(options) && options.sideEffect === false) {
            sideEffect = false;
            delete options.sideEffect;
        }
        hooks.call('modifyAddEventListener', this, sideEffect, getComponentsAlias);
        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            const componentsAlias = getComponentsAlias();
            const alias = componentsAlias[name]._num;
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
                value: alias
            });
        }
        super.addEventListener(type, handler, options);
    }
    removeEventListener(type, handler, sideEffect = true) {
        super.removeEventListener(type, handler);
        const name = this.nodeName;
        const SPECIAL_NODES = hooks.call('getSpecialNodes');
        hooks.call('modifyRemoveEventListener', this, sideEffect, getComponentsAlias);
        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            const componentsAlias = getComponentsAlias();
            const value = isHasExtractProp(this) ? `static-${name}` : `pure-${name}`;
            const valueAlias = componentsAlias[value]._num;
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
                value: valueAlias
            });
        }
    }
    static extend(methodName, options) {
        extend(TaroElement, methodName, options);
    }
}

const options = {
    prerender: true,
    debug: false
};

function initPosition() {
    return {
        index: 0,
        column: 0,
        line: 0
    };
}
function feedPosition(position, str, len) {
    const start = position.index;
    const end = position.index = start + len;
    for (let i = start; i < end; i++) {
        const char = str.charAt(i);
        if (char === '\n') {
            position.line++;
            position.column = 0;
        }
        else {
            position.column++;
        }
    }
}
function jumpPosition(position, str, end) {
    const len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
    return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
    const name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
function isWordEnd(cursor, wordBegin, html) {
    if (!isWhitespaceChar(html.charAt(cursor)))
        return false;
    const len = html.length;
    // backwrad
    for (let i = cursor - 1; i > wordBegin; i--) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            break;
        }
    }
    // forward
    for (let i = cursor + 1; i < len; i++) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            return true;
        }
    }
}
class Scaner {
    constructor(html) {
        this.tokens = [];
        this.position = initPosition();
        this.html = html;
    }
    scan() {
        const { html, position } = this;
        const len = html.length;
        while (position.index < len) {
            const start = position.index;
            this.scanText();
            if (position.index === start) {
                const isComment = html.startsWith('!--', start + 1);
                if (isComment) {
                    this.scanComment();
                }
                else {
                    const tagName = this.scanTag();
                    if (shouldBeIgnore(tagName)) {
                        this.scanSkipTag(tagName);
                    }
                }
            }
        }
        return this.tokens;
    }
    scanText() {
        const type = 'text';
        const { html, position } = this;
        let textEnd = findTextEnd(html, position.index);
        if (textEnd === position.index) {
            return;
        }
        if (textEnd === -1) {
            textEnd = html.length;
        }
        const start = copyPosition(position);
        const content = html.slice(position.index, textEnd);
        jumpPosition(position, html, textEnd);
        const end = copyPosition(position);
        this.tokens.push({ type, content, position: { start, end } });
    }
    scanComment() {
        const type = 'comment';
        const { html, position } = this;
        const start = copyPosition(position);
        feedPosition(position, html, 4); // "<!--".length
        let contentEnd = html.indexOf('-->', position.index);
        let commentEnd = contentEnd + 3; // "-->".length
        if (contentEnd === -1) {
            contentEnd = commentEnd = html.length;
        }
        const content = html.slice(position.index, contentEnd);
        jumpPosition(position, html, commentEnd);
        this.tokens.push({
            type,
            content,
            position: {
                start,
                end: copyPosition(position)
            }
        });
    }
    scanTag() {
        this.scanTagStart();
        const tagName = this.scanTagName();
        this.scanAttrs();
        this.scanTagEnd();
        return tagName;
    }
    scanTagStart() {
        const type = 'tag-start';
        const { html, position } = this;
        const secondChar = html.charAt(position.index + 1);
        const close = secondChar === '/';
        const start = copyPosition(position);
        feedPosition(position, html, close ? 2 : 1);
        this.tokens.push({ type, close, position: { start } });
    }
    scanTagEnd() {
        const type = 'tag-end';
        const { html, position } = this;
        const firstChar = html.charAt(position.index);
        const close = firstChar === '/';
        feedPosition(position, html, close ? 2 : 1);
        const end = copyPosition(position);
        this.tokens.push({ type, close, position: { end } });
    }
    scanTagName() {
        const type = 'tag';
        const { html, position } = this;
        const len = html.length;
        let start = position.index;
        while (start < len) {
            const char = html.charAt(start);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (isTagChar)
                break;
            start++;
        }
        let end = start + 1;
        while (end < len) {
            const char = html.charAt(end);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (!isTagChar)
                break;
            end++;
        }
        jumpPosition(position, html, end);
        const tagName = html.slice(start, end);
        this.tokens.push({
            type,
            content: tagName
        });
        return tagName;
    }
    scanAttrs() {
        const { html, position, tokens } = this;
        let cursor = position.index;
        let quote = null; // null, single-, or double-quote
        let wordBegin = cursor; // index of word start
        const words = []; // "key", "key=value", "key='value'", etc
        const len = html.length;
        while (cursor < len) {
            const char = html.charAt(cursor);
            if (quote) {
                const isQuoteEnd = char === quote;
                if (isQuoteEnd) {
                    quote = null;
                }
                cursor++;
                continue;
            }
            const isTagEnd = char === '/' || char === '>';
            if (isTagEnd) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                break;
            }
            if (isWordEnd(cursor, wordBegin, html)) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                wordBegin = cursor + 1;
                cursor++;
                continue;
            }
            const isQuoteStart = char === '\'' || char === '"';
            if (isQuoteStart) {
                quote = char;
                cursor++;
                continue;
            }
            cursor++;
        }
        jumpPosition(position, html, cursor);
        const wLen = words.length;
        const type = 'attribute';
        for (let i = 0; i < wLen; i++) {
            const word = words[i];
            const isNotPair = word.includes('=');
            if (isNotPair) {
                const secondWord = words[i + 1];
                if (secondWord && secondWord.startsWith('=')) {
                    if (secondWord.length > 1) {
                        const newWord = word + secondWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                    const thirdWord = words[i + 2];
                    i += 1;
                    if (thirdWord) {
                        const newWord = word + '=' + thirdWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                }
            }
            if (word.endsWith('=')) {
                const secondWord = words[i + 1];
                if (secondWord && !secondWord.includes('=')) {
                    const newWord = word + secondWord;
                    tokens.push({ type, content: newWord });
                    i += 1;
                    continue;
                }
                const newWord = word.slice(0, -1);
                tokens.push({ type, content: newWord });
                continue;
            }
            tokens.push({ type, content: word });
        }
    }
    scanSkipTag(tagName) {
        const { html, position } = this;
        const safeTagName = tagName.toLowerCase();
        const len = html.length;
        while (position.index < len) {
            const nextTag = html.indexOf('</', position.index);
            if (nextTag === -1) {
                this.scanText();
                break;
            }
            jumpPosition(position, html, nextTag);
            const name = this.scanTag();
            if (safeTagName === name.toLowerCase()) {
                break;
            }
        }
    }
}

function unquote(str) {
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
}

const LEFT_BRACKET = '{';
const RIGHT_BRACKET = '}';
const CLASS_SELECTOR = '.';
const ID_SELECTOR = '#';
const CHILD_COMBINATOR = '>';
const GENERAL_SIBLING_COMBINATOR = '~';
const ADJACENT_SIBLING_COMBINATOR = '+';
class StyleTagParser {
    constructor() {
        this.styles = [];
    }
    extractStyle(src) {
        const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
        let html = src;
        // let html = src.replace(/\n/g, '')
        html = html.replace(REG_STYLE, (_, $1) => {
            const style = $1.trim();
            this.stringToSelector(style);
            return '';
        });
        return html.trim();
    }
    stringToSelector(style) {
        let lb = style.indexOf(LEFT_BRACKET);
        while (lb > -1) {
            const rb = style.indexOf(RIGHT_BRACKET);
            const selectors = style.slice(0, lb).trim();
            let content = style.slice(lb + 1, rb);
            content = content.replace(/:(.*);/g, function (_, $1) {
                const t = $1.trim().replace(/ +/g, '+++');
                return `:${t};`;
            });
            content = content.replace(/ /g, '');
            content = content.replace(/\+\+\+/g, ' ');
            if (!(/;$/.test(content))) {
                content += ';';
            }
            selectors.split(',').forEach(src => {
                const selectorList = this.parseSelector(src);
                this.styles.push({
                    content,
                    selectorList
                });
            });
            style = style.slice(rb + 1);
            lb = style.indexOf(LEFT_BRACKET);
        }
        // console.log('res this.styles: ', this.styles)
    }
    parseSelector(src) {
        const list = src
            .trim()
            .replace(/ *([>~+]) */g, ' $1')
            .replace(/ +/g, ' ')
            .replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]')
            .split(' ');
        const selectors = list.map(item => {
            const firstChar = item.charAt(0);
            const selector = {
                isChild: firstChar === CHILD_COMBINATOR,
                isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
                isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
                tag: null,
                id: null,
                class: [],
                attrs: []
            };
            item = item.replace(/^[>~+]/, '');
            // 属性选择器
            item = item.replace(/\[(.+?)\]/g, function (_, $1) {
                const [key, value] = $1.split('=');
                const all = $1.indexOf('=') === -1;
                const attr = {
                    all,
                    key,
                    value: all ? null : value
                };
                selector.attrs.push(attr);
                return '';
            });
            item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
                if ($1[0] === ID_SELECTOR) {
                    // id 选择器
                    selector.id = $1.substr(1);
                }
                else if ($1[0] === CLASS_SELECTOR) {
                    // class 选择器
                    selector.class.push($1.substr(1));
                }
                return '';
            });
            // 标签选择器
            if (item !== '') {
                selector.tag = item;
            }
            return selector;
        });
        return selectors;
    }
    matchStyle(tagName, el, list) {
        const res = sortStyles(this.styles).reduce((str, { content, selectorList }, i) => {
            let idx = list[i];
            let selector = selectorList[idx];
            const nextSelector = selectorList[idx + 1];
            if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
                selector = nextSelector;
                idx += 1;
                list[i] += 1;
            }
            let isMatch = this.matchCurrent(tagName, el, selector);
            if (isMatch && selector.isGeneralSibling) {
                let prev = getPreviousElement(el);
                while (prev) {
                    if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
                        isMatch = true;
                        break;
                    }
                    prev = getPreviousElement(prev);
                    isMatch = false;
                }
            }
            if (isMatch && selector.isAdjacentSibling) {
                const prev = getPreviousElement(el);
                if (!prev || !prev.h5tagName) {
                    isMatch = false;
                }
                else {
                    const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
                    if (!isSiblingMatch) {
                        isMatch = false;
                    }
                }
            }
            if (isMatch) {
                if (idx === selectorList.length - 1) {
                    return str + content;
                }
                else if (idx < selectorList.length - 1) {
                    list[i] += 1;
                }
            }
            else {
                // 直接子代组合器: >
                if (selector.isChild && idx > 0) {
                    list[i] -= 1;
                    if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
                        list[i] += 1;
                    }
                }
            }
            return str;
        }, '');
        return res;
    }
    matchCurrent(tagName, el, selector) {
        // 标签选择器
        if (selector.tag && selector.tag !== tagName)
            return false;
        // id 选择器
        if (selector.id && selector.id !== el.id)
            return false;
        // class 选择器
        if (selector.class.length) {
            const classList = el.className.split(' ');
            for (let i = 0; i < selector.class.length; i++) {
                const cls = selector.class[i];
                if (classList.indexOf(cls) === -1) {
                    return false;
                }
            }
        }
        // 属性选择器
        if (selector.attrs.length) {
            for (let i = 0; i < selector.attrs.length; i++) {
                const { all, key, value } = selector.attrs[i];
                if (all && !el.hasAttribute(key)) {
                    return false;
                }
                else {
                    const attr = el.getAttribute(key);
                    if (attr !== unquote(value || '')) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
function getPreviousElement(el) {
    const parent = el.parentElement;
    if (!parent)
        return null;
    const prev = el.previousSibling;
    if (!prev)
        return null;
    if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
        return prev;
    }
    else {
        return getPreviousElement(prev);
    }
}
// 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
function sortStyles(styles) {
    return styles.sort((s1, s2) => {
        const hundreds1 = getHundredsWeight(s1.selectorList);
        const hundreds2 = getHundredsWeight(s2.selectorList);
        if (hundreds1 !== hundreds2)
            return hundreds1 - hundreds2;
        const tens1 = getTensWeight(s1.selectorList);
        const tens2 = getTensWeight(s2.selectorList);
        if (tens1 !== tens2)
            return tens1 - tens2;
        const ones1 = getOnesWeight(s1.selectorList);
        const ones2 = getOnesWeight(s2.selectorList);
        return ones1 - ones2;
    });
}
function getHundredsWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
}
function getTensWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
}
function getOnesWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
}

function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return val => !!map[val.toLowerCase()] ;
}
const specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
const internalCompsList = Object.keys(internalComponents)
    .map(i => i.toLowerCase())
    .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap(internalCompsList);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b');
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt');

const closingTagAncestorBreakers = {
    li: ['ul', 'ol', 'menu'],
    dt: ['dl'],
    dd: ['dl'],
    tbody: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table'],
    td: ['table']
};
function hasTerminalParent(tagName, stack) {
    const tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            const parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) {
                break;
            }
            if (tagParents && tagParents.includes(parentTagName)) {
                return true;
            }
            currentIndex--;
        }
    }
    return false;
}
function getTagName(tag) {
    if (options.html.renderHTMLTag) {
        return tag;
    }
    if (specialMiniElements[tag]) {
        return specialMiniElements[tag];
    }
    else if (isMiniElements(tag)) {
        return tag;
    }
    else if (isBlockElements(tag)) {
        return 'view';
    }
    else if (isInlineElements(tag)) {
        return 'text';
    }
    return 'view';
}
function splitEqual(str) {
    const sep = '=';
    const idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    const key = str.slice(0, idx).trim();
    const value = str.slice(idx + sep.length).trim();
    return [key, value];
}
function format(children, document, styleOptions, parent) {
    return children
        .filter(child => {
        // 过滤注释和空文本节点
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    })
        .map((child) => {
        // 文本节点
        if (child.type === 'text') {
            let text = document.createTextNode(child.content);
            if (isFunction(options.html.transformText)) {
                text = options.html.transformText(text, child);
            }
            parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
            return text;
        }
        const el = document.createElement(getTagName(child.tagName));
        el.h5tagName = child.tagName;
        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
        if (!options.html.renderHTMLTag) {
            el.className = `h5-${child.tagName}`;
        }
        for (let i = 0; i < child.attributes.length; i++) {
            const attr = child.attributes[i];
            const [key, value] = splitEqual(attr);
            if (key === 'class') {
                el.className += ' ' + unquote(value);
            }
            else if (key[0] === 'o' && key[1] === 'n') {
                continue;
            }
            else {
                el.setAttribute(key, value == null ? true : unquote(value));
            }
        }
        const { styleTagParser, descendantList } = styleOptions;
        const list = descendantList.slice();
        const style = styleTagParser.matchStyle(child.tagName, el, list);
        el.setAttribute('style', style + el.style.cssText);
        // console.log('style, ', style)
        format(child.children, document, {
            styleTagParser,
            descendantList: list
        }, el);
        if (isFunction(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html, document) {
    const styleTagParser = new StyleTagParser();
    html = styleTagParser.extractStyle(html);
    const tokens = new Scaner(html).scan();
    const root = { tagName: '', children: [], type: 'element', attributes: [] };
    const state = { tokens, options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children, document, {
        styleTagParser,
        descendantList: Array(styleTagParser.styles.length).fill(0)
    });
}
function parse(state) {
    const { tokens, stack } = state;
    let { cursor } = state;
    const len = tokens.length;
    let nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                const endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    break;
                cursor++;
            }
            if (shouldRewind) {
                stack.splice(index);
                break;
            }
            else {
                continue;
            }
        }
        const isClosingTag = options.html.closingElements.has(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let attrToken;
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                break;
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        const children = [];
        const element = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(element);
        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName, children });
            const innerState = { tokens, cursor, stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

options.html = {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set([
        '!doctype', 'area', 'base', 'br', 'col', 'command',
        'embed', 'hr', 'img', 'input', 'keygen', 'link',
        'meta', 'param', 'source', 'track', 'wbr'
    ]),
    closingElements: new Set([
        'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
        'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
    ]),
    renderHTMLTag: false
};
function setInnerHTML(element, html) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    const children = parser(html, element.ownerDocument);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

if ("mini" !== PLATFORM_TYPE.WEB && "mini" !== PLATFORM_TYPE.HARMONY) {
    {
        TaroNode.extend('innerHTML', {
            set(html) {
                setInnerHTML.call(this, this, html);
            },
            get() {
                return '';
            }
        });
    }
}

// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
class TaroEvent {
    constructor(type, opts, event) {
        this._stop = false;
        this._end = false;
        this.defaultPrevented = false;
        // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
        this.button = 0;
        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
        // here use hi-res timestamp
        this.timeStamp = Date.now();
        this.type = type.toLowerCase();
        this.mpEvent = event;
        this.bubbles = Boolean(opts && opts.bubbles);
        this.cancelable = Boolean(opts && opts.cancelable);
    }
    stopPropagation() {
        this._stop = true;
    }
    stopImmediatePropagation() {
        this._end = this._stop = true;
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    get target() {
        var _a, _b, _c, _d, _e;
        const cacheTarget = this.cacheTarget;
        if (!cacheTarget) {
            const target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
            const currentEle = env.document.getElementById(((_b = target.dataset) === null || _b === void 0 ? void 0 : _b.sid) || target.id || null);
            // Note：优先判断冒泡场景alipay的targetDataset的sid, 不然冒泡场景target属性吐出不对，其余拿取当前绑定id
            const element = env.document.getElementById(((_c = target.targetDataset) === null || _c === void 0 ? void 0 : _c.sid) || ((_d = target.dataset) === null || _d === void 0 ? void 0 : _d.sid) || target.id || null);
            target.dataset = Object.assign(Object.assign({}, (currentEle !== null ? currentEle.dataset : EMPTY_OBJ)), (element !== null ? element.dataset : EMPTY_OBJ));
            for (const key in (_e = this.mpEvent) === null || _e === void 0 ? void 0 : _e.detail) {
                target[key] = this.mpEvent.detail[key];
            }
            this.cacheTarget = target;
            return target;
        }
        else {
            return cacheTarget;
        }
    }
    get currentTarget() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const cacheCurrentTarget = this.cacheCurrentTarget;
        if (!cacheCurrentTarget) {
            const doc = env.document;
            const currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
            const element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
            const targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
            if (element === null || (element && element === targetElement)) {
                this.cacheCurrentTarget = this.target;
                return this.target;
            }
            currentTarget.dataset = element.dataset;
            for (const key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
                currentTarget[key] = this.mpEvent.detail[key];
            }
            this.cacheCurrentTarget = currentTarget;
            return currentTarget;
        }
        else {
            return cacheCurrentTarget;
        }
    }
}
function createEvent(event, node) {
    if (typeof event === 'string') {
        // For Vue3 using document.createEvent
        return new TaroEvent(event, { bubbles: true, cancelable: true });
    }
    const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
    for (const key in event) {
        if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
            continue;
        }
        else {
            domEv[key] = event[key];
        }
    }
    if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
        // eslint-disable-next-line dot-notation
        domEv[KEY_CODE] = 13;
    }
    return domEv;
}
const eventsBatch = {};
function getEventCBResult(event) {
    const result = event[EVENT_CALLBACK_RESULT];
    if (!isUndefined(result)) {
        delete event[EVENT_CALLBACK_RESULT];
    }
    return result;
}
// 小程序的事件代理回调函数
function eventHandler(event) {
    var _a, _b;
    // Note: ohos 上事件没有设置 type、detail 类型 setter 方法，且部分事件（例如 load 等）缺失 target 导致事件错误
    event.type === undefined && Object.defineProperty(event, 'type', {
        value: event._type // ohos only
    });
    event.detail === undefined && Object.defineProperty(event, 'detail', {
        value: event._detail || Object.assign({}, event) // ohos only
    });
    event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
    hooks.call('modifyMpEventImpl', event);
    const currentTarget = event.currentTarget;
    const id = ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid /** sid */) || currentTarget.id /** uid */ || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || '';
    const node = env.document.getElementById(id);
    if (node) {
        const dispatch = () => {
            const e = createEvent(event, node);
            hooks.call('modifyTaroEvent', e, node);
            hooks.call('dispatchTaroEvent', e, node);
            hooks.call('dispatchTaroEventFinish', e, node);
        };
        if (hooks.isExist('batchedEventUpdates')) {
            const type = event.type;
            if (!hooks.call('isBubbleEvents', type) ||
                !isParentBinded(node, type) ||
                (type === TOUCHMOVE && !!node.props.catchMove)) {
                // 最上层组件统一 batchUpdate
                hooks.call('batchedEventUpdates', () => {
                    if (eventsBatch[type]) {
                        eventsBatch[type].forEach(fn => fn());
                        delete eventsBatch[type];
                    }
                    dispatch();
                });
                return getEventCBResult(event);
            }
            else {
                // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
            }
        }
        else {
            dispatch();
            return getEventCBResult(event);
        }
    }
}

class FormElement extends TaroElement {
    get type() {
        var _a;
        return (_a = this.props[TYPE]) !== null && _a !== void 0 ? _a : '';
    }
    set type(val) {
        this.setAttribute(TYPE, val);
    }
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props[VALUE];
        return val == null ? '' : val;
    }
    set value(val) {
        this.setAttribute(VALUE, val);
    }
    dispatchEvent(event) {
        if (event.mpEvent) {
            const val = event.mpEvent.detail.value;
            if (event.type === CHANGE) {
                this.props.value = val;
            }
            else if (event.type === INPUT) {
                // Web 规范中表单组件的 value 应该跟着输入改变
                // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
                // 只测试了 React、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
                this.value = val;
            }
        }
        return super.dispatchEvent(event);
    }
}

function throttle(fn, threshold = 250, scope) {
    let lastTime = 0;
    let deferTimer;
    return function (...args) {
        const context = scope || this;
        const now = Date.now();
        if (now - lastTime > threshold) {
            fn.apply(this, args);
            lastTime = now;
        }
        else {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(() => {
                lastTime = now;
                fn.apply(context, args);
            }, threshold);
        }
    };
}
function debounce(fn, ms = 250, scope) {
    let timer;
    return function (...args) {
        const context = scope || this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, ms);
    };
}

var _Performance_instances, _Performance_parseTime;
class Performance {
    constructor() {
        _Performance_instances.add(this);
        this.recorder = new Map();
    }
    start(id) {
        if (!options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id, now = Date.now()) {
        if (!options.debug) {
            return;
        }
        const prev = this.recorder.get(id);
        if (!(prev >= 0))
            return;
        this.recorder.delete(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms 开始时间：${__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, prev)} 结束时间：${__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, now)}`);
    }
    delayStop(id, delay = 500) {
        if (!options.debug) {
            return;
        }
        return debounce((now = Date.now(), cb) => {
            this.stop(id, now);
            cb === null || cb === void 0 ? void 0 : cb();
        }, delay);
    }
}
_Performance_instances = new WeakSet(), _Performance_parseTime = function _Performance_parseTime(time) {
    const d = new Date(time);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${`${d.getMilliseconds()}`.padStart(3, '0')}`;
};
const perf = new Performance();

function findCustomWrapper(root, dataPathArr) {
    // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
    const list = dataPathArr.slice(1);
    let currentData = root;
    let customWrapper;
    let splitedPath = '';
    list.some((item, i) => {
        const key = item
            // '[0]' => '0'
            .replace(/^\[(.+)\]$/, '$1')
            // 'cn' => 'childNodes'
            .replace(/\bcn\b/g, 'childNodes');
        currentData = currentData[key];
        if (isArray(currentData)) {
            currentData = currentData.filter(el => !isComment(el));
        }
        if (isUndefined(currentData))
            return true;
        if (currentData.nodeName === CUSTOM_WRAPPER) {
            const res = customWrapperCache.get(currentData.sid);
            if (res) {
                customWrapper = res;
                splitedPath = dataPathArr.slice(i + 2).join('.');
            }
        }
    });
    if (customWrapper) {
        return {
            customWrapper,
            splitedPath
        };
    }
}
class TaroRootElement extends TaroElement {
    constructor() {
        super();
        this.updatePayloads = [];
        this.updateCallbacks = [];
        this.pendingUpdate = false;
        this.ctx = null;
        this.nodeName = ROOT_STR;
        this.tagName = ROOT_STR.toUpperCase();
    }
    get _path() {
        return ROOT_STR;
    }
    get _root() {
        return this;
    }
    scheduleTask(fn) {
        // 这里若使用微任务可略微提前setData的执行时机，但在部分场景下可能会出现连续setData两次，造成更大的性能问题
        setTimeout(fn);
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (!this.pendingUpdate && this.ctx) {
            this.performUpdate();
        }
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = hooks.call('proxyToRaw', this.ctx);
        this.scheduleTask(() => {
            const setDataMark = `${SET_DATA} 开始时间戳 ${Date.now()}`;
            perf.start(setDataMark);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith("cn" /* Shortcuts.Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if (isFunction(value)) {
                    data[path] = value();
                }
            }
            // 预渲染
            if (isFunction(prerender))
                return prerender(data);
            // 正常渲染
            this.pendingUpdate = false;
            let normalUpdate = {};
            const customWrapperMap = new Map();
            if (initRender) {
                // 初次渲染，使用页面级别的 setData
                normalUpdate = data;
            }
            else {
                // 更新渲染，区分 CustomWrapper 与页面级别的 setData
                for (const p in data) {
                    const dataPathArr = p.split('.');
                    const found = findCustomWrapper(this, dataPathArr);
                    if (found) {
                        // 此项数据使用 CustomWrapper 去更新
                        const { customWrapper, splitedPath } = found;
                        // 合并同一个 customWrapper 的相关更新到一次 setData 中
                        customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, (customWrapperMap.get(customWrapper) || {})), { [`i.${splitedPath}`]: data[p] }));
                    }
                    else {
                        // 此项数据使用页面去更新
                        normalUpdate[p] = data[p];
                    }
                }
            }
            const customWrapperCount = customWrapperMap.size;
            const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
            const updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
            let executeTime = 0;
            const cb = () => {
                if (++executeTime === updateArrLen) {
                    perf.stop(setDataMark);
                    this.flushUpdateCallback();
                    initRender && perf.stop(PAGE_INIT);
                }
            };
            // custom-wrapper setData
            if (customWrapperCount) {
                customWrapperMap.forEach((data, ctx) => {
                    ctx.setData(data, cb);
                });
            }
            // page setData
            if (isNeedNormalUpdate) {
                ctx.setData(normalUpdate, cb);
            }
        });
    }
    enqueueUpdateCallback(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        const updateCallbacks = this.updateCallbacks;
        if (!updateCallbacks.length)
            return;
        const copies = updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

class TaroText extends TaroNode {
    constructor(value) {
        super();
        this.nodeType = 3 /* NodeType.TEXT_NODE */;
        this.nodeName = '#text';
        this._value = value;
    }
    set textContent(text) {
        MutationObserver.record({
            target: this,
            type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
            oldValue: this._value
        });
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${"v" /* Shortcuts.Text */}`,
            value: text
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
    set data(text) {
        this.textContent = text;
    }
    get data() {
        return this._value;
    }
}

class AnchorElement extends TaroElement {
    get href() {
        var _a;
        return (_a = this.props["href" /* AnchorElementAttrs.HREF */]) !== null && _a !== void 0 ? _a : '';
    }
    set href(val) {
        this.setAttribute("href" /* AnchorElementAttrs.HREF */, val);
    }
    get protocol() {
        var _a;
        return (_a = this.props["protocol" /* AnchorElementAttrs.PROTOCOL */]) !== null && _a !== void 0 ? _a : '';
    }
    get host() {
        var _a;
        return (_a = this.props["host" /* AnchorElementAttrs.HOST */]) !== null && _a !== void 0 ? _a : '';
    }
    get search() {
        var _a;
        return (_a = this.props["search" /* AnchorElementAttrs.SEARCH */]) !== null && _a !== void 0 ? _a : '';
    }
    get hash() {
        var _a;
        return (_a = this.props["hash" /* AnchorElementAttrs.HASH */]) !== null && _a !== void 0 ? _a : '';
    }
    get hostname() {
        var _a;
        return (_a = this.props["hostname" /* AnchorElementAttrs.HOSTNAME */]) !== null && _a !== void 0 ? _a : '';
    }
    get port() {
        var _a;
        return (_a = this.props["port" /* AnchorElementAttrs.PORT */]) !== null && _a !== void 0 ? _a : '';
    }
    get pathname() {
        var _a;
        return (_a = this.props["pathname" /* AnchorElementAttrs.PATHNAME */]) !== null && _a !== void 0 ? _a : '';
    }
    setAttribute(qualifiedName, value) {
        if (qualifiedName === "href" /* AnchorElementAttrs.HREF */) {
            const willSetAttr = parseUrl(value);
            for (const k in willSetAttr) {
                super.setAttribute(k, willSetAttr[k]);
            }
        }
        else {
            super.setAttribute(qualifiedName, value);
        }
    }
}

class TransferElement extends TaroElement {
    constructor(dataName) {
        super();
        this.dataName = dataName;
        this.isTransferElement = true;
    }
    get _path() {
        return this.dataName;
    }
}

class TaroDocument extends TaroElement {
    constructor() {
        super();
        this.createEvent = createEvent;
        this.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
        this.nodeName = DOCUMENT_ELEMENT_NAME;
    }
    createElement(type) {
        const nodeName = type.toLowerCase();
        let element;
        switch (true) {
            case nodeName === ROOT_STR:
                element = new TaroRootElement();
                return element;
            case controlledComponent.has(nodeName):
                element = new FormElement();
                break;
            case nodeName === A$1:
                element = new AnchorElement();
                break;
            case nodeName === 'page-meta':
            case nodeName === 'navigation-bar':
                element = new TransferElement(toCamelCase(nodeName));
                break;
            default:
                element = new TaroElement();
                break;
        }
        element.nodeName = nodeName;
        element.tagName = type.toUpperCase();
        return element;
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
    createElementNS(_svgNS, type) {
        return this.createElement(type);
    }
    createTextNode(text) {
        return new TaroText(text);
    }
    getElementById(id) {
        const el = eventSource.get(id);
        return isUndefined(el) ? null : el;
    }
    querySelector(query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    }
    querySelectorAll() {
        // fake hack
        return [];
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        const textnode = new TaroText('');
        textnode.nodeName = COMMENT;
        return textnode;
    }
    get defaultView() {
        return env.window;
    }
}

function createDocument() {
    /**
       * <document>
       *   <html>
       *     <head></head>
       *     <body>
       *       <container>
       *         <app id="app" />
       *       </container>
       *     </body>
       *   </html>
       * </document>
       */
    const doc = new TaroDocument();
    const documentCreateElement = doc.createElement.bind(doc);
    const html = documentCreateElement(HTML);
    const head = documentCreateElement(HEAD);
    const body = documentCreateElement(BODY);
    const app = documentCreateElement(APP);
    app.id = APP;
    const container = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
    doc.appendChild(html);
    html.appendChild(head);
    html.appendChild(body);
    body.appendChild(container);
    container.appendChild(app);
    doc.documentElement = html;
    doc.head = head;
    doc.body = body;
    return doc;
}
// Note: 小程序端 vite 打包成 commonjs，const document = xxx 会报错，所以把 document 改为 taroDocumentProvider
const taroDocumentProvider = (env.document = createDocument());

// for Vue3
class SVGElement extends TaroElement {
}

// export const removeLeadingSlash = (str = '') => str.replace(/^\.?\//, '')
// export const removeTrailingSearch = (str = '') => str.replace(/\?[\s\S]*$/, '')
const addLeadingSlash = (url = '') => (url.charAt(0) === '/' ? url : '/' + url);
const hasBasename = (path = '', prefix = '') => new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path) || path === prefix;
const stripBasename = (path = '', prefix = '') => hasBasename(path, prefix) ? path.substring(prefix.length) : path;
const stripTrailing = (str = '') => str.replace(/[?#][\s\S]*$/, '');
const stripSuffix = (path = '', suffix = '') => path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
const getHomePage = (path = '', basename = '', customRoutes = {}, entryPagePath = '') => {
    var _a;
    const routePath = addLeadingSlash(stripBasename(path, basename));
    const alias = ((_a = Object.entries(customRoutes).find(([key]) => key === routePath)) === null || _a === void 0 ? void 0 : _a[1]) || routePath;
    return entryPagePath || (typeof alias === 'string' ? alias : alias[0]) || basename;
};
const getCurrentPage = (routerMode = 'hash', basename = '/') => {
    const pagePath = routerMode === 'hash'
        ? taroLocationProvider.hash.slice(1).split('?')[0]
        : taroLocationProvider.pathname;
    return addLeadingSlash(stripBasename(pagePath, basename));
};

/* eslint-disable dot-notation */
const instances = new Map();
const pageId = incrementId();
function injectPageInstance(inst, id) {
    hooks.call('mergePageInstance', instances.get(id), inst);
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function removePageInstance(id) {
    instances.delete(id);
}
function safeExecute(path, lifecycle, ...args) {
    const instance = instances.get(path);
    if (instance == null) {
        return;
    }
    const func = hooks.call('getLifecycle', instance, lifecycle);
    if (isArray(func)) {
        const res = func.map(fn => fn.apply(instance, args));
        return res[0];
    }
    if (!isFunction(func)) {
        return;
    }
    return func.apply(instance, args);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    const path = Object.keys(obj).map((key) => {
        return key + '=' + obj[key];
    }).join('&');
    return path === '' ? path : '?' + path;
}
function getPath(id, options) {
    const idx = id.indexOf('?');
    {
        return `${idx > -1 ? id.substring(0, idx) : id}${stringify(options)}`;
    }
}
function getOnReadyEventKey(path) {
    return path + '.' + ON_READY;
}
function getOnShowEventKey(path) {
    return path + '.' + ON_SHOW;
}
function getOnHideEventKey(path) {
    return path + '.' + ON_HIDE;
}
function createPageConfig(component, pageName, data, pageConfig) {
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
    const [ONLOAD, ONUNLOAD, ONREADY, ONSHOW, ONHIDE, LIFECYCLES, SIDE_EFFECT_LIFECYCLES,] = hooks.call('getMiniLifecycleImpl').page;
    let pageElement = null;
    let unmounting = false;
    let prepareMountList = [];
    function setCurrentRouter(page) {
        const router = page.route || page.__route__ || page.$taroPath;
        Current.router = {
            params: page.$taroParams,
            path: addLeadingSlash(router),
            $taroPath: page.$taroPath,
            onReady: getOnReadyEventKey(id),
            onShow: getOnShowEventKey(id),
            onHide: getOnHideEventKey(id)
        };
        if (!isUndefined(page.exitState)) {
            Current.router.exitState = page.exitState;
        }
    }
    let loadResolver;
    let hasLoaded;
    const config = {
        [ONLOAD](options = {}, cb) {
            hasLoaded = new Promise(resolve => { loadResolver = resolve; });
            perf.start(PAGE_INIT);
            Current.page = this;
            this.config = pageConfig || {};
            // this.$taroPath 是页面唯一标识
            const uniqueOptions = Object.assign({}, options, { $taroTimestamp: Date.now() });
            const $taroPath = this.$taroPath = getPath(id, uniqueOptions);
            // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
            if (this.$taroParams == null) {
                this.$taroParams = uniqueOptions;
            }
            setCurrentRouter(this);
            // 初始化当前页面的上下文信息
            {
                taroWindowProvider.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
            }
            const mount = () => {
                Current.app.mount(component, $taroPath, () => {
                    pageElement = env.document.getElementById($taroPath);
                    ensure(pageElement !== null, '没有找到页面实例。');
                    safeExecute($taroPath, ON_LOAD, this.$taroParams);
                    loadResolver();
                    {
                        pageElement.ctx = this;
                        pageElement.performUpdate(true, cb);
                    }
                });
            };
            if (unmounting) {
                prepareMountList.push(mount);
            }
            else {
                mount();
            }
        },
        [ONUNLOAD]() {
            const $taroPath = this.$taroPath;
            // 销毁当前页面的上下文信息
            {
                taroWindowProvider.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
            }
            // 触发onUnload生命周期
            safeExecute($taroPath, ONUNLOAD);
            unmounting = true;
            Current.app.unmount($taroPath, () => {
                unmounting = false;
                instances.delete($taroPath);
                if (pageElement) {
                    pageElement.ctx = null;
                    pageElement = null;
                }
                if (prepareMountList.length) {
                    prepareMountList.forEach(fn => fn());
                    prepareMountList = [];
                }
            });
        },
        [ONREADY]() {
            hasLoaded.then(() => {
                // 触发生命周期
                safeExecute(this.$taroPath, ON_READY);
                // 通过事件触发子组件的生命周期
                _raf(() => eventCenter.trigger(getOnReadyEventKey(id)));
                this.onReady.called = true;
            });
        },
        [ONSHOW](options = {}) {
            hasLoaded.then(() => {
                // 设置 Current 的 page 和 router
                Current.page = this;
                setCurrentRouter(this);
                // 恢复上下文信息
                {
                    taroWindowProvider.trigger(CONTEXT_ACTIONS.RECOVER, this.$taroPath);
                }
                // 触发生命周期
                safeExecute(this.$taroPath, ON_SHOW, options);
                // 通过事件触发子组件的生命周期
                _raf(() => eventCenter.trigger(getOnShowEventKey(id)));
            });
        },
        [ONHIDE]() {
            // 缓存当前页面上下文信息
            {
                taroWindowProvider.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
            }
            // 设置 Current 的 page 和 router
            if (Current.page === this) {
                Current.page = null;
                Current.router = null;
            }
            // 触发生命周期
            safeExecute(this.$taroPath, ON_HIDE);
            // 通过事件触发子组件的生命周期
            eventCenter.trigger(getOnHideEventKey(id));
        }
    };
    LIFECYCLES.forEach((lifecycle) => {
        let isDefer = false;
        lifecycle = lifecycle.replace(/^defer:/, () => {
            isDefer = true;
            return '';
        });
        config[lifecycle] = function () {
            const exec = () => safeExecute(this.$taroPath, lifecycle, ...arguments);
            if (isDefer) {
                hasLoaded.then(exec);
            }
            else {
                return exec();
            }
        };
    });
    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
    SIDE_EFFECT_LIFECYCLES.forEach(lifecycle => {
        var _a;
        if (component[lifecycle] ||
            ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) ||
            component[lifecycle.replace(/^on/, 'enable')] ||
            (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, 'enable')])) {
            config[lifecycle] = function (...args) {
                var _a;
                const target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
                if (target === null || target === void 0 ? void 0 : target.id) {
                    const id = target.id;
                    const element = env.document.getElementById(id);
                    if (element) {
                        target.dataset = element.dataset;
                    }
                }
                return safeExecute(this.$taroPath, lifecycle, ...args);
            };
        }
    });
    config.eh = eventHandler;
    if (!isUndefined(data)) {
        config.data = data;
    }
    hooks.call('modifyPageObject', config);
    return config;
}
function createComponentConfig(component, componentName, data) {
    const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
    let componentElement = null;
    const [ATTACHED, DETACHED] = hooks.call('getMiniLifecycleImpl').component;
    const config = {
        [ATTACHED]() {
            var _a;
            perf.start(PAGE_INIT);
            this.pageIdCache = ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId();
            const path = getPath(id, { id: this.pageIdCache });
            Current.app.mount(component, path, () => {
                componentElement = env.document.getElementById(path);
                ensure(componentElement !== null, '没有找到组件实例。');
                this.$taroInstances = instances.get(path);
                safeExecute(path, ON_LOAD);
                {
                    componentElement.ctx = this;
                    componentElement.performUpdate(true);
                }
            });
        },
        [DETACHED]() {
            const path = getPath(id, { id: this.pageIdCache });
            Current.app.unmount(path, () => {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        methods: {
            eh: eventHandler
        }
    };
    if (!isUndefined(data)) {
        config.data = data;
    }
    [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(key => {
        var _a;
        config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : EMPTY_OBJ;
    });
    return config;
}
function createRecursiveComponentConfig(componentName) {
    const isCustomWrapper = componentName === CUSTOM_WRAPPER;
    const [ATTACHED, DETACHED] = hooks.call('getMiniLifecycleImpl').component;
    const lifeCycles = isCustomWrapper
        ? {
            [ATTACHED]() {
                var _a, _b;
                const componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
                if (isString(componentId)) {
                    customWrapperCache.set(componentId, this);
                    const el = env.document.getElementById(componentId);
                    if (el) {
                        el.ctx = this;
                    }
                }
            },
            [DETACHED]() {
                var _a, _b;
                const componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
                if (isString(componentId)) {
                    customWrapperCache.delete(componentId);
                    const el = env.document.getElementById(componentId);
                    if (el) {
                        el.ctx = null;
                    }
                }
            }
        }
        : EMPTY_OBJ;
    return hooks.call('modifyRecursiveComponentConfig', Object.assign({ properties: {
            i: {
                type: Object,
                value: {
                    ["nn" /* Shortcuts.NodeName */]: getComponentsAlias$1(internalComponents)[VIEW]._num
                }
            },
            l: {
                type: String,
                value: ''
            }
        }, options: {
            virtualHost: !isCustomWrapper
        }, methods: {
            eh: eventHandler
        } }, lifeCycles), { isCustomWrapper });
}

const TIMEOUT = 100;
const nextTick = (cb, ctx) => {
    const beginTime = Date.now();
    const router = Current.router;
    const timerFunc = () => {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router === null)
        return timerFunc();
    const path = router.$taroPath;
    /**
     * 三种情况
     *   1. 调用 nextTick 时，pendingUpdate 已经从 true 变为 false（即已更新完成），那么需要光等 100ms
     *   2. 调用 nextTick 时，pendingUpdate 为 true，那么刚好可以搭上便车
     *   3. 调用 nextTick 时，pendingUpdate 还是 false，框架仍未启动更新逻辑，这时最多轮询 100ms，等待 pendingUpdate 变为 true。
     */
    function next() {
        const pageElement = env.document.getElementById(path);
        if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
            {
                pageElement.enqueueUpdateCallback(cb, ctx);
            }
        }
        else if (Date.now() - beginTime > TIMEOUT) {
            timerFunc();
        }
        else {
            setTimeout(() => next(), 20);
        }
    }
    next();
};

function handlePolyfill() {
}

const dist$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    A: A$1,
    APP,
    BEHAVIORS,
    BODY,
    CATCHMOVE,
    CATCH_VIEW,
    CHANGE,
    CLASS,
    CLICK_VIEW,
    COMMENT,
    COMPILE_MODE,
    CONFIRM,
    CONTAINER,
    get CONTEXT_ACTIONS () { return CONTEXT_ACTIONS; },
    CURRENT_TARGET,
    CUSTOM_WRAPPER,
    Current,
    DATASET,
    DATE,
    DOCUMENT_ELEMENT_NAME,
    DOCUMENT_FRAGMENT,
    EVENT_CALLBACK_RESULT,
    EXTERNAL_CLASSES,
    Events,
    FOCUS,
    FormElement,
    HEAD,
    HOOKS_APP_ID: HOOKS_APP_ID$1,
    HTML,
    History,
    ID,
    INPUT,
    KEY_CODE,
    Location,
    MutationObserver,
    OBJECT,
    ON_HIDE,
    ON_LOAD,
    ON_READY,
    ON_SHOW,
    OPTIONS,
    PAGE_INIT,
    PROPERTY_THRESHOLD,
    PROPS,
    PURE_VIEW,
    ROOT_STR,
    SET_DATA,
    SET_TIMEOUT,
    STATIC_VIEW,
    STYLE,
    SVGElement,
    Style,
    TARGET,
    TARO_RUNTIME,
    TIME_STAMP,
    TOUCHMOVE,
    TYPE,
    TaroElement,
    TaroEvent,
    TaroNode,
    TaroRootElement,
    TaroText,
    UID,
    URL: TaroURLProvider,
    URLSearchParams,
    VALUE,
    VIEW,
    addLeadingSlash,
    cancelAnimationFrame: _caf,
    convertNumber2PX,
    createComponentConfig,
    createEvent,
    createPageConfig,
    createRecursiveComponentConfig,
    customWrapperCache,
    debounce,
    document: taroDocumentProvider,
    env,
    eventCenter,
    eventHandler,
    eventSource,
    extend,
    getComponentsAlias,
    getComputedStyle: taroGetComputedStyleProvider,
    getCurrentInstance,
    getCurrentPage,
    getHomePage,
    getOnHideEventKey,
    getOnReadyEventKey,
    getOnShowEventKey,
    getPageInstance,
    getPath,
    handlePolyfill,
    hasBasename,
    history: taroHistoryProvider,
    hooks,
    hydrate,
    incrementId,
    injectPageInstance,
    isComment,
    isElement,
    isHasExtractProp,
    isParentBinded,
    isText,
    location: taroLocationProvider,
    navigator: nav,
    nextTick,
    get now () { return now; },
    options,
    parseUrl,
    perf,
    removePageInstance,
    requestAnimationFrame: _raf,
    safeExecute,
    shortcutAttr,
    stringify,
    stripBasename,
    stripSuffix,
    stripTrailing,
    throttle,
    window: taroWindowProvider
}, Symbol.toStringTag, { value: 'Module' }));

const reactMeta = {
    PageContext: EMPTY_OBJ,
    R: EMPTY_OBJ,
};

const HOOKS_APP_ID = 'taro-app';
function isClassComponent(R, component) {
    var _a;
    const prototype = component.prototype;
    // For React Redux
    if ((_a = component.displayName) === null || _a === void 0 ? void 0 : _a.includes('Connect'))
        return false;
    return (isFunction(component.render) ||
        !!(prototype === null || prototype === void 0 ? void 0 : prototype.isReactComponent) ||
        prototype instanceof R.Component // compat for some others react-like library
    );
}
function ensureIsArray(item) {
    if (isArray(item)) {
        return item;
    }
    else {
        return item ? [item] : [];
    }
}
/**
 * set writable, enumerable to true
 */
function setDefaultDescriptor(obj) {
    obj.writable = true;
    obj.enumerable = true;
    return obj;
}
/**
 * 设置入口的路由参数
 * @param options 小程序传入的参数
 */
function setRouterParams(options) {
    Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
}

const createTaroHook = (lifecycle) => {
    return (fn) => {
        const { R: React, PageContext } = reactMeta;
        const id = React.useContext(PageContext) || HOOKS_APP_ID;
        const instRef = React.useRef();
        // hold fn ref and keep up to date
        const fnRef = React.useRef(fn);
        if (fnRef.current !== fn)
            fnRef.current = fn;
        React.useLayoutEffect(() => {
            let inst = instRef.current = getPageInstance(id);
            let first = false;
            if (!inst) {
                first = true;
                instRef.current = Object.create(null);
                inst = instRef.current;
            }
            // callback is immutable but inner function is up to date
            const callback = (...args) => fnRef.current(...args);
            if (isFunction(inst[lifecycle])) {
                (inst[lifecycle]) = [inst[lifecycle], callback];
            }
            else {
                (inst[lifecycle]) = [
                    ...((inst[lifecycle]) || []),
                    callback
                ];
            }
            if (first) {
                injectPageInstance(inst, id);
            }
            return () => {
                const inst = instRef.current;
                if (!inst)
                    return;
                const list = inst[lifecycle];
                if (list === callback) {
                    (inst[lifecycle]) = undefined;
                }
                else if (isArray(list)) {
                    (inst[lifecycle]) = list.filter(item => item !== callback);
                }
                instRef.current = undefined;
            };
        }, []);
    };
};
/** LifeCycle */
const useDidHide = createTaroHook('componentDidHide');
const useDidShow = createTaroHook('componentDidShow');
/** App */
const useError = createTaroHook('onError');
const useUnhandledRejection = createTaroHook('onUnhandledRejection');
const useLaunch = createTaroHook('onLaunch');
const usePageNotFound = createTaroHook('onPageNotFound');
/** Page */
const useLoad = createTaroHook('onLoad');
const usePageScroll = createTaroHook('onPageScroll');
const usePullDownRefresh = createTaroHook('onPullDownRefresh');
const usePullIntercept = createTaroHook('onPullIntercept');
const useReachBottom = createTaroHook('onReachBottom');
const useResize = createTaroHook('onResize');
const useUnload = createTaroHook('onUnload');
/** Mini-Program */
const useAddToFavorites = createTaroHook('onAddToFavorites');
const useOptionMenuClick = createTaroHook('onOptionMenuClick');
const useSaveExitState = createTaroHook('onSaveExitState');
const useShareAppMessage = createTaroHook('onShareAppMessage');
const useShareTimeline = createTaroHook('onShareTimeline');
const useTitleClick = createTaroHook('onTitleClick');
/** Router */
const useReady = createTaroHook('onReady');
const useRouter = (dynamic = false) => {
    const React = reactMeta.R;
    return dynamic ? Current.router : React.useMemo(() => Current.router, []);
};
const useTabItemTap = createTaroHook('onTabItemTap');
const useScope = () => undefined;

var taroHooks = /*#__PURE__*/Object.freeze({
    __proto__: null,
    useAddToFavorites: useAddToFavorites,
    useDidHide: useDidHide,
    useDidShow: useDidShow,
    useError: useError,
    useLaunch: useLaunch,
    useLoad: useLoad,
    useOptionMenuClick: useOptionMenuClick,
    usePageNotFound: usePageNotFound,
    usePageScroll: usePageScroll,
    usePullDownRefresh: usePullDownRefresh,
    usePullIntercept: usePullIntercept,
    useReachBottom: useReachBottom,
    useReady: useReady,
    useResize: useResize,
    useRouter: useRouter,
    useSaveExitState: useSaveExitState,
    useScope: useScope,
    useShareAppMessage: useShareAppMessage,
    useShareTimeline: useShareTimeline,
    useTabItemTap: useTabItemTap,
    useTitleClick: useTitleClick,
    useUnhandledRejection: useUnhandledRejection,
    useUnload: useUnload
});

let h$1;
let ReactDOM$1;
const pageKeyId = incrementId();
function setReconciler(ReactDOM) {
    hooks.tap('getLifecycle', function (instance, lifecycle) {
        lifecycle = lifecycle.replace(/^on(Show|Hide)$/, 'componentDid$1');
        return instance[lifecycle];
    });
    hooks.tap('modifyMpEvent', function (event) {
        // Note: ohos 上事件没有设置 type 类型 setter 方法导致报错
        Object.defineProperty(event, 'type', {
            value: event.type.replace(/-/g, '')
        });
    });
    hooks.tap('batchedEventUpdates', function (cb) {
        ReactDOM === null || ReactDOM === void 0 ? void 0 : ReactDOM.unstable_batchedUpdates(cb);
    });
    hooks.tap('mergePageInstance', function (prev, next) {
        if (!prev || !next)
            return;
        // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
        // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
        if ('constructor' in prev)
            return;
        Object.keys(prev).forEach(item => {
            const prevList = prev[item];
            const nextList = ensureIsArray(next[item]);
            next[item] = nextList.concat(prevList);
        });
    });
}
function connectReactPage(R, id) {
    return (Page) => {
        // eslint-disable-next-line dot-notation
        const isReactComponent = isClassComponent(R, Page);
        const inject = (node) => node && injectPageInstance(node, id);
        const refs = isReactComponent ? { ref: inject } : {
            forwardedRef: inject,
            // 兼容 react-redux 7.20.1+
            reactReduxForwardedRef: inject
        };
        if (reactMeta.PageContext === EMPTY_OBJ) {
            reactMeta.PageContext = R.createContext('');
        }
        return class PageWrapper extends R.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    hasError: false
                };
            }
            static getDerivedStateFromError(error) {
                var _a, _b;
                (_b = (_a = Current.app) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error.message + error.stack);
                return { hasError: true };
            }
            // React 16 uncaught error 会导致整个应用 crash，
            // 目前把错误缩小到页面
            componentDidCatch(error, info) {
            }
            render() {
                const children = this.state.hasError
                    ? []
                    : h$1(reactMeta.PageContext.Provider, { value: id }, h$1(Page, Object.assign(Object.assign({}, this.props), refs)));
                {
                    return h$1('root', { id }, children);
                }
            }
        };
    };
}
/**
 * 桥接小程序 App 构造器和 React 渲染流程
 * @param App 用户编写的入口组件
 * @param react 框架
 * @param dom 框架渲染器
 * @param config 入口组件配置 app.config.js 的内容
 * @returns 传递给 App 构造器的对象 obj ：App(obj)
 */
function createReactApp(App, react, dom, config) {
    reactMeta.R = react;
    h$1 = react.createElement;
    ReactDOM$1 = dom;
    react.Fragment;
    const appInstanceRef = react.createRef();
    const isReactComponent = isClassComponent(react, App);
    let appWrapper;
    let appWrapperResolver;
    const appWrapperPromise = new Promise(resolve => (appWrapperResolver = resolve));
    setReconciler(ReactDOM$1);
    function getAppInstance() {
        return appInstanceRef.current;
    }
    function waitAppWrapper(cb) {
        /**
         * 当同个事件触发多次时，waitAppWrapper 会出现同步和异步任务的执行顺序问题，
         * 导致某些场景下 onShow 会优于 onLaunch 执行
         */
        appWrapperPromise.then(() => cb());
        // appWrapper ? cb() : appWrapperPromise.then(() => cb())
    }
    function renderReactRoot() {
        var _a, _b;
        const appId = (config === null || config === void 0 ? void 0 : config.appId) || 'app';
        let container = taroDocumentProvider.getElementById(appId);
        if (container == null) {
            const appContainer = taroDocumentProvider.getElementById(CONTAINER);
            container = taroDocumentProvider.createElement(appId);
            container.id = appId;
            appContainer === null || appContainer === void 0 ? void 0 : appContainer.appendChild(container);
        }
        if ((react.version || '').startsWith('18')) {
            const root = ReactDOM$1.createRoot(container);
            (_a = root.render) === null || _a === void 0 ? void 0 : _a.call(root, h$1(AppWrapper));
        }
        else {
            // eslint-disable-next-line react/no-deprecated
            (_b = ReactDOM$1.render) === null || _b === void 0 ? void 0 : _b.call(ReactDOM$1, h$1(AppWrapper), container);
        }
    }
    class AppWrapper extends react.Component {
        constructor(props) {
            super(props);
            // run createElement() inside the render function to make sure that owner is right
            this.pages = [];
            this.elements = [];
            appWrapper = this;
            appWrapperResolver(this);
        }
        mount(pageComponent, id, cb) {
            const pageWrapper = connectReactPage(react, id)(pageComponent);
            const key = id + pageKeyId();
            const page = () => h$1(pageWrapper, { key, tid: id });
            this.pages.push(page);
            this.forceUpdate((...args) => {
                perf.stop(PAGE_INIT);
                return cb(...args);
            });
        }
        unmount(id, cb) {
            const elements = this.elements;
            const idx = elements.findIndex(item => item.props.tid === id);
            elements.splice(idx, 1);
            this.forceUpdate(cb);
        }
        render() {
            const { pages, elements } = this;
            while (pages.length > 0) {
                const page = pages.pop();
                elements.push(page());
            }
            let props = null;
            if (isReactComponent) {
                props = { ref: appInstanceRef };
            }
            return h$1(App, props, elements.slice());
        }
    }
    {
        renderReactRoot();
    }
    const [ONLAUNCH, ONSHOW, ONHIDE] = hooks.call('getMiniLifecycleImpl').app;
    const appObj = Object.create({
        render(cb) {
            appWrapper.forceUpdate(cb);
        },
        mount(component, id, cb) {
            if (appWrapper) {
                appWrapper.mount(component, id, cb);
            }
            else {
                appWrapperPromise.then(appWrapper => appWrapper.mount(component, id, cb));
            }
        },
        unmount(id, cb) {
            if (appWrapper) {
                appWrapper.unmount(id, cb);
            }
            else {
                appWrapperPromise.then(appWrapper => appWrapper.unmount(id, cb));
            }
        }
    }, {
        config: setDefaultDescriptor({
            configurable: true,
            value: config
        }),
        [ONLAUNCH]: setDefaultDescriptor({
            value(options) {
                setRouterParams(options);
                const onLaunch = () => {
                    var _a;
                    // 用户编写的入口组件实例
                    const app = getAppInstance();
                    this.$app = app;
                    if (app) {
                        // 把 App Class 上挂载的额外属性同步到全局 app 对象中
                        if (app.taroGlobalData) {
                            const globalData = app.taroGlobalData;
                            const keys = Object.keys(globalData);
                            const descriptors = Object.getOwnPropertyDescriptors(globalData);
                            keys.forEach(key => {
                                Object.defineProperty(this, key, {
                                    configurable: true,
                                    enumerable: true,
                                    get() {
                                        return globalData[key];
                                    },
                                    set(value) {
                                        globalData[key] = value;
                                    }
                                });
                            });
                            Object.defineProperties(this, descriptors);
                        }
                        (_a = app.onLaunch) === null || _a === void 0 ? void 0 : _a.call(app, options);
                    }
                    triggerAppHook('onLaunch', options);
                };
                waitAppWrapper(onLaunch);
            }
        }),
        [ONSHOW]: setDefaultDescriptor({
            value(options) {
                setRouterParams(options);
                const onShow = () => {
                    var _a;
                    /**
                    * trigger lifecycle
                    */
                    const app = getAppInstance();
                    // class component, componentDidShow
                    (_a = app === null || app === void 0 ? void 0 : app.componentDidShow) === null || _a === void 0 ? void 0 : _a.call(app, options);
                    // functional component, useDidShow
                    triggerAppHook('onShow', options);
                };
                waitAppWrapper(onShow);
            }
        }),
        [ONHIDE]: setDefaultDescriptor({
            value() {
                const onHide = () => {
                    var _a;
                    /**
                     * trigger lifecycle
                     */
                    const app = getAppInstance();
                    // class component, componentDidHide
                    (_a = app === null || app === void 0 ? void 0 : app.componentDidHide) === null || _a === void 0 ? void 0 : _a.call(app);
                    // functional component, useDidHide
                    triggerAppHook('onHide');
                };
                waitAppWrapper(onHide);
            }
        }),
        onError: setDefaultDescriptor({
            value(error) {
                const onError = () => {
                    var _a;
                    const app = getAppInstance();
                    (_a = app === null || app === void 0 ? void 0 : app.onError) === null || _a === void 0 ? void 0 : _a.call(app, error);
                    triggerAppHook('onError', error);
                };
                waitAppWrapper(onError);
            }
        }),
        onUnhandledRejection: setDefaultDescriptor({
            value(res) {
                const onUnhandledRejection = () => {
                    var _a;
                    const app = getAppInstance();
                    (_a = app === null || app === void 0 ? void 0 : app.onUnhandledRejection) === null || _a === void 0 ? void 0 : _a.call(app, res);
                    triggerAppHook('onUnhandledRejection', res);
                };
                waitAppWrapper(onUnhandledRejection);
            }
        }),
        onPageNotFound: setDefaultDescriptor({
            value(res) {
                const onPageNotFound = () => {
                    var _a;
                    const app = getAppInstance();
                    (_a = app === null || app === void 0 ? void 0 : app.onPageNotFound) === null || _a === void 0 ? void 0 : _a.call(app, res);
                    triggerAppHook('onPageNotFound', res);
                };
                waitAppWrapper(onPageNotFound);
            }
        })
    });
    function triggerAppHook(lifecycle, ...option) {
        const instance = getPageInstance(HOOKS_APP_ID);
        if (instance) {
            const app = getAppInstance();
            const func = hooks.call('getLifecycle', instance, lifecycle);
            if (Array.isArray(func)) {
                func.forEach(cb => cb.apply(app, option));
            }
        }
    }
    Current.app = appObj;
    return appObj;
}

incrementId();

hooks.tap('initNativeApi', function (taro) {
    for (const hook in taroHooks) {
        taro[hook] = taroHooks[hook];
    }
});

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a() {
      if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {
    value: true
  });
  Object.keys(n).forEach(function (k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function get() {
        return n[k];
      }
    });
  });
  return a;
}

var taro = {exports: {}};

const require$$0 = /*@__PURE__*/getAugmentedNamespace(dist$1);

const ENV_TYPE = {
    WEAPP: 'WEAPP',
    SWAN: 'SWAN',
    ALIPAY: 'ALIPAY',
    TT: 'TT',
    QQ: 'QQ',
    JD: 'JD',
    WEB: 'WEB',
    RN: 'RN',
    HARMONY: 'HARMONY',
    QUICKAPP: 'QUICKAPP',
    HARMONYHYBRID: 'HARMONYHYBRID',
};
function getEnv() {
    {
        return ENV_TYPE.WEAPP;
    }
}

class Chain {
    constructor(requestParams, interceptors, index) {
        this.index = index || 0;
        this.requestParams = requestParams || {};
        this.interceptors = interceptors || [];
    }
    proceed(requestParams = {}) {
        this.requestParams = requestParams;
        if (this.index >= this.interceptors.length) {
            throw new Error('chain 参数错误, 请勿直接修改 request.chain');
        }
        const nextInterceptor = this._getNextInterceptor();
        const nextChain = this._getNextChain();
        const p = nextInterceptor(nextChain);
        const res = p.catch(err => Promise.reject(err));
        Object.keys(p).forEach(k => isFunction(p[k]) && (res[k] = p[k]));
        return res;
    }
    _getNextInterceptor() {
        return this.interceptors[this.index];
    }
    _getNextChain() {
        return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
}

class Link {
    constructor(interceptor) {
        this.taroInterceptor = interceptor;
        this.chain = new Chain();
    }
    request(requestParams) {
        const chain = this.chain;
        const taroInterceptor = this.taroInterceptor;
        chain.interceptors = chain.interceptors
            .filter(interceptor => interceptor !== taroInterceptor)
            .concat(taroInterceptor);
        return chain.proceed(Object.assign({}, requestParams));
    }
    addInterceptor(interceptor) {
        this.chain.interceptors.push(interceptor);
    }
    cleanInterceptors() {
        this.chain = new Chain();
    }
}
function interceptorify(promiseifyApi) {
    return new Link(function (chain) {
        return promiseifyApi(chain.requestParams);
    });
}

function timeoutInterceptor(chain) {
    const requestParams = chain.requestParams;
    let p;
    const res = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            reject(new Error('网络链接超时,请稍后再试！'));
        }, (requestParams && requestParams.timeout) || 60000);
        p = chain.proceed(requestParams);
        p
            .then(res => {
            if (!timeout)
                return;
            clearTimeout(timeout);
            resolve(res);
        })
            .catch(err => {
            timeout && clearTimeout(timeout);
            reject(err);
        });
    });
    // @ts-ignore
    if (!isUndefined(p) && isFunction(p.abort))
        res.abort = p.abort;
    return res;
}
function logInterceptor(chain) {
    const requestParams = chain.requestParams;
    const { method, data, url } = requestParams;
    // eslint-disable-next-line no-console
    console.log(`http ${method || 'GET'} --> ${url} data: `, data);
    const p = chain.proceed(requestParams);
    const res = p
        .then(res => {
        // eslint-disable-next-line no-console
        console.log(`http <-- ${url} result:`, res);
        return res;
    });
    // @ts-ignore
    if (isFunction(p.abort))
        res.abort = p.abort;
    return res;
}

const interceptors = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    logInterceptor,
    timeoutInterceptor
}, Symbol.toStringTag, { value: 'Module' }));

function Behavior(options) {
    return options;
}
function getPreload(current) {
    return function (key, val) {
        current.preloadData = isObject(key)
            ? key
            : {
                [key]: val
            };
    };
}
const defaultDesignWidth = 750;
const defaultDesignRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
};
const defaultBaseFontSize = 20;
const defaultUnitPrecision = 5;
const defaultTargetUnit = 'rpx';
function getInitPxTransform(taro) {
    return function (config) {
        const { designWidth = defaultDesignWidth, deviceRatio = defaultDesignRatio, baseFontSize = defaultBaseFontSize, targetUnit = defaultTargetUnit, unitPrecision = defaultUnitPrecision, } = config;
        taro.config = taro.config || {};
        taro.config.designWidth = designWidth;
        taro.config.deviceRatio = deviceRatio;
        taro.config.baseFontSize = baseFontSize;
        taro.config.targetUnit = targetUnit;
        taro.config.unitPrecision = unitPrecision;
    };
}
function getPxTransform(taro) {
    return function (size) {
        const config = taro.config || {};
        const baseFontSize = config.baseFontSize;
        const deviceRatio = config.deviceRatio || defaultDesignRatio;
        const designWidth = ((input = 0) => isFunction(config.designWidth)
            ? config.designWidth(input)
            : config.designWidth || defaultDesignWidth)(size);
        if (!(designWidth in deviceRatio)) {
            throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`);
        }
        const targetUnit = config.targetUnit || defaultTargetUnit;
        const unitPrecision = config.unitPrecision || defaultUnitPrecision;
        const formatSize = ~~size;
        let rootValue = 1 / deviceRatio[designWidth];
        switch (targetUnit) {
            case 'rem':
                rootValue *= baseFontSize * 2;
                break;
            case 'px':
                rootValue *= 2;
                break;
        }
        let val = formatSize / rootValue;
        if (unitPrecision >= 0 && unitPrecision <= 100) {
            val = Number(val.toFixed(unitPrecision));
        }
        return val + targetUnit;
    };
}

/* eslint-disable camelcase */
const Taro = {
    Behavior,
    getEnv,
    ENV_TYPE,
    Link,
    interceptors,
    Current,
    getCurrentInstance,
    options,
    nextTick,
    eventCenter,
    Events,
    getInitPxTransform,
    interceptorify
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(Current);
Taro.pxTransform = getPxTransform(Taro);

const dist = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: Taro
}, Symbol.toStringTag, { value: 'Module' }));

const require$$1 = /*@__PURE__*/getAugmentedNamespace(dist);

(function (module) {
	const { hooks } = require$$0;
	const taro = require$$1.default;

	if (hooks.isExist('initNativeApi')) {
	  hooks.call('initNativeApi', taro);
	}

	module.exports = taro;
	module.exports.default = module.exports; 
} (taro));

var taroExports = taro.exports;

var react = {
  exports: {}
};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _typeof$1 = vendors._typeofExports.default;
var l$1 = Symbol.for("react.element"),
  n$1 = Symbol.for("react.portal"),
  p$1 = Symbol.for("react.fragment"),
  q$1 = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== _typeof$1(a)) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
  C = Object.assign,
  D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function (a, b) {
  if ("object" !== _typeof$1(a) && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K = {
    current: null
  },
  L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function M(a, b, e) {
  var d,
    c = {},
    k = null,
    h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return {
    $$typeof: l$1,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}
function N(a, b) {
  return {
    $$typeof: l$1,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function O(a) {
  return "object" === _typeof$1(a) && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === _typeof$1(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = _typeof$1(a);
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = !0;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a) return a;
  var d = [],
    c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = {
    current: null
  },
  V = {
    transition: null
  },
  W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
  };
function X() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = {
  map: S,
  forEach: function forEach(a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function count(a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
react_production_min.Component = E;
react_production_min.Fragment = p$1;
react_production_min.Profiler = r;
react_production_min.PureComponent = G;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
react_production_min.act = X;
react_production_min.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
    c = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return {
    $$typeof: l$1,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};
react_production_min.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};
react_production_min.createElement = M;
react_production_min.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function () {
  return {
    current: null
  };
};
react_production_min.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};
react_production_min.isValidElement = O;
react_production_min.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};
react_production_min.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};
react_production_min.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
react_production_min.unstable_act = X;
react_production_min.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};
react_production_min.useContext = function (a) {
  return U.current.useContext(a);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};
react_production_min.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};
react_production_min.useId = function () {
  return U.current.useId();
};
react_production_min.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};
react_production_min.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};
react_production_min.useRef = function (a) {
  return U.current.useRef(a);
};
react_production_min.useState = function (a) {
  return U.current.useState(a);
};
react_production_min.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function () {
  return U.current.useTransition();
};
react_production_min.version = "18.3.1";

{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const index$1 = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const React = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    default: index$1
}, [reactExports]);

var reactReconciler = {
  exports: {}
};

var scheduler = {
  exports: {}
};

var scheduler_production_min = {};

var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function (exports) {

    var _typeof = vendors._typeofExports.default;
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c;) {
        var d = c - 1 >>> 1,
          e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0],
        c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
          var m = 2 * (d + 1) - 1,
            C = a[m],
            n = m + 1,
            x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now) {
      var l = performance;
      exports.unstable_now = function () {
        return l.now();
      };
    } else {
      var p = Date,
        q = p.now();
      exports.unstable_now = function () {
        return p.now() - q;
      };
    }
    var r = [],
      t = [],
      u = 1,
      v = null,
      y = 3,
      z = !1,
      A = !1,
      B = !1,
      D = "function" === typeof setTimeout ? setTimeout : null,
      E = "function" === typeof clearTimeout ? clearTimeout : null,
      F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof nav && void 0 !== nav.scheduling && void 0 !== nav.scheduling.isInputPending && nav.scheduling.isInputPending.bind(nav.scheduling);
    function G(a) {
      for (var b = h(t); null !== b;) {
        if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
        b = h(t);
      }
    }
    function H(a) {
      B = !1;
      G(a);
      if (!A) if (null !== h(r)) A = !0, I(J);else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = !1;
      B && (B = !1, E(L), L = -1);
      z = !0;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = !0;else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = !1;
        }
        return w;
      } finally {
        v = null, y = c, z = !1;
      }
    }
    var N = !1,
      O = null,
      L = -1,
      P = 5,
      Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? !1 : !0;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = !0;
        try {
          b = O(!0, a);
        } finally {
          b ? S() : (N = !1, O = null);
        }
      } else N = !1;
    }
    var S;
    if ("function" === typeof F) S = function S() {
      F(R);
    };else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(),
        U = T.port2;
      T.port1.onmessage = R;
      S = function S() {
        U.postMessage(null);
      };
    } else S = function S() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = !0, S());
    }
    function K(a, b) {
      L = D(function () {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function (a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function () {
      A || z || (A = !0, I(J));
    };
    exports.unstable_forceFrameRate = function (a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function () {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function () {
      return h(r);
    };
    exports.unstable_next = function (a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function () {};
    exports.unstable_requestPaint = function () {};
    exports.unstable_runWithPriority = function (a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function (a, b, c) {
      var d = exports.unstable_now();
      "object" === _typeof(c) && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1E4;
          break;
        default:
          e = 5E3;
      }
      e = c + e;
      a = {
        id: u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
      };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function (a) {
      var b = y;
      return function () {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}

var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}

var _typeof = vendors._typeofExports.default;
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var reactReconciler_production_min = function $$$reconciler($$$hostConfig) {
  var exports = {};
  var aa = reactExports,
    ba = requireScheduler(),
    ca = Object.assign;
  function m(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ea = Symbol.for("react.element"),
    fa = Symbol.for("react.portal"),
    ha = Symbol.for("react.fragment"),
    ia = Symbol.for("react.strict_mode"),
    ja = Symbol.for("react.profiler"),
    ka = Symbol.for("react.provider"),
    la = Symbol.for("react.context"),
    ma = Symbol.for("react.forward_ref"),
    na = Symbol.for("react.suspense"),
    oa = Symbol.for("react.suspense_list"),
    pa = Symbol.for("react.memo"),
    qa = Symbol.for("react.lazy");
  var ra = Symbol.for("react.offscreen");
  var sa = Symbol.iterator;
  function ta(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = sa && a[sa] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function ua(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ha:
        return "Fragment";
      case fa:
        return "Portal";
      case ja:
        return "Profiler";
      case ia:
        return "StrictMode";
      case na:
        return "Suspense";
      case oa:
        return "SuspenseList";
    }
    if ("object" === _typeof(a)) switch (a.$$typeof) {
      case la:
        return (a.displayName || "Context") + ".Consumer";
      case ka:
        return (a._context.displayName || "Context") + ".Provider";
      case ma:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case pa:
        return b = a.displayName || null, null !== b ? b : ua(a.type) || "Memo";
      case qa:
        b = a._payload;
        a = a._init;
        try {
          return ua(a(b));
        } catch (c) {}
    }
    return null;
  }
  function va(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ua(b);
      case 8:
        return b === ia ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function wa(a) {
    var b = a,
      c = a;
    if (a.alternate) for (; b.return;) b = b.return;else {
      a = b;
      do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function xa(a) {
    if (wa(a) !== a) throw Error(m(188));
  }
  function ya(a) {
    var b = a.alternate;
    if (!b) {
      b = wa(a);
      if (null === b) throw Error(m(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return xa(e), a;
          if (f === d) return xa(e), b;
          f = f.sibling;
        }
        throw Error(m(188));
      }
      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(m(189));
        }
      }
      if (c.alternate !== d) throw Error(m(190));
    }
    if (3 !== c.tag) throw Error(m(188));
    return c.stateNode.current === c ? a : b;
  }
  function Aa(a) {
    a = ya(a);
    return null !== a ? Ba(a) : null;
  }
  function Ba(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a;) {
      var b = Ba(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  function Ca(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a;) {
      if (4 !== a.tag) {
        var b = Ca(a);
        if (null !== b) return b;
      }
      a = a.sibling;
    }
    return null;
  }
  var Da = Array.isArray,
    Ea = $$$hostConfig.getPublicInstance,
    Fa = $$$hostConfig.getRootHostContext,
    Ga = $$$hostConfig.getChildHostContext,
    Ha = $$$hostConfig.prepareForCommit,
    Ia = $$$hostConfig.resetAfterCommit,
    Ja = $$$hostConfig.createInstance,
    Ka = $$$hostConfig.appendInitialChild,
    La = $$$hostConfig.finalizeInitialChildren,
    Ma = $$$hostConfig.prepareUpdate,
    Na = $$$hostConfig.shouldSetTextContent,
    Oa = $$$hostConfig.createTextInstance,
    Pa = $$$hostConfig.scheduleTimeout,
    Qa = $$$hostConfig.cancelTimeout,
    Ra = $$$hostConfig.noTimeout,
    Sa = $$$hostConfig.isPrimaryRenderer,
    Ta = $$$hostConfig.supportsMutation,
    Ua = $$$hostConfig.supportsPersistence,
    Va = $$$hostConfig.supportsHydration,
    Wa = $$$hostConfig.getInstanceFromNode,
    Xa = $$$hostConfig.preparePortalMount,
    Ya = $$$hostConfig.getCurrentEventPriority,
    Za = $$$hostConfig.detachDeletedInstance,
    $a = $$$hostConfig.supportsMicrotasks,
    ab = $$$hostConfig.scheduleMicrotask,
    bb = $$$hostConfig.supportsTestSelectors,
    cb = $$$hostConfig.findFiberRoot,
    db = $$$hostConfig.getBoundingRect,
    eb = $$$hostConfig.getTextContent,
    fb = $$$hostConfig.isHiddenSubtree,
    gb = $$$hostConfig.matchAccessibilityRole,
    hb = $$$hostConfig.setFocusIfFocusable,
    ib = $$$hostConfig.setupIntersectionObserver,
    jb = $$$hostConfig.appendChild,
    kb = $$$hostConfig.appendChildToContainer,
    lb = $$$hostConfig.commitTextUpdate,
    mb = $$$hostConfig.commitMount,
    nb = $$$hostConfig.commitUpdate,
    ob = $$$hostConfig.insertBefore,
    pb = $$$hostConfig.insertInContainerBefore,
    qb = $$$hostConfig.removeChild,
    rb = $$$hostConfig.removeChildFromContainer,
    sb = $$$hostConfig.resetTextContent,
    tb = $$$hostConfig.hideInstance,
    ub = $$$hostConfig.hideTextInstance,
    vb = $$$hostConfig.unhideInstance,
    wb = $$$hostConfig.unhideTextInstance,
    xb = $$$hostConfig.clearContainer,
    yb = $$$hostConfig.cloneInstance,
    zb = $$$hostConfig.createContainerChildSet,
    Ab = $$$hostConfig.appendChildToContainerChildSet,
    Bb = $$$hostConfig.finalizeContainerChildren,
    Cb = $$$hostConfig.replaceContainerChildren,
    Eb = $$$hostConfig.cloneHiddenInstance,
    Fb = $$$hostConfig.cloneHiddenTextInstance,
    Gb = $$$hostConfig.canHydrateInstance,
    Hb = $$$hostConfig.canHydrateTextInstance,
    Ib = $$$hostConfig.canHydrateSuspenseInstance,
    Jb = $$$hostConfig.isSuspenseInstancePending,
    Kb = $$$hostConfig.isSuspenseInstanceFallback,
    Lb = $$$hostConfig.getSuspenseInstanceFallbackErrorDetails,
    Mb = $$$hostConfig.registerSuspenseInstanceRetry,
    Nb = $$$hostConfig.getNextHydratableSibling,
    Ob = $$$hostConfig.getFirstHydratableChild,
    Pb = $$$hostConfig.getFirstHydratableChildWithinContainer,
    Qb = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,
    Rb = $$$hostConfig.hydrateInstance,
    Sb = $$$hostConfig.hydrateTextInstance,
    Tb = $$$hostConfig.hydrateSuspenseInstance,
    Ub = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
    Vb = $$$hostConfig.commitHydratedContainer,
    Wb = $$$hostConfig.commitHydratedSuspenseInstance,
    Xb = $$$hostConfig.clearSuspenseBoundary,
    Yb = $$$hostConfig.clearSuspenseBoundaryFromContainer,
    Zb = $$$hostConfig.shouldDeleteUnhydratedTailInstances,
    $b = $$$hostConfig.didNotMatchHydratedContainerTextInstance,
    ac = $$$hostConfig.didNotMatchHydratedTextInstance,
    bc;
  function cc(a) {
    if (void 0 === bc) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      bc = b && b[1] || "";
    }
    return "\n" + bc + a;
  }
  var dc = !1;
  function ec(a, b) {
    if (!a || dc) return "";
    dc = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do if (g--, h--, 0 > h || e[g] !== f[h]) {
              var k = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
              return k;
            } while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      dc = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? cc(a) : "";
  }
  var fc = Object.prototype.hasOwnProperty,
    gc = [],
    hc = -1;
  function ic(a) {
    return {
      current: a
    };
  }
  function q(a) {
    0 > hc || (a.current = gc[hc], gc[hc] = null, hc--);
  }
  function v(a, b) {
    hc++;
    gc[hc] = a.current;
    a.current = b;
  }
  var jc = {},
    x = ic(jc),
    z = ic(!1),
    kc = jc;
  function lc(a, b) {
    var c = a.type.contextTypes;
    if (!c) return jc;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function A(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function mc() {
    q(z);
    q(x);
  }
  function nc(a, b, c) {
    if (x.current !== jc) throw Error(m(168));
    v(x, b);
    v(z, c);
  }
  function oc(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(m(108, va(a) || "Unknown", e));
    return ca({}, c, d);
  }
  function pc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || jc;
    kc = x.current;
    v(x, a);
    v(z, z.current);
    return !0;
  }
  function rc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(m(169));
    c ? (a = oc(a, b, kc), d.__reactInternalMemoizedMergedChildContext = a, q(z), q(x), v(x, a)) : q(z);
    v(z, c);
  }
  var tc = Math.clz32 ? Math.clz32 : sc,
    uc = Math.log,
    vc = Math.LN2;
  function sc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
  }
  var wc = 64,
    xc = 4194304;
  function yc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function zc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0,
      e = a.suspendedLanes,
      f = a.pingedLanes,
      g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = yc(h) : (f &= g, 0 !== f && (d = yc(f)));
    } else g = c & ~e, 0 !== g ? d = yc(g) : 0 !== f && (d = yc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - tc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function Ac(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5E3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
      var g = 31 - tc(f),
        h = 1 << g,
        k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = Ac(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function Cc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function Dc() {
    var a = wc;
    wc <<= 1;
    0 === (wc & 4194240) && (wc = 64);
    return a;
  }
  function Ec(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Fc(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - tc(b);
    a[b] = c;
  }
  function Gc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c;) {
      var e = 31 - tc(c),
        f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Hc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c;) {
      var d = 31 - tc(c),
        e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Ic(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Jc = ba.unstable_scheduleCallback,
    Kc = ba.unstable_cancelCallback,
    Lc = ba.unstable_shouldYield,
    Mc = ba.unstable_requestPaint,
    D = ba.unstable_now,
    Nc = ba.unstable_ImmediatePriority,
    Oc = ba.unstable_UserBlockingPriority,
    Pc = ba.unstable_NormalPriority,
    Qc = ba.unstable_IdlePriority,
    Rc = null,
    Sc = null;
  function Tc(a) {
    if (Sc && "function" === typeof Sc.onCommitFiberRoot) try {
      Sc.onCommitFiberRoot(Rc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
  }
  function Uc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var Vc = "function" === typeof Object.is ? Object.is : Uc,
    Wc = null,
    Xc = !1,
    Yc = !1;
  function Zc(a) {
    null === Wc ? Wc = [a] : Wc.push(a);
  }
  function $c(a) {
    Xc = !0;
    Zc(a);
  }
  function ad() {
    if (!Yc && null !== Wc) {
      Yc = !0;
      var a = 0,
        b = C;
      try {
        var c = Wc;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do d = d(!0); while (null !== d);
        }
        Wc = null;
        Xc = !1;
      } catch (e) {
        throw null !== Wc && (Wc = Wc.slice(a + 1)), Jc(Nc, ad), e;
      } finally {
        C = b, Yc = !1;
      }
    }
    return null;
  }
  var bd = [],
    cd = 0,
    dd = null,
    ed = 0,
    fd = [],
    gd = 0,
    hd = null,
    id = 1,
    jd = "";
  function kd(a, b) {
    bd[cd++] = ed;
    bd[cd++] = dd;
    dd = a;
    ed = b;
  }
  function ld(a, b, c) {
    fd[gd++] = id;
    fd[gd++] = jd;
    fd[gd++] = hd;
    hd = a;
    var d = id;
    a = jd;
    var e = 32 - tc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - tc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      id = 1 << 32 - tc(b) + e | c << e | d;
      jd = f + a;
    } else id = 1 << f | c << e | d, jd = a;
  }
  function md(a) {
    null !== a.return && (kd(a, 1), ld(a, 1, 0));
  }
  function nd(a) {
    for (; a === dd;) dd = bd[--cd], bd[cd] = null, ed = bd[--cd], bd[cd] = null;
    for (; a === hd;) hd = fd[--gd], fd[gd] = null, jd = fd[--gd], fd[gd] = null, id = fd[--gd], fd[gd] = null;
  }
  var od = null,
    pd = null,
    F = !1,
    qd = !1,
    rd = null;
  function sd(a, b) {
    var c = td(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function ud(a, b) {
    switch (a.tag) {
      case 5:
        return b = Gb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = Ob(b), !0) : !1;
      case 6:
        return b = Hb(b, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = null, !0) : !1;
      case 13:
        b = Ib(b);
        if (null !== b) {
          var c = null !== hd ? {
            id: id,
            overflow: jd
          } : null;
          a.memoizedState = {
            dehydrated: b,
            treeContext: c,
            retryLane: 1073741824
          };
          c = td(18, null, null, 0);
          c.stateNode = b;
          c.return = a;
          a.child = c;
          od = a;
          pd = null;
          return !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function vd(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function wd(a) {
    if (F) {
      var b = pd;
      if (b) {
        var c = b;
        if (!ud(a, b)) {
          if (vd(a)) throw Error(m(418));
          b = Nb(c);
          var d = od;
          b && ud(a, b) ? sd(d, c) : (a.flags = a.flags & -4097 | 2, F = !1, od = a);
        }
      } else {
        if (vd(a)) throw Error(m(418));
        a.flags = a.flags & -4097 | 2;
        F = !1;
        od = a;
      }
    }
  }
  function xd(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
    od = a;
  }
  function yd(a) {
    if (!Va || a !== od) return !1;
    if (!F) return xd(a), F = !0, !1;
    if (3 !== a.tag && (5 !== a.tag || Zb(a.type) && !Na(a.type, a.memoizedProps))) {
      var b = pd;
      if (b) {
        if (vd(a)) throw zd(), Error(m(418));
        for (; b;) sd(a, b), b = Nb(b);
      }
    }
    xd(a);
    if (13 === a.tag) {
      if (!Va) throw Error(m(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(m(317));
      pd = Ub(a);
    } else pd = od ? Nb(a.stateNode) : null;
    return !0;
  }
  function zd() {
    for (var a = pd; a;) a = Nb(a);
  }
  function Ad() {
    Va && (pd = od = null, qd = F = !1);
  }
  function Bd(a) {
    null === rd ? rd = [a] : rd.push(a);
  }
  var Cd = da.ReactCurrentBatchConfig;
  function Dd(a, b) {
    if (Vc(a, b)) return !0;
    if ("object" !== _typeof(a) || null === a || "object" !== _typeof(b) || null === b) return !1;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!fc.call(b, e) || !Vc(a[e], b[e])) return !1;
    }
    return !0;
  }
  function Ed(a) {
    switch (a.tag) {
      case 5:
        return cc(a.type);
      case 16:
        return cc("Lazy");
      case 13:
        return cc("Suspense");
      case 19:
        return cc("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = ec(a.type, !1), a;
      case 11:
        return a = ec(a.type.render, !1), a;
      case 1:
        return a = ec(a.type, !0), a;
      default:
        return "";
    }
  }
  function Fd(a, b) {
    if (a && a.defaultProps) {
      b = ca({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  var Gd = ic(null),
    Hd = null,
    Id = null,
    Jd = null;
  function Kd() {
    Jd = Id = Hd = null;
  }
  function Ld(a, b, c) {
    Sa ? (v(Gd, b._currentValue), b._currentValue = c) : (v(Gd, b._currentValue2), b._currentValue2 = c);
  }
  function Md(a) {
    var b = Gd.current;
    q(Gd);
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }
  function Nd(a, b, c) {
    for (; null !== a;) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function Od(a, b) {
    Hd = a;
    Jd = Id = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (G = !0), a.firstContext = null);
  }
  function Pd(a) {
    var b = Sa ? a._currentValue : a._currentValue2;
    if (Jd !== a) if (a = {
      context: a,
      memoizedValue: b,
      next: null
    }, null === Id) {
      if (null === Hd) throw Error(m(308));
      Id = a;
      Hd.dependencies = {
        lanes: 0,
        firstContext: a
      };
    } else Id = Id.next = a;
    return b;
  }
  var Qd = null;
  function Rd(a) {
    null === Qd ? Qd = [a] : Qd.push(a);
  }
  function Sd(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, Rd(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return Td(a, d);
  }
  function Td(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var Ud = !1;
  function Vd(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function Wd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }
  function Xd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Yd(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (H & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return Td(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, Rd(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return Td(a, c);
  }
  function Zd(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc(a, c);
    }
  }
  function $d(a, b) {
    var c = a.updateQueue,
      d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
        f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function ae(a, b, c, d) {
    var e = a.updateQueue;
    Ud = !1;
    var f = e.firstBaseUpdate,
      g = e.lastBaseUpdate,
      h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h,
        l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;
      null !== n && (n = n.updateQueue, h = n.lastBaseUpdate, h !== g && (null === h ? n.firstBaseUpdate = l : h.next = l, n.lastBaseUpdate = k));
    }
    if (null !== f) {
      var t = e.baseState;
      g = 0;
      n = l = k = null;
      h = f;
      do {
        var p = h.lane,
          B = h.eventTime;
        if ((d & p) === p) {
          null !== n && (n = n.next = {
            eventTime: B,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var w = a,
              Z = h;
            p = b;
            B = c;
            switch (Z.tag) {
              case 1:
                w = Z.payload;
                if ("function" === typeof w) {
                  t = w.call(B, t, p);
                  break a;
                }
                t = w;
                break a;
              case 3:
                w.flags = w.flags & -65537 | 128;
              case 0:
                w = Z.payload;
                p = "function" === typeof w ? w.call(B, t, p) : w;
                if (null === p || void 0 === p) break a;
                t = ca({}, t, p);
                break a;
              case 2:
                Ud = !0;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, p = e.effects, null === p ? e.effects = [h] : p.push(h));
        } else B = {
          eventTime: B,
          lane: p,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        }, null === n ? (l = n = B, k = t) : n = n.next = B, g |= p;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;else p = h, h = p.next, p.next = null, e.lastBaseUpdate = p, e.shared.pending = null;
      } while (1);
      null === n && (k = t);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do g |= e.lane, e = e.next; while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      be |= g;
      a.lanes = g;
      a.memoizedState = t;
    }
  }
  function ce(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
        e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(m(191, e));
        e.call(d);
      }
    }
  }
  var de = new aa.Component().refs;
  function ee(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : ca({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var he = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? wa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = I(),
        e = fe(a),
        f = Xd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = Yd(a, f, e);
      null !== b && (ge(b, a, e, d), Zd(b, a, e));
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = I(),
        e = fe(a),
        f = Xd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = Yd(a, f, e);
      null !== b && (ge(b, a, e, d), Zd(b, a, e));
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = I(),
        d = fe(a),
        e = Xd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = Yd(a, e, d);
      null !== b && (ge(b, a, d, c), Zd(b, a, d));
    }
  };
  function ie(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Dd(c, d) || !Dd(e, f) : !0;
  }
  function je(a, b, c) {
    var d = !1,
      e = jc;
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? f = Pd(f) : (e = A(b) ? kc : x.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? lc(a, e) : jc);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = he;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function ke(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && he.enqueueReplaceState(b, b.state, null);
  }
  function le(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = de;
    Vd(a);
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? e.context = Pd(f) : (f = A(b) ? kc : x.current, e.context = lc(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (ee(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && he.enqueueReplaceState(e, e.state, null), ae(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function me(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== _typeof(a)) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(m(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(m(147, a));
        var e = d,
          f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
        b = function b(a) {
          var b = e.refs;
          b === de && (b = e.refs = {});
          null === a ? delete b[f] : b[f] = a;
        };
        b._stringRef = f;
        return b;
      }
      if ("string" !== typeof a) throw Error(m(284));
      if (!c._owner) throw Error(m(290, a));
    }
    return a;
  }
  function ne(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(m(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function oe(a) {
    var b = a._init;
    return b(a._payload);
  }
  function pe(a) {
    function b(b, c) {
      if (a) {
        var d = b.deletions;
        null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
      }
    }
    function c(c, d) {
      if (!a) return null;
      for (; null !== d;) b(c, d), d = d.sibling;
      return null;
    }
    function d(a, b) {
      for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      return a;
    }
    function e(a, b) {
      a = qe(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }
    function f(b, c, d) {
      b.index = d;
      if (!a) return b.flags |= 1048576, c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
      b.flags |= 2;
      return c;
    }
    function g(b) {
      a && null === b.alternate && (b.flags |= 2);
      return b;
    }
    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = re(c, a.mode, d), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }
    function k(a, b, c, d) {
      var f = c.type;
      if (f === ha) return n(a, b, c.props.children, d, c.key);
      if (null !== b && (b.elementType === f || "object" === _typeof(f) && null !== f && f.$$typeof === qa && oe(f) === b.type)) return d = e(b, c.props), d.ref = me(a, b, c), d.return = a, d;
      d = se(c.type, c.key, c.props, null, a.mode, d);
      d.ref = me(a, b, c);
      d.return = a;
      return d;
    }
    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = te(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }
    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = ue(c, a.mode, d, f), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }
    function t(a, b, c) {
      if ("string" === typeof b && "" !== b || "number" === typeof b) return b = re("" + b, a.mode, c), b.return = a, b;
      if ("object" === _typeof(b) && null !== b) {
        switch (b.$$typeof) {
          case ea:
            return c = se(b.type, b.key, b.props, null, a.mode, c), c.ref = me(a, null, b), c.return = a, c;
          case fa:
            return b = te(b, a.mode, c), b.return = a, b;
          case qa:
            var d = b._init;
            return t(a, d(b._payload), c);
        }
        if (Da(b) || ta(b)) return b = ue(b, a.mode, c, null), b.return = a, b;
        ne(a, b);
      }
      return null;
    }
    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
      if ("object" === _typeof(c) && null !== c) {
        switch (c.$$typeof) {
          case ea:
            return c.key === e ? k(a, b, c, d) : null;
          case fa:
            return c.key === e ? l(a, b, c, d) : null;
          case qa:
            return e = c._init, p(a, b, e(c._payload), d);
        }
        if (Da(c) || ta(c)) return null !== e ? null : n(a, b, c, d, null);
        ne(a, c);
      }
      return null;
    }
    function B(a, b, c, d, e) {
      if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
      if ("object" === _typeof(d) && null !== d) {
        switch (d.$$typeof) {
          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
          case fa:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
          case qa:
            var f = d._init;
            return B(a, b, c, f(d._payload), e);
        }
        if (Da(d) || ta(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        ne(b, d);
      }
      return null;
    }
    function w(e, g, h, k) {
      for (var l = null, n = null, r = g, u = g = 0, E = null; null !== r && u < h.length; u++) {
        r.index > u ? (E = r, r = null) : E = r.sibling;
        var y = p(e, r, h[u], k);
        if (null === y) {
          null === r && (r = E);
          break;
        }
        a && r && null === y.alternate && b(e, r);
        g = f(y, g, u);
        null === n ? l = y : n.sibling = y;
        n = y;
        r = E;
      }
      if (u === h.length) return c(e, r), F && kd(e, u), l;
      if (null === r) {
        for (; u < h.length; u++) r = t(e, h[u], k), null !== r && (g = f(r, g, u), null === n ? l = r : n.sibling = r, n = r);
        F && kd(e, u);
        return l;
      }
      for (r = d(e, r); u < h.length; u++) E = B(r, e, u, h[u], k), null !== E && (a && null !== E.alternate && r.delete(null === E.key ? u : E.key), g = f(E, g, u), null === n ? l = E : n.sibling = E, n = E);
      a && r.forEach(function (a) {
        return b(e, a);
      });
      F && kd(e, u);
      return l;
    }
    function Z(e, g, h, k) {
      var l = ta(h);
      if ("function" !== typeof l) throw Error(m(150));
      h = l.call(h);
      if (null == h) throw Error(m(151));
      for (var n = l = null, r = g, u = g = 0, E = null, y = h.next(); null !== r && !y.done; u++, y = h.next()) {
        r.index > u ? (E = r, r = null) : E = r.sibling;
        var w = p(e, r, y.value, k);
        if (null === w) {
          null === r && (r = E);
          break;
        }
        a && r && null === w.alternate && b(e, r);
        g = f(w, g, u);
        null === n ? l = w : n.sibling = w;
        n = w;
        r = E;
      }
      if (y.done) return c(e, r), F && kd(e, u), l;
      if (null === r) {
        for (; !y.done; u++, y = h.next()) y = t(e, y.value, k), null !== y && (g = f(y, g, u), null === n ? l = y : n.sibling = y, n = y);
        F && kd(e, u);
        return l;
      }
      for (r = d(e, r); !y.done; u++, y = h.next()) y = B(r, e, u, y.value, k), null !== y && (a && null !== y.alternate && r.delete(null === y.key ? u : y.key), g = f(y, g, u), null === n ? l = y : n.sibling = y, n = y);
      a && r.forEach(function (a) {
        return b(e, a);
      });
      F && kd(e, u);
      return l;
    }
    function za(a, d, f, h) {
      "object" === _typeof(f) && null !== f && f.type === ha && null === f.key && (f = f.props.children);
      if ("object" === _typeof(f) && null !== f) {
        switch (f.$$typeof) {
          case ea:
            a: {
              for (var k = f.key, l = d; null !== l;) {
                if (l.key === k) {
                  k = f.type;
                  if (k === ha) {
                    if (7 === l.tag) {
                      c(a, l.sibling);
                      d = e(l, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }
                  } else if (l.elementType === k || "object" === _typeof(k) && null !== k && k.$$typeof === qa && oe(k) === l.type) {
                    c(a, l.sibling);
                    d = e(l, f.props);
                    d.ref = me(a, l, f);
                    d.return = a;
                    a = d;
                    break a;
                  }
                  c(a, l);
                  break;
                } else b(a, l);
                l = l.sibling;
              }
              f.type === ha ? (d = ue(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = se(f.type, f.key, f.props, null, a.mode, h), h.ref = me(a, d, f), h.return = a, a = h);
            }
            return g(a);
          case fa:
            a: {
              for (l = f.key; null !== d;) {
                if (d.key === l) {
                  if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                    c(a, d.sibling);
                    d = e(d, f.children || []);
                    d.return = a;
                    a = d;
                    break a;
                  } else {
                    c(a, d);
                    break;
                  }
                } else b(a, d);
                d = d.sibling;
              }
              d = te(f, a.mode, h);
              d.return = a;
              a = d;
            }
            return g(a);
          case qa:
            return l = f._init, za(a, d, l(f._payload), h);
        }
        if (Da(f)) return w(a, d, f, h);
        if (ta(f)) return Z(a, d, f, h);
        ne(a, f);
      }
      return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = re(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return za;
  }
  var ve = pe(!0),
    we = pe(!1),
    xe = {},
    ye = ic(xe),
    ze = ic(xe),
    Ae = ic(xe);
  function Be(a) {
    if (a === xe) throw Error(m(174));
    return a;
  }
  function Ce(a, b) {
    v(Ae, b);
    v(ze, a);
    v(ye, xe);
    a = Fa(b);
    q(ye);
    v(ye, a);
  }
  function De() {
    q(ye);
    q(ze);
    q(Ae);
  }
  function Ee(a) {
    var b = Be(Ae.current),
      c = Be(ye.current);
    b = Ga(c, a.type, b);
    c !== b && (v(ze, a), v(ye, b));
  }
  function Fe(a) {
    ze.current === a && (q(ye), q(ze));
  }
  var J = ic(0);
  function Ge(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Jb(c) || Kb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var He = [];
  function Ie() {
    for (var a = 0; a < He.length; a++) {
      var b = He[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }
    He.length = 0;
  }
  var Je = da.ReactCurrentDispatcher,
    Ke = da.ReactCurrentBatchConfig,
    Le = 0,
    K = null,
    L = null,
    M = null,
    Me = !1,
    Ne = !1,
    Oe = 0,
    Pe = 0;
  function N() {
    throw Error(m(321));
  }
  function Qe(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++) if (!Vc(a[c], b[c])) return !1;
    return !0;
  }
  function Re(a, b, c, d, e, f) {
    Le = f;
    K = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Je.current = null === a || null === a.memoizedState ? Se : Te;
    a = c(d, e);
    if (Ne) {
      f = 0;
      do {
        Ne = !1;
        Oe = 0;
        if (25 <= f) throw Error(m(301));
        f += 1;
        M = L = null;
        b.updateQueue = null;
        Je.current = Ue;
        a = c(d, e);
      } while (Ne);
    }
    Je.current = Ve;
    b = null !== L && null !== L.next;
    Le = 0;
    M = L = K = null;
    Me = !1;
    if (b) throw Error(m(300));
    return a;
  }
  function We() {
    var a = 0 !== Oe;
    Oe = 0;
    return a;
  }
  function Xe() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === M ? K.memoizedState = M = a : M = M.next = a;
    return M;
  }
  function Ye() {
    if (null === L) {
      var a = K.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = L.next;
    var b = null === M ? K.memoizedState : M.next;
    if (null !== b) M = b, L = a;else {
      if (null === a) throw Error(m(310));
      L = a;
      a = {
        memoizedState: L.memoizedState,
        baseState: L.baseState,
        baseQueue: L.baseQueue,
        queue: L.queue,
        next: null
      };
      null === M ? K.memoizedState = M = a : M = M.next = a;
    }
    return M;
  }
  function Ze(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function $e(a) {
    var b = Ye(),
      c = b.queue;
    if (null === c) throw Error(m(311));
    c.lastRenderedReducer = a;
    var d = L,
      e = d.baseQueue,
      f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null,
        k = null,
        l = f;
      do {
        var n = l.lane;
        if ((Le & n) === n) null !== k && (k = k.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
          var t = {
            lane: n,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = t, g = d) : k = k.next = t;
          K.lanes |= n;
          be |= n;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      Vc(d, b.memoizedState) || (G = !0);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do f = e.lane, K.lanes |= f, be |= f, e = e.next; while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function af(a) {
    var b = Ye(),
      c = b.queue;
    if (null === c) throw Error(m(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do f = a(f, g.action), g = g.next; while (g !== e);
      Vc(f, b.memoizedState) || (G = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function bf() {}
  function cf(a, b) {
    var c = K,
      d = Ye(),
      e = b(),
      f = !Vc(d.memoizedState, e);
    f && (d.memoizedState = e, G = !0);
    d = d.queue;
    df(ef.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== M && M.memoizedState.tag & 1) {
      c.flags |= 2048;
      ff(9, gf.bind(null, c, d, e, b), void 0, null);
      if (null === O) throw Error(m(349));
      0 !== (Le & 30) || hf(c, b, e);
    }
    return e;
  }
  function hf(a, b, c) {
    a.flags |= 16384;
    a = {
      getSnapshot: b,
      value: c
    };
    b = K.updateQueue;
    null === b ? (b = {
      lastEffect: null,
      stores: null
    }, K.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function gf(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    jf(b) && kf(a);
  }
  function ef(a, b, c) {
    return c(function () {
      jf(b) && kf(a);
    });
  }
  function jf(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !Vc(a, c);
    } catch (d) {
      return !0;
    }
  }
  function kf(a) {
    var b = Td(a, 1);
    null !== b && ge(b, a, 1, -1);
  }
  function lf(a) {
    var b = Xe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ze,
      lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = mf.bind(null, K, a);
    return [b.memoizedState, a];
  }
  function ff(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = K.updateQueue;
    null === b ? (b = {
      lastEffect: null,
      stores: null
    }, K.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function nf() {
    return Ye().memoizedState;
  }
  function of(a, b, c, d) {
    var e = Xe();
    K.flags |= a;
    e.memoizedState = ff(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function pf(a, b, c, d) {
    var e = Ye();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== L) {
      var g = L.memoizedState;
      f = g.destroy;
      if (null !== d && Qe(d, g.deps)) {
        e.memoizedState = ff(b, c, f, d);
        return;
      }
    }
    K.flags |= a;
    e.memoizedState = ff(1 | b, c, f, d);
  }
  function qf(a, b) {
    return of(8390656, 8, a, b);
  }
  function df(a, b) {
    return pf(2048, 8, a, b);
  }
  function rf(a, b) {
    return pf(4, 2, a, b);
  }
  function sf(a, b) {
    return pf(4, 4, a, b);
  }
  function tf(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }
  function uf(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return pf(4, 4, tf.bind(null, b, a), c);
  }
  function vf() {}
  function wf(a, b) {
    var c = Ye();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Qe(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function xf(a, b) {
    var c = Ye();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Qe(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function yf(a, b, c) {
    if (0 === (Le & 21)) return a.baseState && (a.baseState = !1, G = !0), a.memoizedState = c;
    Vc(c, b) || (c = Dc(), K.lanes |= c, be |= c, a.baseState = !0);
    return b;
  }
  function zf(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = Ke.transition;
    Ke.transition = {};
    try {
      a(!1), b();
    } finally {
      C = c, Ke.transition = d;
    }
  }
  function Af() {
    return Ye().memoizedState;
  }
  function Bf(a, b, c) {
    var d = fe(a);
    c = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cf(a)) Df(b, c);else if (c = Sd(a, b, c, d), null !== c) {
      var e = I();
      ge(c, a, d, e);
      Ef(c, b, d);
    }
  }
  function mf(a, b, c) {
    var d = fe(a),
      e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
    if (Cf(a)) Df(b, e);else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState,
          h = f(g, c);
        e.hasEagerState = !0;
        e.eagerState = h;
        if (Vc(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, Rd(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {} finally {}
      c = Sd(a, b, e, d);
      null !== c && (e = I(), ge(c, a, d, e), Ef(c, b, d));
    }
  }
  function Cf(a) {
    var b = a.alternate;
    return a === K || null !== b && b === K;
  }
  function Df(a, b) {
    Ne = Me = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Ef(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc(a, c);
    }
  }
  var Ve = {
      readContext: Pd,
      useCallback: N,
      useContext: N,
      useEffect: N,
      useImperativeHandle: N,
      useInsertionEffect: N,
      useLayoutEffect: N,
      useMemo: N,
      useReducer: N,
      useRef: N,
      useState: N,
      useDebugValue: N,
      useDeferredValue: N,
      useTransition: N,
      useMutableSource: N,
      useSyncExternalStore: N,
      useId: N,
      unstable_isNewReconciler: !1
    },
    Se = {
      readContext: Pd,
      useCallback: function useCallback(a, b) {
        Xe().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: Pd,
      useEffect: qf,
      useImperativeHandle: function useImperativeHandle(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return of(4194308, 4, tf.bind(null, b, a), c);
      },
      useLayoutEffect: function useLayoutEffect(a, b) {
        return of(4194308, 4, a, b);
      },
      useInsertionEffect: function useInsertionEffect(a, b) {
        return of(4, 2, a, b);
      },
      useMemo: function useMemo(a, b) {
        var c = Xe();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function useReducer(a, b, c) {
        var d = Xe();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b
        };
        d.queue = a;
        a = a.dispatch = Bf.bind(null, K, a);
        return [d.memoizedState, a];
      },
      useRef: function useRef(a) {
        var b = Xe();
        a = {
          current: a
        };
        return b.memoizedState = a;
      },
      useState: lf,
      useDebugValue: vf,
      useDeferredValue: function useDeferredValue(a) {
        return Xe().memoizedState = a;
      },
      useTransition: function useTransition() {
        var a = lf(!1),
          b = a[0];
        a = zf.bind(null, a[1]);
        Xe().memoizedState = a;
        return [b, a];
      },
      useMutableSource: function useMutableSource() {},
      useSyncExternalStore: function useSyncExternalStore(a, b, c) {
        var d = K,
          e = Xe();
        if (F) {
          if (void 0 === c) throw Error(m(407));
          c = c();
        } else {
          c = b();
          if (null === O) throw Error(m(349));
          0 !== (Le & 30) || hf(d, b, c);
        }
        e.memoizedState = c;
        var f = {
          value: c,
          getSnapshot: b
        };
        e.queue = f;
        qf(ef.bind(null, d, f, a), [a]);
        d.flags |= 2048;
        ff(9, gf.bind(null, d, f, c, b), void 0, null);
        return c;
      },
      useId: function useId() {
        var a = Xe(),
          b = O.identifierPrefix;
        if (F) {
          var c = jd;
          var d = id;
          c = (d & ~(1 << 32 - tc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Oe++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Pe++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      },
      unstable_isNewReconciler: !1
    },
    Te = {
      readContext: Pd,
      useCallback: wf,
      useContext: Pd,
      useEffect: df,
      useImperativeHandle: uf,
      useInsertionEffect: rf,
      useLayoutEffect: sf,
      useMemo: xf,
      useReducer: $e,
      useRef: nf,
      useState: function useState() {
        return $e(Ze);
      },
      useDebugValue: vf,
      useDeferredValue: function useDeferredValue(a) {
        var b = Ye();
        return yf(b, L.memoizedState, a);
      },
      useTransition: function useTransition() {
        var a = $e(Ze)[0],
          b = Ye().memoizedState;
        return [a, b];
      },
      useMutableSource: bf,
      useSyncExternalStore: cf,
      useId: Af,
      unstable_isNewReconciler: !1
    },
    Ue = {
      readContext: Pd,
      useCallback: wf,
      useContext: Pd,
      useEffect: df,
      useImperativeHandle: uf,
      useInsertionEffect: rf,
      useLayoutEffect: sf,
      useMemo: xf,
      useReducer: af,
      useRef: nf,
      useState: function useState() {
        return af(Ze);
      },
      useDebugValue: vf,
      useDeferredValue: function useDeferredValue(a) {
        var b = Ye();
        return null === L ? b.memoizedState = a : yf(b, L.memoizedState, a);
      },
      useTransition: function useTransition() {
        var a = af(Ze)[0],
          b = Ye().memoizedState;
        return [a, b];
      },
      useMutableSource: bf,
      useSyncExternalStore: cf,
      useId: Af,
      unstable_isNewReconciler: !1
    };
  function Ff(a, b) {
    try {
      var c = "",
        d = b;
      do c += Ed(d), d = d.return; while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
      value: a,
      source: b,
      stack: e,
      digest: null
    };
  }
  function Gf(a, b, c) {
    return {
      value: a,
      source: null,
      stack: null != c ? c : null,
      digest: null != b ? b : null
    };
  }
  function Hf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  var If = "function" === typeof WeakMap ? WeakMap : Map;
  function Jf(a, b, c) {
    c = Xd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;
    c.callback = function () {
      Kf || (Kf = !0, Lf = d);
      Hf(a, b);
    };
    return c;
  }
  function Mf(a, b, c) {
    c = Xd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function () {
        return d(e);
      };
      c.callback = function () {
        Hf(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      Hf(a, b);
      "function" !== typeof d && (null === Nf ? Nf = new Set([this]) : Nf.add(this));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }
  function Of(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new If();
      var e = new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Pf.bind(null, a, b, c), b.then(a, a));
  }
  function Qf(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Rf(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = Xd(-1, 1), b.tag = 2, Yd(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Sf = da.ReactCurrentOwner,
    G = !1;
  function P(a, b, c, d) {
    b.child = null === a ? we(b, null, c, d) : ve(b, a.child, c, d);
  }
  function Tf(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Od(b, e);
    d = Re(a, b, c, d, f, e);
    c = We();
    if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Uf(a, b, e);
    F && c && md(b);
    b.flags |= 1;
    P(a, b, d, e);
    return b.child;
  }
  function Vf(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !Wf(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, Xf(a, b, f, d, e);
      a = se(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Dd;
      if (c(g, d) && a.ref === b.ref) return Uf(a, b, e);
    }
    b.flags |= 1;
    a = qe(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function Xf(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Dd(f, d) && a.ref === b.ref) if (G = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (G = !0);else return b.lanes = a.lanes, Uf(a, b, e);
    }
    return Yf(a, b, c, d, e);
  }
  function Zf(a, b, c) {
    var d = b.pendingProps,
      e = d.children,
      f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
      if (0 === (b.mode & 1)) b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, v($f, ag), ag |= c;else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
          baseLanes: a,
          cachePool: null,
          transitions: null
        }, b.updateQueue = null, v($f, ag), ag |= a, null;
        b.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        d = null !== f ? f.baseLanes : c;
        v($f, ag);
        ag |= d;
      }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, v($f, ag), ag |= d;
    P(a, b, e, c);
    return b.child;
  }
  function bg(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function Yf(a, b, c, d, e) {
    var f = A(c) ? kc : x.current;
    f = lc(b, f);
    Od(b, e);
    c = Re(a, b, c, d, f, e);
    d = We();
    if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Uf(a, b, e);
    F && d && md(b);
    b.flags |= 1;
    P(a, b, c, e);
    return b.child;
  }
  function cg(a, b, c, d, e) {
    if (A(c)) {
      var f = !0;
      pc(b);
    } else f = !1;
    Od(b, e);
    if (null === b.stateNode) dg(a, b), je(b, c, d), le(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
        h = b.memoizedProps;
      g.props = h;
      var k = g.context,
        l = c.contextType;
      "object" === _typeof(l) && null !== l ? l = Pd(l) : (l = A(c) ? kc : x.current, l = lc(b, l));
      var n = c.getDerivedStateFromProps,
        t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && ke(b, g, d, l);
      Ud = !1;
      var p = b.memoizedState;
      g.state = p;
      ae(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || z.current || Ud ? ("function" === typeof n && (ee(b, c, n, d), k = b.memoizedState), (h = Ud || ie(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
      g = b.stateNode;
      Wd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Fd(b.type, h);
      g.props = l;
      t = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === _typeof(k) && null !== k ? k = Pd(k) : (k = A(c) ? kc : x.current, k = lc(b, k));
      var B = c.getDerivedStateFromProps;
      (n = "function" === typeof B || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && ke(b, g, d, k);
      Ud = !1;
      p = b.memoizedState;
      g.state = p;
      ae(b, d, g, e);
      var w = b.memoizedState;
      h !== t || p !== w || z.current || Ud ? ("function" === typeof B && (ee(b, c, B, d), w = b.memoizedState), (l = Ud || ie(b, c, l, d, p, w, k) || !1) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return eg(a, b, c, d, f, e);
  }
  function eg(a, b, c, d, e, f) {
    bg(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && rc(b, c, !1), Uf(a, b, f);
    d = b.stateNode;
    Sf.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = ve(b, a.child, null, f), b.child = ve(b, null, h, f)) : P(a, b, h, f);
    b.memoizedState = d.state;
    e && rc(b, c, !0);
    return b.child;
  }
  function fg(a) {
    var b = a.stateNode;
    b.pendingContext ? nc(a, b.pendingContext, b.pendingContext !== b.context) : b.context && nc(a, b.context, !1);
    Ce(a, b.containerInfo);
  }
  function gg(a, b, c, d, e) {
    Ad();
    Bd(e);
    b.flags |= 256;
    P(a, b, c, d);
    return b.child;
  }
  var hg = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function ig(a) {
    return {
      baseLanes: a,
      cachePool: null,
      transitions: null
    };
  }
  function jg(a, b, c) {
    var d = b.pendingProps,
      e = J.current,
      f = !1,
      g = 0 !== (b.flags & 128),
      h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
    v(J, e & 1);
    if (null === a) {
      wd(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Kb(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = {
        mode: "hidden",
        children: g
      }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = kg(g, d, 0, null), a = ue(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = ig(c), b.memoizedState = hg, a) : lg(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return mg(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = {
        mode: "hidden",
        children: d.children
      };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = qe(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = qe(h, f) : (f = ue(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? ig(c) : {
        baseLanes: g.baseLanes | c,
        cachePool: null,
        transitions: g.transitions
      };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = hg;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = qe(f, {
      mode: "visible",
      children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function lg(a, b) {
    b = kg({
      mode: "visible",
      children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function ng(a, b, c, d) {
    null !== d && Bd(d);
    ve(b, a.child, null, c);
    a = lg(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function mg(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Gf(Error(m(422))), ng(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = kg({
        mode: "visible",
        children: d.children
      }, e, 0, null);
      f = ue(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && ve(b, a.child, null, g);
      b.child.memoizedState = ig(g);
      b.memoizedState = hg;
      return f;
    }
    if (0 === (b.mode & 1)) return ng(a, b, g, null);
    if (Kb(e)) return d = Lb(e).digest, f = Error(m(419)), d = Gf(f, d, void 0), ng(a, b, g, d);
    c = 0 !== (g & a.childLanes);
    if (G || c) {
      d = O;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, Td(a, e), ge(d, a, e, -1));
      }
      og();
      d = Gf(Error(m(421)));
      return ng(a, b, g, d);
    }
    if (Jb(e)) return b.flags |= 128, b.child = a.child, b = pg.bind(null, a), Mb(e, b), null;
    a = f.treeContext;
    Va && (pd = Qb(e), od = b, F = !0, rd = null, qd = !1, null !== a && (fd[gd++] = id, fd[gd++] = jd, fd[gd++] = hd, id = a.id, jd = a.overflow, hd = b));
    b = lg(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function qg(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Nd(a.return, b, c);
  }
  function rg(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }
  function sg(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    P(a, b, d.children, c);
    d = J.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && qg(a, c, b);else if (19 === a.tag) qg(a, c, b);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    v(J, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c;) a = c.alternate, null !== a && null === Ge(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        rg(b, !1, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e;) {
          a = e.alternate;
          if (null !== a && null === Ge(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        rg(b, !0, c, null, f);
        break;
      case "together":
        rg(b, !1, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function dg(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Uf(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    be |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(m(153));
    if (null !== b.child) {
      a = b.child;
      c = qe(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = qe(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function tg(a, b, c) {
    switch (b.tag) {
      case 3:
        fg(b);
        Ad();
        break;
      case 5:
        Ee(b);
        break;
      case 1:
        A(b.type) && pc(b);
        break;
      case 4:
        Ce(b, b.stateNode.containerInfo);
        break;
      case 10:
        Ld(b, b.type._context, b.memoizedProps.value);
        break;
      case 13:
        var d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return v(J, J.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return jg(a, b, c);
          v(J, J.current & 1);
          a = Uf(a, b, c);
          return null !== a ? a.sibling : null;
        }
        v(J, J.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return sg(a, b, c);
          b.flags |= 128;
        }
        var e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        v(J, J.current);
        if (d) break;else return null;
      case 22:
      case 23:
        return b.lanes = 0, Zf(a, b, c);
    }
    return Uf(a, b, c);
  }
  function ug(a) {
    a.flags |= 4;
  }
  function vg(a, b) {
    if (null !== a && a.child === b.child) return !0;
    if (0 !== (b.flags & 16)) return !1;
    for (a = b.child; null !== a;) {
      if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return !1;
      a = a.sibling;
    }
    return !0;
  }
  var _wg, xg, yg, zg;
  if (Ta) _wg = function wg(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ka(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, xg = function xg() {}, yg = function yg(a, b, c, d, e) {
    a = a.memoizedProps;
    if (a !== d) {
      var f = b.stateNode,
        g = Be(ye.current);
      c = Ma(f, c, a, d, e, g);
      (b.updateQueue = c) && ug(b);
    }
  }, zg = function zg(a, b, c, d) {
    c !== d && ug(b);
  };else if (Ua) {
    _wg = function wg(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ka(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ka(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f.return = e), _wg(a, e, !0, !0);else if (null !== e.child) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === b) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    var _Ag = function Ag(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f.return = e), _Ag(a, e, !0, !0);else if (null !== e.child) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === b) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    xg = function xg(a, b) {
      var c = b.stateNode;
      if (!vg(a, b)) {
        a = c.containerInfo;
        var d = zb(a);
        _Ag(d, b, !1, !1);
        c.pendingChildren = d;
        ug(b);
        Bb(a, d);
      }
    };
    yg = function yg(a, b, c, d, e) {
      var f = a.stateNode,
        g = a.memoizedProps;
      if ((a = vg(a, b)) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
          k = Be(ye.current),
          l = null;
        g !== d && (l = Ma(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), La(f, c, d, e, k) && ug(b), b.stateNode = f, a ? ug(b) : _wg(f, b, !1, !1));
      }
    };
    zg = function zg(a, b, c, d) {
      c !== d ? (a = Be(Ae.current), c = Be(ye.current), b.stateNode = Oa(d, a, c, b), ug(b)) : b.stateNode = a.stateNode;
    };
  } else xg = function xg() {}, yg = function yg() {}, zg = function zg() {};
  function Bg(a, b) {
    if (!F) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function Q(a) {
    var b = null !== a.alternate && a.alternate.child === a.child,
      c = 0,
      d = 0;
    if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Cg(a, b, c) {
    var d = b.pendingProps;
    nd(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Q(b), null;
      case 1:
        return A(b.type) && mc(), Q(b), null;
      case 3:
        c = b.stateNode;
        De();
        q(z);
        q(x);
        Ie();
        c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null);
        if (null === a || null === a.child) yd(b) ? ug(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== rd && (Dg(rd), rd = null));
        xg(a, b);
        Q(b);
        return null;
      case 5:
        Fe(b);
        c = Be(Ae.current);
        var e = b.type;
        if (null !== a && null != b.stateNode) yg(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
          if (!d) {
            if (null === b.stateNode) throw Error(m(166));
            Q(b);
            return null;
          }
          a = Be(ye.current);
          if (yd(b)) {
            if (!Va) throw Error(m(175));
            a = Rb(b.stateNode, b.type, b.memoizedProps, c, a, b, !qd);
            b.updateQueue = a;
            null !== a && ug(b);
          } else {
            var f = Ja(e, d, c, a, b);
            _wg(f, b, !1, !1);
            b.stateNode = f;
            La(f, e, d, c, a) && ug(b);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        Q(b);
        return null;
      case 6:
        if (a && null != b.stateNode) zg(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(m(166));
          a = Be(Ae.current);
          c = Be(ye.current);
          if (yd(b)) {
            if (!Va) throw Error(m(176));
            a = b.stateNode;
            c = b.memoizedProps;
            if (d = Sb(a, c, b, !qd)) if (e = od, null !== e) switch (e.tag) {
              case 3:
                $b(e.stateNode.containerInfo, a, c, 0 !== (e.mode & 1));
                break;
              case 5:
                ac(e.type, e.memoizedProps, e.stateNode, a, c, 0 !== (e.mode & 1));
            }
            d && ug(b);
          } else b.stateNode = Oa(d, a, c, b);
        }
        Q(b);
        return null;
      case 13:
        q(J);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (F && null !== pd && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) zd(), Ad(), b.flags |= 98560, e = !1;else if (e = yd(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!e) throw Error(m(318));
              if (!Va) throw Error(m(344));
              e = b.memoizedState;
              e = null !== e ? e.dehydrated : null;
              if (!e) throw Error(m(317));
              Tb(e, b);
            } else Ad(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            Q(b);
            e = !1;
          } else null !== rd && (Dg(rd), rd = null), e = !0;
          if (!e) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        c = null !== d;
        c !== (null !== a && null !== a.memoizedState) && c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (J.current & 1) ? 0 === R && (R = 3) : og()));
        null !== b.updateQueue && (b.flags |= 4);
        Q(b);
        return null;
      case 4:
        return De(), xg(a, b), null === a && Xa(b.stateNode.containerInfo), Q(b), null;
      case 10:
        return Md(b.type._context), Q(b), null;
      case 17:
        return A(b.type) && mc(), Q(b), null;
      case 19:
        q(J);
        e = b.memoizedState;
        if (null === e) return Q(b), null;
        d = 0 !== (b.flags & 128);
        f = e.rendering;
        if (null === f) {
          if (d) Bg(e, !1);else {
            if (0 !== R || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
              f = Ge(a);
              if (null !== f) {
                b.flags |= 128;
                Bg(e, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                b.subtreeFlags = 0;
                a = c;
                for (c = b.child; null !== c;) d = c, e = a, d.flags &= 14680066, f = d.alternate, null === f ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = f.childLanes, d.lanes = f.lanes, d.child = f.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = f.memoizedProps, d.memoizedState = f.memoizedState, d.updateQueue = f.updateQueue, d.type = f.type, e = f.dependencies, d.dependencies = null === e ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), c = c.sibling;
                v(J, J.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== e.tail && D() > Eg && (b.flags |= 128, d = !0, Bg(e, !1), b.lanes = 4194304);
          }
        } else {
          if (!d) if (a = Ge(f), null !== a) {
            if (b.flags |= 128, d = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Bg(e, !0), null === e.tail && "hidden" === e.tailMode && !f.alternate && !F) return Q(b), null;
          } else 2 * D() - e.renderingStartTime > Eg && 1073741824 !== c && (b.flags |= 128, d = !0, Bg(e, !1), b.lanes = 4194304);
          e.isBackwards ? (f.sibling = b.child, b.child = f) : (a = e.last, null !== a ? a.sibling = f : b.child = f, e.last = f);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = D(), b.sibling = null, a = J.current, v(J, d ? a & 1 | 2 : a & 1), b;
        Q(b);
        return null;
      case 22:
      case 23:
        return Fg(), c = null !== b.memoizedState, null !== a && null !== a.memoizedState !== c && (b.flags |= 8192), c && 0 !== (b.mode & 1) ? 0 !== (ag & 1073741824) && (Q(b), Ta && b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, b.tag));
  }
  function Gg(a, b) {
    nd(b);
    switch (b.tag) {
      case 1:
        return A(b.type) && mc(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return De(), q(z), q(x), Ie(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Fe(b), null;
      case 13:
        q(J);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(m(340));
          Ad();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return q(J), null;
      case 4:
        return De(), null;
      case 10:
        return Md(b.type._context), null;
      case 22:
      case 23:
        return Fg(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Hg = !1,
    S = !1,
    Ig = "function" === typeof WeakSet ? WeakSet : Set,
    T = null;
  function Jg(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      U(a, b, d);
    } else c.current = null;
  }
  function Kg(a, b, c) {
    try {
      c();
    } catch (d) {
      U(a, b, d);
    }
  }
  var Lg = !1;
  function Mg(a, b) {
    Ha(a.containerInfo);
    for (T = b; null !== T;) if (a = T, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b.return = a, T = b;else for (; null !== T;) {
      a = T;
      try {
        var c = a.alternate;
        if (0 !== (a.flags & 1024)) switch (a.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== c) {
              var d = c.memoizedProps,
                e = c.memoizedState,
                f = a.stateNode,
                g = f.getSnapshotBeforeUpdate(a.elementType === a.type ? d : Fd(a.type, d), e);
              f.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          case 3:
            Ta && xb(a.stateNode.containerInfo);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (h) {
        U(a, a.return, h);
      }
      b = a.sibling;
      if (null !== b) {
        b.return = a.return;
        T = b;
        break;
      }
      T = a.return;
    }
    c = Lg;
    Lg = !1;
    return c;
  }
  function Ng(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Kg(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Og(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Pg(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = Ea(c);
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Qg(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Qg(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && Za(b));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Rg(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Sg(a) {
    a: for (;;) {
      for (; null === a.sibling;) {
        if (null === a.return || Rg(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Tg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Tg(a, b, c), a = a.sibling; null !== a;) Tg(a, b, c), a = a.sibling;
  }
  function Ug(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Ug(a, b, c), a = a.sibling; null !== a;) Ug(a, b, c), a = a.sibling;
  }
  var V = null,
    Vg = !1;
  function Wg(a, b, c) {
    for (c = c.child; null !== c;) Xg(a, b, c), c = c.sibling;
  }
  function Xg(a, b, c) {
    if (Sc && "function" === typeof Sc.onCommitFiberUnmount) try {
      Sc.onCommitFiberUnmount(Rc, c);
    } catch (h) {}
    switch (c.tag) {
      case 5:
        S || Jg(c, b);
      case 6:
        if (Ta) {
          var d = V,
            e = Vg;
          V = null;
          Wg(a, b, c);
          V = d;
          Vg = e;
          null !== V && (Vg ? rb(V, c.stateNode) : qb(V, c.stateNode));
        } else Wg(a, b, c);
        break;
      case 18:
        Ta && null !== V && (Vg ? Yb(V, c.stateNode) : Xb(V, c.stateNode));
        break;
      case 4:
        Ta ? (d = V, e = Vg, V = c.stateNode.containerInfo, Vg = !0, Wg(a, b, c), V = d, Vg = e) : (Ua && (d = c.stateNode.containerInfo, e = zb(d), Cb(d, e)), Wg(a, b, c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!S && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e,
              g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Kg(c, b, g) : 0 !== (f & 4) && Kg(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Wg(a, b, c);
        break;
      case 1:
        if (!S && (Jg(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          U(c, b, h);
        }
        Wg(a, b, c);
        break;
      case 21:
        Wg(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (S = (d = S) || null !== c.memoizedState, Wg(a, b, c), S = d) : Wg(a, b, c);
        break;
      default:
        Wg(a, b, c);
    }
  }
  function Yg(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Ig());
      b.forEach(function (b) {
        var d = Zg.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }
  function $g(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a,
          g = b;
        if (Ta) {
          var h = g;
          a: for (; null !== h;) {
            switch (h.tag) {
              case 5:
                V = h.stateNode;
                Vg = !1;
                break a;
              case 3:
                V = h.stateNode.containerInfo;
                Vg = !0;
                break a;
              case 4:
                V = h.stateNode.containerInfo;
                Vg = !0;
                break a;
            }
            h = h.return;
          }
          if (null === V) throw Error(m(160));
          Xg(f, g, e);
          V = null;
          Vg = !1;
        } else Xg(f, g, e);
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        U(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ah(b, a), b = b.sibling;
  }
  function ah(a, b) {
    var c = a.alternate,
      d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $g(b, a);
        bh(a);
        if (d & 4) {
          try {
            Ng(3, a, a.return), Og(3, a);
          } catch (p) {
            U(a, a.return, p);
          }
          try {
            Ng(5, a, a.return);
          } catch (p) {
            U(a, a.return, p);
          }
        }
        break;
      case 1:
        $g(b, a);
        bh(a);
        d & 512 && null !== c && Jg(c, c.return);
        break;
      case 5:
        $g(b, a);
        bh(a);
        d & 512 && null !== c && Jg(c, c.return);
        if (Ta) {
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              sb(e);
            } catch (p) {
              U(a, a.return, p);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps;
            c = null !== c ? c.memoizedProps : f;
            d = a.type;
            b = a.updateQueue;
            a.updateQueue = null;
            if (null !== b) try {
              nb(e, b, d, c, f, a);
            } catch (p) {
              U(a, a.return, p);
            }
          }
        }
        break;
      case 6:
        $g(b, a);
        bh(a);
        if (d & 4 && Ta) {
          if (null === a.stateNode) throw Error(m(162));
          e = a.stateNode;
          f = a.memoizedProps;
          c = null !== c ? c.memoizedProps : f;
          try {
            lb(e, c, f);
          } catch (p) {
            U(a, a.return, p);
          }
        }
        break;
      case 3:
        $g(b, a);
        bh(a);
        if (d & 4) {
          if (Ta && Va && null !== c && c.memoizedState.isDehydrated) try {
            Vb(b.containerInfo);
          } catch (p) {
            U(a, a.return, p);
          }
          if (Ua) {
            e = b.containerInfo;
            f = b.pendingChildren;
            try {
              Cb(e, f);
            } catch (p) {
              U(a, a.return, p);
            }
          }
        }
        break;
      case 4:
        $g(b, a);
        bh(a);
        if (d & 4 && Ua) {
          f = a.stateNode;
          e = f.containerInfo;
          f = f.pendingChildren;
          try {
            Cb(e, f);
          } catch (p) {
            U(a, a.return, p);
          }
        }
        break;
      case 13:
        $g(b, a);
        bh(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (ch = D()));
        d & 4 && Yg(a);
        break;
      case 22:
        var g = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (S = (c = S) || g, $g(b, a), S = c) : $g(b, a);
        bh(a);
        if (d & 8192) {
          c = null !== a.memoizedState;
          if ((a.stateNode.isHidden = c) && !g && 0 !== (a.mode & 1)) for (T = a, d = a.child; null !== d;) {
            for (b = T = d; null !== T;) {
              g = T;
              var h = g.child;
              switch (g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ng(4, g, g.return);
                  break;
                case 1:
                  Jg(g, g.return);
                  var k = g.stateNode;
                  if ("function" === typeof k.componentWillUnmount) {
                    var l = g,
                      n = g.return;
                    try {
                      var t = l;
                      k.props = t.memoizedProps;
                      k.state = t.memoizedState;
                      k.componentWillUnmount();
                    } catch (p) {
                      U(l, n, p);
                    }
                  }
                  break;
                case 5:
                  Jg(g, g.return);
                  break;
                case 22:
                  if (null !== g.memoizedState) {
                    dh(b);
                    continue;
                  }
              }
              null !== h ? (h.return = g, T = h) : dh(b);
            }
            d = d.sibling;
          }
          if (Ta) a: if (d = null, Ta) for (b = a;;) {
            if (5 === b.tag) {
              if (null === d) {
                d = b;
                try {
                  e = b.stateNode, c ? tb(e) : vb(b.stateNode, b.memoizedProps);
                } catch (p) {
                  U(a, a.return, p);
                }
              }
            } else if (6 === b.tag) {
              if (null === d) try {
                f = b.stateNode, c ? ub(f) : wb(f, b.memoizedProps);
              } catch (p) {
                U(a, a.return, p);
              }
            } else if ((22 !== b.tag && 23 !== b.tag || null === b.memoizedState || b === a) && null !== b.child) {
              b.child.return = b;
              b = b.child;
              continue;
            }
            if (b === a) break a;
            for (; null === b.sibling;) {
              if (null === b.return || b.return === a) break a;
              d === b && (d = null);
              b = b.return;
            }
            d === b && (d = null);
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        break;
      case 19:
        $g(b, a);
        bh(a);
        d & 4 && Yg(a);
        break;
      case 21:
        break;
      default:
        $g(b, a), bh(a);
    }
  }
  function bh(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        if (Ta) {
          b: {
            for (var c = a.return; null !== c;) {
              if (Rg(c)) {
                var d = c;
                break b;
              }
              c = c.return;
            }
            throw Error(m(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (sb(e), d.flags &= -33);
              var f = Sg(a);
              Ug(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo,
                h = Sg(a);
              Tg(a, h, g);
              break;
            default:
              throw Error(m(161));
          }
        }
      } catch (k) {
        U(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function eh(a, b, c) {
    T = a;
    fh(a);
  }
  function fh(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== T;) {
      var e = T,
        f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Hg;
        if (!g) {
          var h = e.alternate,
            k = null !== h && null !== h.memoizedState || S;
          h = Hg;
          var l = S;
          Hg = g;
          if ((S = k) && !l) for (T = e; null !== T;) g = T, k = g.child, 22 === g.tag && null !== g.memoizedState ? gh(e) : null !== k ? (k.return = g, T = k) : gh(e);
          for (; null !== f;) T = f, fh(f), f = f.sibling;
          T = e;
          Hg = h;
          S = l;
        }
        hh(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, T = f) : hh(a);
    }
  }
  function hh(a) {
    for (; null !== T;) {
      var b = T;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              S || Og(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !S) if (null === c) d.componentDidMount();else {
                var e = b.elementType === b.type ? c.memoizedProps : Fd(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && ce(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = Ea(b.child.stateNode);
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                ce(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              null === c && b.flags & 4 && mb(h, b.type, b.memoizedProps, b);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (Va && null === b.memoizedState) {
                var k = b.alternate;
                if (null !== k) {
                  var l = k.memoizedState;
                  if (null !== l) {
                    var n = l.dehydrated;
                    null !== n && Wb(n);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          S || b.flags & 512 && Pg(b);
        } catch (t) {
          U(b, b.return, t);
        }
      }
      if (b === a) {
        T = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        T = c;
        break;
      }
      T = b.return;
    }
  }
  function dh(a) {
    for (; null !== T;) {
      var b = T;
      if (b === a) {
        T = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        T = c;
        break;
      }
      T = b.return;
    }
  }
  function gh(a) {
    for (; null !== T;) {
      var b = T;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Og(4, b);
            } catch (k) {
              U(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                U(b, e, k);
              }
            }
            var f = b.return;
            try {
              Pg(b);
            } catch (k) {
              U(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Pg(b);
            } catch (k) {
              U(b, g, k);
            }
        }
      } catch (k) {
        U(b, b.return, k);
      }
      if (b === a) {
        T = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        T = h;
        break;
      }
      T = b.return;
    }
  }
  var ih = 0,
    jh = 1,
    kh = 2,
    lh = 3,
    mh = 4;
  if ("function" === typeof Symbol && Symbol.for) {
    var nh = Symbol.for;
    ih = nh("selector.component");
    jh = nh("selector.has_pseudo_class");
    kh = nh("selector.role");
    lh = nh("selector.test_id");
    mh = nh("selector.text");
  }
  function oh(a) {
    var b = Wa(a);
    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(m(364));
      return b;
    }
    a = cb(a);
    if (null === a) throw Error(m(362));
    return a.stateNode.current;
  }
  function ph(a, b) {
    switch (b.$$typeof) {
      case ih:
        if (a.type === b.value) return !0;
        break;
      case jh:
        a: {
          b = b.value;
          a = [a, 0];
          for (var c = 0; c < a.length;) {
            var d = a[c++],
              e = a[c++],
              f = b[e];
            if (5 !== d.tag || !fb(d)) {
              for (; null != f && ph(d, f);) e++, f = b[e];
              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) a.push(d, e), d = d.sibling;
            }
          }
          b = !1;
        }
        return b;
      case kh:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;
      case mh:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;
      case lh:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(m(365));
    }
    return !1;
  }
  function qh(a) {
    switch (a.$$typeof) {
      case ih:
        return "<" + (ua(a.value) || "Unknown") + ">";
      case jh:
        return ":has(" + (qh(a) || "") + ")";
      case kh:
        return '[role="' + a.value + '"]';
      case mh:
        return '"' + a.value + '"';
      case lh:
        return '[data-testname="' + a.value + '"]';
      default:
        throw Error(m(365));
    }
  }
  function rh(a, b) {
    var c = [];
    a = [a, 0];
    for (var d = 0; d < a.length;) {
      var e = a[d++],
        f = a[d++],
        g = b[f];
      if (5 !== e.tag || !fb(e)) {
        for (; null != g && ph(e, g);) f++, g = b[f];
        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) a.push(e, f), e = e.sibling;
      }
    }
    return c;
  }
  function sh(a, b) {
    if (!bb) throw Error(m(363));
    a = oh(a);
    a = rh(a, b);
    b = [];
    a = Array.from(a);
    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) a.push(d), d = d.sibling;
    }
    return b;
  }
  var th = Math.ceil,
    uh = da.ReactCurrentDispatcher,
    vh = da.ReactCurrentOwner,
    W = da.ReactCurrentBatchConfig,
    H = 0,
    O = null,
    X = null,
    Y = 0,
    ag = 0,
    $f = ic(0),
    R = 0,
    wh = null,
    be = 0,
    xh = 0,
    yh = 0,
    zh = null,
    Ah = null,
    ch = 0,
    Eg = Infinity,
    Bh = null;
  function Ch() {
    Eg = D() + 500;
  }
  var Kf = !1,
    Lf = null,
    Nf = null,
    Dh = !1,
    Eh = null,
    Fh = 0,
    Gh = 0,
    Hh = null,
    Ih = -1,
    Jh = 0;
  function I() {
    return 0 !== (H & 6) ? D() : -1 !== Ih ? Ih : Ih = D();
  }
  function fe(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (H & 2) && 0 !== Y) return Y & -Y;
    if (null !== Cd.transition) return 0 === Jh && (Jh = Dc()), Jh;
    a = C;
    return 0 !== a ? a : Ya();
  }
  function ge(a, b, c, d) {
    if (50 < Gh) throw Gh = 0, Hh = null, Error(m(185));
    Fc(a, c, d);
    if (0 === (H & 2) || a !== O) a === O && (0 === (H & 2) && (xh |= c), 4 === R && Kh(a, Y)), Lh(a, d), 1 === c && 0 === H && 0 === (b.mode & 1) && (Ch(), Xc && ad());
  }
  function Lh(a, b) {
    var c = a.callbackNode;
    Bc(a, b);
    var d = zc(a, a === O ? Y : 0);
    if (0 === d) null !== c && Kc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Kc(c);
      if (1 === b) 0 === a.tag ? $c(Mh.bind(null, a)) : Zc(Mh.bind(null, a)), $a ? ab(function () {
        0 === (H & 6) && ad();
      }) : Jc(Nc, ad), c = null;else {
        switch (Ic(d)) {
          case 1:
            c = Nc;
            break;
          case 4:
            c = Oc;
            break;
          case 16:
            c = Pc;
            break;
          case 536870912:
            c = Qc;
            break;
          default:
            c = Pc;
        }
        c = Nh(c, Oh.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Oh(a, b) {
    Ih = -1;
    Jh = 0;
    if (0 !== (H & 6)) throw Error(m(327));
    var c = a.callbackNode;
    if (Ph() && a.callbackNode !== c) return null;
    var d = zc(a, a === O ? Y : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Qh(a, d);else {
      b = d;
      var e = H;
      H |= 2;
      var f = Rh();
      if (O !== a || Y !== b) Bh = null, Ch(), Sh(a, b);
      do try {
        Th();
        break;
      } catch (h) {
        Uh(a, h);
      } while (1);
      Kd();
      uh.current = f;
      H = e;
      null !== X ? b = 0 : (O = null, Y = 0, b = R);
    }
    if (0 !== b) {
      2 === b && (e = Cc(a), 0 !== e && (d = e, b = Vh(a, e)));
      if (1 === b) throw c = wh, Sh(a, 0), Kh(a, d), Lh(a, D()), c;
      if (6 === b) Kh(a, d);else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Wh(e) && (b = Qh(a, d), 2 === b && (f = Cc(a), 0 !== f && (d = f, b = Vh(a, f))), 1 === b)) throw c = wh, Sh(a, 0), Kh(a, d), Lh(a, D()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Xh(a, Ah, Bh);
            break;
          case 3:
            Kh(a, d);
            if ((d & 130023424) === d && (b = ch + 500 - D(), 10 < b)) {
              if (0 !== zc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                I();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Pa(Xh.bind(null, a, Ah, Bh), b);
              break;
            }
            Xh(a, Ah, Bh);
            break;
          case 4:
            Kh(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d;) {
              var g = 31 - tc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = D() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * th(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Pa(Xh.bind(null, a, Ah, Bh), d);
              break;
            }
            Xh(a, Ah, Bh);
            break;
          case 5:
            Xh(a, Ah, Bh);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    Lh(a, D());
    return a.callbackNode === c ? Oh.bind(null, a) : null;
  }
  function Vh(a, b) {
    var c = zh;
    a.current.memoizedState.isDehydrated && (Sh(a, b).flags |= 256);
    a = Qh(a, b);
    2 !== a && (b = Ah, Ah = c, null !== b && Dg(b));
    return a;
  }
  function Dg(a) {
    null === Ah ? Ah = a : Ah.push.apply(Ah, a);
  }
  function Wh(a) {
    for (var b = a;;) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d],
            f = e.getSnapshot;
          e = e.value;
          try {
            if (!Vc(f(), e)) return !1;
          } catch (g) {
            return !1;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
        if (b === a) break;
        for (; null === b.sibling;) {
          if (null === b.return || b.return === a) return !0;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return !0;
  }
  function Kh(a, b) {
    b &= ~yh;
    b &= ~xh;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - tc(b),
        d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Mh(a) {
    if (0 !== (H & 6)) throw Error(m(327));
    Ph();
    var b = zc(a, 0);
    if (0 === (b & 1)) return Lh(a, D()), null;
    var c = Qh(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = Cc(a);
      0 !== d && (b = d, c = Vh(a, d));
    }
    if (1 === c) throw c = wh, Sh(a, 0), Kh(a, b), Lh(a, D()), c;
    if (6 === c) throw Error(m(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Xh(a, Ah, Bh);
    Lh(a, D());
    return null;
  }
  function Yh(a) {
    null !== Eh && 0 === Eh.tag && 0 === (H & 6) && Ph();
    var b = H;
    H |= 1;
    var c = W.transition,
      d = C;
    try {
      if (W.transition = null, C = 1, a) return a();
    } finally {
      C = d, W.transition = c, H = b, 0 === (H & 6) && ad();
    }
  }
  function Fg() {
    ag = $f.current;
    q($f);
  }
  function Sh(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== X) for (c = X.return; null !== c;) {
      var d = c;
      nd(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && mc();
          break;
        case 3:
          De();
          q(z);
          q(x);
          Ie();
          break;
        case 5:
          Fe(d);
          break;
        case 4:
          De();
          break;
        case 13:
          q(J);
          break;
        case 19:
          q(J);
          break;
        case 10:
          Md(d.type._context);
          break;
        case 22:
        case 23:
          Fg();
      }
      c = c.return;
    }
    O = a;
    X = a = qe(a.current, null);
    Y = ag = b;
    R = 0;
    wh = null;
    yh = xh = be = 0;
    Ah = zh = null;
    if (null !== Qd) {
      for (b = 0; b < Qd.length; b++) if (c = Qd[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next,
          f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      Qd = null;
    }
    return a;
  }
  function Uh(a, b) {
    do {
      var c = X;
      try {
        Kd();
        Je.current = Ve;
        if (Me) {
          for (var d = K.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Me = !1;
        }
        Le = 0;
        M = L = K = null;
        Ne = !1;
        Oe = 0;
        vh.current = null;
        if (null === c || null === c.return) {
          R = 1;
          wh = b;
          X = null;
          break;
        }
        a: {
          var f = a,
            g = c.return,
            h = c,
            k = b;
          b = Y;
          h.flags |= 32768;
          if (null !== k && "object" === _typeof(k) && "function" === typeof k.then) {
            var l = k,
              n = h,
              t = n.tag;
            if (0 === (n.mode & 1) && (0 === t || 11 === t || 15 === t)) {
              var p = n.alternate;
              p ? (n.updateQueue = p.updateQueue, n.memoizedState = p.memoizedState, n.lanes = p.lanes) : (n.updateQueue = null, n.memoizedState = null);
            }
            var B = Qf(g);
            if (null !== B) {
              B.flags &= -257;
              Rf(B, g, h, f, b);
              B.mode & 1 && Of(f, l, b);
              b = B;
              k = l;
              var w = b.updateQueue;
              if (null === w) {
                var Z = new Set();
                Z.add(k);
                b.updateQueue = Z;
              } else w.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Of(f, l, b);
                og();
                break a;
              }
              k = Error(m(426));
            }
          } else if (F && h.mode & 1) {
            var za = Qf(g);
            if (null !== za) {
              0 === (za.flags & 65536) && (za.flags |= 256);
              Rf(za, g, h, f, b);
              Bd(Ff(k, h));
              break a;
            }
          }
          f = k = Ff(k, h);
          4 !== R && (R = 2);
          null === zh ? zh = [f] : zh.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var E = Jf(f, k, b);
                $d(f, E);
                break a;
              case 1:
                h = k;
                var r = f.type,
                  u = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof r.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Nf || !Nf.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var Db = Mf(f, h, b);
                  $d(f, Db);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Zh(c);
      } catch (qc) {
        b = qc;
        X === c && null !== c && (X = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Rh() {
    var a = uh.current;
    uh.current = Ve;
    return null === a ? Ve : a;
  }
  function og() {
    if (0 === R || 3 === R || 2 === R) R = 4;
    null === O || 0 === (be & 268435455) && 0 === (xh & 268435455) || Kh(O, Y);
  }
  function Qh(a, b) {
    var c = H;
    H |= 2;
    var d = Rh();
    if (O !== a || Y !== b) Bh = null, Sh(a, b);
    do try {
      $h();
      break;
    } catch (e) {
      Uh(a, e);
    } while (1);
    Kd();
    H = c;
    uh.current = d;
    if (null !== X) throw Error(m(261));
    O = null;
    Y = 0;
    return R;
  }
  function $h() {
    for (; null !== X;) ai(X);
  }
  function Th() {
    for (; null !== X && !Lc();) ai(X);
  }
  function ai(a) {
    var b = bi(a.alternate, a, ag);
    a.memoizedProps = a.pendingProps;
    null === b ? Zh(a) : X = b;
    vh.current = null;
  }
  function Zh(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Cg(c, b, ag), null !== c) {
          X = c;
          return;
        }
      } else {
        c = Gg(c, b);
        if (null !== c) {
          c.flags &= 32767;
          X = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
          R = 6;
          X = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        X = b;
        return;
      }
      X = b = a;
    } while (null !== b);
    0 === R && (R = 5);
  }
  function Xh(a, b, c) {
    var d = C,
      e = W.transition;
    try {
      W.transition = null, C = 1, ci(a, b, c, d);
    } finally {
      W.transition = e, C = d;
    }
    return null;
  }
  function ci(a, b, c, d) {
    do Ph(); while (null !== Eh);
    if (0 !== (H & 6)) throw Error(m(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(m(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Gc(a, f);
    a === O && (X = O = null, Y = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || Dh || (Dh = !0, Nh(Pc, function () {
      Ph();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = W.transition;
      W.transition = null;
      var g = C;
      C = 1;
      var h = H;
      H |= 4;
      vh.current = null;
      Mg(a, c);
      ah(c, a);
      Ia(a.containerInfo);
      a.current = c;
      eh(c);
      Mc();
      H = h;
      C = g;
      W.transition = f;
    } else a.current = c;
    Dh && (Dh = !1, Eh = a, Fh = e);
    f = a.pendingLanes;
    0 === f && (Nf = null);
    Tc(c.stateNode);
    Lh(a, D());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
      componentStack: e.stack,
      digest: e.digest
    });
    if (Kf) throw Kf = !1, a = Lf, Lf = null, a;
    0 !== (Fh & 1) && 0 !== a.tag && Ph();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === Hh ? Gh++ : (Gh = 0, Hh = a) : Gh = 0;
    ad();
    return null;
  }
  function Ph() {
    if (null !== Eh) {
      var a = Ic(Fh),
        b = W.transition,
        c = C;
      try {
        W.transition = null;
        C = 16 > a ? 16 : a;
        if (null === Eh) var d = !1;else {
          a = Eh;
          Eh = null;
          Fh = 0;
          if (0 !== (H & 6)) throw Error(m(331));
          var e = H;
          H |= 4;
          for (T = a.current; null !== T;) {
            var f = T,
              g = f.child;
            if (0 !== (T.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (T = l; null !== T;) {
                    var n = T;
                    switch (n.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ng(8, n, f);
                    }
                    var t = n.child;
                    if (null !== t) t.return = n, T = t;else for (; null !== T;) {
                      n = T;
                      var p = n.sibling,
                        B = n.return;
                      Qg(n);
                      if (n === l) {
                        T = null;
                        break;
                      }
                      if (null !== p) {
                        p.return = B;
                        T = p;
                        break;
                      }
                      T = B;
                    }
                  }
                }
                var w = f.alternate;
                if (null !== w) {
                  var Z = w.child;
                  if (null !== Z) {
                    w.child = null;
                    do {
                      var za = Z.sibling;
                      Z.sibling = null;
                      Z = za;
                    } while (null !== Z);
                  }
                }
                T = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, T = g;else b: for (; null !== T;) {
              f = T;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Ng(9, f, f.return);
              }
              var E = f.sibling;
              if (null !== E) {
                E.return = f.return;
                T = E;
                break b;
              }
              T = f.return;
            }
          }
          var r = a.current;
          for (T = r; null !== T;) {
            g = T;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, T = u;else b: for (g = r; null !== T;) {
              h = T;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Og(9, h);
                }
              } catch (qc) {
                U(h, h.return, qc);
              }
              if (h === g) {
                T = null;
                break b;
              }
              var Db = h.sibling;
              if (null !== Db) {
                Db.return = h.return;
                T = Db;
                break b;
              }
              T = h.return;
            }
          }
          H = e;
          ad();
          if (Sc && "function" === typeof Sc.onPostCommitFiberRoot) try {
            Sc.onPostCommitFiberRoot(Rc, a);
          } catch (qc) {}
          d = !0;
        }
        return d;
      } finally {
        C = c, W.transition = b;
      }
    }
    return !1;
  }
  function di(a, b, c) {
    b = Ff(c, b);
    b = Jf(a, b, 1);
    a = Yd(a, b, 1);
    b = I();
    null !== a && (Fc(a, 1, b), Lh(a, b));
  }
  function U(a, b, c) {
    if (3 === a.tag) di(a, a, c);else for (; null !== b;) {
      if (3 === b.tag) {
        di(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Nf || !Nf.has(d))) {
          a = Ff(c, a);
          a = Mf(b, a, 1);
          b = Yd(b, a, 1);
          a = I();
          null !== b && (Fc(b, 1, a), Lh(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Pf(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = I();
    a.pingedLanes |= a.suspendedLanes & c;
    O === a && (Y & c) === c && (4 === R || 3 === R && (Y & 130023424) === Y && 500 > D() - ch ? Sh(a, 0) : yh |= c);
    Lh(a, b);
  }
  function ei(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = xc, xc <<= 1, 0 === (xc & 130023424) && (xc = 4194304)));
    var c = I();
    a = Td(a, b);
    null !== a && (Fc(a, b, c), Lh(a, c));
  }
  function pg(a) {
    var b = a.memoizedState,
      c = 0;
    null !== b && (c = b.retryLane);
    ei(a, c);
  }
  function Zg(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    null !== d && d.delete(b);
    ei(a, c);
  }
  var bi;
  bi = function bi(a, b, c) {
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || z.current) G = !0;else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return G = !1, tg(a, b, c);
        G = 0 !== (a.flags & 131072) ? !0 : !1;
      }
    } else G = !1, F && 0 !== (b.flags & 1048576) && ld(b, ed, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        dg(a, b);
        a = b.pendingProps;
        var e = lc(b, x.current);
        Od(b, c);
        e = Re(null, b, d, a, e, c);
        var f = We();
        b.flags |= 1;
        "object" === _typeof(e) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, A(d) ? (f = !0, pc(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, Vd(b), e.updater = he, b.stateNode = e, e._reactInternals = b, le(b, d, a, c), b = eg(null, b, d, !0, f, c)) : (b.tag = 0, F && f && md(b), P(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          dg(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = fi(d);
          a = Fd(d, a);
          switch (e) {
            case 0:
              b = Yf(null, b, d, a, c);
              break a;
            case 1:
              b = cg(null, b, d, a, c);
              break a;
            case 11:
              b = Tf(null, b, d, a, c);
              break a;
            case 14:
              b = Vf(null, b, d, Fd(d.type, a), c);
              break a;
          }
          throw Error(m(306, d, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), Yf(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), cg(a, b, d, e, c);
      case 3:
        a: {
          fg(b);
          if (null === a) throw Error(m(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          Wd(a, b);
          ae(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (Va && f.isDehydrated) {
            if (f = {
              element: d,
              isDehydrated: !1,
              cache: g.cache,
              pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
              transitions: g.transitions
            }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ff(Error(m(423)), b);
              b = gg(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ff(Error(m(424)), b);
              b = gg(a, b, d, c, e);
              break a;
            } else for (Va && (pd = Pb(b.stateNode.containerInfo), od = b, F = !0, rd = null, qd = !1), c = we(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
          } else {
            Ad();
            if (d === e) {
              b = Uf(a, b, c);
              break a;
            }
            P(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ee(b), null === a && wd(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Na(d, e) ? g = null : null !== f && Na(d, f) && (b.flags |= 32), bg(a, b), P(a, b, g, c), b.child;
      case 6:
        return null === a && wd(b), null;
      case 13:
        return jg(a, b, c);
      case 4:
        return Ce(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = ve(b, null, d, c) : P(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), Tf(a, b, d, e, c);
      case 7:
        return P(a, b, b.pendingProps, c), b.child;
      case 8:
        return P(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return P(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          Ld(b, d, g);
          if (null !== f) if (Vc(f.value, g)) {
            if (f.children === e.children && !z.current) {
              b = Uf(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k;) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = Xd(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var n = l.pending;
                      null === n ? k.next = k : (k.next = n.next, n.next = k);
                      l.pending = k;
                    }
                  }
                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  Nd(f.return, c, b);
                  h.lanes |= c;
                  break;
                }
                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
              g = f.return;
              if (null === g) throw Error(m(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              Nd(g, c, b);
              g = f.sibling;
            } else g = f.child;
            if (null !== g) g.return = f;else for (g = f; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }
              f = g.sibling;
              if (null !== f) {
                f.return = g.return;
                g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          P(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, Od(b, c), e = Pd(e), d = d(e), b.flags |= 1, P(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Fd(d, b.pendingProps), e = Fd(d.type, e), Vf(a, b, d, e, c);
      case 15:
        return Xf(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), dg(a, b), b.tag = 1, A(d) ? (a = !0, pc(b)) : a = !1, Od(b, c), je(b, d, e), le(b, d, e, c), eg(null, b, d, !0, a, c);
      case 19:
        return sg(a, b, c);
      case 22:
        return Zf(a, b, c);
    }
    throw Error(m(156, b.tag));
  };
  function Nh(a, b) {
    return Jc(a, b);
  }
  function gi(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function td(a, b, c, d) {
    return new gi(a, b, c, d);
  }
  function Wf(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function fi(a) {
    if ("function" === typeof a) return Wf(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === ma) return 11;
      if (a === pa) return 14;
    }
    return 2;
  }
  function qe(a, b) {
    var c = a.alternate;
    null === c ? (c = td(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function se(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Wf(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ha:
        return ue(c.children, e, f, b);
      case ia:
        g = 8;
        e |= 8;
        break;
      case ja:
        return a = td(12, c, b, e | 2), a.elementType = ja, a.lanes = f, a;
      case na:
        return a = td(13, c, b, e), a.elementType = na, a.lanes = f, a;
      case oa:
        return a = td(19, c, b, e), a.elementType = oa, a.lanes = f, a;
      case ra:
        return kg(c, e, f, b);
      default:
        if ("object" === _typeof(a) && null !== a) switch (a.$$typeof) {
          case ka:
            g = 10;
            break a;
          case la:
            g = 9;
            break a;
          case ma:
            g = 11;
            break a;
          case pa:
            g = 14;
            break a;
          case qa:
            g = 16;
            d = null;
            break a;
        }
        throw Error(m(130, null == a ? a : _typeof(a), ""));
    }
    b = td(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function ue(a, b, c, d) {
    a = td(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function kg(a, b, c, d) {
    a = td(22, a, d, b);
    a.elementType = ra;
    a.lanes = c;
    a.stateNode = {
      isHidden: !1
    };
    return a;
  }
  function re(a, b, c) {
    a = td(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function te(a, b, c) {
    b = td(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }
  function hi(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Ec(0);
    this.expirationTimes = Ec(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ec(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    Va && (this.mutableSourceEagerHydrationData = null);
  }
  function ii(a, b, c, d, e, f, g, h, k) {
    a = new hi(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = td(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
      element: d,
      isDehydrated: c,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    Vd(f);
    return a;
  }
  function ji(a) {
    if (!a) return jc;
    a = a._reactInternals;
    a: {
      if (wa(a) !== a || 1 !== a.tag) throw Error(m(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (A(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(m(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (A(c)) return oc(a, c, b);
    }
    return b;
  }
  function ki(a) {
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(m(188));
      a = Object.keys(a).join(",");
      throw Error(m(268, a));
    }
    a = Aa(b);
    return null === a ? null : a.stateNode;
  }
  function li(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function mi(a, b) {
    li(a, b);
    (a = a.alternate) && li(a, b);
  }
  function ni(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }
  function oi() {
    return null;
  }
  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = Td(a, 134217728);
      if (null !== b) {
        var c = I();
        ge(b, a, 134217728, c);
      }
      mi(a, 134217728);
    }
  };
  exports.attemptDiscreteHydration = function (a) {
    if (13 === a.tag) {
      var b = Td(a, 1);
      if (null !== b) {
        var c = I();
        ge(b, a, 1, c);
      }
      mi(a, 1);
    }
  };
  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = fe(a),
        c = Td(a, b);
      if (null !== c) {
        var d = I();
        ge(c, a, b, d);
      }
      mi(a, b);
    }
  };
  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = yc(b.pendingLanes);
          0 !== c && (Hc(b, c | 1), Lh(b, D()), 0 === (H & 6) && (Ch(), ad()));
        }
        break;
      case 13:
        Yh(function () {
          var b = Td(a, 1);
          if (null !== b) {
            var c = I();
            ge(b, a, 1, c);
          }
        }), mi(a, 1);
    }
  };
  exports.batchedUpdates = function (a, b) {
    var c = H;
    H |= 1;
    try {
      return a(b);
    } finally {
      H = c, 0 === H && (Ch(), Xc && ad());
    }
  };
  exports.createComponentSelector = function (a) {
    return {
      $$typeof: ih,
      value: a
    };
  };
  exports.createContainer = function (a, b, c, d, e, f, g) {
    return ii(a, b, !1, null, c, d, e, f, g);
  };
  exports.createHasPseudoClassSelector = function (a) {
    return {
      $$typeof: jh,
      value: a
    };
  };
  exports.createHydrationContainer = function (a, b, c, d, e, f, g, h, k) {
    a = ii(c, d, !0, a, e, f, g, h, k);
    a.context = ji(null);
    c = a.current;
    d = I();
    e = fe(c);
    f = Xd(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    Yd(c, f, e);
    a.current.lanes = e;
    Fc(a, e, d);
    Lh(a, d);
    return a;
  };
  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: fa,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };
  exports.createRoleSelector = function (a) {
    return {
      $$typeof: kh,
      value: a
    };
  };
  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: lh,
      value: a
    };
  };
  exports.createTextSelector = function (a) {
    return {
      $$typeof: mh,
      value: a
    };
  };
  exports.deferredUpdates = function (a) {
    var b = C,
      c = W.transition;
    try {
      return W.transition = null, C = 16, a();
    } finally {
      C = b, W.transition = c;
    }
  };
  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = C,
      g = W.transition;
    try {
      return W.transition = null, C = 1, a(b, c, d, e);
    } finally {
      C = f, W.transition = g, 0 === H && Ch();
    }
  };
  exports.findAllNodes = sh;
  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(m(363));
    b = sh(a, b);
    a = [];
    for (var c = 0; c < b.length; c++) a.push(db(b[c]));
    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];
      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) if (b !== h) {
        var k = a[h],
          l = k.x,
          n = l + k.width,
          t = k.y,
          p = t + k.height;
        if (d >= l && f >= t && e <= n && g <= p) {
          a.splice(b, 1);
          break;
        } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
          t > f && (k.height += t - f, k.y = f);
          p < g && (k.height = g - t);
          a.splice(b, 1);
          break;
        } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
          l > d && (k.width += l - d, k.x = d);
          n < e && (k.width = e - l);
          a.splice(b, 1);
          break;
        }
      }
    }
    return a;
  };
  exports.findHostInstance = ki;
  exports.findHostInstanceWithNoPortals = function (a) {
    a = ya(a);
    a = null !== a ? Ca(a) : null;
    return null === a ? null : a.stateNode;
  };
  exports.findHostInstanceWithWarning = function (a) {
    return ki(a);
  };
  exports.flushControlled = function (a) {
    var b = H;
    H |= 1;
    var c = W.transition,
      d = C;
    try {
      W.transition = null, C = 1, a();
    } finally {
      C = d, W.transition = c, H = b, 0 === H && (Ch(), ad());
    }
  };
  exports.flushPassiveEffects = Ph;
  exports.flushSync = Yh;
  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(m(363));
    a = oh(a);
    b = rh(a, b);
    b = Array.from(b);
    for (a = 0; a < b.length;) {
      var c = b[a++];
      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;
        for (c = c.child; null !== c;) b.push(c), c = c.sibling;
      }
    }
    return !1;
  };
  exports.getCurrentUpdatePriority = function () {
    return C;
  };
  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(m(363));
    var c = 0,
      d = [];
    a = [oh(a), 0];
    for (var e = 0; e < a.length;) {
      var f = a[e++],
        g = a[e++],
        h = b[g];
      if (5 !== f.tag || !fb(f)) if (ph(f, h) && (d.push(qh(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) a.push(f, g), f = f.sibling;
    }
    if (c < b.length) {
      for (a = []; c < b.length; c++) a.push(qh(b[c]));
      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }
    return null;
  };
  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return Ea(a.child.stateNode);
      default:
        return a.child.stateNode;
    }
  };
  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: da.ReactCurrentDispatcher,
      findHostInstanceByFiber: ni,
      findFiberByHostInstance: a.findFiberByHostInstance || oi,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0"
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) a = !0;else {
        try {
          Rc = b.inject(a), Sc = b;
        } catch (c) {}
        a = b.checkDCE ? !0 : !1;
      }
    }
    return a;
  };
  exports.isAlreadyRendering = function () {
    return !1;
  };
  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(m(363));
    a = sh(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function disconnect() {
        e();
      }
    };
  };
  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };
  exports.runWithPriority = function (a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  exports.shouldError = function () {
    return null;
  };
  exports.shouldSuspend = function () {
    return !1;
  };
  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
      f = I(),
      g = fe(e);
    c = ji(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = Xd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = Yd(e, b, g);
    null !== a && (ge(a, e, g, f), Zd(a, e, g));
    return g;
  };
  return exports;
};

{
  reactReconciler.exports = reactReconciler_production_min;
}
var reactReconcilerExports = reactReconciler.exports;
const Reconciler = /*@__PURE__*/getDefaultExportFromCjs(reactReconcilerExports);

var constants = {
  exports: {}
};

var reactReconcilerConstants_production_min = {};

/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
reactReconcilerConstants_production_min.ConcurrentRoot = 1;
reactReconcilerConstants_production_min.ContinuousEventPriority = 4;
reactReconcilerConstants_production_min.DefaultEventPriority = 16;
reactReconcilerConstants_production_min.DiscreteEventPriority = 1;
reactReconcilerConstants_production_min.IdleEventPriority = 536870912;
reactReconcilerConstants_production_min.LegacyRoot = 0;

{
  constants.exports = reactReconcilerConstants_production_min;
}
var constantsExports = constants.exports;

const supportedInputTypes = {
    color: true,
    date: true,
    datetime: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
};
const SyncLane = 1;
const InputContinuousLane = 4;
const DefaultLane = 16;
const DiscreteEventPriority = SyncLane;
const ContinuousEventPriority = InputContinuousLane;
const DefaultEventPriority = DefaultLane;
function getEventPriority(domEventName) {
    switch (domEventName) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'input':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'reset':
        case 'resize':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'change':
        case 'blur':
        case 'focus':
        case 'select':
        case 'selectstart':
            return DiscreteEventPriority;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'pointerenter':
        case 'pointerleave':
            return ContinuousEventPriority;
        default:
            return DefaultEventPriority;
    }
}
const randomKey = Math.random()
    .toString(36)
    .slice(2);
const internalPropsKey = '__reactProps$' + randomKey;
const internalInstanceKey = '__reactFiber$' + randomKey;
const internalContainerInstanceKey = '__reactContainer$' + randomKey;
// const internalEventHandlersKey = '__reactEvents$' + randomKey
// const internalEventHandlerListenersKey = '__reactListeners$' + randomKey
// const internalEventHandlesSetKey = '__reactHandles$' + randomKey

const HostRoot = 3; // Root of a host tree. Could be nested inside another node.
const HostComponent = 5;
const HostText = 6;
const SuspenseComponent = 13;

/**
 * 给 TaroElement 绑定 react fiber、react props 等属性
 * 提供 fiber -> element、element -> fiber、element -> props 的方法
*/
function precacheFiberNode(hostInst, node) {
    node[internalInstanceKey] = hostInst;
}
function markContainerAsRoot(hostRoot, node) {
    node[internalContainerInstanceKey] = hostRoot;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode(node) {
    const inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
    if (inst) {
        if (inst.tag === HostComponent ||
            inst.tag === HostText ||
            inst.tag === SuspenseComponent ||
            inst.tag === HostRoot) {
            return inst;
        }
        else {
            return null;
        }
    }
    return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance(inst) {
    if (inst.tag === HostComponent || inst.tag === HostText) {
        // In Fiber this, is just the state node right now. We assume it will be
        // a host component or host text.
        return inst.stateNode;
    }
}
function getFiberCurrentPropsFromNode(node) {
    return node[internalPropsKey] || null;
}
function updateFiberProps(node, props) {
    node[internalPropsKey] = props;
}

// 从 props 中，更新 input 组件的 value 值
function updateInputWrapper(element, oldValue, props) {
    const node = element;
    const checked = props.checked;
    if (checked != null) {
        console.warn('updateCheck 未实现', node);
        return;
    }
    updateWrapper(element, oldValue, props);
    updateNamedCousins(element, props);
}
// react 中原本处理 type=radio 的逻辑，这里留个空，暂时不处理
function updateNamedCousins(rootNode, props) {
    const name = props.name;
    if (props.type === 'radio' && name != null) {
        console.warn('radio updateNamedCousins 未实现', rootNode, props);
    }
}
function getToStringValue(value) {
    const isEmptyType = typeof value === 'function' || typeof value === 'symbol';
    return isEmptyType ? '' : value;
}
function toString(value) {
    return '' + value;
}
function updateWrapper(element, oldValue, props) {
    const node = element;
    const value = getToStringValue(props.value);
    const type = props.type;
    setNodeValue(node, oldValue, value, type);
}
// oldValue 为 event.detail.value，value 为 fiber.props.value
// 如果 oldValue 和 value 不相等，代表受控组件需要更新
// 更新的原则为，fiber.props.value 永远为用户所需要的值，因此 node.value = toString(value)
function setNodeValue(node, oldValue, value, type = 'string') {
    if (value != null) {
        if (type === 'number') {
            if ((value === 0 && node.value === '')
                // We explicitly want to coerce to number here if possible.
                // eslint-disable-next-line
                || oldValue != value) {
                node.value = toString(value);
            }
        }
        else if (oldValue !== toString(value)) {
            node.value = toString(value);
        }
    }
    else if (type === 'submit' || type === 'reset') {
        // Submit/reset inputs need the attribute removed completely to avoid
        // blank-text buttons.
        node.removeAttribute('value');
    }
}
// 判断当前 TaroElement 是否为 supportedInputTypes input 或 textarea
function isTextInputElement(elem) {
    const nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    if (nodeName === 'input') {
        const type = elem.type;
        return !type || !!supportedInputTypes[type];
    }
    if (nodeName === 'textarea') {
        return true;
    }
    return false;
}
const ReactDOMTextareaRestoreControlledState = updateWrapper;
const ReactDOMInputRestoreControlledState = updateInputWrapper;

function isCheckable(elem) {
    const type = elem.type;
    const nodeName = elem.nodeName;
    return (nodeName &&
        nodeName.toLowerCase() === 'input' &&
        (type === 'checkbox' || type === 'radio'));
}
function getTracker(node) {
    return node._valueTracker;
}
function detachTracker(node) {
    node._valueTracker = null;
}
// 之所以单独创建一个 tacker，是为了统一监听不同 type 的 input 值
// 比如 type=checkbox 或者 type=radio，就需要监听 checked，而不是 value
// 虽然目前还未实现 checkbox 和 radio 的 finishEventHandle，但后续不好说，所以先统一和 react 一样的写法
// 需要特别注意的是，tracker 初始化时的值为 node 的初始值，但后续会变更为事件的 detail.value 值
function trackValueOnNode(node) {
    const valueField = isCheckable(node) ? 'checked' : 'value';
    const descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
    let currentValue = '' + node[valueField];
    if (node.hasOwnProperty(valueField) ||
        typeof descriptor === 'undefined' ||
        typeof descriptor.get !== 'function' ||
        typeof descriptor.set !== 'function') {
        return;
    }
    const { get, set } = descriptor;
    Object.defineProperty(node, valueField, {
        configurable: true,
        enumerable: descriptor.enumerable,
        get: function () {
            return get.call(this);
        },
        set: function (value) {
            currentValue = '' + value;
            set.call(this, value);
        },
    });
    const tracker = {
        getValue() {
            return currentValue;
        },
        setValue(value) {
            currentValue = '' + value;
        },
        stopTracking() {
            detachTracker(node);
            delete node[valueField];
        },
    };
    return tracker;
}
function track(node) {
    if (getTracker(node)) {
        return;
    }
    node._valueTracker = trackValueOnNode(node);
}
function updateValueIfChanged(node, nextValue) {
    if (!node) {
        return false;
    }
    const tracker = getTracker(node);
    if (!tracker) {
        return true;
    }
    const lastValue = tracker.getValue();
    if (nextValue !== lastValue) {
        tracker.setValue(nextValue);
        return true;
    }
    return false;
}

const IS_NON_DIMENSIONAL = /max|aspect|acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function isEventName(s) {
    return s[0] === 'o' && s[1] === 'n';
}
function isEqual(obj1, obj2) {
    // 首先检查引用是否相同
    if (obj1 === obj2) {
        return true;
    }
    // 如果两者中有一个不是对象，或者为 null，直接返回 false
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    // 获取两个对象键的数组
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // 如果键的数量不相同，对象显然不相等
    if (keys1.length !== keys2.length) {
        return false;
    }
    // 遍历对象的每个键，比较两个对象同一键的值
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    // 如果所有键的值都相等，返回 true
    return true;
}
function updateProps(dom, oldProps, newProps) {
    const updatePayload = getUpdatePayload(dom, oldProps, newProps);
    if (updatePayload) {
        updatePropsByPayload(dom, oldProps, updatePayload);
    }
}
function updatePropsByPayload(dom, oldProps, updatePayload) {
    const handlers = [];
    let fixedHandler = null;
    for (let i = 0; i < updatePayload.length; i += 2) {
        // key, value 成对出现
        const key = updatePayload[i];
        const newProp = updatePayload[i + 1];
        const oldProp = oldProps[key];
        if ("mini" === PLATFORM_TYPE.HARMONY) {
            if (key === '__fixed') {
                // hack: __fixed最先识别
                fixedHandler = () => setProperty(dom, key, newProp, oldProp);
                continue;
            }
            // 鸿蒙样式前置插入，防止覆盖style
            if (key === '__hmStyle') {
                handlers.splice(0, 0, () => setHarmonyStyle(dom, newProp, oldProp));
            }
            else {
                handlers.push(() => setProperty(dom, key, newProp, oldProp));
            }
        }
        else {
            setProperty(dom, key, newProp, oldProp);
        }
    }
    if ("mini" === PLATFORM_TYPE.HARMONY) {
        fixedHandler && fixedHandler();
        for (let i = 0; i < handlers.length; i++) {
            handlers[i]();
        }
    }
}
function getUpdatePayload(dom, oldProps, newProps) {
    let i;
    let updatePayload = null;
    for (i in oldProps) {
        if (!(i in newProps)) {
            (updatePayload = updatePayload || []).push(i, null);
        }
    }
    const isFormElement = dom instanceof FormElement;
    for (i in newProps) {
        if (oldProps[i] !== newProps[i] || (isFormElement && i === 'value')) {
            // 如果都是 style，且 style 里面的值相等，则无需记录到 payload 中
            if (i === 'style' && isObject(oldProps[i]) && isObject(newProps[i]) && isEqual(oldProps[i], newProps[i]))
                continue;
            (updatePayload = updatePayload || []).push(i, newProps[i]);
        }
    }
    return updatePayload;
}
// function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }
function setEvent(dom, name, value, oldValue) {
    const isCapture = name.endsWith('Capture');
    let eventName = name.toLowerCase().slice(2);
    if (isCapture) {
        eventName = eventName.slice(0, -7);
    }
    const compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));
    if (eventName === 'click' && "mini" !== PLATFORM_TYPE.HARMONY && compName in internalComponents) {
        eventName = 'tap';
    }
    if (isFunction(value)) {
        if (oldValue) {
            dom.removeEventListener(eventName, oldValue, "mini" !== PLATFORM_TYPE.HARMONY ? false : undefined);
            dom.addEventListener(eventName, value, "mini" !== PLATFORM_TYPE.HARMONY ? { isCapture, sideEffect: false } : undefined);
        }
        else {
            dom.addEventListener(eventName, value, "mini" !== PLATFORM_TYPE.HARMONY ? isCapture : undefined);
        }
    }
    else {
        dom.removeEventListener(eventName, oldValue);
    }
}
function setStyle(style, key, value) {
    if (key[0] === '-' && "mini" !== PLATFORM_TYPE.HARMONY) {
        // css variables need not further judgment
        style.setProperty(key, value.toString());
        return;
    }
    style[key] =
        isNumber(value) && IS_NON_DIMENSIONAL.test(key) === false
            ? ("mini" === PLATFORM_TYPE.HARMONY ? value + 'px' : convertNumber2PX(value))
            : value === null
                ? ''
                : value;
}
// 鸿蒙样式特殊处理，需要在插入顺序中前置插入，防止覆盖了style
function setHarmonyStyle(dom, value, oldValue) {
    // @ts-ignore
    const style = dom._st.hmStyle; // __hmStyle是已经被处理过的鸿蒙样式，可以直接塞进hmStyle对象内
    if (isObject(oldValue)) {
        for (const i in oldValue) {
            if (!(value && i in value)) {
                // 鸿蒙伪类特殊处理
                if ("mini" === PLATFORM_TYPE.HARMONY) {
                    if (i === '::after' || i === '::before') {
                        setPseudo(dom, i, null);
                    }
                    else if (['::first-child', '::last-child', '::empty'].includes(i) || `${i}`.indexOf('::nth-child') === 0) {
                        // @ts-ignore
                        dom.set_pseudo_class(i, null);
                    }
                    else {
                        if (i === 'position' && oldValue[i] === 'fixed') {
                            // @ts-ignore
                            dom.setLayer(0);
                        }
                        else if (i === 'animationName') {
                            // @ts-ignore
                            dom.setAnimation(false);
                        }
                        style[i] = '';
                    }
                }
                else {
                    style[i] = '';
                }
            }
        }
    }
    if (isObject(value)) {
        for (const i in value) {
            if (!oldValue || !isEqual(value[i], oldValue[i])) {
                // 鸿蒙伪类特殊处理
                if ("mini" === PLATFORM_TYPE.HARMONY) {
                    if (i === '::after' || i === '::before') {
                        setPseudo(dom, i, value[i]);
                    }
                    else if (['::first-child', '::last-child', '::empty'].includes(i) || i.startsWith('::nth-child')) {
                        // @ts-ignore
                        dom.set_pseudo_class(i, value[i]);
                    }
                    else {
                        if (i === 'position') {
                            if (value[i] === 'fixed' || (value[i] !== 'fixed' && (oldValue === null || oldValue === void 0 ? void 0 : oldValue[i]))) {
                                // @ts-ignore
                                dom.setLayer(value[i] === 'fixed' ? 1 : 0);
                            }
                        }
                        else if (i === 'animationName') {
                            // @ts-ignore
                            dom.setAnimation(true);
                        }
                        style[i] = value[i];
                    }
                }
                else {
                    style[i] = value[i];
                }
            }
        }
    }
    dom.setAttribute('__hmStyle', value);
}
function setProperty(dom, name, value, oldValue) {
    var _a, _b;
    name = name === 'className' ? 'class' : name;
    if (name === 'key' ||
        name === 'children' ||
        name === 'ref') ;
    else if (name === 'style') {
        if (/harmony.*cpp/.test("weapp" )) {
            return dom.setAttribute('_style4cpp', value);
        }
        const style = dom.style;
        if (isString(value)) {
            style.cssText = value;
        }
        else {
            if (isString(oldValue)) {
                style.cssText = '';
                oldValue = null;
            }
            if (isObject(oldValue)) {
                for (const i in oldValue) {
                    if (!(value && i in value)) {
                        // Harmony特殊处理
                        if ("mini" === PLATFORM_TYPE.HARMONY && i === 'position' && oldValue[i] === 'fixed') {
                            // @ts-ignore
                            dom.setLayer(0);
                        }
                        setStyle(style, i, '');
                    }
                }
            }
            if (isObject(value)) {
                for (const i in value) {
                    if (!oldValue || !isEqual(value[i], oldValue[i])) {
                        // Harmony特殊处理
                        if ("mini" === PLATFORM_TYPE.HARMONY && i === 'position') {
                            if (value[i] === 'fixed' || (value[i] !== 'fixed' && (oldValue === null || oldValue === void 0 ? void 0 : oldValue[i]))) {
                                // @ts-ignore
                                dom.setLayer(value[i] === 'fixed' ? 1 : 0);
                            }
                        }
                        setStyle(style, i, value[i]);
                    }
                }
            }
        }
    }
    else if (isEventName(name)) {
        setEvent(dom, name, value, oldValue);
    }
    else if (name === 'dangerouslySetInnerHTML') {
        const newHtml = (_a = value === null || value === void 0 ? void 0 : value.__html) !== null && _a !== void 0 ? _a : '';
        const oldHtml = (_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__html) !== null && _b !== void 0 ? _b : '';
        if (newHtml || oldHtml) {
            if (oldHtml !== newHtml) {
                dom.innerHTML = newHtml;
            }
        }
    }
    else if (!isFunction(value)) {
        if (value == null) {
            dom.removeAttribute(name);
        }
        else {
            dom.setAttribute(name, value);
        }
    }
}
// 设置鸿蒙伪类属性(特殊设置)
function setPseudo(dom, name, value) {
    if (name === '::after') {
        // @ts-ignore
        dom.set_pseudo_after(value);
    }
    else if (name === '::before') {
        // @ts-ignore
        dom.set_pseudo_before(value);
    }
}

/* eslint-disable @typescript-eslint/indent */
const hostConfig = {
    // below keys order by {React ReactFiberHostConfig.custom.js}, convenient for comparing each other.
    // -------------------
    // required by @types/react-reconciler
    // -------------------
    getPublicInstance(inst) {
        return inst;
    },
    getRootHostContext() {
        return {};
    },
    getChildHostContext(parentHostContext) {
        return parentHostContext;
    },
    prepareForCommit(..._) {
        return null;
    },
    resetAfterCommit: noop,
    createInstance(type, props, _rootContainerInstance, _hostContext, internalInstanceHandle) {
        const element = taroDocumentProvider.createElement(type);
        precacheFiberNode(internalInstanceHandle, element);
        updateFiberProps(element, props);
        return element;
    },
    appendInitialChild(parent, child) {
        parent.appendChild(child);
    },
    finalizeInitialChildren(dom, type, props) {
        let newProps = props;
        if (dom instanceof FormElement) {
            const [defaultName, defaultKey] = ['switch', 'checkbox', 'radio'].includes(type) ? ['checked', 'defaultChecked'] : ['value', 'defaultValue'];
            if (props.hasOwnProperty(defaultKey)) {
                newProps = Object.assign(Object.assign({}, newProps), { [defaultName]: props[defaultKey] });
                delete newProps[defaultKey];
            }
        }
        updateProps(dom, {}, newProps); // 提前执行更新属性操作，Taro 在 Page 初始化后会立即从 dom 读取必要信息
        if (type === 'input' || type === 'textarea') {
            track(dom);
        }
        return false;
    },
    prepareUpdate(instance, _, oldProps, newProps) {
        return getUpdatePayload(instance, oldProps, newProps);
    },
    shouldSetTextContent() {
        return false;
    },
    createTextInstance(text, _rootContainerInstance, _hostContext, internalInstanceHandle) {
        const textNode = taroDocumentProvider.createTextNode(text);
        precacheFiberNode(internalInstanceHandle, textNode);
        return textNode;
    },
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    isPrimaryRenderer: true,
    warnsIfNotActing: true,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur: noop,
    afterActiveInstanceBlur: noop,
    preparePortalMount: noop,
    prepareScopeUpdate: noop,
    getInstanceFromScope: () => null,
    getCurrentEventPriority() {
        return constantsExports.DefaultEventPriority;
    },
    detachDeletedInstance: noop,
    // -------------------
    //      Microtasks
    //     (optional)
    // -------------------
    supportsMicrotasks: true,
    scheduleMicrotask: isUndefined(Promise)
        ? setTimeout
        : (callback) => Promise.resolve(null)
            .then(callback)
            .catch(function (error) {
            setTimeout(() => {
                throw error;
            });
        }),
    // -------------------
    //      Mutation
    //     (required if supportsMutation is true)
    // -------------------
    appendChild(parent, child) {
        parent.appendChild(child);
    },
    appendChildToContainer(parent, child) {
        parent.appendChild(child);
    },
    commitTextUpdate(textInst, _, newText) {
        textInst.nodeValue = newText;
    },
    commitMount: noop,
    commitUpdate(dom, updatePayload, _, oldProps, newProps) {
        if (!updatePayload)
            return;
        // payload 只包含 children 的时候，不应该再继续触发后续的属性比较和更新的逻辑了
        if (updatePayload.length === 2 && updatePayload.includes('children'))
            return;
        updatePropsByPayload(dom, oldProps, updatePayload);
        updateFiberProps(dom, newProps);
    },
    insertBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    insertInContainerBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    removeChild(parent, child) {
        parent.removeChild(child);
    },
    removeChildFromContainer(parent, child) {
        parent.removeChild(child);
    },
    resetTextContent: noop,
    hideInstance(instance) {
        const style = instance.style;
        style.setProperty('display', 'none');
    },
    hideTextInstance(textInstance) {
        textInstance.nodeValue = '';
    },
    unhideInstance(instance, props) {
        const styleProp = props.style;
        let display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
        display = display == null || isBoolean(display) || display === '' ? '' : ('' + display).trim();
        // eslint-disable-next-line dot-notation
        instance.style['display'] = display;
    },
    unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
    },
    clearContainer(element) {
        if (element.childNodes.length > 0) {
            element.textContent = '';
        }
    }
};
const TaroReconciler = Reconciler(hostConfig);

let restoreQueue = null;
// 对比 TaroElement tracker 下的 value 和事件下的 value，判断 element 的值是否存在更改
function getTargetInstForInputOrChangeEvent(e, node) {
    var _a, _b;
    const targetInst = getInstanceFromNode(node);
    const domEventName = e.type;
    if (!targetInst || !isTextInputElement(node))
        return;
    if (domEventName === 'input' || domEventName === 'change') {
        const nextValue = toString((_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value);
        return getInstIfValueChanged(targetInst, nextValue);
    }
}
function getInstIfValueChanged(targetInst, nextValue) {
    const targetNode = getNodeFromInstance(targetInst);
    if (!targetNode)
        return false;
    if (updateValueIfChanged(targetNode, nextValue)) {
        return targetInst;
    }
}
// 把 target 塞入更新队列中
function enqueueStateRestore(target) {
    if (restoreQueue) {
        restoreQueue.push(target);
    }
    else {
        restoreQueue = [target];
    }
}
// 判断是否需要恢复 target（input、textarea） 的状态
function needsStateRestore() {
    return restoreQueue !== null;
}
function finishEventHandler() {
    const controlledComponentsHavePendingUpdates = needsStateRestore();
    if (controlledComponentsHavePendingUpdates) {
        TaroReconciler.flushSync();
        restoreStateIfNeeded();
    }
}
// 遍历 restoreQueue、restoreTarget，恢复其状态
function restoreStateIfNeeded() {
    if (!restoreQueue) {
        return;
    }
    const queuedTargets = restoreQueue;
    restoreQueue = null;
    for (let i = 0; i < queuedTargets.length; i++) {
        restoreStateOfTarget(queuedTargets[i]);
    }
}
function restoreImpl(domElement, tag, oldValue, props) {
    switch (tag) {
        case 'input':
            ReactDOMInputRestoreControlledState(domElement, oldValue, props);
            break;
        case 'textarea':
            ReactDOMTextareaRestoreControlledState(domElement, oldValue, props);
            break;
    }
}
function restoreStateOfTarget(item) {
    const internalInstance = getInstanceFromNode(item.target);
    if (!internalInstance)
        return;
    const { stateNode, type } = internalInstance;
    if (stateNode) {
        const props = getFiberCurrentPropsFromNode(stateNode);
        restoreImpl(stateNode, type, item.value, props);
    }
}

const ContainerMap = new WeakMap();
class Root {
    constructor(renderer, domContainer, options) {
        this.renderer = renderer;
        this.initInternalRoot(renderer, domContainer, options);
    }
    initInternalRoot(renderer, domContainer, options) {
        // Since react-reconciler v0.27, createContainer need more parameters
        // @see:https://github.com/facebook/react/blob/0b974418c9a56f6c560298560265dcf4b65784bc/packages/react-reconciler/src/ReactFiberReconciler.js#L248
        const containerInfo = domContainer;
        if (options) {
            const tag = 1; // ConcurrentRoot
            const concurrentUpdatesByDefaultOverride = false;
            let isStrictMode = false;
            let identifierPrefix = '';
            let onRecoverableError = (error) => console.error(error);
            let transitionCallbacks = null;
            if (options.unstable_strictMode === true) {
                isStrictMode = true;
            }
            if (options.identifierPrefix !== undefined) {
                identifierPrefix = options.identifierPrefix;
            }
            if (options.onRecoverableError !== undefined) {
                onRecoverableError = options.onRecoverableError;
            }
            if (options.unstable_transitionCallbacks !== undefined) {
                transitionCallbacks = options.unstable_transitionCallbacks;
            }
            this.internalRoot = renderer.createContainer(containerInfo, tag, null, // hydrationCallbacks
            isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks);
        }
        else {
            const tag = 0; // LegacyRoot
            this.internalRoot = renderer.createContainer(containerInfo, tag, null, // hydrationCallbacks
            false, // isStrictMode
            false, // concurrentUpdatesByDefaultOverride,
            '', // identifierPrefix
            () => { }, // onRecoverableError, this isn't reachable because onRecoverableError isn't called in the legacy API.
            null // transitionCallbacks
            );
        }
    }
    render(children, cb) {
        const { renderer, internalRoot } = this;
        renderer.updateContainer(children, internalRoot, null, cb);
        return renderer.getPublicRootInstance(internalRoot);
    }
    unmount(cb) {
        this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
}
function render(element, domContainer, cb) {
    const oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot.render(element, cb);
    }
    const root = new Root(TaroReconciler, domContainer);
    ContainerMap.set(domContainer, root);
    return root.render(element, cb);
}
function createRoot(domContainer, options = {}) {
    var _a;
    const oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot;
    }
    // options should be an object
    const root = new Root(TaroReconciler, domContainer, options);
    ContainerMap.set(domContainer, root);
    markContainerAsRoot((_a = root === null || root === void 0 ? void 0 : root.internalRoot) === null || _a === void 0 ? void 0 : _a.current, domContainer);
    hooks.tap('dispatchTaroEvent', (e, node) => {
        const eventPriority = getEventPriority(e.type);
        TaroReconciler.runWithPriority(eventPriority, () => {
            node.dispatchEvent(e);
        });
    });
    // 对比 event.detail.value 和 node.tracker.value，判断 value 值是否有变动，存在变动则塞入队列中
    hooks.tap('modifyTaroEvent', (e, node) => {
        var _a, _b;
        const inst = getTargetInstForInputOrChangeEvent(e, node);
        if (!inst)
            return;
        // 这里塞入的是 event.detail.value，也就是事件的值，在受控组件中，你可以理解为需要被变更的值
        // 后续会在 finishEventHandler 中，使用最新的 fiber.props.value 来与其比较
        // 如果不一致，则表示需要更新，会执行 node.value = fiber.props.value 的更新操作
        const nextValue = (_b = (_a = e.mpEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.value;
        enqueueStateRestore({ target: node, value: nextValue });
    });
    return root;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
let isInsideEventHandler = false;
// 重新包裹 batchedUpdates，使其可以在触发事件后执行 finishEventHandler
const unstable_batchedUpdates = (fn, a) => {
    if (isInsideEventHandler) {
        return fn(a);
    }
    isInsideEventHandler = true;
    try {
        return TaroReconciler.batchedUpdates(fn, a);
    }
    finally {
        isInsideEventHandler = false;
        finishEventHandler();
    }
};
function unmountComponentAtNode(dom) {
    ensure(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
    const root = ContainerMap.get(dom);
    if (!root)
        return false;
    unstable_batchedUpdates(() => {
        root.unmount(() => {
            ContainerMap.delete(dom);
        });
    }, null);
    return true;
}
function findDOMNode(comp) {
    if (comp == null) {
        return null;
    }
    const nodeType = comp.nodeType;
    if (nodeType === 1 || nodeType === 3) {
        return comp;
    }
    return TaroReconciler.findHostInstance(comp);
}
const portalType = isFunction(Symbol) && Symbol.for
    ? Symbol.for('react.portal')
    : 0xeaca;
function createPortal(children, containerInfo, key) {
    return {
        $$typeof: portalType,
        key: key == null ? null : String(key),
        children,
        containerInfo,
        implementation: null
    };
}
const flushSync = TaroReconciler.flushSync;
var index = {
    render,
    flushSync,
    createRoot,
    unstable_batchedUpdates,
    unmountComponentAtNode,
    findDOMNode,
    createPortal,
    internalInstanceKey
};

const View = 'view';
const Text = 'text';

var jsxRuntime = {
  exports: {}
};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports,
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;

exports.React = React;
exports.Text = Text;
exports.View = View;
exports.createPageConfig = createPageConfig;
exports.createReactApp = createReactApp;
exports.createRecursiveComponentConfig = createRecursiveComponentConfig;
exports.index = index;
exports.jsxRuntimeExports = jsxRuntimeExports;
exports.taroExports = taroExports;
exports.taroWindowProvider = taroWindowProvider;