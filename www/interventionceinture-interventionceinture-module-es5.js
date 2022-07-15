(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interventionceinture-interventionceinture-module"],{

/***/ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js ***!
  \*******************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
    return ListItem;
}());

var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    };
    ListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'multiSelectFilter',
            pure: false
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());

var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MultiSelectComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(listFilterPipe) {
        this.listFilterPipe = listFilterPipe;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
        set: function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = "Select";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "data", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                var firstItem = value[0];
                this._sourceDataType = typeof firstItem;
                this._sourceDataFields = this.getFields(firstItem);
                this._data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    MultiSelectComponent.prototype.onFilterTextChange = function ($event) {
        this.onFilterChange.emit($event);
    };
    MultiSelectComponent.prototype.onItemClick = function ($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        var found = this.isSelected(item);
        var allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    MultiSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        var firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var _data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Set touched on blur
    MultiSelectComponent.prototype.onTouched = function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    MultiSelectComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    MultiSelectComponent.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    MultiSelectComponent.prototype.isLimitSelectionReached = function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    MultiSelectComponent.prototype.isAllItemsSelected = function () {
        // get disabld item count
        var filteredItems = this.listFilterPipe.transform(this._data, this.filter);
        var itemDisabledCount = filteredItems.filter(function (item) { return item.isDisabled; }).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return filteredItems.length === this.selectedItems.length + itemDisabledCount;
    };
    MultiSelectComponent.prototype.showButton = function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    MultiSelectComponent.prototype.itemShowRemaining = function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    MultiSelectComponent.prototype.addSelected = function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    };
    MultiSelectComponent.prototype.removeSelected = function (itemSel) {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            if (itemSel.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    };
    MultiSelectComponent.prototype.emittedValue = function (val) {
        var _this = this;
        var selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                selected.push(_this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    };
    MultiSelectComponent.prototype.objectify = function (val) {
        if (this._sourceDataType === 'object') {
            var obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    };
    MultiSelectComponent.prototype.toggleDropdown = function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    };
    MultiSelectComponent.prototype.closeDropdown = function () {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    };
    MultiSelectComponent.prototype.toggleSelectAll = function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(function (item) { return !item.isDisabled; }).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    MultiSelectComponent.prototype.getFields = function (inputData) {
        var fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (var prop in inputData) {
            fields.push(prop);
        }
        return fields;
    };
    MultiSelectComponent.ctorParameters = function () { return [
        { type: ListFilterPipe }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "placeholder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "settings", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "data", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange")
    ], MultiSelectComponent.prototype, "onFilterChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose")
    ], MultiSelectComponent.prototype, "onDropDownClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect")
    ], MultiSelectComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect")
    ], MultiSelectComponent.prototype, "onDeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll")
    ], MultiSelectComponent.prototype, "onSelectAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll")
    ], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur")
    ], MultiSelectComponent.prototype, "onTouched", null);
    MultiSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ng-multiselect-dropdown",
            template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        <span>{{item.text}}</span>\n        <a style=\"padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span [ngClass]=\"{ 'dropdown-multiselect--active': _settings.defaultOpen }\" style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 15px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;display:flex;max-width:100px}.multiselect-dropdown .dropdown-btn .selected-item span{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotateZ(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
        })
    ], MultiSelectComponent);
    return MultiSelectComponent;
}());

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target'])
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[clickOutside]'
        })
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    NgMultiSelectDropDownModule_1 = NgMultiSelectDropDownModule;
    NgMultiSelectDropDownModule.forRoot = function () {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    };
    var NgMultiSelectDropDownModule_1;
    NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
            providers: [ListFilterPipe],
            exports: [MultiSelectComponent]
        })
    ], NgMultiSelectDropDownModule);
    return NgMultiSelectDropDownModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-multiselect-dropdown.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/interventionceinture/interventionceinture.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/interventionceinture/interventionceinture.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>    \n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4>Intervention sur une ceinture</h4>\n      </ion-col>\n    </ion-row>  \n    <ion-row>        \n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Objet de l'intervention</legend>                 \n            <ng-multiselect-dropdown *ngIf=\"display\" name=\"obj\" placeholder=\"Select One\" [data]=\"motiveOptions\" (onSelect)=\"onSelectMotive($event)\" (onDeSelect)=\"onRemoveMotive($event)\" [(ngModel)]=\"selectedMotive\" [disabled]=\"disabled\" [settings]=\"dropdownSettings\"></ng-multiselect-dropdown>  \n            <ul id=\"motiveList\"></ul>   \n          </fieldset>\n          <div *ngIf=\"motive.includes('Autre')\" id=\"other\"> <ion-item><ion-label>Autre :</ion-label><ion-input [(ngModel)]='otherObj' placeholder='objet intervention' type='text'></ion-input><ion-button color='tertiary' style='font-size:small' (click)='other();'><span style='text-transform:none!important;'>Valider</span></ion-button></ion-item></div>\n        </ion-col>        \n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Intervenants</legend>            \n            <ng-multiselect-dropdown *ngIf=\"display\" name=\"intervenant\" placeholder=\"Select One\" [data]=\"intervenants\" (onSelect)=\"onSelectIntervenant($event)\" (onDeSelect)=\"onRemoveIntervenant($event)\" [(ngModel)]=\"selectedIntervenants\" [disabled]=\"disabled\" [settings]=\"dropdownSettings\"></ng-multiselect-dropdown>\n            <ul id=\"intervenantsList\"></ul>\n          </fieldset>\n        </ion-col>\n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Sélection ceinture</legend>\n              <ng-multiselect-dropdown *ngIf=\"display\" name=\"ceinture\" placeholder=\"Select One\" [data]=\"nearUPCList\" (onSelect)=\"onSelectedCeinture($event)\" (onDeSelect)=\"onRemoveCeinture($event)\" [(ngModel)]=\"selectedItems\" [disabled]=\"disabled\" [settings]=\"dropdownSettings2\"></ng-multiselect-dropdown>\n          </fieldset>\n        </ion-col>\n        <ion-col *ngIf=\"displayCommentaire\" size=\"12\">\n          <fieldset>\n            <legend>A Faire</legend>\n            <div>\n              <ul id=\"commentairesList\"></ul>\n            </div>\n            <!--<p style=\"margin-left: 4%; margin-bottom: 4%;\">{{commentaire}}</p>-->\n          </fieldset>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"isCeintureSelected\" id=\"infosCeintureCol\">\n\n         <fieldset id=\"ceintureFieldSet\">\n            <fieldset style=\"background-color: #2E7117; color:  white;  margin-left: 4%; margin-right: 4%; margin-top: 4%;\">\n              <p style=\"float: left; margin-top: 4%; margin-left: 4%;\">{{selectedCeintureName}}</p>\n              <p style=\"float: right; margin-top: 4%; margin-right: 4%;\">{{selectedUpcSsid}}</p>\n            </fieldset> \n            <div style=\"margin-top: 2%;\">\n              <ul id=\"upcInfosLabelsList\" style=\"float: left;\">\n                <li>Mode de diffusion</li>\n                <li>Nombre de pièges</li>\n                <li>Mode de connexion</li>\n                <li>Niveau de connexion</li>\n                <li>Version FW</li> \n              </ul>\n              <ul id=\"upcInfosList\" style=\"float: right; text-align: center;\">\n                <li>{{modeOperation}}</li>\n                <li>{{nbPieges}}</li>\n                <li>{{modeConnexion}}</li>\n                <li>{{niveauConnexion}}</li>\n                <li>{{versionFw}}</li>\n              </ul>\n            </div>            \n            \n          </fieldset>\n          \n        </ion-col>\n        <ion-col *ngIf=\"needToLoadData\" style=\"text-align: center; margin-top: 4%;\"><ion-spinner></ion-spinner></ion-col>\n        <ion-col *ngIf=\"displayNoDataMessage\">\n          <h6>Les données n'ont pas pu être récupérées. Rechargez la page pour réessayer.</h6>\n          <ion-row style=\"display: flex; justify-content: center;\">\n            <ion-button (click)=\"reload()\">Réessayer</ion-button>\n          </ion-row>\n        </ion-col>\n\n      \n       \n      \n    </ion-row>\n    \n  </ion-grid>\n  \n  \n \n</ion-content>\n<ion-footer style=\"display: inline-block\">\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\" (click)=\"global.onReadStatiqueEnable()\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"global.displayLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n  <ion-button style=\"float: right\" fill=\"clear\" (click)=\"goNext()\">\n    Continuer\n    <ion-icon name=\"arrow-forward\"></ion-icon>\n  </ion-button>\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InterventionceinturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionceinturePageRoutingModule", function() { return InterventionceinturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interventionceinture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interventionceinture.page */ "./src/app/interventionceinture/interventionceinture.page.ts");




var routes = [
    {
        path: '',
        component: _interventionceinture_page__WEBPACK_IMPORTED_MODULE_3__["InterventionceinturePage"]
    }
];
var InterventionceinturePageRoutingModule = /** @class */ (function () {
    function InterventionceinturePageRoutingModule() {
    }
    InterventionceinturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InterventionceinturePageRoutingModule);
    return InterventionceinturePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture.module.ts ***!
  \*********************************************************************/
/*! exports provided: InterventionceinturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionceinturePageModule", function() { return InterventionceinturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interventionceinture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interventionceinture-routing.module */ "./src/app/interventionceinture/interventionceinture-routing.module.ts");
/* harmony import */ var _interventionceinture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interventionceinture.page */ "./src/app/interventionceinture/interventionceinture.page.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");








var InterventionceinturePageModule = /** @class */ (function () {
    function InterventionceinturePageModule() {
    }
    InterventionceinturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _interventionceinture_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterventionceinturePageRoutingModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [_interventionceinture_page__WEBPACK_IMPORTED_MODULE_6__["InterventionceinturePage"]]
        })
    ], InterventionceinturePageModule);
    return InterventionceinturePageModule;
}());



/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\n  padding-left: 2%;\n  padding-right: 2%;\n  border: 1px #2E7117 solid;\n  border-radius: 1em;\n}\n\nlegend {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: larger;\n  color: #2E7117;\n  font-style: italic;\n  padding-left: 1%;\n  padding-right: 2%;\n}\n\nul {\n  list-style: none;\n  padding-left: 4%;\n}\n\n.item.sc-ion-label-md-h, .item .sc-ion-label-md-h {\n  white-space: normal !important;\n}\n\n.rowDisplay {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJ2ZW50aW9uY2VpbnR1cmUvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGludGVydmVudGlvbmNlaW50dXJlXFxpbnRlcnZlbnRpb25jZWludHVyZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludGVydmVudGlvbmNlaW50dXJlL2ludGVydmVudGlvbmNlaW50dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBRTtFQUNFLDhCQUFBO0FDR0o7O0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmVudGlvbmNlaW50dXJlL2ludGVydmVudGlvbmNlaW50dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTsgXHJcbiAgICBib3JkZXI6IDFweCAjMkU3MTE3IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIH1cclxuICBsZWdlbmQgeyAgXHJcbiAgICB3aWR0aDpmaXQtY29udGVudDsgXHJcbiAgICBmb250LXNpemU6bGFyZ2VyO1xyXG4gICAgY29sb3I6ICMyRTcxMTc7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgfVxyXG4gIC5pdGVtLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLnJvd0Rpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufSIsImZpZWxkc2V0IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxubGVnZW5kIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6ICMyRTcxMTc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbn1cblxuLml0ZW0uc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnJvd0Rpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture.page.ts ***!
  \*******************************************************************/
/*! exports provided: InterventionceinturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionceinturePage", function() { return InterventionceinturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");













var InterventionceinturePage = /** @class */ (function () {
    function InterventionceinturePage(upcv3service, storage, router, global, geolocation, platform, loadingCTRL, hotspot, ngZone, network, cd, alertController, diagnostic, events) {
        this.upcv3service = upcv3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.geolocation = geolocation;
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.hotspot = hotspot;
        this.ngZone = ngZone;
        this.network = network;
        this.cd = cd;
        this.alertController = alertController;
        this.diagnostic = diagnostic;
        this.events = events;
        //tenter un accès modbus et s'il ne réussit pas alert connectez vous à l'upc
        //accès modbus s'il se connecte
        /* Variables liées à la séquence d'écrans */
        this.sequenceOfScreensOptions = {
            installation: [
                "Initialisation / Echange boitier UPC",
                "Etat de la connexion au réseau",
                "Changement de bouteilles sur ceinture",
                "Réglage des détendeurs",
                "Controle débits Mini/Maxi",
                "Vérification débits pièges individuels",
                "Programmation diffusion CO2",
                "Mesures pressions de sortie",
            ],
            remiseEnRoute: [
                "Etat de la connexion au réseau",
                "Changement de bouteilles sur ceinture",
                "Réglage des détendeurs",
                "Controle débits Mini/Maxi",
                "Vérification débits pièges individuels",
                "Programmation diffusion CO2",
                "Mesures pressions de sortie",
            ],
            modificationNbPieges: [
                "Modification du nombre de pièges",
                "Réglage des détendeurs",
                "Controle débits Mini/Maxi",
                "Mesures pressions de sortie",
            ],
            maintenance: [
                "Etat de la connexion au réseau",
                "Controle débits Mini/Maxi",
            ],
            changementBouteillesCo2: [
                "Réglage des détendeurs",
                "Controle débits Mini/Maxi",
            ],
            changementUpc: [
                "Initialisation/Echange boitier UPC",
                "Etat de la connexion au réseau",
            ],
        };
        this.sequenceOfScreens = [];
        this.sequenceOfScreensTmp = [];
        /* Variables liées à l'objet de l'intervention */
        this.motiveOptions = [
            "Installation",
            "Modification du nombre de pièges",
            "Remise en route",
            "Maintenance",
            "Changements de bouteilles CO2",
            "Changement d'UPC",
            "Hivernage",
            "Autre",
        ];
        this.motive = []; //format pour la base de données
        this.selectedMotive = []; //format pour la liste
        /* Variables liées aux intervenants */
        this.intervenants = []; //liste de tous les intervenants
        this.intervenantsChoisis = []; //format pour la base de données
        this.selectedIntervenants = []; //format pour la liste
        /* Variables liées aux ceintures */
        this.nearUPC = [];
        this.nearUPCToSort = [];
        this.nearUPCNotSorted = [];
        this.nearUPCNames = [];
        this.nearUPCList = [];
        this.ceintureChoisieBottles = [];
        this.ceintureChoisieBottlesTypes = [];
        this.ceintureChoisieCommentaires = [];
        this.connectedUpcName = "";
        this.connectedUpcSsid = "";
        this.isCeintureSelected = false;
        this.data = [];
        this.useGeolocation = true;
        this.bottlesInTransit = [];
        this.defaultBottlesTypes = []; //pour le cas où la ceinture choisie n'a pas d'entrepôt par défaut associé
        /* Variables d'affichage*/
        this.display = false;
        this.displayCommentaire = false;
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.dropdownSettings = {
            // Liste objets + Liste intervenants
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: true,
        };
        this.dropdownSettings2 = {
            // Liste ceintures
            singleSelection: true,
            idField: "item_id",
            textField: "item_text",
            allowSearchFilter: true,
        };
        this.isUpcConnected = false;
        this.dt = new Date(Date.now());
        this.selectedItems = [];
        this.dropdownList = [];
        this.poursuivre = false;
        this.globals = [];
        this.username = "";
        this.password = "";
        this.global.checkMode();
    }
    InterventionceinturePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("===================== page  : intervention sur ceinture  =============================");
        this.global.connexionRequise = "Serveur";
        this.storage.get("token").then(function (res) {
            _this.global.token = res;
            _this.storage.get("dataAlreadyLoaded").then(function (res) {
                if (res != true) {
                    _this.needToLoadData = true;
                    _this.function = "getDataFromServer";
                    _this.getDataFromServer();
                }
                else {
                    _this.getDataFromStorage();
                }
            });
        });
        // recup bouteilles types
        //recuperer les types de bouteilles de la base de données :
        this.storage.get("token").then(function (val) {
            _this.token = val;
            //recuperer les types de bouteilles de la base de données :
            _this.upcv3service.getAllBottleTypes(val).subscribe(function (res) {
                if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_11__["Code"].BOTTLE_TYPE_RECOVERED) {
                    _this.storage.set("bottleTypes", res.result);
                    console.log("bottle types");
                    console.log(res.result);
                }
            });
        });
        /*Formattage de la date pour la création de l'intervention*/
        var dtstring = this.dt.getFullYear() +
            "-" +
            this.pad2(this.dt.getMonth() + 1) +
            "-" +
            this.pad2(this.dt.getDate()) +
            "T" +
            this.pad2(this.dt.getHours()) +
            ":" +
            this.pad2(this.dt.getMinutes()) +
            ":" +
            this.pad2(this.dt.getSeconds());
        this.dateString = dtstring;
        this.storage.set("debutIntervention", this.dateString);
    };
    InterventionceinturePage.prototype.getDataFromStorage = function () {
        var _this = this;
        this.storage.get("intervenantsList").then(function (res) {
            _this.intervenants = res;
            _this.storage.get("nearUpcList").then(function (res) {
                _this.nearUPCList = res;
                _this.storage.get("bottlesInTransit").then(function (res) {
                    _this.bottlesInTransit = res;
                    _this.setInterventionVariables();
                });
            });
        });
    };
    InterventionceinturePage.prototype.getDataFromServer = function () {
        var _this = this;
        this.global.connexionRequise = "Serveur";
        this.upcv3service.getConnected(this.global.token).subscribe(function (res) {
            //Opérateur connecté
            _this.global.statutConnexion = "Serveur";
            _this.global.retryCount = 0;
            _this.connectedOperator =
                res.result.lastName + " " + res.result.firstName;
            _this.storage.set("connectedOperator", _this.connectedOperator);
            _this.upcv3service.getOperators(_this.global.token).subscribe(function (res) {
                //Liste des intervenants
                _this.global.statutConnexion = "Serveur";
                var data = res.result;
                for (var i = 0; i < data.length; i++) {
                    _this.intervenants.push(data[i]["lastName"] + " " + data[i]["firstName"]);
                }
                _this.storage.set("intervenantsList", _this.intervenants);
                _this.getNearUpcList();
            }, function (err) {
                _this.global.onConnect(err).then(function (res) {
                    _this.global.onConnectEnCours = false;
                    if (res == "retry") {
                        _this.getDataFromServer();
                    }
                    else {
                        _this.needToLoadData = false;
                        _this.displayNoDataMessage = true;
                    }
                });
            });
        }, function (err) {
            _this.global.onConnect(err).then(function (res) {
                _this.global.onConnectEnCours = false;
                if (res == "retry") {
                    _this.getDataFromServer();
                }
                else {
                    _this.needToLoadData = false;
                    _this.displayNoDataMessage = true;
                }
            });
        });
    };
    InterventionceinturePage.prototype.getMotiveItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("motiveItems")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getMotiveString = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("motiveString")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getIntervenantsItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("intervenantsItems")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getIntervenantsString = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("intervenantsString")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getCeintureChoisieObject = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("ceintureChoisieObject")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getUpcSsid = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("ssid")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getUpcPass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("password")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getUpcName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("upcname")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getStockBottleTypes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("stockBottleTypes")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getCeintureChoisieBottles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("ceintureChoisieBottles")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.getCeintureChoisieCommentaires = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("commentaires")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    InterventionceinturePage.prototype.setInterventionVariables = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var arr, d;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getMotiveItems(),
                            this.getMotiveString(),
                            this.getIntervenantsItems(),
                            this.getIntervenantsString(),
                            this.getCeintureChoisieObject(),
                            this.getUpcSsid(),
                            this.getUpcPass(),
                            this.getUpcName(),
                            this.getStockBottleTypes(),
                            this.getCeintureChoisieBottles(),
                            this.getCeintureChoisieCommentaires(),
                        ])];
                    case 1:
                        arr = _a.sent();
                        if (arr[0] == undefined || arr[0] == null) {
                            //motif format liste
                            this.storage.set("motiveItems", "");
                        }
                        else {
                            if (arr[0] != "") {
                                this.selectedMotive = arr[0];
                            }
                        }
                        if (arr[1] == undefined || arr[1] == null) {
                            //motif format bdd
                            this.storage.set("motiveString", "");
                        }
                        else {
                            if (arr[1] != "") {
                                this.motive = arr[1];
                            }
                        }
                        if (this.motive.includes("Autre")) {
                            if (this.storage.get("autre") != undefined &&
                                this.storage.get("autre") != null) {
                                this.motive[this.motive.indexOf("Autre")] = this.storage.get("autre");
                            }
                        }
                        if (arr[2] == undefined || arr[2] == null) {
                            //intervenants choisis format liste
                            this.storage.set("intervenantsItems", "");
                        }
                        else {
                            if (arr[2] != "") {
                                this.selectedIntervenants = arr[2];
                            }
                        }
                        if (arr[3] == undefined || arr[3] == null) {
                            //intervenants choisis format bdd
                            this.storage.set("intervenantsString", "");
                        }
                        else {
                            if (arr[3] != "") {
                                this.intervenantsChoisis = arr[3];
                            }
                        }
                        if (arr[4] == undefined || arr[4] == null) {
                            //ceinture choisie
                            this.storage.set("ceintureChoisieObject", "");
                            this.ceintureChoisieObject = "";
                            this.selectedCeintureName = "";
                        }
                        else {
                            if (arr[4] != "") {
                                this.ceintureChoisieObject = JSON.parse(arr[4]);
                                this.selectedCeintureName = this.ceintureChoisieObject.upcNameId;
                            }
                            else {
                                this.ceintureChoisieObject = "";
                                this.selectedCeintureName = "";
                            }
                        }
                        if (arr[5] == undefined || arr[5] == null) {
                            //ceinture choisie ssid
                            this.storage.set("ssid", "");
                            this.selectedUpcSsid = "";
                        }
                        else {
                            this.selectedUpcSsid = arr[5];
                        }
                        if (arr[6] == undefined || arr[6] == null) {
                            //ceinture choisie password
                            this.storage.set("password", "");
                            this.selectedUpcPass = "";
                        }
                        else {
                            this.selectedUpcPass = arr[6];
                        }
                        if (arr[7] == undefined || arr[7] == null) {
                            //nom de l'upc
                            this.storage.set("upcname", "");
                        }
                        if (arr[8] == undefined || arr[8] == null) {
                            //types des bouteilles de l'entrepôt associé à la ceinture
                            this.storage.set("stockBottleTypes", "");
                        }
                        else {
                            if (arr[8] != "") {
                                this.ceintureChoisieBottlesTypes = arr[8];
                            }
                        }
                        if (arr[9] == undefined || arr[9] == null) {
                            //bouteilles de l'entrepôt associé à la ceinture
                            this.storage.set("ceintureChoisieBottles", "");
                        }
                        else {
                            if (arr[9] != "") {
                                this.ceintureChoisieBottles = arr[9];
                            }
                        }
                        if (arr[10] == undefined || arr[10] == null) {
                            //commentaires associé à la ceinture
                            this.storage.set("commentaires", "");
                        }
                        else {
                            if (arr[10] != "") {
                                this.commentaires = arr[10];
                                this.displayCommentaire = true;
                            }
                        }
                        if (this.ceintureChoisieObject != "") {
                            d = new Date();
                            this.global.logs.push(this.global.msToTime(d.getTime()) + " --- Présélection ceinture ---");
                            this.nearUPCList.forEach(function (element) {
                                //compare les id pour présélectionner la ceinture
                                if (_this.ceintureChoisieObject.id == element.item_id.id) {
                                    _this.selectedItems = [element];
                                    _this.isCeintureSelected = true;
                                }
                            });
                        }
                        else {
                            this.selectedItems = [];
                        }
                        this.display = true;
                        this.needToLoadData = false;
                        this.storage.set("dataAlreadyLoaded", true);
                        return [2 /*return*/];
                }
            });
        });
    };
    /*fonction formattage date*/
    InterventionceinturePage.prototype.pad2 = function (number) {
        return (number < 10 ? "0" : "") + number;
    };
    InterventionceinturePage.prototype.getCommentaires = function (item) {
        var _this = this;
        this.item = item;
        if (item != undefined && item != null) {
            this.upcv3service
                .getActionNotDoneById(this.global.token, item.item_id.id)
                .subscribe(function (res) {
                _this.global.retryCount = 0;
                if (res.result[0] != undefined) {
                    if (res.result[0].mess != null) {
                        _this.displayCommentaire = true;
                        _this.commentaires = [];
                        res.result.forEach(function (element) {
                            _this.commentaires.push(element.mess);
                        });
                        _this.storage.set("commentaires", _this.commentaires);
                    }
                }
                _this.getBottlesInfos();
            }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.global.onConnect(err).then(function (res) {
                        _this.global.onConnectEnCours = false;
                        if (res == "retry") {
                            _this.getCommentaires(item);
                        }
                        else {
                            _this.needToLoadData = false;
                            _this.displayNoDataMessage = true;
                        }
                    });
                    return [2 /*return*/];
                });
            }); });
        }
        else {
            this.getBottlesInfos();
        }
    };
    InterventionceinturePage.prototype.getBottlesInfos = function () {
        /*Récupération des informations sur les bouteilles dans la base de données*/
        var _this = this;
        if (this.ceintureChoisieObject != undefined &&
            this.ceintureChoisieObject != null &&
            this.ceintureChoisieObject != "") {
            this.upcv3service
                .getSitesByUpcID(this.ceintureChoisieObject.id, this.global.token)
                .subscribe(function (res) {
                _this.global.retryCount = 0;
                //alert("site : "+JSON.stringify(res))
                if (res.result.stock != null) {
                    //s'il y a un entrepôt par défaut associé à la ceinture
                    _this.ceintureChoisieBottlesTypes = res.result.stock.bottleTypes; //liste des types de bouteilles de l'entreôt associé à la ceinture
                    _this.storage.set("stockBottleTypes", _this.ceintureChoisieBottlesTypes);
                    _this.storage.set("stockBottleTypesModeTest", _this.ceintureChoisieBottlesTypes);
                    _this.upcv3service
                        .getBottlesByStockId(res.result.stock.id, _this.global.token)
                        .subscribe(function (res) {
                        res.result.forEach(function (element) {
                            _this.ceintureChoisieBottles.push(element); //liste des bouteilles de l'entrepôt associé à la ceinture
                        });
                        _this.storage.set("ceintureChoisieBottles", _this.ceintureChoisieBottles);
                        _this.global.connexionRequise = "Aucune";
                    }, function (err) {
                        _this.global.onConnect(err).then(function (res) {
                            _this.global.onConnectEnCours = false;
                            if (res == "retry") {
                                _this.getBottlesInfos();
                            }
                            else {
                                _this.needToLoadData = false;
                                _this.displayNoDataMessage = true;
                                _this.global.connexionRequise = "Aucune";
                            }
                        });
                    });
                }
                else {
                    _this.upcv3service
                        .getAllBottleTypes(_this.global.token)
                        .subscribe(function (res) {
                        res.result.forEach(function (element) {
                            _this.defaultBottlesTypes.push(element);
                        });
                        _this.storage.set("stockBottleTypes", _this.defaultBottlesTypes);
                        _this.global.connexionRequise = "Aucune";
                    });
                }
            }, function (err) {
                _this.global.onConnect(err).then(function (res) {
                    _this.global.onConnectEnCours = false;
                    if (res == "retry") {
                        _this.getBottlesInfos();
                    }
                    else {
                        _this.needToLoadData = false;
                        _this.displayNoDataMessage = true;
                        _this.global.connexionRequise = "Aucune";
                    }
                });
            });
        }
    };
    /*Liste des ceintures*/
    InterventionceinturePage.prototype.getNearUpcList = function () {
        var _this = this;
        this.upcv3service.getUPC3(this.global.token).subscribe(function (res) {
            _this.global.retryCount = 0;
            _this.storage.set("statutConnexion", "Serveur").then(function () {
                var data = res.result; //liste de toutes les ceintures
                _this.data = data;
                _this.checkLocationEnabled(data);
            });
        }, function (err) {
            _this.global.onConnect(err).then(function (res) {
                _this.global.onConnectEnCours = false;
                if (res == "retry") {
                    _this.getDataFromServer();
                }
                else {
                    _this.needToLoadData = false;
                    _this.displayNoDataMessage = true;
                }
            });
        });
    };
    InterventionceinturePage.prototype.checkLocationEnabled = function (data) {
        var _this = this;
        this.diagnostic
            .isLocationEnabled()
            .then(function (res) {
            if (res == true) {
                _this.successGeolocation(data);
            }
            else {
                _this.geolocationErrorFunction = "check";
                alert("La page a besoin de la position de l'appareil. Activez la géolocalisation puis appuyez sur 'OK'.");
                _this.checkLocationEnabled(_this.data);
            }
        })
            .catch(function (error) {
            _this.successGeolocation(data);
        });
    };
    InterventionceinturePage.prototype.successGeolocation = function (data) {
        var _this = this;
        this.geolocation
            .getCurrentPosition()
            .then(function (res) {
            _this.lat = res.coords.latitude;
            _this.long = res.coords.longitude;
            _this.makeUpcList();
        })
            .catch(function (err) {
            _this.geolocationAlert();
        });
    };
    InterventionceinturePage.prototype.makeUpcList = function () {
        var _this = this;
        this.data.forEach(function (element) {
            _this.nearUPCNotSorted.push(element); //Liste des ceintures qu'on gardera volontairement non triée
            _this.nearUPCToSort.push(element); //Liste des ceintures qu'on va trier
        });
        if (this.useGeolocation == true) {
            this.nearUPCToSort.sort(function (a, b) {
                //Tri croissant des ceintures en fonction de la distance où elles se trouvent par rapport à la position du téléphone
                return (_this.getDistanceFromLatLonInKm(_this.lat, _this.long, a.lat, a.lng) -
                    _this.getDistanceFromLatLonInKm(_this.lat, _this.long, b.lat, b.lng));
            });
            //crée la liste avec les 10 ceintures les plus proches
            for (var i = 0; i < 10; i++) {
                this.nearUPC.push(this.nearUPCToSort[i]);
                this.nearUPCNames.push(this.nearUPC[i].upcNameId);
            }
        }
        //ajoute toutes les ceintures sans ordre de distance
        this.nearUPCNotSorted.forEach(function (element) {
            _this.nearUPC.push(element);
            _this.nearUPCNames.push(element.upcNameId);
        });
        this.nearUPC.forEach(function (element) {
            //crée une liste d'items ceinture {item_id:{json de la ceinture},item_text:"nom de la ceinture"}
            _this.nearUPCList.push({ item_id: element, item_text: element.upcNameId });
        });
        this.storage.set("nearUpcList", this.nearUPCList);
        this.getBottlesInTransitList();
    };
    InterventionceinturePage.prototype.getBottlesInTransitList = function () {
        var _this = this;
        this.upcv3service.getAllBottle(this.global.token).subscribe(function (res) {
            //liste de toutes les bouteilles
            _this.global.retryCount = 0;
            _this.bottles = res;
            var bottlesInTransitTmp = [];
            _this.bottles.result.forEach(function (element) {
                if (element.localisationType == "TRANSIT") {
                    bottlesInTransitTmp.push(element); //liste des bouteilles en transit
                }
            });
            _this.bottlesInTransit = bottlesInTransitTmp;
            var desigTmp;
            var contenuTmp;
            bottlesInTransitTmp.forEach(function (element, index) {
                desigTmp = element.designation;
                contenuTmp = element.contenue;
                _this.bottlesInTransit[index].designation = contenuTmp;
                _this.bottlesInTransit[index].contenue = desigTmp;
            });
            _this.storage.set("bottlesInTransit", _this.bottlesInTransit);
            _this.setInterventionVariables();
        }, function (err) {
            _this.global.onConnect(err).then(function (res) {
                _this.global.onConnectEnCours = false;
                if (res == "retry") {
                    _this.getBottlesInTransitList();
                }
                else {
                    _this.needToLoadData = false;
                    _this.displayNoDataMessage = true;
                }
            });
        });
    };
    /* --- fonctions liées à l'objet de l'intervention --- */
    InterventionceinturePage.prototype.other = function () {
        var _this = this;
        //choix d'un objet "autre" qui n'est pas dans la liste
        this.display = false;
        this.motive[this.motive.indexOf("Autre")] = this.otherObj;
        this.storage.set("autre", this.otherObj);
        setTimeout(function () {
            _this.display = true;
        }, 20);
    };
    InterventionceinturePage.prototype.onSelectMotive = function (item) {
        console.log(JSON.stringify(item));
        if (!this.motive.includes(item)) {
            this.motive.push(item);
        }
        this.storage.set("motiveItems", this.selectedMotive); //format pour la liste
        this.storage.set("motiveString", this.motive); //format pour la base de données
    };
    InterventionceinturePage.prototype.onRemoveMotive = function (item) {
        this.motive = this.motive.filter(function (element) {
            return element !== item;
        });
        this.storage.set("motiveItems", this.selectedMotive); //format pour la liste
        this.storage.set("motiveString", this.motive); //format pour la base de données
    };
    /* --- fonctions liées aux intervenants --- */
    InterventionceinturePage.prototype.onSelectIntervenant = function (item) {
        console.log(JSON.stringify(item));
        if (!this.intervenantsChoisis.includes(item)) {
            this.intervenantsChoisis.push(item);
        }
        this.storage.set("intervenantsItems", this.selectedIntervenants);
        this.storage.set("intervenantsString", this.intervenantsChoisis);
    };
    InterventionceinturePage.prototype.onRemoveIntervenant = function (item) {
        this.intervenantsChoisis = this.intervenantsChoisis.filter(function (element) {
            return element !== item;
        });
        this.storage.set("intervenantsItems", this.selectedIntervenants);
        this.storage.set("intervenantsString", this.intervenantsChoisis);
    };
    /* --- fonctions liées à la ceinture --- */
    InterventionceinturePage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    //fonction calcul de distance
    InterventionceinturePage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) *
                Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    InterventionceinturePage.prototype.onSelectedCeinture = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //var res = await this.global.upcmodbus.client.disconnect()
                    //WifiWizard2.disconnect()
                    return [4 /*yield*/, this.storage.set("isCeintureSelected", true)];
                    case 1:
                        //var res = await this.global.upcmodbus.client.disconnect()
                        //WifiWizard2.disconnect()
                        _a.sent();
                        this.item = item;
                        if (!(this.isCeintureSelected == true)) return [3 /*break*/, 2];
                        this.ceintureChoisieObjectTmp = item.item_id;
                        this.selectedUpcSsidTmp =
                            item.item_id.communicationParameters.comWiFiName;
                        this.selectedUpcPassTmp =
                            item.item_id.communicationParameters.comWiFiPass;
                        this.changementCeintureAlert();
                        return [3 /*break*/, 9];
                    case 2: return [4 /*yield*/, this.storage.set("ceintureChoisieObject", JSON.stringify(item.item_id))];
                    case 3:
                        _a.sent();
                        this.ceintureChoisieObject = item.item_id;
                        this.isCeintureSelected = true;
                        this.ceintureId = item.item_id.id;
                        this.selectedCeintureName = item.item_text;
                        this.selectedUpcSsid = item.item_id.communicationParameters.comWiFiName;
                        this.selectedUpcPass = item.item_id.communicationParameters.comWiFiPass;
                        return [4 /*yield*/, this.storage.set("ssid", this.selectedUpcSsid)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set("ssid_upc", this.selectedUpcSsid)];
                    case 5:
                        _a.sent();
                        //debug
                        console.log("ssid:" + this.selectedUpcSsid);
                        return [4 /*yield*/, this.storage.set("password", this.selectedUpcPass)];
                    case 6:
                        _a.sent();
                        //debug
                        console.log("password:" + this.selectedUpcPass);
                        return [4 /*yield*/, this.storage.set("ceintureId", this.ceintureId)];
                    case 7:
                        _a.sent();
                        //
                        return [4 /*yield*/, this.storage.set("upcname", this.ceintureChoisieObject.upcNameId)];
                    case 8:
                        //
                        _a.sent();
                        console.log("upc name ::" + this.ceintureChoisieObject.upcNameId);
                        /*Récupération commentaires "à faire" dans la base de données*/
                        this.getCommentaires(item);
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    InterventionceinturePage.prototype.onRemoveCeinture = function (item) {
        this.isCeintureSelected = false;
        this.storage.set("ceintureChoisieObject", "");
    };
    /*Changement de ceinture dans le cas d'une intervention en cours*/
    InterventionceinturePage.prototype.changementCeintureAlert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.alertController
                    .create({
                    header: "Attention",
                    subHeader: "Intervention en cours",
                    message: "Une intervention est en cours sur la ceinture " +
                        this.selectedCeintureName +
                        ". Les données ne seront pas enregistrées, souhaitez-vous continuer ?",
                    buttons: [
                        {
                            text: "Annuler",
                            role: "cancel",
                            handler: function () {
                                _this.selectedUpcSsidTmp = "";
                                _this.selectedUpcPassTmp = "";
                                _this.nearUPCList.forEach(function (element) {
                                    //compare les id pour présélectionner la ceinture
                                    if (_this.ceintureChoisieObject.id == element.item_id.id) {
                                        _this.selectedItems = [element];
                                    }
                                });
                                _this.displayCommentaire = false;
                                _this.isCeintureSelected = false;
                                _this.selectedItems = [];
                                resolve();
                            },
                        },
                        {
                            text: "Continuer",
                            handler: function () {
                                _this.selectedUpcSsid = _this.selectedUpcSsidTmp;
                                _this.selectedUpcPass = _this.selectedUpcPassTmp;
                                _this.ceintureChoisieObject = _this.ceintureChoisieObjectTmp;
                                _this.storage.set("ceintureChoisieObject", JSON.stringify(_this.ceintureChoisieObject));
                                _this.selectedCeintureName =
                                    _this.ceintureChoisieObject.upcNameId;
                                _this.display = false;
                                _this.display = true;
                                /*WifiWizard2.disconnect().then(
                              this.connectToUpc()
                            );   */
                                resolve();
                            },
                        },
                    ],
                })
                    .then(function (res) { return res.present(); });
                return [2 /*return*/];
            });
        }); });
    };
    InterventionceinturePage.prototype.geolocationAlert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.alertController
                    .create({
                    header: "Attention",
                    subHeader: "Géolocalisation requise",
                    message: "La page a besoin de la position de l'appareil. Activez la géolocalisation puis appuyez sur 'OK'.",
                    buttons: [
                        {
                            text: "Poursuivre sans géolocalisation",
                            role: "cancel",
                            handler: function () {
                                _this.useGeolocation = false;
                                _this.makeUpcList();
                                resolve();
                            },
                        },
                        {
                            text: "OK",
                            handler: function () {
                                switch (_this.geolocationErrorFunction) {
                                    case "check":
                                        _this.checkLocationEnabled(_this.data);
                                        break;
                                    case "pos":
                                        _this.successGeolocation(_this.data);
                                        break;
                                }
                                resolve();
                            },
                        },
                    ],
                })
                    .then(function (res) { return res.present(); });
                return [2 /*return*/];
            });
        }); });
    };
    InterventionceinturePage.prototype.createSequence = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var notSortedSequenceOfScreensTmp, tmp, sequenceTmp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                notSortedSequenceOfScreensTmp = [];
                this.motive.forEach(function (element) {
                    //récupère tous les écrans pour tous les motifs d'intervention choisis
                    switch (element) {
                        case "Installation":
                            _this.sequenceOfScreensOptions.installation.forEach(function (element) {
                                notSortedSequenceOfScreensTmp.push(element);
                            });
                            break;
                        case "Modification du nombre de pièges":
                            _this.sequenceOfScreensOptions.modificationNbPieges.forEach(function (element) {
                                notSortedSequenceOfScreensTmp.push(element);
                            });
                            break;
                        case "Remise en route":
                            _this.sequenceOfScreensOptions.remiseEnRoute.forEach(function (element) {
                                notSortedSequenceOfScreensTmp.push(element);
                            });
                            break;
                        case "Maintenance":
                            _this.sequenceOfScreensOptions.maintenance.forEach(function (element) {
                                notSortedSequenceOfScreensTmp.push(element);
                            });
                            break;
                        case "Changements de bouteilles CO2":
                            _this.sequenceOfScreensOptions.changementBouteillesCo2.forEach(function (element) {
                                notSortedSequenceOfScreensTmp.push(element);
                            });
                            break;
                        case "Changement d'UPC":
                            _this.sequenceOfScreensOptions.changementUpc.forEach(function (element) {
                                notSortedSequenceOfScreensTmp.push(element);
                            });
                            break;
                        case "Hivernage":
                            break;
                        default:
                            break;
                    }
                });
                tmp = notSortedSequenceOfScreensTmp.reduce(function (acc, element) {
                    return acc.add(element);
                }, new Set());
                this.sequenceOfScreensTmp = tmp.slice();
                this.sequenceOfScreensTmp.push("Commentaires", "Rapport de visite", "Fin d'intervention");
                this.sequenceOfScreensTmp.unshift("Paramètres généraux");
                sequenceTmp = [];
                this.sequenceOfScreensTmp.forEach(function (element) {
                    var page;
                    switch (element) {
                        case "Paramètres généraux":
                            page = "namepiege";
                            break;
                        case "Initialisation / Echange boitier UPC":
                            page = "initechangeboitierupc";
                            break;
                        case "Etat de la connexion au réseau":
                            page = "connection";
                            break;
                        case "Changement de bouteilles sur ceinture":
                            page = "addbottleceint";
                            break;
                        case "Réglage des détendeurs":
                            page = "adjustment";
                            break;
                        case "Controle débits Mini/Maxi":
                            page = "controldiff";
                            break;
                        case "Vérification débits pièges individuels":
                            page = "verifpiegesindividuels";
                            break;
                        case "Programmation diffusion CO2":
                            page = "synchro";
                            break;
                        case "Mesures pressions de sortie":
                            page = "check";
                            break;
                        case "Modification du nombre de pièges":
                            page = "modifnbpieges";
                            break;
                        case "Commentaires":
                            page = "commentaires";
                            break;
                        case "Rapport de visite":
                            page = "rapportvisite";
                            break;
                        case "Fin d'intervention":
                            page = "finintervention";
                            break;
                    }
                    sequenceTmp.push([element, false, page]);
                });
                this.storage.get("sequence").then(function (res) {
                    var sequence;
                    if (res == undefined || res == "") {
                        sequence = sequenceTmp;
                    }
                    else {
                        if (res != null) {
                            sequenceTmp.forEach(function (elementTmp) {
                                res.forEach(function (elementRes) {
                                    if (elementRes[2] == elementTmp[2]) {
                                        if (elementRes[1] != elementTmp[1]) {
                                            elementTmp[1] = elementRes[1];
                                        }
                                    }
                                });
                            });
                            sequence = sequenceTmp;
                        }
                    }
                    _this.storage.set("sequence", sequence).then(function () {
                        _this.router.navigate([sequence[0][2]]);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    /*Commence la séquence et/ou redirige vers la première page de la séquence suivante*/
    InterventionceinturePage.prototype.goNext = function () {
        if (this.motive == [] ||
            this.intervenants == [] ||
            this.ceintureChoisieObject == "") {
            alert("Vous devez remplir tous les champs pour continuer.");
        }
        else {
            this.createSequence();
        }
    };
    InterventionceinturePage.prototype.reload = function () {
        document.location.reload();
    };
    InterventionceinturePage.ctorParameters = function () { return [
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__["Diagnostic"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"] }
    ]; };
    InterventionceinturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-interventionceinture",
            template: __webpack_require__(/*! raw-loader!./interventionceinture.page.html */ "./node_modules/raw-loader/index.js!./src/app/interventionceinture/interventionceinture.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./interventionceinture.page.scss */ "./src/app/interventionceinture/interventionceinture.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__["Diagnostic"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"]])
    ], InterventionceinturePage);
    return InterventionceinturePage;
}());



/***/ })

}]);
//# sourceMappingURL=interventionceinture-interventionceinture-module-es5.js.map