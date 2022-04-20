(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~canvas-canvas-module~instalpieges-instalpieges-module"],{

/***/ "./node_modules/angular2-uuid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/canvas/canvas.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\"><ion-button color=\"danger\" size=\"small\" (click)=\"clear();\">Tout effacer</ion-button></div>\n<canvas #backgroundImageCanvas id=\"background-image-canvas\" (mousedown)=\"startDrawing($event);\" \n (mousemove)=\"moved($event);\" (mouseup)=\"endDrawing();\" (touchstart)=\"startDrawing($event);\" (touchmove)=\"moved($event);\"></canvas>\n\n \n <!--<canvas #protectedAreasCanvas id=\"protected-areas-canvas\"></canvas>\n\n<canvas #beltsCanvas id=\"belts-canvas\"></canvas>\n\n<canvas #electricCanvas id=\"electric-canvas\"></canvas>\n\n<canvas #drawingCanvas id=\"drawing-canvas\"\n        (mousedown)=\"onMouseDown($event)\"\n        (mousemove)=\"onMouseMove($event)\"\n        (contextmenu)=\"onContextMenu($event)\">\n</canvas> -->"

/***/ }),

/***/ "./src/app/canvas/canvas.page.scss":
/*!*****************************************!*\
  !*** ./src/app/canvas/canvas.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy9jYW52YXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/canvas/canvas.page.ts":
/*!***************************************!*\
  !*** ./src/app/canvas/canvas.page.ts ***!
  \***************************************/
/*! exports provided: CADCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CADCanvasComponent", function() { return CADCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_project_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/project/node */ "./src/app/model/project/node.ts");
/* harmony import */ var _model_project_belt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/project/belt */ "./src/app/model/project/belt.ts");
/* harmony import */ var _model_project_cad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/project/cad */ "./src/app/model/project/cad.ts");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var CADCanvasComponent = /** @class */ (function () {
    function CADCanvasComponent(upcv3service, global, storage, platform) {
        this.upcv3service = upcv3service;
        this.global = global;
        this.storage = storage;
        this.platform = platform;
        this.drawing = false;
        this.lineWidth = 5;
        this.selectedColor = '#9e2956';
        this.colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.moveStartPosition = { x: 0, y: 0 };
    }
    CADCanvasComponent.prototype.ngAfterViewInit = function () {
        this.canvasElt = this.backgroundImageCanvas.nativeElement;
        this.canvasElt.width = this.platform.width();
        this.canvasElt.height = this.platform.height() / 2;
    };
    CADCanvasComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Init canvas
                    return [4 /*yield*/, this.storage.get('token').then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.token = val;
                                        return [4 /*yield*/, this.upcv3service.getProject(this.token).subscribe(function (res) {
                                                res.result.forEach(function (item) {
                                                    if (item.client === _this.global.upc3.upcNameId) {
                                                        _this.project = item;
                                                    }
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, setTimeout(function () {
                                                _this.upcv3service.getVersion(_this.project.id, _this.token).subscribe(function (res) {
                                                    _this.version = res.result;
                                                    alert(JSON.stringify(res.result));
                                                    _this.cad = new _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["CAD"](_this.project, _this.version);
                                                });
                                            }, 500)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        // Init canvas
                        _a.sent();
                        return [4 /*yield*/, setTimeout(function () {
                                _this.onDraw();
                            }, 5000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CADCanvasComponent.prototype.startDrawing = function (ev) {
        this.drawing = true;
        var canvasPosition = this.canvasElt.getBoundingClientRect();
        this.saveX = ev.pageX - canvasPosition.x;
        this.saveY = ev.pageY - canvasPosition.y;
    };
    CADCanvasComponent.prototype.endDrawing = function () {
        this.drawing = false;
    };
    CADCanvasComponent.prototype.selectColor = function (color) {
        this.selectedColor = color;
    };
    CADCanvasComponent.prototype.onDraw = function () {
        var _this = this;
        var width = 700, height = 700;
        // General
        this.cad.translatePosition.x = width / 2;
        this.cad.translatePosition.y = height / 2;
        // Background Image
        this.backgroundImageCanvas.nativeElement.width = width;
        this.backgroundImageCanvas.nativeElement.height = height;
        this.backgroundImage = new Image();
        this.backgroundImage.crossOrigin = "anonymous";
        this.backgroundImage.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + this.cad.project.lat + "," + this.cad.project.lng + "&zoom=" + this.cad.project.zoom + "&size=" + this.cad.googleMapsParams.width + "x" + this.cad.googleMapsParams.height + "&scale=" + this.cad.googleMapsParams.scale + "&maptype=" + this.cad.version.mapType + "&style=feature:all|element:labels|visibility:off&key=AIzaSyDNhsUG6VjyDQ_R_gZ2cT2ktTBbsy6M_uQ";
        this.backgroundImage.onload = function () { this.drawBackgroundImage(); }.bind(this);
        // Custom Image
        if (this.cad.project.customPicture) {
            // Download
            this.upcv3service.downloadCustomPicture(this.cad.project.id, this.token).subscribe(function (res) {
                _this.customImage = new Image();
                _this.customImage.crossOrigin = "anonymous";
                _this.customImage.src = URL.createObjectURL(new Blob([res]));
                _this.customImage.onload = function () { this.drawBackgroundImage(); }.bind(_this);
            });
        }
        // Belts
        /*this.beltsCanvas.nativeElement.width = width;
        this.beltsCanvas.nativeElement.height = height;
        this.controlImage = new Image(this.cad.version.iconsSize, this.cad.version.iconsSize);
        this.controlImage.crossOrigin = 'anonymous';
        this.controlImage.src = 'assets/img/markers/regie.png';
        this.controlImage.onload = function() { this.drawBelts(); }.bind(this);
        this.controlImageSheltered = new Image(this.cad.version.iconsSize, this.cad.version.iconsSize);
        this.controlImageSheltered.crossOrigin = 'anonymous';
        this.controlImageSheltered.src = 'assets/img/markers/regie_abris.png';
        this.controlImageSheltered.onload = function() { this.drawBelts(); }.bind(this);
        // Hexagonal Traps
        this.hexagonalTrap1Image = new Image(this.cad.version.iconsSize, this.cad.version.iconsSize);
        this.hexagonalTrap1Image.crossOrigin = 'anonymous';
        this.hexagonalTrap1Image.src = 'assets/img/markers/trap_hexa_1_1.png';
        this.hexagonalTrap1Image.onload = function() { this.drawBelts(); }.bind(this);
        this.hexagonalTrap2Image = new Image(this.cad.version.iconsSize, this.cad.version.iconsSize);
        this.hexagonalTrap2Image.crossOrigin = 'anonymous';
        this.hexagonalTrap2Image.src = 'assets/img/markers/trap_hexa_2.png';
        this.hexagonalTrap2Image.onload = function() { this.drawBelts(); }.bind(this);
        this.hexagonalTrap3Image = new Image(this.cad.version.iconsSize, this.cad.version.iconsSize);
        this.hexagonalTrap3Image.crossOrigin = 'anonymous';
        this.hexagonalTrap3Image.src = 'assets/img/markers/trap_hexa_3.png';
        this.hexagonalTrap3Image.onload = function() { this.drawBelts(); }.bind(this);
        // Rectangular Traps
        this.rectangularTrap1Image = new Image(this.cad.version.iconsSize, this.cad.version.iconsSize);
        this.rectangularTrap1Image.crossOrigin = 'anonymous';
        this.rectangularTrap1Image.src = 'assets/img/markers/trap_rect_1.png';
        this.rectangularTrap1Image.onload = function() { this.drawBelts(); }.bind(this);
    
        // Drawing
        this.drawingCanvas.nativeElement.width = width;
        this.drawingCanvas.nativeElement.height = height;
    
        // Protected areas
        this.protectedAreasCanvas.nativeElement.width = width;
        this.protectedAreasCanvas.nativeElement.height = height;
        this.protectedAreasPatternCanvas = document.createElement('canvas');
        this.protectedAreasPatternCanvas.style.width = '100%';
        this.protectedAreasPatternCanvas.style.height = '100%';
        this.drawProtectedAreas();
    
        // Electric
        this.electricCanvas.nativeElement.width = width;
        this.electricCanvas.nativeElement.height = height;
        this.drawElectric();*/
    };
    CADCanvasComponent.prototype.clear = function () {
        this.drawBackgroundImage();
    };
    // Resize Event
    CADCanvasComponent.prototype.onResize = function (e) {
        if (!this.cad.render) {
            this.backgroundImageCanvas.nativeElement.height =
                this.beltsCanvas.nativeElement.height =
                    this.drawingCanvas.nativeElement.height =
                        this.protectedAreasCanvas.nativeElement.height =
                            this.electricCanvas.nativeElement.height =
                                document.getElementById('CAD').offsetHeight;
            this.backgroundImageCanvas.nativeElement.width =
                this.beltsCanvas.nativeElement.width =
                    this.drawingCanvas.nativeElement.width =
                        this.protectedAreasCanvas.nativeElement.width =
                            this.electricCanvas.nativeElement.width =
                                document.getElementById('CAD').offsetWidth;
        }
        this.drawBackgroundImage();
        this.drawBelts();
        this.drawElectric();
        this.drawProtectedAreas();
    };
    CADCanvasComponent.prototype.moved = function (ev) {
        if (!this.drawing)
            return;
        var canvasPosition = this.canvasElt.getBoundingClientRect();
        var ctx = this.canvasElt.getContext('2d');
        var currentX = ev.touches[0].pageX - canvasPosition.x;
        var currentY = ev.touches[0].pageY - canvasPosition.y;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.selectedColor;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        //ctx.arc(this.saveX,this.saveY,50,0,2*Math.PI);
        ctx.moveTo(this.saveX, this.saveY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.stroke();
        this.saveX = currentX;
        this.saveY = currentY;
    };
    // Mouse events */
    CADCanvasComponent.prototype.onMouseDown = function (e) {
        var _this = this;
        // When selecting pixels ratio
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].SELECT_PIXELS_RATIO) {
            // Get point
            var clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            // Start
            if (!this.cad.startPixelsRatio)
                this.cad.startPixelsRatio = { x: x, y: y };
            // End
            else if (!this.cad.endPixelsRatio)
                this.cad.endPixelsRatio = { x: x, y: y };
            this.drawDrawing();
            return;
        }
        // When selecting parent node
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].SELECT_PARENT_NODE) {
            // Get node
            var selectedNode, clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            // Find & select the nearest
            this.cad.version.belts.forEach(function (belt) {
                belt.branches.forEach(function (branch) {
                    branch.nodes.forEach(function (node) {
                        // Get actual position
                        var nodePosition = _this.cad.getPosition(node.lat, node.lng), nodePos = _this.cad.rotate(0, 0, nodePosition.x, nodePosition.y, -_this.cad.version.rotation), distance = _this.cad.distance(x, y, nodePos.x, nodePos.y);
                        if (minDistance == null || minDistance > distance) {
                            minDistance = distance;
                            if (minDistance <= _this.cad.version.iconsSize / 2)
                                selectedNode = node.id;
                        }
                    });
                });
            });
            if (selectedNode)
                this.cad.setSelectedBranchParentNode(selectedNode);
            return;
        }
        // Disable contextMenu
        if (e.which == 1 && this.cad.showContextMenu)
            this.cad.showContextMenu = false;
        // When drawing
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].DRAW) {
            // 1. Check if point under pointer
            this.selectedDrawingPointIndex = null;
            var clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            this.cad.drawPolyPath.forEach(function (path, index) {
                var pathPos = _this.cad.rotate(0, 0, path.x, path.y, -_this.cad.version.rotation), distance = _this.cad.distance(x, y, pathPos.x, pathPos.y);
                if (minDistance == null || minDistance > distance) {
                    minDistance = distance;
                    if (minDistance <= _this.cad.version.iconsSize / 2)
                        _this.selectedDrawingPointIndex = index;
                }
            });
            // 2. Add point if no point selected
            if (this.selectedDrawingPointIndex == null) {
                var correctedPos = this.cad.rotate(0, 0, clickPos.x, clickPos.y, this.cad.version.rotation);
                this.cad.drawPolyPath.push({ x: correctedPos.x, y: correctedPos.y });
                this.drawDrawing();
            }
            return;
        }
        // When editing protectedArea
        if (this.cad.selectedProtectedArea) {
            // Selection
            this.cad.selectedProtectedAreaPointIndex = null;
            var clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            // Find & select the nearest
            this.cad.selectedProtectedArea.points.forEach(function (point, index) {
                var pointPosition = _this.cad.getPosition(point[0], point[1]), pointPos = _this.cad.rotate(0, 0, pointPosition.x, pointPosition.y, -_this.cad.version.rotation), distance = _this.cad.distance(x, y, pointPos.x, pointPos.y);
                if (minDistance == null || minDistance > distance) {
                    minDistance = distance;
                    if (minDistance <= _this.cad.version.iconsSize / 2)
                        _this.cad.selectedProtectedAreaPointIndex = index;
                }
            });
            this.drawProtectedAreas();
        }
        // Default
        else {
            // Selection
            // Get node
            var selectedNode, selectedElectricalOutlet, selectedTransformer, clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            // Disable moving
            this.cad.tool = null;
            // Find & select the nearest
            this.cad.version.belts.forEach(function (belt) {
                // CO2
                belt.branches.forEach(function (branch) {
                    branch.nodes.forEach(function (node) {
                        // Get actual position
                        var nodePosition = _this.cad.getPosition(node.lat, node.lng), nodePos = _this.cad.rotate(0, 0, nodePosition.x, nodePosition.y, -_this.cad.version.rotation), distance = _this.cad.distance(x, y, nodePos.x, nodePos.y);
                        if (minDistance == null || minDistance > distance) {
                            minDistance = distance;
                            if (minDistance <= _this.cad.version.iconsSize / 2)
                                selectedNode = node.id;
                        }
                    });
                });
                // ELECTRIC
                minDistance = null;
                belt.electricalOutlets.forEach(function (electricalOutlet) {
                    // Get actual position
                    var electricalOutletPosition = _this.cad.getPosition(electricalOutlet.lat, electricalOutlet.lng), electricalOutletPositionPos = _this.cad.rotate(0, 0, electricalOutletPosition.x, electricalOutletPosition.y, -_this.cad.version.rotation), distance = _this.cad.distance(x, y, electricalOutletPositionPos.x, electricalOutletPositionPos.y);
                    if (minDistance == null || minDistance > distance) {
                        minDistance = distance;
                        if (minDistance <= _this.cad.version.iconsSize / 2)
                            selectedElectricalOutlet = electricalOutlet.id;
                    }
                    if (_this.cad.mode == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Mode"].ELECTRIC) {
                        electricalOutlet.transformers.forEach(function (transformer) {
                            var transformerPosition = {
                                x: electricalOutletPosition.x + (_this.cad.version.iconsSize * 2 / 2) * Math.cos((transformer.angle) * Math.PI / 180),
                                y: electricalOutletPosition.y + (_this.cad.version.iconsSize * 2 / 2) * Math.sin((transformer.angle) * Math.PI / 180)
                            }, transformerPos = _this.cad.rotate(0, 0, transformerPosition.x, transformerPosition.y, -_this.cad.version.rotation);
                            distance = _this.cad.distance(x, y, transformerPos.x, transformerPos.y);
                            if (minDistance == null || minDistance > distance) {
                                minDistance = distance;
                                if (minDistance <= _this.cad.version.iconsSize / 2)
                                    selectedTransformer = transformer.id;
                            }
                        });
                    }
                });
            });
            // Select
            if (selectedNode != null)
                this.cad.selectNode(selectedNode, e.ctrlKey);
            else if (selectedElectricalOutlet != null)
                this.cad.selectElectricalOutlet(selectedElectricalOutlet);
            else if (selectedTransformer != null)
                this.cad.selectTransformer(selectedTransformer);
            else if (!e.ctrlKey)
                this.cad.unSelectBelt();
            this.moveStartPosition = { x: e.clientX, y: e.clientY };
        }
        // Move map if no nodes selected
        if (this.cad.selectedNodes.length == 0 && !this.cad.selectedElectricalOutlet) {
            this.cad.startDragOffset.x = e.clientX - this.cad.translatePosition.x;
            this.cad.startDragOffset.y = e.clientY - this.cad.translatePosition.y;
        }
    };
    CADCanvasComponent.prototype.onMouseMove = function (e) {
        var _this = this;
        var clickPos = this.getClickPosition(e), correctedPos = this.cad.rotate(0, 0, clickPos.x, clickPos.y, this.cad.version.rotation);
        // When selecting pixels ratio
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].SELECT_PIXELS_RATIO)
            return;
        // When selecting parent node
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].SELECT_PARENT_NODE)
            return;
        // When drawing
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].DRAW) {
            // 1. Translate point if selected
            if (e.which == 1 && this.selectedDrawingPointIndex != null) {
                this.cad.drawPolyPath[this.selectedDrawingPointIndex].x = correctedPos.x;
                this.cad.drawPolyPath[this.selectedDrawingPointIndex].y = correctedPos.y;
                this.drawDrawing();
            }
            // 2. Default nothing
            return;
        }
        // Move element if selected
        if (e.which == 1 && (this.cad.selectedNodes.length == 1 || this.cad.selectedElectricalOutlet)) {
            // Move only if distance from start > 1px
            if (this.cad.distance(this.moveStartPosition.x, this.moveStartPosition.y, e.clientX, e.clientY) > 1) {
                var position = this.cad.getCoordinates(correctedPos.x, correctedPos.y);
                // CO2
                if (this.cad.selectedNodes.length == 1) {
                    var branchIndex = this.cad.version.getBranchIndex(this.cad.selectedBranch.id), nodeIndex = this.cad.version.getNodeIndex(this.cad.selectedNodes[0].id);
                    // Refresh distance
                    if (nodeIndex > 0) {
                        var distance = this.cad.getDistance({
                            lat: position.lat,
                            lng: position.lng
                        }, {
                            lat: this.cad.selectedBranch.nodes[nodeIndex - 1].lat,
                            lng: this.cad.selectedBranch.nodes[nodeIndex - 1].lng
                        });
                        this.cad.selectedNodes[0].prevDistance = distance;
                    }
                    else if (branchIndex > 0 && nodeIndex == 0) {
                        // Get parent node
                        if (this.cad.selectedBranch.parentBranch != null && this.cad.selectedBranch.parentNode != null) {
                            var parentBranch = this.cad.selectedBelt.branches.find(function (b) { return b.id == _this.cad.selectedBranch.parentBranch; }), parentNode = parentBranch.nodes.find(function (n) { return n.id == _this.cad.selectedBranch.parentNode; });
                            if (parentNode) {
                                distance = this.cad.getDistance({ lat: position.lat, lng: position.lng }, { lat: parentNode.lat, lng: parentNode.lng });
                                this.cad.selectedNodes[0].prevDistance = distance;
                            }
                        }
                    }
                    // Edit node throw Belt to impact child nodes
                    this.cad.version.setNodePosition(this.cad.selectedNodes[0].id, position.lat, position.lng);
                    this.drawBelts();
                    this.drawElectric();
                }
                // Electric
                else if (this.cad.selectedElectricalOutlet != null) {
                    this.cad.version.setElectricalOutletPosition(this.cad.selectedElectricalOutlet.id, position.lat, position.lng);
                    this.drawElectric();
                }
            }
        }
        // Move protectedArea point if selected
        if (e.which == 1 && this.cad.selectedProtectedAreaPointIndex != null) {
            var position = this.cad.getCoordinates(correctedPos.x, correctedPos.y);
            this.cad.selectedProtectedArea.points[this.cad.selectedProtectedAreaPointIndex][0] = position.lat;
            this.cad.selectedProtectedArea.points[this.cad.selectedProtectedAreaPointIndex][1] = position.lng;
            this.drawProtectedAreas();
        }
        // Move map if no element selected
        if (e.which == 1 && this.cad.selectedNodes.length == 0 && !this.cad.selectedElectricalOutlet && this.cad.selectedProtectedAreaPointIndex == null) {
            // Translate
            this.cad.translatePosition.x = e.clientX - this.cad.startDragOffset.x;
            this.cad.translatePosition.y = e.clientY - this.cad.startDragOffset.y;
            this.rotationZoomChanged();
        }
    };
    CADCanvasComponent.prototype.onContextMenu = function (e) {
        e.preventDefault();
        // Check if node, transformer or electricalOutlet, protectedAreaPoint selected
        if (this.cad.selectedNodes.length == 1 ||
            this.cad.selectedTransformer ||
            this.cad.selectedElectricalOutlet ||
            this.cad.selectedProtectedAreaPointIndex != null) {
            var rect = this.beltsCanvas.nativeElement.getBoundingClientRect();
            this.cad.contextMenuLeft = e.clientX - rect.left;
            this.cad.contextMenuTop = e.clientY - rect.top;
            this.cad.showContextMenu = true;
        }
    };
    /* Events */
    CADCanvasComponent.prototype.mapTypeChanged = function () {
        this.backgroundImage.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + this.cad.project.lat + "," + this.cad.project.lng + "&zoom=" + this.cad.project.zoom + "&size=" + this.cad.googleMapsParams.width + "x" + this.cad.googleMapsParams.height + "&scale=" + this.cad.googleMapsParams.scale + "&maptype=" + this.cad.version.mapType + "&style=feature:all|element:labels|visibility:off&key=AIzaSyDNhsUG6VjyDQ_R_gZ2cT2ktTBbsy6M_uQ";
        this.drawBackgroundImage();
    };
    CADCanvasComponent.prototype.selectionChanged = function () {
        this.drawBelts();
        this.drawProtectedAreas();
        this.drawElectric();
    };
    CADCanvasComponent.prototype.rotationZoomChanged = function () {
        this.drawBackgroundImage();
        this.drawBelts();
        this.drawProtectedAreas();
        this.drawElectric();
    };
    CADCanvasComponent.prototype.iconsSizeChanged = function () {
        // Edit markers
        this.controlImage.width = this.controlImage.height =
            this.controlImageSheltered.width = this.controlImageSheltered.height =
                this.hexagonalTrap1Image.width = this.hexagonalTrap1Image.height =
                    this.hexagonalTrap2Image.width = this.hexagonalTrap2Image.height =
                        this.hexagonalTrap3Image.width = this.hexagonalTrap3Image.height =
                            this.rectangularTrap1Image.width = this.rectangularTrap1Image.height = this.cad.version.iconsSize;
        this.drawBelts();
    };
    CADCanvasComponent.prototype.opacityChanged = function () {
        this.drawBackgroundImage();
    };
    CADCanvasComponent.prototype.beltChanged = function () {
        this.drawBelts();
        this.drawElectric();
    };
    CADCanvasComponent.prototype.protectedAreaChanged = function () {
        this.drawProtectedAreas();
    };
    CADCanvasComponent.prototype.drawChanged = function () {
        this.drawDrawing();
    };
    /* Draw */
    CADCanvasComponent.prototype.drawBackgroundImage = function () {
        var context = this.backgroundImageCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.backgroundImageCanvas.nativeElement.width, this.backgroundImageCanvas.nativeElement.height);
        context.save();
        // Quality
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        if (this.cad.render)
            context.scale(this.cad.renderFactor, this.cad.renderFactor);
        // Check if custom
        if (this.cad.project.customPicture) {
            if (this.customImage && this.customImage.complete && this.customImage.naturalWidth > 0)
                context.drawImage(this.customImage, -this.customImage.width / 2, -this.customImage.height / 2);
        }
        else {
            // Draw image
            if (this.backgroundImage.complete && this.backgroundImage.naturalWidth > 0)
                context.drawImage(this.backgroundImage, -this.backgroundImage.width / 2, -this.backgroundImage.height / 2);
        }
        context.restore();
        // Set opacity
        if (this.cad.version.mapType == 'satellite') {
            context.save();
            context.rect(0, 0, this.backgroundImageCanvas.nativeElement.width, this.backgroundImageCanvas.nativeElement.height);
            context.fillStyle = "rgba(200, 200, 200, " + this.cad.version.mapOpacity / 100 + ")";
            context.fill();
            context.restore();
        }
    };
    CADCanvasComponent.prototype.drawBelts = function () {
        var _this = this;
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.beltsCanvas.nativeElement.width, this.beltsCanvas.nativeElement.height);
        context.save();
        // Quality
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        if (this.cad.render)
            context.scale(this.cad.renderFactor, this.cad.renderFactor);
        // Draw lines first
        this.cad.version.belts.forEach(function (belt) {
            belt.branches.filter(function (b) { return b.nodes.length > 0; }).forEach(function (branch) {
                // Color
                var color = branch.color;
                if (_this.cad.mode == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Mode"].ELECTRIC)
                    color = '#303030';
                // Draw inter-branch lines
                if (branch.parentBranch != null && branch.parentNode != null) {
                    // Get branch and node
                    var parentNode = _this.cad.version.getNode(branch.parentNode), parentNodePosition = parentNode != null ? _this.cad.getPosition(parentNode.lat, parentNode.lng) : null;
                    // Get first node of currentBranch
                    var firstNode = branch.nodes[0];
                    var firstNodePosition = _this.cad.getPosition(firstNode.lat, firstNode.lng);
                    // Check
                    if (parentNode != null && firstNode != null) {
                        if (firstNode.prevLinkBuried) {
                            _this.drawDotLine(firstNodePosition.x, firstNodePosition.y, parentNodePosition.x, parentNodePosition.y, color, branch.width);
                        }
                        else {
                            _this.drawLine(firstNodePosition.x, firstNodePosition.y, parentNodePosition.x, parentNodePosition.y, color, branch.width);
                        }
                    }
                }
                branch.nodes.forEach(function (node, index) {
                    if (index > 0) {
                        // Nodes position
                        var previousNodePosition = _this.cad.getPosition(branch.nodes[index - 1].lat, branch.nodes[index - 1].lng);
                        var nodePosition = _this.cad.getPosition(node.lat, node.lng);
                        // Draw line
                        if (node.prevLinkBuried) {
                            _this.drawDotLine(nodePosition.x, nodePosition.y, previousNodePosition.x, previousNodePosition.y, color, branch.width);
                        }
                        else {
                            _this.drawLine(nodePosition.x, nodePosition.y, previousNodePosition.x, previousNodePosition.y, color, branch.width);
                        }
                    }
                });
            });
        });
        // Then draw markers & number
        this.cad.version.belts.forEach(function (belt, index) {
            var suffixIndex = [{ suffix: '', index: 1 }];
            belt.branches.forEach(function (branch) {
                // Color
                var color = branch.numbersColor;
                if (_this.cad.mode == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Mode"].ELECTRIC)
                    color = '#303030';
                if (suffixIndex.findIndex(function (s) { return s.suffix === branch.suffix; }) == -1)
                    suffixIndex.push({ suffix: branch.suffix, index: 1 });
                branch.nodes.forEach(function (node) {
                    // Get position From LatLng
                    var nodePosition = _this.cad.getPosition(node.lat, node.lng);
                    // Icon & Number
                    switch (node.nodeType) {
                        case _model_project_node__WEBPACK_IMPORTED_MODULE_2__["NodeType"].CONTROL:
                            // Draw icon
                            var filter = 'none';
                            // Find in selected nodes list
                            if (_this.cad.selectedNodes.find(function (n) { return n.id === node.id; }) != null) {
                                filter = 'drop-shadow(0 0 8px yellow)';
                            }
                            if (belt.controlSheltered) {
                                if (_this.controlImageSheltered.complete)
                                    _this.drawMarker(_this.controlImageSheltered, nodePosition.x, nodePosition.y, -_this.cad.version.rotation, filter);
                            }
                            else {
                                if (_this.controlImage.complete)
                                    _this.drawMarker(_this.controlImage, nodePosition.x, nodePosition.y, -_this.cad.version.rotation, filter);
                            }
                            break;
                        case _model_project_node__WEBPACK_IMPORTED_MODULE_2__["NodeType"].HEXAGONAL_TRAP:
                        case _model_project_node__WEBPACK_IMPORTED_MODULE_2__["NodeType"].RECTANGULAR_TRAP:
                            // Draw number if current belt
                            if (_this.cad.selectedBelt == null || _this.cad.selectedBelt.id == belt.id) {
                                var number = '';
                                if (_this.cad.version.belts.length > 1 && _this.cad.selectedBelt == null) {
                                    number = index + 1 + "-" + (suffixIndex.find(function (s) { return s.suffix === branch.suffix; }).index + branch.suffix);
                                }
                                else {
                                    number = suffixIndex.find(function (s) { return s.suffix === branch.suffix; }).index + branch.suffix;
                                }
                                var distanceFromOrigin = _this.cad.distance(0, 0, nodePosition.x, nodePosition.y) / 100;
                                _this.drawNodeNumber(number, color, nodePosition.x + distanceFromOrigin * Math.cos(-_this.cad.version.rotation * Math.PI / 180), nodePosition.y + distanceFromOrigin * Math.sin(-_this.cad.version.rotation * Math.PI / 180), node.textDistance, node.textAngle);
                            }
                            suffixIndex.find(function (s) { return s.suffix === branch.suffix; }).index++;
                            // Draw icon
                            var filter = 'none';
                            if (_this.cad.selectedNodes.find(function (n) { return n.id === node.id; }) != null) {
                                filter = 'drop-shadow(0 0 8px yellow)';
                            }
                            if (node.nodeType == _model_project_node__WEBPACK_IMPORTED_MODULE_2__["NodeType"].HEXAGONAL_TRAP) {
                                switch (belt.trapsColor) {
                                    case _model_project_belt__WEBPACK_IMPORTED_MODULE_3__["TrapsColor"].WOOD:
                                        // Wood
                                        if (_this.hexagonalTrap1Image.complete)
                                            _this.drawMarker(_this.hexagonalTrap1Image, nodePosition.x, nodePosition.y, -_this.cad.version.rotation, filter);
                                        break;
                                    case _model_project_belt__WEBPACK_IMPORTED_MODULE_3__["TrapsColor"].BROWN:
                                        // Black Brown
                                        if (_this.hexagonalTrap2Image.complete)
                                            _this.drawMarker(_this.hexagonalTrap2Image, nodePosition.x, nodePosition.y, -_this.cad.version.rotation, filter);
                                        break;
                                    case _model_project_belt__WEBPACK_IMPORTED_MODULE_3__["TrapsColor"].GREEN:
                                        // English Green
                                        if (_this.hexagonalTrap3Image.complete)
                                            _this.drawMarker(_this.hexagonalTrap3Image, nodePosition.x, nodePosition.y, -_this.cad.version.rotation, filter);
                                        break;
                                }
                            }
                            else {
                                // All rectangular traps are in natural color
                                if (_this.rectangularTrap1Image.complete)
                                    _this.drawMarker(_this.rectangularTrap1Image, nodePosition.x, nodePosition.y, -_this.cad.version.rotation, filter);
                            }
                            break;
                        case _model_project_node__WEBPACK_IMPORTED_MODULE_2__["NodeType"].INTERMEDIATE:
                            // Draw point
                            var lineColor = color;
                            if (_this.cad.selectedNodes.find(function (n) { return n.id === node.id; }) != null) {
                                lineColor = 'yellow';
                            }
                            _this.drawCircle(context, nodePosition.x, nodePosition.y, branch.width / 2 - 1, color, lineColor);
                            break;
                    }
                });
            });
        });
        context.restore();
    };
    CADCanvasComponent.prototype.drawLine = function (x1, y1, x2, y2, lineColor, lineWidth) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.stroke();
        context.restore();
    };
    CADCanvasComponent.prototype.drawDotLine = function (x1, y1, x2, y2, lineColor, lineWidth) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        // Split line
        var points = this.cad.splitLine({ x: x1, y: y1 }, { x: x2, y: y2 }, this.cad.distance(x1, y1, x2, y2) / 10);
        points.forEach(function (point) {
            context.beginPath();
            context.arc(point.x, point.y, lineWidth / 2, 0, 2 * Math.PI, false);
            context.fillStyle = lineColor;
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = lineColor;
            context.stroke();
        });
        context.restore();
    };
    CADCanvasComponent.prototype.drawMarker = function (image, x, y, angle, filter) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        context.translate(x, y);
        context.rotate(angle * Math.PI / 180);
        context.filter = filter;
        context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
        context.restore();
    };
    CADCanvasComponent.prototype.drawCircle = function (context, x, y, radius, fillColor, borderColor) {
        context.save();
        context.beginPath();
        context.arc(x, y, Math.abs(radius), 0, 2 * Math.PI, false);
        context.fillStyle = fillColor;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = borderColor;
        context.stroke();
        context.restore();
    };
    CADCanvasComponent.prototype.drawNodeNumber = function (number, backgroundColor, x, y, textDistance, textAngle) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        context.translate(x, y);
        // Translate
        var position = this.cad.rotate(0, 0, 0, textDistance + this.cad.version.iconsSize, -textAngle + 45);
        x = position.x;
        y = position.y;
        context.translate(x, y);
        context.rotate(-this.cad.version.rotation * Math.PI / 180);
        var fontsize = Math.floor(this.cad.version.iconsSize / 2), fontface = 'verdana', lineHeight = fontsize * 1.286, text = number, padding = fontsize * 0.5, minWidth = Math.floor(this.cad.version.iconsSize / 1.5);
        context.font = fontsize + 'px ' + fontface;
        var textWidth = context.measureText(text).width;
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillStyle = backgroundColor;
        if (textWidth < minWidth)
            context.fillRect(-minWidth / 2 - (padding * 2) / 2, -lineHeight / 2 - padding / 2, minWidth + (padding * 2), lineHeight + padding);
        else
            context.fillRect(-textWidth / 2 - (padding * 2) / 2, -lineHeight / 2 - padding / 2, textWidth + (padding * 2), lineHeight + padding);
        context.fillStyle = '#FFF';
        if (textWidth < minWidth)
            context.fillText(text, -textWidth / 2, -lineHeight / 2);
        else
            context.fillText(text, -textWidth / 2, -lineHeight / 2);
        context.restore();
    };
    CADCanvasComponent.prototype.drawDrawing = function () {
        var _this = this;
        var context = this.drawingCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.drawingCanvas.nativeElement.width, this.drawingCanvas.nativeElement.height);
        context.save();
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        context.strokeStyle = 'rgba(255, 0, 0, 1)';
        // Select pixels ratio
        if (this.cad.tool == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Tool"].SELECT_PIXELS_RATIO) {
            if (this.cad.startPixelsRatio && this.cad.endPixelsRatio) {
                context.save();
                context.moveTo(this.cad.startPixelsRatio.x, this.cad.startPixelsRatio.y);
                context.lineTo(this.cad.endPixelsRatio.x, this.cad.endPixelsRatio.y);
                context.stroke();
                context.restore();
            }
            // Add points
            if (this.cad.startPixelsRatio)
                this.drawCircle(context, this.cad.startPixelsRatio.x, this.cad.startPixelsRatio.y, 3, 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)');
            if (this.cad.endPixelsRatio)
                this.drawCircle(context, this.cad.endPixelsRatio.x, this.cad.endPixelsRatio.y, 3, 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)');
        }
        // Draw drawing polygone path
        else if (this.cad.drawPolyPath.length > 0) {
            context.save();
            this.cad.drawPolyPath.forEach(function (path, index) {
                if (index == 0 && _this.cad.selectedNodes.length == 1) {
                    var parentNodePosition = _this.cad.getPosition(_this.cad.selectedNodes[0].lat, _this.cad.selectedNodes[0].lng);
                    context.moveTo(parentNodePosition.x, parentNodePosition.y);
                    context.lineTo(path.x, path.y);
                }
                else if (index == 0)
                    context.moveTo(path.x, path.y);
                else
                    context.lineTo(path.x, path.y);
            });
            context.stroke();
            context.restore();
            // Add points
            this.cad.drawPolyPath.forEach(function (path) {
                _this.drawCircle(context, path.x, path.y, 3, 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)');
            });
        }
        context.restore();
    };
    CADCanvasComponent.prototype.drawProtectedAreas = function () {
        var _this = this;
        var context = this.protectedAreasCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.protectedAreasCanvas.nativeElement.width, this.protectedAreasCanvas.nativeElement.height);
        context.save();
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        if (this.cad.render)
            context.scale(this.cad.renderFactor, this.cad.renderFactor);
        // Draw protected area
        this.cad.version.belts.forEach(function (belt) {
            belt.protectedAreas.forEach(function (protectedArea) {
                context.save();
                context.beginPath();
                // Add points
                protectedArea.points.forEach(function (point, index) {
                    var pointPosition = _this.cad.getPosition(point[0], point[1]);
                    if (index == 0)
                        context.moveTo(pointPosition.x, pointPosition.y);
                    else
                        context.lineTo(pointPosition.x, pointPosition.y);
                });
                context.closePath();
                if (_this.cad.selectedProtectedArea != null && _this.cad.selectedProtectedArea.id === protectedArea.id)
                    context.strokeStyle = 'yellow';
                context.fillStyle = context.createPattern(_this.getPattern(protectedArea.width, protectedArea.color), 'repeat');
                if (_this.cad.selectedProtectedArea != null && _this.cad.selectedProtectedArea.id === protectedArea.id)
                    context.stroke();
                context.rotate(-_this.cad.version.rotation / 57.25);
                context.fill();
                context.restore();
                // If selected add points
                if (_this.cad.selectedProtectedArea && _this.cad.selectedProtectedArea.id === protectedArea.id) {
                    protectedArea.points.forEach(function (point) {
                        var pointPosition = _this.cad.getPosition(point[0], point[1]);
                        _this.drawCircle(context, pointPosition.x, pointPosition.y, 3, 'yellow', 'yellow');
                    });
                }
            });
        });
        context.restore();
    };
    CADCanvasComponent.prototype.getPattern = function (width, color) {
        var height = width / 2, lineWidth1 = 4 * width / 200, lineWidth2 = 2 * width / 200;
        this.protectedAreasPatternCanvas.width = width;
        this.protectedAreasPatternCanvas.height = height;
        var x0 = width + (width / 2), x1 = -(width / 2), y0 = -(height / 2), y1 = height + (height / 2), offset = height / 8.14, offset2 = height + height / 1.14, offset3 = height + height;
        var context = this.protectedAreasPatternCanvas.getContext('2d');
        context.save();
        context.translate(width / 2, height / 2);
        context.strokeStyle = color;
        context.lineWidth = lineWidth1;
        context.beginPath();
        context.translate(0.5, 0.5);
        context.moveTo(x0 - offset2 - width / 2, y0 - height / 2);
        context.lineTo(x1 - offset2 - width / 2, y1 - height / 2);
        context.stroke();
        context.moveTo(x0 + offset2 - width / 2, y0 - height / 2);
        context.lineTo(x1 + offset2 - width / 2, y1 - height / 2);
        context.stroke();
        context.moveTo(x0 - offset - width / 2, y0 - height / 2);
        context.lineTo(x1 - offset - width / 2, y1 - height / 2);
        context.stroke();
        context.moveTo(x0 + offset - width / 2, y0 - height / 2);
        context.lineTo(x1 + offset - width / 2, y1 - height / 2);
        context.stroke();
        context.lineWidth = lineWidth2;
        context.moveTo(x0 - width / 2, y0 - height / 2);
        context.lineTo(x1 - width / 2, y1 - height / 2);
        context.stroke();
        context.moveTo(x0 - offset3 - width / 2, y0 - height / 2);
        context.lineTo(x1 - offset3 - width / 2, y1 - height / 2);
        context.stroke();
        context.moveTo(x0 + offset3 - width / 2, y0 - height / 2);
        context.lineTo(x1 + offset3 - width / 2, y1 - height / 2);
        context.stroke();
        context.restore();
        return this.protectedAreasPatternCanvas;
    };
    CADCanvasComponent.prototype.drawElectric = function () {
        var _this = this;
        var context = this.electricCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.electricCanvas.nativeElement.width, this.electricCanvas.nativeElement.height);
        context.save();
        // Quality
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        if (this.cad.render)
            context.scale(this.cad.renderFactor, this.cad.renderFactor);
        // Electrical part
        this.cad.version.belts.forEach(function (belt) {
            belt.electricalOutlets.forEach(function (electricalOutlet, electricalOutletIndex) {
                // Get position From LatLng
                var electricalOutletPosition = _this.cad.getPosition(electricalOutlet.lat, electricalOutlet.lng);
                electricalOutlet.transformers.forEach(function (transformer, transformerIndex) {
                    // Draw branches
                    if (_this.cad.mode == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Mode"].ELECTRIC) {
                        transformer.electricalBranches.forEach(function (electricalBranch, electricalBranchIndex) {
                            electricalBranch.electricalNodes.forEach(function (electricalNode, nodeIndex) {
                                // Get node & position
                                var node = _this.cad.version.getNode(electricalNode.nodeId), nodePosition = node != null ? _this.cad.getPosition(node.lat, node.lng) : null;
                                if (electricalBranchIndex == 0 && nodeIndex == 0) {
                                    // Draw line between transformer and first node
                                    var correctedElectricalOutletPosition = {
                                        x: electricalOutletPosition.x + (_this.cad.version.iconsSize * 2 / 2) * Math.cos((transformer.angle) * Math.PI / 180),
                                        y: electricalOutletPosition.y + (_this.cad.version.iconsSize * 2 / 2) * Math.sin((transformer.angle) * Math.PI / 180)
                                    };
                                    if (nodePosition != null)
                                        _this.drawElectricalLine(correctedElectricalOutletPosition.x, correctedElectricalOutletPosition.y, nodePosition.x, nodePosition.y, '#F00', 1, []);
                                }
                                else {
                                    // Get previous node
                                    var previousNode;
                                    if (electricalBranchIndex > 0 && nodeIndex == 0)
                                        previousNode = _this.cad.version.getNode(electricalBranch.parentElectricalNode);
                                    else
                                        previousNode = _this.cad.version.getNode(electricalBranch.electricalNodes[nodeIndex - 1].nodeId);
                                    // Draw line between node and previous node
                                    var previousNodePosition = previousNode != null ? _this.cad.getPosition(previousNode.lat, previousNode.lng) : null;
                                    if (previousNodePosition != null)
                                        _this.drawElectricalLine(previousNodePosition.x, previousNodePosition.y, nodePosition.x, nodePosition.y, '#F00', 1, []);
                                }
                            });
                        });
                    }
                    // Draw transformer
                    if (_this.cad.mode == _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["Mode"].ELECTRIC)
                        _this.drawTransformer(transformerIndex + 1, electricalOutletPosition.x, electricalOutletPosition.y, transformer.angle, _this.cad.selectedTransformer != null && _this.cad.selectedTransformer.id == transformer.id);
                });
                // Draw electrical outlet
                if (_this.cad.selectedElectricalOutlet != null && _this.cad.selectedTransformer == null && _this.cad.selectedElectricalOutlet.id === electricalOutlet.id) {
                    _this.drawElectricOutlet(electricalOutletIndex + 1, electricalOutletPosition.x, electricalOutletPosition.y, '#F00', 'yellow');
                }
                else {
                    _this.drawElectricOutlet(electricalOutletIndex + 1, electricalOutletPosition.x, electricalOutletPosition.y, '#F00', '#F00');
                }
            });
        });
        context.restore();
    };
    CADCanvasComponent.prototype.drawElectricOutlet = function (number, x, y, fillColor, borderColor) {
        var context = this.electricCanvas.nativeElement.getContext('2d');
        context.save();
        context.translate(x, y);
        context.rotate(-this.cad.version.rotation * Math.PI / 180);
        var height = this.cad.version.iconsSize / 2, text = number, width = 0;
        context.font = height * 1.25 + "px Arial";
        width = context.measureText(text).width;
        // Draw circle
        context.beginPath();
        context.arc(0, 0, width, 0, 2 * Math.PI, false);
        context.fillStyle = fillColor;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = borderColor;
        context.stroke();
        // Draw text
        context.fillStyle = '#FFF';
        context.fillText(text, 0 - width / 2, 0 + width / 1.5);
        context.restore();
    };
    CADCanvasComponent.prototype.drawTransformer = function (number, x, y, angle, selected) {
        var context = this.electricCanvas.nativeElement.getContext('2d');
        context.save();
        context.translate(x, y);
        // Translate
        var textDistance = this.cad.version.iconsSize * 2;
        x = 0 + (textDistance / 2) * Math.cos(angle * Math.PI / 180),
            y = 0 + (textDistance / 2) * Math.sin(angle * Math.PI / 180);
        context.translate(x, y);
        context.rotate(-this.cad.version.rotation * Math.PI / 180);
        var fontsize = Math.round(this.cad.version.iconsSize / 2), fontface = 'verdana', lineHeight = fontsize * 1.286, text = number, padding = fontsize * 0.5, backgroundColor = '#F09414', borderColor = selected ? 'yellow' : backgroundColor, border = 2;
        context.font = fontsize + 'px ' + fontface;
        var textWidth = context.measureText(text).width;
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillStyle = borderColor;
        context.fillRect(-textWidth / 2 - padding / 2, -lineHeight / 2 - (padding * 1.5) / 2, textWidth + padding, lineHeight + (padding * 1.5));
        context.fillStyle = backgroundColor;
        context.fillRect(-textWidth / 2 - padding / 2 + border / 2, -lineHeight / 2 - (padding * 1.5) / 2 + border / 2, textWidth + padding - border, lineHeight + (padding * 1.5) - border);
        context.fillStyle = '#FFF';
        context.fillText(text, -textWidth / 2, -lineHeight / 2);
        context.restore();
    };
    CADCanvasComponent.prototype.drawElectricalLine = function (x1, y1, x2, y2, lineColor, lineWidth, lineDash) {
        var context = this.electricCanvas.nativeElement.getContext('2d');
        context.save();
        context.beginPath();
        context.setLineDash(lineDash);
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.stroke();
        context.restore();
    };
    /* Other functions */
    CADCanvasComponent.prototype.getClickPosition = function (e) {
        var rect = this.backgroundImageCanvas.nativeElement.getBoundingClientRect();
        return {
            x: ((e.clientX - rect.left) - this.cad.translatePosition.x) / this.cad.version.zoom,
            y: ((e.clientY - rect.top) - this.cad.translatePosition.y) / this.cad.version.zoom
        };
    };
    CADCanvasComponent.ctorParameters = function () { return [
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_5__["Upcv3serviceService"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cad'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_project_cad__WEBPACK_IMPORTED_MODULE_4__["CAD"])
    ], CADCanvasComponent.prototype, "cad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('backgroundImageCanvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CADCanvasComponent.prototype, "backgroundImageCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('beltsCanvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CADCanvasComponent.prototype, "beltsCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('electricCanvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CADCanvasComponent.prototype, "electricCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawingCanvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CADCanvasComponent.prototype, "drawingCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('protectedAreasCanvas', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CADCanvasComponent.prototype, "protectedAreasCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADMapTypeChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "mapTypeChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADSelectionChanged'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADModeChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "selectionChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADRotationChanged'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADZoomChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "rotationZoomChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADIconsSizeChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "iconsSizeChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADOpacityChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "opacityChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADBeltChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "beltChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADProtectedAreaChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "protectedAreaChanged", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADDrawChanged'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:CADToolChanged'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CADCanvasComponent.prototype, "drawChanged", null);
    CADCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cad-canvas',
            template: __webpack_require__(/*! raw-loader!./canvas.page.html */ "./node_modules/raw-loader/index.js!./src/app/canvas/canvas.page.html"),
            styles: [__webpack_require__(/*! ./canvas.page.scss */ "./src/app/canvas/canvas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_5__["Upcv3serviceService"],
            _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]])
    ], CADCanvasComponent);
    return CADCanvasComponent;
}());



/***/ }),

/***/ "./src/app/model/project/belt.ts":
/*!***************************************!*\
  !*** ./src/app/model/project/belt.ts ***!
  \***************************************/
/*! exports provided: Belt, TrapsColor, BottleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Belt", function() { return Belt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrapsColor", function() { return TrapsColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleType", function() { return BottleType; });
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch */ "./src/app/model/project/branch.ts");
/* harmony import */ var _protectedArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protectedArea */ "./src/app/model/project/protectedArea.ts");
/* harmony import */ var _electricalOutlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./electricalOutlet */ "./src/app/model/project/electricalOutlet.ts");



var Belt = /** @class */ (function () {
    function Belt(id, name) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        this.id = '';
        this.name = '';
        this.trapsNumber = 0;
        this.pressureCalculated = 0;
        this.pressureInt1 = 0;
        this.pressureInt2 = 0;
        this.pressureInt3 = 0;
        this.pressureInt4 = 0;
        this.pressureInt5 = 0;
        this.pressureInt6 = 0;
        this.pressureInt7 = 0;
        this.pressureInt8 = 0;
        this.pressureInt9 = 0;
        this.flowTheoretical = 0;
        this.flowCumulated = 0;
        this.controlSheltered = false;
        this.trapsColor = TrapsColor.WOOD;
        this.bottleType = BottleType.B10;
        this.bottleNumberB1 = 0;
        this.bottleNumberB2 = 0;
        this.co2KgPrice = 0;
        this.co2MonthRentPrice = 0;
        this.electricalOutlets = [];
        this.branches = [];
        this.protectedAreas = [];
        this.id = id;
        this.name = name;
    }
    Belt.loadFromJSON = function (json) {
        var belt = Object.assign(new Belt, json);
        if (json.branches) {
            belt.branches = [];
            json.branches.forEach(function (jsonBranch) { belt.branches.push(_branch__WEBPACK_IMPORTED_MODULE_0__["Branch"].loadFromJSON(jsonBranch)); });
        }
        if (json.electricalOutlets) {
            belt.electricalOutlets = [];
            json.electricalOutlets.forEach(function (jsonElectricalOutlet) { belt.electricalOutlets.push(_electricalOutlet__WEBPACK_IMPORTED_MODULE_2__["ElectricalOutlet"].loadFromJSON(jsonElectricalOutlet)); });
        }
        if (json.protectedAreas) {
            belt.protectedAreas = [];
            json.protectedAreas.forEach(function (jsonProtectedArea) { belt.protectedAreas.push(_protectedArea__WEBPACK_IMPORTED_MODULE_1__["ProtectedArea"].loadFromJSON(jsonProtectedArea)); });
        }
        return belt;
    };
    Belt.prototype.resetCalculationValues = function () {
        this.flowCumulated = 0;
        this.flowTheoretical = 0;
        this.pressureCalculated = 0;
        this.pressureInt1 = 0;
        this.pressureInt2 = 0;
        this.pressureInt3 = 0;
        this.pressureInt4 = 0;
        this.pressureInt5 = 0;
        this.pressureInt6 = 0;
        this.pressureInt7 = 0;
        this.pressureInt8 = 0;
        this.pressureInt9 = 0;
    };
    Belt.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Belt;
}());

var TrapsColor;
(function (TrapsColor) {
    TrapsColor["WOOD"] = "WOOD";
    TrapsColor["GREEN"] = "GREEN";
    TrapsColor["BROWN"] = "BROWN";
})(TrapsColor || (TrapsColor = {}));
var BottleType;
(function (BottleType) {
    BottleType["B10"] = "B10";
    BottleType["B20"] = "B20";
    BottleType["B34"] = "B34";
    BottleType["B37"] = "B37";
    BottleType["B50LB"] = "B50LB";
    BottleType["R100"] = "R100";
    BottleType["R180"] = "R180";
})(BottleType || (BottleType = {}));


/***/ }),

/***/ "./src/app/model/project/branch.ts":
/*!*****************************************!*\
  !*** ./src/app/model/project/branch.ts ***!
  \*****************************************/
/*! exports provided: Branch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branch", function() { return Branch; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/app/model/project/node.ts");

var Branch = /** @class */ (function () {
    function Branch() {
        this.id = '';
        this.width = 3;
        this.color = '#0A4A14';
        this.numbersColor = '#0A4A14';
        this.suffix = '';
        this.tubeDiameter = 6;
        this.nodes = [];
        // Calculations only
        this.flowCumulated = 0;
        this.trapsNumber = 0;
        this.nodesNumber = 0;
    }
    Branch.loadFromJSON = function (json) {
        var branch = Object.assign(new Branch, json);
        if (json.nodes) {
            branch.nodes = [];
            json.nodes.forEach(function (jsonNode) { branch.nodes.push(_node__WEBPACK_IMPORTED_MODULE_0__["Node"].loadFromJSON(jsonNode)); });
        }
        return branch;
    };
    return Branch;
}());



/***/ }),

/***/ "./src/app/model/project/cad.ts":
/*!**************************************!*\
  !*** ./src/app/model/project/cad.ts ***!
  \**************************************/
/*! exports provided: CAD, Tool, Mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAD", function() { return CAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/app/model/project/project.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "./src/app/model/project/version.ts");
/* harmony import */ var _belt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./belt */ "./src/app/model/project/belt.ts");
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch */ "./src/app/model/project/branch.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node */ "./src/app/model/project/node.ts");
/* harmony import */ var _transformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformer */ "./src/app/model/project/transformer.ts");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _calculations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculations */ "./src/app/model/project/calculations.ts");









var CAD = /** @class */ (function () {
    function CAD(project, version) {
        this.mode = Mode.ALL;
        this.googleMapsParams = { width: 640, height: 640, scale: 2 };
        // Context menu
        this.contextMenuLeft = 0;
        this.contextMenuTop = 0;
        this.showContextMenu = false;
        // Diffusions
        this.showDiffusionParameters = false;
        // Image
        this.dowloadImage = false;
        this.selectedNodes = [];
        // Branch edition tool
        this.drawDistance = 5.5;
        this.drawPolyPath = [];
        // Canvas
        this.render = false;
        this.renderFactor = 3;
        this.translatePosition = { x: 0, y: 0 };
        this.startDragOffset = { x: 0, y: 0 };
        this.metersPixelsRatio = 5;
        this.project = project;
        this.version = version;
    }
    /* Selection */
    CAD.prototype.selectBelt = function (id) {
        var belt = this.version.getBelt(id);
        if (belt) {
            // CO2
            this.selectedBelt = belt;
            this.selectedBranch = null;
            this.selectedNodes = [];
            // Electric
            this.selectedElectricalOutlet = null;
            this.selectedTransformer = null;
        }
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.unSelectBelt = function () {
        // CO2
        this.selectedNodes = [];
        this.selectedBranch = null;
        this.selectedBelt = null;
        // Electric
        this.selectedElectricalOutlet = null;
        this.selectedTransformer = null;
        // Protected area
        this.selectedProtectedArea = null;
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.selectBranch = function (id) {
        var branch = this.version.getBranch(id), belt = this.version.getBeltFromBranch(id);
        if (branch && belt) {
            this.selectedBelt = belt;
            this.selectedBranch = branch;
            this.selectedNodes = [];
        }
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.unSelectBranch = function () {
        this.selectedNodes = [];
        this.selectedBranch = null;
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.selectNode = function (id, ctrl) {
        var node = this.version.getNode(id);
        if (node) {
            if (ctrl) {
                // Check if node already selected
                if (!this.selectedBelt) {
                    this.selectNode(id, false);
                    return;
                }
                // Check belt
                var branch = this.version.getBranchFromNode(id), belt = this.version.getBeltFromBranch(branch.id);
                if (this.selectedBelt.id === belt.id) {
                    if (this.selectedNodes.findIndex(function (n) { return n.id === id; }) == -1)
                        this.selectedNodes.push(node);
                    else
                        this.selectedNodes.splice(this.selectedNodes.findIndex(function (n) { return n.id === id; }), 1);
                }
                else {
                    this.selectedNodes = [];
                    this.selectNode(id, false);
                }
            }
            else {
                var branch = this.version.getBranchFromNode(id), belt = this.version.getBeltFromBranch(branch.id);
                this.selectedBelt = belt;
                this.selectedBranch = branch;
                this.selectedNodes = [];
                this.selectedNodes.push(node);
            }
        }
        // Check electricalOutlet
        if (this.selectedElectricalOutlet && this.version.getBeltFromElectricalOutlet(this.selectedElectricalOutlet.id) !== this.selectedBelt) {
            this.unSelectElectricalOutlet();
        }
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.unSelectNode = function () {
        this.selectedNodes = [];
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.selectElectricalOutlet = function (id) {
        var electricalOutlet = this.version.getElectricalOutlet(id), belt = this.version.getBeltFromElectricalOutlet(id);
        if (electricalOutlet && belt) {
            this.selectedBelt = belt;
            this.selectedElectricalOutlet = electricalOutlet;
            this.selectedTransformer = null;
            this.selectedProtectedArea = null;
        }
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.unSelectElectricalOutlet = function () {
        this.selectedElectricalOutlet = null;
        this.selectedTransformer = null;
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.selectTransformer = function (id) {
        var transformer = this.version.getTransformer(id), electricalOutlet = this.version.getElectricalOutletFromTransformer(id), belt = this.version.getBeltFromElectricalOutlet(electricalOutlet.id);
        if (transformer && electricalOutlet && belt) {
            this.selectedBelt = belt;
            this.selectedElectricalOutlet = electricalOutlet;
            this.selectedTransformer = transformer;
            this.selectedProtectedArea = null;
        }
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.unSelectTransformer = function () {
        this.selectedTransformer = null;
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.selectProtectedArea = function (id) {
        var protectedArea = this.version.getProtectedArea(id), belt = this.version.getBeltFromProtectedArea(id);
        if (protectedArea && belt) {
            this.selectedBelt = belt;
            this.selectedBranch = null;
            this.selectedNodes = [];
            this.selectedElectricalOutlet = null;
            this.selectedTransformer = null;
            this.selectedProtectedArea = protectedArea;
        }
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    CAD.prototype.unSelectProtectedArea = function () {
        this.selectedProtectedArea = null;
        this.selectedProtectedAreaPointIndex = null;
        document.dispatchEvent(new Event('CADSelectionChanged'));
    };
    /* Zoom & Rotation */
    CAD.prototype.setZoom = function (zoom) {
        this.version.zoom = zoom;
        document.dispatchEvent(new Event('CADZoomChanged'));
    };
    CAD.prototype.setRotation = function (rotation) {
        this.version.rotation = Math.round(rotation);
        document.dispatchEvent(new Event('CADRotationChanged'));
    };
    /* MapType, Tool & Mode */
    CAD.prototype.setMapType = function (mapType) {
        this.version.mapType = mapType;
        document.dispatchEvent(new Event('CADMapTypeChanged'));
    };
    CAD.prototype.setTool = function (tool) {
        this.tool = tool;
        document.dispatchEvent(new Event('CADToolChanged'));
    };
    CAD.prototype.setMode = function (mode) {
        this.mode = Mode[mode];
        document.dispatchEvent(new Event('CADModeChanged'));
    };
    /* Opacity & Icons Size */
    CAD.prototype.setOpacity = function (opacity) {
        if (!isNaN(parseInt(opacity))) {
            this.version.mapOpacity = parseInt(opacity);
            document.dispatchEvent(new Event('CADOpacityChanged'));
        }
    };
    CAD.prototype.setIconsSize = function (iconsSize) {
        if (!isNaN(parseInt(iconsSize))) {
            this.version.iconsSize = parseInt(iconsSize);
            document.dispatchEvent(new Event('CADIconsSizeChanged'));
        }
    };
    /* Validate & Abort */
    CAD.prototype.validate = function () {
        var _this = this;
        // Draw
        if (this.tool == Tool.DRAW) {
            // 1. Split lines to get all points possibilities
            var points = [];
            if (this.drawPolyPath.length > 0 && this.selectedNodes.length == 1 && this.version.getNodeNumberOfChild(this.selectedNodes[0].id) < 2) {
                var selectedNodePosition = this.getPosition(this.selectedNodes[0].lat, this.selectedNodes[0].lng);
                this.splitLine(selectedNodePosition, this.drawPolyPath[0], this.distance(selectedNodePosition.x, selectedNodePosition.y, this.drawPolyPath[0].x, this.drawPolyPath[0].y)).forEach(function (point) { points.push(point); });
            }
            this.drawPolyPath.forEach(function (path, index) {
                if (index + 1 < _this.drawPolyPath.length) {
                    var nextPath = _this.drawPolyPath[index + 1];
                    _this.splitLine(path, _this.drawPolyPath[index + 1], _this.distance(path.x, path.y, nextPath.x, nextPath.y)).forEach(function (point) { points.push(point); });
                }
            });
            // Convert path to branch
            // 2. Belt has no branches
            if (this.selectedBelt.branches.length == 0) {
                // 2.1 Create a new branch
                var branch = new _branch__WEBPACK_IMPORTED_MODULE_4__["Branch"]();
                branch.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                this.selectedBelt.branches.push(branch);
                // 2.2 Determine traps positions
                var distance = this.drawDistance, prevTrap;
                for (var i = 0; i < points.length; i++) {
                    var position = this.getCoordinates(points[i].x, points[i].y), prevTrapDistance = 0;
                    // Get distance beetwen previous trap
                    if (prevTrap)
                        prevTrapDistance = this.getDistance({ lat: prevTrap.lat, lng: prevTrap.lng }, position);
                    // Increment distance beetween this & previous
                    if (i > 0)
                        distance += this.getDistance(position, this.getCoordinates(points[i - 1].x, points[i - 1].y));
                    if ((!prevTrap && distance >= this.drawDistance) || prevTrapDistance >= this.drawDistance) {
                        // Add
                        var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"]();
                        node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                        node.nodeType = prevTrap ? _node__WEBPACK_IMPORTED_MODULE_5__["NodeType"].HEXAGONAL_TRAP : _node__WEBPACK_IMPORTED_MODULE_5__["NodeType"].CONTROL;
                        node.prevDistance = i == 0 ? 0 : distance;
                        node.lat = position.lat;
                        node.lng = position.lng;
                        branch.nodes.push(node);
                        // Angle calculation
                        if (i > 0)
                            node.textAngle = this.angleCalculation({ x: points[i].x, y: points[i].y }, { x: points[i - 1].x, y: points[i - 1].y });
                        prevTrap = node;
                        distance = 0;
                    }
                }
                // 2.3 Check if branch has nodes
                if (branch.nodes.length == 0)
                    this.version.delBranch(branch.id);
            }
            // 3. Selected node & node children < 2
            if (this.selectedNodes.length == 1 && this.version.getNodeNumberOfChild(this.selectedNodes[0].id) < 2) {
                // Get node index
                var nodeIndex = this.version.getNodeIndex(this.selectedNodes[0].id), nodesLength = this.selectedBranch.nodes.length;
                // 3.1 Last node of his branch
                if (nodeIndex == nodesLength - 1) {
                    // 3.1.1 Distance between selected node & first point of the path
                    var distance = this.getDistance({
                        lat: this.selectedNodes[0].lat,
                        lng: this.selectedNodes[0].lng
                    }, this.getCoordinates(points[0].x, points[0].y)), prevTrap;
                    // 3.1.2 Add nodes
                    for (var i = 0; i < points.length; i++) {
                        var position = this.getCoordinates(points[i].x, points[i].y), prevTrapDistance = 0;
                        // Get distance beetwen previous trap
                        if (prevTrap)
                            prevTrapDistance = this.getDistance({ lat: prevTrap.lat, lng: prevTrap.lng }, position);
                        // Increment distance between this & previous
                        if (i > 0)
                            distance += this.getDistance(position, this.getCoordinates(points[i - 1].x, points[i - 1].y));
                        if ((!prevTrap && distance >= this.drawDistance) || prevTrapDistance >= this.drawDistance) {
                            // Get distance between last node
                            if (i == 0) {
                                var lastNode = this.selectedBranch.nodes[this.selectedBranch.nodes.length - 1], prevNodeDistance = this.getDistance(position, { lat: lastNode.lat, lng: lastNode.lng });
                                // Add
                                var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"]();
                                node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                                node.prevDistance = prevNodeDistance;
                                node.lat = position.lat;
                                node.lng = position.lng;
                                // Angle calculation
                                if (i > 0)
                                    node.textAngle = this.angleCalculation({ x: points[i].x, y: points[i].y }, { x: points[i - 1].x, y: points[i - 1].y });
                                this.selectedBranch.nodes.push(node);
                            }
                            else {
                                // Add
                                var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"]();
                                node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                                node.prevDistance = distance;
                                node.lat = position.lat;
                                node.lng = position.lng;
                                // Angle calculation
                                if (i > 0)
                                    node.textAngle = this.angleCalculation({ x: points[i].x, y: points[i].y }, { x: points[i - 1].x, y: points[i - 1].y });
                                this.selectedBranch.nodes.push(node);
                            }
                            prevTrap = node;
                            distance = 0;
                        }
                    }
                }
                // 3.2 Not last node of his branch
                else {
                    // Create a new branch
                    var branch = new _branch__WEBPACK_IMPORTED_MODULE_4__["Branch"]();
                    branch.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                    this.selectedBelt.branches.push(branch);
                    // Set parentBranch & parentNode
                    branch.parentBranch = this.selectedBranch.id;
                    branch.parentNode = this.selectedNodes[0].id;
                    // Distance between selected node & first point of the path
                    var distance = this.getDistance({ lat: this.selectedNodes[0].lat, lng: this.selectedNodes[0].lng }, this.getCoordinates(points[0].x, points[0].y)), prevTrap;
                    // Add nodes
                    for (var i = 0; i < points.length; i++) {
                        var position = this.getCoordinates(points[i].x, points[i].y), prevTrapDistance = 0;
                        // Get distance beetwen previous trap
                        if (prevTrap)
                            prevTrapDistance = this.getDistance({ lat: prevTrap.lat, lng: prevTrap.lng }, position);
                        // Increment distance betwen this & previous
                        if (i > 0)
                            distance += this.getDistance(position, this.getCoordinates(points[i - 1].x, points[i - 1].y));
                        if ((!prevTrap && distance >= this.drawDistance) || prevTrapDistance >= this.drawDistance) {
                            // Get distance between last node
                            if (i == 0) {
                                var prevNodeDistance = this.getDistance(position, { lat: this.selectedNodes[0].lat, lng: this.selectedNodes[0].lng });
                                // Add
                                var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"]();
                                node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                                node.prevDistance = prevNodeDistance;
                                node.lat = position.lat;
                                node.lng = position.lng;
                                // Angle calculation
                                if (i > 0)
                                    node.textAngle = this.angleCalculation({ x: points[i].x, y: points[i].y }, { x: points[i - 1].x, y: points[i - 1].y });
                                branch.nodes.push(node);
                            }
                            else {
                                // Add
                                var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"]();
                                node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                                node.prevDistance = distance;
                                node.lat = position.lat;
                                node.lng = position.lng;
                                // Angle calculation
                                if (i > 0)
                                    node.textAngle = this.angleCalculation({ x: points[i].x, y: points[i].y }, { x: points[i - 1].x, y: points[i - 1].y });
                                branch.nodes.push(node);
                            }
                            prevTrap = node;
                            distance = 0;
                        }
                    }
                }
            }
            this.drawPolyPath = [];
            this.setTool(null);
            this.unSelectNode();
            document.dispatchEvent(new Event('CADDrawChanged'));
        }
        // Select pixels ratio
        else if (this.tool == Tool.SELECT_PIXELS_RATIO) {
            if (this.startPixelsRatio && this.endPixelsRatio && !isNaN(this.metersPixelsRatio)) {
                this.project.customPictureRatio = this.distance(this.startPixelsRatio.x, this.startPixelsRatio.y, this.endPixelsRatio.x, this.endPixelsRatio.y) / this.metersPixelsRatio;
                this.setTool(null);
            }
        }
    };
    CAD.prototype.abort = function () {
        this.drawPolyPath = [];
        this.setTool(null);
        document.dispatchEvent(new Event('CADDrawChanged'));
    };
    CAD.prototype.trapsRecalculations = function () {
        var _this = this;
        // 1. Get branch
        var branch = this.version.getBranchFromNode(this.selectedNodes[0].id);
        // 2. Get firstNode & lastNode
        var firstNode, lastNode;
        if (this.version.getNodeIndex(this.selectedNodes[0].id) < this.version.getNodeIndex(this.selectedNodes[1].id))
            firstNode = this.selectedNodes[0], lastNode = this.selectedNodes[1];
        else
            firstNode = this.selectedNodes[1], lastNode = this.selectedNodes[0];
        // 3. Get firstNodeIndex & lastNodeIndex
        var firstNodeIndex = this.version.getNodeIndex(firstNode.id), lastNodeIndex = this.version.getNodeIndex(lastNode.id);
        // 4. Convert branch to path
        var path = [];
        path.push(this.getPosition(firstNode.lat, firstNode.lng));
        for (var i = firstNodeIndex + 1; i < lastNodeIndex; i++) {
            // TODO: Check if angle between prev, this & next != 180 before add to path
            path.push(this.getPosition(branch.nodes[i].lat, branch.nodes[i].lng));
        }
        path.push(this.getPosition(lastNode.lat, lastNode.lng));
        // 5. Delete all nodes
        this.version.delNodeFromElectricalBranch(firstNode.id);
        branch.nodes.splice(firstNodeIndex + 1, lastNodeIndex - firstNodeIndex);
        // 5. Split lines to get all points possibilities
        var points = [];
        path.forEach(function (p, index) {
            if (index + 1 < path.length) {
                var nextPath = path[index + 1];
                _this.splitLine(p, path[index + 1], _this.distance(p.x, p.y, nextPath.x, nextPath.y)).forEach(function (point) { points.push(point); });
            }
        });
        // 6. Add nodes
        var distance = 0, prevTrap = firstNode;
        for (var i = 0; i < points.length; i++) {
            var position = this.getCoordinates(points[i].x, points[i].y), prevTrapDistance = 0;
            // Get distance beetwen previous trap
            prevTrapDistance = this.getDistance({ lat: prevTrap.lat, lng: prevTrap.lng }, position);
            // Increment distance between this & previous
            if (i > 0)
                distance += this.getDistance(position, this.getCoordinates(points[i - 1].x, points[i - 1].y));
            if (prevTrapDistance >= this.drawDistance) {
                // Add
                var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"]();
                node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
                node.prevDistance = distance;
                node.lat = position.lat;
                node.lng = position.lng;
                // Angle calculation
                if (i > 0)
                    node.textAngle = this.angleCalculation({ x: points[i].x, y: points[i].y }, { x: points[i - 1].x, y: points[i - 1].y });
                branch.nodes.splice(this.version.getNodeIndex(prevTrap.id) + 1, 0, node);
                prevTrap = node;
                distance = 0;
            }
        }
        this.unSelectNode();
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.selectParentNode = function () {
        this.setTool(Tool.SELECT_PARENT_NODE);
    };
    /* Setters */
    CAD.prototype.setSelectedBeltTrapsColor = function (trapsColor) {
        this.selectedBelt.trapsColor = trapsColor;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedBeltName = function (name) {
        this.selectedBelt.name = name;
    };
    CAD.prototype.setSelectedBeltBottleType = function (bottleType) {
        this.selectedBelt.bottleType = bottleType;
        // Set prices default values
        if (bottleType == _belt__WEBPACK_IMPORTED_MODULE_3__["BottleType"].R100 || bottleType == _belt__WEBPACK_IMPORTED_MODULE_3__["BottleType"].R180) {
            this.selectedBelt.co2KgPrice = 4.04;
            this.selectedBelt.co2MonthRentPrice = 60;
        }
        else {
            this.selectedBelt.co2KgPrice = 5.43;
            this.selectedBelt.co2MonthRentPrice = 4;
        }
    };
    CAD.prototype.setSelectedBeltCo2KgPrice = function (co2KgPrice) {
        if (!isNaN(co2KgPrice) && co2KgPrice > -1) {
            this.selectedBelt.co2KgPrice = co2KgPrice;
        }
    };
    CAD.prototype.setSelectedBeltCo2MonthRentPrice = function (co2MonthRentPrice) {
        if (!isNaN(co2MonthRentPrice) && co2MonthRentPrice > -1) {
            this.selectedBelt.co2MonthRentPrice = co2MonthRentPrice;
        }
    };
    CAD.prototype.setSelectedBeltControlSheltered = function (controlSheltered) {
        this.selectedBelt.controlSheltered = controlSheltered;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedBranchWidth = function (width) {
        if (!isNaN(width) && width > -1) {
            this.selectedBranch.width = width;
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedBranchColor = function (color) {
        this.selectedBranch.color = color;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedBranchNumbersColor = function (numbersColor) {
        this.selectedBranch.numbersColor = numbersColor;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedBranchSuffix = function (suffix) {
        this.selectedBranch.suffix = suffix;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedBranchTubeDiameter = function (tubeDiameter) {
        if (!isNaN(tubeDiameter) && tubeDiameter > -1) {
            this.selectedBranch.tubeDiameter = parseInt(tubeDiameter.toString());
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedBranchParentNode = function (id) {
        // Get node
        var node = this.version.getNode(id), nodeBranch = this.version.getBranchFromNode(id);
        // Check if node & nodeBranch exists
        if (!node || !nodeBranch)
            return;
        // Check if belt is the one selected
        var belt = this.version.getBeltFromBranch(nodeBranch.id);
        if (!belt || belt.id !== this.selectedBelt.id)
            return;
        // Check if nodeBranch isn't the selectedBranch
        if (nodeBranch.id === this.selectedBranch.id)
            return;
        // Check node number of child
        if (this.version.getNodeNumberOfChild(id) == 2)
            return;
        // Set node as parentNode
        this.selectedBranch.parentBranch = nodeBranch.id;
        this.selectedBranch.parentNode = node.id;
        // Update distance
        this.selectedNodes[0].prevDistance = this.getDistance({ lat: this.selectedNodes[0].lat, lng: this.selectedNodes[0].lng }, { lat: node.lat, lng: node.lng });
        this.selectNode(node.id, true);
        this.setTool(null);
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedNodeTextAngle = function (textAngle) {
        if (!isNaN(textAngle) && textAngle > -1) {
            this.selectedNodes[0].textAngle = textAngle;
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedNodeTextDistance = function (textDistance) {
        if (!isNaN(textDistance) && textDistance > -1) {
            this.selectedNodes[0].textDistance = parseFloat(textDistance.toString());
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedNodeType = function (nodeType) {
        this.selectedNodes[0].nodeType = nodeType;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedNodePrevLinkBuried = function (prevLinkBuried) {
        this.selectedNodes[0].prevLinkBuried = prevLinkBuried;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedNodesTextAngle = function (textAngle) {
        if (!isNaN(textAngle) && textAngle > -1) {
            this.selectedNodes.forEach(function (node) { node.textAngle = textAngle; });
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedNodesTextDistance = function (textDistance) {
        if (!isNaN(textDistance) && textDistance > -1) {
            this.selectedNodes.forEach(function (node) { node.textDistance = parseFloat(textDistance.toString()); });
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedNodesNodeType = function (nodeType) {
        this.selectedNodes.forEach(function (node) {
            if (node.nodeType != _node__WEBPACK_IMPORTED_MODULE_5__["NodeType"].CONTROL)
                node.nodeType = nodeType;
        });
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedTransformerAngle = function (angle) {
        if (!isNaN(angle) && angle > -1) {
            this.selectedTransformer.angle = angle;
            document.dispatchEvent(new Event('CADBeltChanged'));
        }
    };
    CAD.prototype.setSelectedTransformerElectricCase = function (electricCase) {
        this.selectedTransformer.electricCase = electricCase;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.setSelectedProtectedAreaWidth = function (width) {
        if (!isNaN(width) && width > -1) {
            this.selectedProtectedArea.width = parseFloat(width.toString());
            document.dispatchEvent(new Event('CADProtectedAreaChanged'));
        }
    };
    CAD.prototype.setSelectedProtectedAreaColor = function (color) {
        this.selectedProtectedArea.color = color;
        document.dispatchEvent(new Event('CADProtectedAreaChanged'));
    };
    /* Methods */
    CAD.prototype.delBelt = function (id) {
        this.version.delBelt(id);
        this.unSelectBelt();
    };
    CAD.prototype.addNodeBefore = function () {
        var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"](), index = this.version.getNodeIndex(this.selectedNodes[0].id);
        node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
        node.lat = this.selectedNodes[0].lat + 0.000025;
        node.lng = this.selectedNodes[0].lng + 0.000025;
        this.version.addNode(node, this.selectedBranch, index);
        this.showContextMenu = false;
        this.selectNode(node.id, false);
    };
    CAD.prototype.addNodeAfter = function () {
        var node = new _node__WEBPACK_IMPORTED_MODULE_5__["Node"](), index = this.version.getNodeIndex(this.selectedNodes[0].id);
        node.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID();
        node.lat = this.selectedNodes[0].lat + 0.000025;
        node.lng = this.selectedNodes[0].lng + 0.000025;
        this.version.addNode(node, this.selectedBranch, index + 1);
        this.showContextMenu = false;
        this.selectNode(node.id, false);
    };
    CAD.prototype.delNode = function () {
        this.version.delNode(this.selectedNodes[0].id);
        this.unSelectNode();
    };
    CAD.prototype.delNodeAndChildren = function () {
        this.version.delNodeAndChildren(this.selectedNodes[0].id);
        this.unSelectNode();
    };
    CAD.prototype.delBranch = function () {
        this.version.delBranch(this.selectedBranch.id);
        this.unSelectBranch();
    };
    CAD.prototype.delElectricalOutlet = function () {
        this.version.delElectricalOutlet(this.selectedElectricalOutlet.id);
        this.unSelectElectricalOutlet();
    };
    CAD.prototype.addTransformer = function () {
        var transformer = new _transformer__WEBPACK_IMPORTED_MODULE_6__["Transformer"](angular2_uuid__WEBPACK_IMPORTED_MODULE_7__["UUID"].UUID());
        this.selectedElectricalOutlet.transformers.push(transformer);
        this.showContextMenu = false;
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.delTransformer = function () {
        this.version.delTransformer(this.selectedTransformer.id);
        this.unSelectTransformer();
    };
    CAD.prototype.addNodeToTransformer = function () {
        this.version.addNodeToTransformer(this.selectedNodes[0].id, this.selectedTransformer.id);
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.delNodeFromElectricalBranch = function () {
        this.version.delNodeFromElectricalBranch(this.selectedNodes[0].id);
        document.dispatchEvent(new Event('CADBeltChanged'));
    };
    CAD.prototype.delProtectedArea = function (id) {
        this.version.delProtectedArea(id);
        this.unSelectProtectedArea();
    };
    CAD.prototype.delSelectedProtectedAreaPoint = function () {
        this.selectedProtectedArea.points.splice(this.selectedProtectedAreaPointIndex, 1);
        this.selectedProtectedAreaPointIndex = null;
        document.dispatchEvent(new Event('CADProtectedAreaChanged'));
    };
    CAD.prototype.addProtectedAreaPointBefore = function () {
        // Get current point position
        var selectedPoint = [
            this.selectedProtectedArea.points[this.selectedProtectedAreaPointIndex][0],
            this.selectedProtectedArea.points[this.selectedProtectedAreaPointIndex][1]
        ];
        var point = [selectedPoint[0] + 0.000025, selectedPoint[1] + 0.000025];
        this.selectedProtectedArea.points.splice(this.selectedProtectedAreaPointIndex, 0, point);
        this.showContextMenu = false;
        document.dispatchEvent(new Event('CADProtectedAreaChanged'));
    };
    CAD.prototype.addProtectedAreaPointAfter = function () {
        // Get current point position
        var selectedPoint = [
            this.selectedProtectedArea.points[this.selectedProtectedAreaPointIndex][0],
            this.selectedProtectedArea.points[this.selectedProtectedAreaPointIndex][1]
        ];
        var point = [selectedPoint[0] + 0.000025, selectedPoint[1] + 0.000025];
        this.selectedProtectedArea.points.splice(this.selectedProtectedAreaPointIndex + 1, 0, point);
        this.showContextMenu = false;
        document.dispatchEvent(new Event('CADProtectedAreaChanged'));
    };
    /* Calculs */
    CAD.prototype.save = function (additionalDistanceSheath) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var calculations;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                calculations = new _calculations__WEBPACK_IMPORTED_MODULE_8__["Calculations"](this.version);
                calculations.flowCalculations(additionalDistanceSheath);
                calculations.electricCalculations(additionalDistanceSheath);
                this.version.customPictureRatio = this.project.customPictureRatio;
                // Then save locally
                localStorage.setItem('version_' + this.version.id, JSON.stringify(this.version));
                return [2 /*return*/];
            });
        });
    };
    /* Other functions */
    CAD.prototype.getPosition = function (lat, lng) {
        // Case custom picture
        if (this.project.customPicture) {
            var x = (lng - this.project.lng) * Math.cos(lat * Math.PI / 180) * 40075 / 360, y = (lat - this.project.lat) * 40008 / 360;
            // Convert kilometers to px
            x = x * 1000 * this.project.customPictureRatio;
            y = y * 1000 * this.project.customPictureRatio;
            return { x: x, y: y };
        }
        // Case google maps
        else {
            return {
                x: Math.round((lng - this.project.lng) / (360 / Math.pow(2, this.project.zoom + 9))),
                y: Math.round(-(lat - this.project.lat) / (360 / Math.pow(2, this.project.zoom + 9.1) * Math.cos(this.project.lat * Math.PI / 180)))
            };
        }
    };
    CAD.prototype.getCoordinates = function (x, y) {
        // Case custom picture
        if (this.project.customPicture) {
            // Convert px to kilometers
            x = (x / 1000) / this.project.customPictureRatio;
            y = (y / 1000) / this.project.customPictureRatio;
            var lat = this.project.lat + y * 360 / 40008, lng = this.project.lng + x * 360 / (Math.cos(lat * Math.PI / 180) * 40075);
            return { lat: lat, lng: lng };
        }
        // Case google maps
        else {
            return {
                lat: this.project.lat - (360 / Math.pow(2, this.project.zoom + 9.1) * Math.cos(this.project.lat * Math.PI / 180)) * y,
                lng: this.project.lng + (360 / Math.pow(2, this.project.zoom + 9)) * x
            };
        }
    };
    CAD.prototype.distance = function (x1, y1, x2, y2) {
        function sqr(a) { return a * a; }
        return Math.sqrt(sqr(x2 - x1) + sqr(y2 - y1));
    };
    CAD.prototype.getDistance = function (latLng1, latLng2) {
        function rad(x) { return x * Math.PI / 180; }
        var R = 6378137, // Earth’s mean radius in meter
        dLat = rad(latLng2.lat - latLng1.lat), dLong = rad(latLng2.lng - latLng1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(latLng1.lat)) * Math.cos(rad(latLng2.lat)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };
    CAD.prototype.angleCalculation = function (i, i1) {
        var c = { x: 0, y: 0 }, d = 5, tgTeta = (i.y - i1.y) / (i.x - i1.x), teta = Math.atan((i.y - i1.y) / (i.x - i1.x)), yxc = tgTeta * (c.x - i.x) + i.y, niAngle = Math.round((yxc < c.y ? Math.sign(teta) * (Math.PI - teta) : teta) * 180 / Math.PI) + 90;
        niAngle -= niAngle % 5;
        if (niAngle < 0)
            return niAngle + 360;
        else
            return niAngle;
    };
    CAD.prototype.rotate = function (cx, cy, x, y, angle) {
        var radian = (Math.PI / 180) * angle, cos = Math.cos(radian), sin = Math.sin(radian), nx = (cos * (x - cx)) + (sin * (y - cy)) + cx, ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return { x: nx, y: ny };
    };
    CAD.prototype.splitLine = function (start, end, segments) {
        var deltaX = (end.x - start.x) / segments, deltaY = (end.y - start.y) / segments, points = [];
        points.push(start);
        for (var i = 1; i < segments; i++) {
            points.push({ x: start.x + i * deltaX, y: start.y + i * deltaY });
        }
        return points;
    };
    /*
     * Google Earth Pro
     */
    CAD.prototype.exportToKML = function () {
        var _this = this;
        // Init file
        var kml = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document>';
        // Set project name
        kml += '<name>' + this.project.name + '</name>';
        // Add belts
        this.version.belts.forEach(function (belt) {
            // Set belt name
            kml += '<Folder><name>' + belt.name + '</name>';
            // Add traps
            var trapNumber = 1;
            belt.branches.forEach(function (branch) {
                branch.nodes.forEach(function (node) {
                    if (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_5__["NodeType"].CONTROL) {
                        kml += '<Placemark id="' + node.id + '"><name>Régie</name><styleUrl>#biobelt_control</styleUrl><Point><coordinates>' + node.lng + ',' + node.lat + '</coordinates></Point></Placemark>';
                    }
                    else if (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_5__["NodeType"].HEXAGONAL_TRAP || node.nodeType == _node__WEBPACK_IMPORTED_MODULE_5__["NodeType"].RECTANGULAR_TRAP) {
                        kml += '<Placemark id="' + node.id + '"><name>' + trapNumber + '</name><styleUrl>#biobelt_hexa_trap</styleUrl><Point><coordinates>' + node.lng + ',' + node.lat + '</coordinates></Point></Placemark>';
                        trapNumber++;
                    }
                });
            });
            // Add branches
            belt.branches.forEach(function (branch, branchIndex) {
                kml += '<Placemark id="' + branch.id + '"><name>Branche ' + (branchIndex + 1) + '</name><styleUrl>#biobelt_branch</styleUrl><LineString><tessellate>1</tessellate><coordinates>';
                // Add nodes
                branch.nodes.forEach(function (node, nodeIndex) {
                    // TODO: Add parent node
                    if (branchIndex > 0 && nodeIndex == 0) {
                        var n = _this.version.getNode(branch.parentNode);
                        if (n)
                            kml += n.lng + ',' + n.lat + ' ';
                    }
                    kml += node.lng + ',' + node.lat + ' ';
                });
                kml += '</coordinates></LineString></Placemark>';
            });
            kml += '</Folder>';
        });
        // Add styles
        kml += '<Style id="biobelt_control"><IconStyle><Icon><href>http://admin.biobelt.com/assets/img/markers/regie.png</href></Icon><scale>0.75</scale></IconStyle><LabelStyle><scale>0.75</scale></LabelStyle></Style>' +
            '<Style id="biobelt_hexa_trap"><IconStyle><Icon><href>http://admin.biobelt.com/assets/img/markers/trap_hexa_1.png</href></Icon><scale>0.75</scale></IconStyle><LabelStyle><scale>0.75</scale></LabelStyle></Style>' +
            '<Style id="biobelt_rect_trap"><IconStyle><Icon><href>http://admin.biobelt.com/assets/img/markers/trap_rect_1.png</href></Icon><scale>0.75</scale></IconStyle><LabelStyle><scale>0.75</scale></LabelStyle></Style>' +
            '<Style id="biobelt_branch"><LineStyle><color>ff0000ff</color><width>3</width></LineStyle></Style>';
        // End file
        kml += '</Document></kml>';
        return kml;
    };
    CAD.ctorParameters = function () { return [
        { type: _project__WEBPACK_IMPORTED_MODULE_1__["Project"] },
        { type: _version__WEBPACK_IMPORTED_MODULE_2__["Version"] }
    ]; };
    return CAD;
}());

var Tool;
(function (Tool) {
    Tool["DRAW"] = "DRAW";
    Tool["SELECT_PARENT_NODE"] = "SELECT_PARENT_NODE";
    Tool["SELECT_PIXELS_RATIO"] = "SELECT_PIXELS_RATIO";
})(Tool || (Tool = {}));
var Mode;
(function (Mode) {
    Mode["ALL"] = "ALL";
    Mode["CO2"] = "CO2";
    Mode["ELECTRIC"] = "ELECTRIC";
})(Mode || (Mode = {}));


/***/ }),

/***/ "./src/app/model/project/calculations.ts":
/*!***********************************************!*\
  !*** ./src/app/model/project/calculations.ts ***!
  \***********************************************/
/*! exports provided: Calculations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculations", function() { return Calculations; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./src/app/model/project/version.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/app/model/project/node.ts");


var Calculations = /** @class */ (function () {
    function Calculations(version) {
        // Calculations params
        this.temperature = 20; // T°C
        this.gramTrapHour = 20; // gr
        this.initialPressure = 0.64534; // Bar
        this.blasusFormula = 0.2;
        this.reynoldsFactor = 90;
        this.reynoldsThreshold = 3000;
        this.tubeLengthAdd = 0.5;
        this.literMinuteTrap = 0.168861871;
        this.co2MassVol = 1.8714 * 288 / (273.15 + this.temperature); // 1.838523622718745
        this.co2DynamicViscosity = 0.00000694501 * Math.pow((273.15 + this.temperature) / 273.15, 1.5) * (273.15 + 170) / (273.15 + 170 + this.temperature) * this.co2MassVol; // 0.000013583266313248221
        this.tolerance = 0.1;
        this.maxLoop = 100;
        /// ELECTRIC
        this.pcu = 0.000000017; // Ohm/m
        this.cableLengthAdd = 0.5; // m
        this.cableSection = 2.5; // Cable section en mm²
        this.voltageBlock = 12; // Volts
        this.fans = [];
        this.version = version;
    }
    Calculations.prototype.flowCalculations = function (additionalDistanceSheath) {
        var _this = this;
        if (additionalDistanceSheath === void 0) { additionalDistanceSheath = 0.5; }
        this.tubeLengthAdd = additionalDistanceSheath;
        // For each belt
        this.version.belts.forEach(function (belt) {
            if (belt.branches.length > 0 && belt.branches[0].nodes.length > 1) {
                /// Belt informations
                _this.currentBelt = belt;
                belt.resetCalculationValues();
                /// Main branch informations
                _this.mainBranch = belt.branches[0];
                _this.mainBranch.trapsNumber = 0;
                _this.mainBranch.flowCumulated = 0;
                // Reset nodes data
                for (var nodeIndex = 0; nodeIndex < _this.mainBranch.nodes.length; nodeIndex++)
                    _this.mainBranch.nodes[nodeIndex].resetCalculationValues();
                /// Secondary branches informations
                _this.secondaryBranches = [];
                for (var branchIndex = 0; branchIndex < belt.branches.length; branchIndex++) {
                    if (branchIndex > 0) {
                        // Add the secondary branch
                        belt.branches[branchIndex].flowCumulated = 0;
                        _this.secondaryBranches.push(belt.branches[branchIndex]);
                    }
                }
                // Update belt & mainBranch informations
                belt.trapsNumber = _this.getTrapsNumber(_this.mainBranch);
                _this.mainBranch.trapsNumber = belt.trapsNumber;
                _this.mainBranch.nodesNumber = _this.getNodesNumber(_this.mainBranch);
                // Update secondary branches informations
                for (var branchIndex = 0; branchIndex < _this.secondaryBranches.length; branchIndex++) {
                    _this.secondaryBranches[branchIndex].trapsNumber = _this.getTrapsNumber(_this.secondaryBranches[branchIndex]);
                    _this.secondaryBranches[branchIndex].nodesNumber = _this.getNodesNumber(_this.secondaryBranches[branchIndex]);
                    _this.secondaryBranches[branchIndex].flowCumulated = 0;
                    // Reset nodes data
                    for (var nodeIndex = 0; nodeIndex < _this.secondaryBranches[branchIndex].nodes.length; nodeIndex++)
                        _this.secondaryBranches[branchIndex].nodes[nodeIndex].resetCalculationValues();
                }
                // Loop on 10 intensity values (1 - 10)
                for (var i = 1; i < 11; i++) {
                    // Initialization
                    _this.currentIntensity = i;
                    _this.mainBranch.nodes[0].flowIn = _this.getInitialFlow();
                    _this.mainBranch.nodes[0].pressure = _this.initialPressure * i / 10;
                    var loop = 0;
                    while (loop < _this.maxLoop) {
                        var flowCalculated = _this.branchFlowRate(_this.mainBranch), // Q
                        flowReference = _this.getInitialFlow(); // Qref
                        // if ||Qref - Q|| < eq
                        if (Math.abs(flowReference - flowCalculated) < 1 / 1000)
                            break;
                        else
                            _this.mainBranch.nodes[0].pressure += (flowReference - flowCalculated) * (2 / _this.mainBranch.trapsNumber); // P(0) = P(0) + (Qref - Q * ep)
                        loop++;
                    }
                    // Save flow
                    switch (i) {
                        case 1:
                            belt.pressureInt1 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 2:
                            belt.pressureInt2 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 3:
                            belt.pressureInt3 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 4:
                            belt.pressureInt4 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 5:
                            belt.pressureInt5 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 6:
                            belt.pressureInt6 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 7:
                            belt.pressureInt7 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 8:
                            belt.pressureInt8 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 9:
                            belt.pressureInt9 = _this.mainBranch.nodes[0].pressure;
                            break;
                        case 10:
                            belt.flowCumulated = _this.mainBranch.nodes[0].flowIn;
                            belt.flowTheoretical = _this.getInitialFlow();
                            belt.pressureCalculated = _this.mainBranch.nodes[0].pressure;
                            break;
                    }
                }
                // Simon Wolkiewiez: flowPercent, lossPressureCumulated & flowCumulated
                belt.branches.forEach(function (branch) {
                    branch.nodes.forEach(function (node, nodeIndex) {
                        if (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP || node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP)
                            node.flowPercent = _this.getFlowPercent(node.flowOut);
                        if (branch.nodes[nodeIndex - 1]) {
                            node.lossPressureCumulated = branch.nodes[nodeIndex - 1].lossPressureCumulated + (branch.nodes[nodeIndex - 1].pressure - node.pressure);
                            node.flowCumulated = branch.nodes[nodeIndex - 1].flowCumulated + node.flowOut;
                        }
                    });
                });
                // Simon Wolkiewiez
            }
        });
    };
    Calculations.prototype.branchFlowRate = function (branch, parentBranch, parentNode) {
        if (parentBranch === void 0) { parentBranch = null; }
        if (parentNode === void 0) { parentNode = null; }
        var calculatedFlowRate = 0, // Qc
        guessedFlowRate = 0, // Qg
        constantPressure = 0;
        // if Q(NBF(i)) = 0
        if (branch.nodes[0].flowIn == 0 && parentBranch && parentNode)
            guessedFlowRate = parentNode.flowIn * branch.trapsNumber / this.getTrapsNumber(parentBranch, this.version.getNodeIndex(parentNode.id)); // Qg = Q(i) * NNB(i) / NNMB(i)
        else
            guessedFlowRate = branch.nodes[0].flowIn; // Qg = Q(NBF(i))
        // Iteration
        var loop = 0;
        while (loop < this.maxLoop) {
            // Update input flow
            branch.nodes[0].flowIn = guessedFlowRate;
            calculatedFlowRate = 0;
            for (var j = 0; j < branch.nodes.length; j++) {
                var previousNode = branch.nodes[j - 1], currentNode = branch.nodes[j], nextNode = branch.nodes[j + 1];
                // Get pressure
                if (previousNode) {
                    // Check input flow
                    if (currentNode.flowIn < 0) {
                        currentNode.pressure = previousNode.pressure;
                    }
                    else {
                        // P(j) = P(NP(j)) - deltaP(j, NP(j)) - ?Pjn(NP(j))
                        currentNode.pressure = this.getModulePressure(previousNode.pressure, this.getDeltaPlaminaire(currentNode.flowIn, currentNode.prevDistance, branch.tubeDiameter), this.getJunctionLoss(this.getSpeed(currentNode.flowIn, branch.tubeDiameter), true));
                    }
                }
                else if (parentNode) {
                    currentNode.pressure = this.getModulePressure(parentNode.pressure, this.getDeltaPlaminaire(currentNode.flowIn, currentNode.prevDistance, branch.tubeDiameter), this.getJunctionLoss(this.getSpeed(currentNode.flowIn, branch.tubeDiameter), true));
                }
                // Simon Wolkiewiez: Check if control
                if (currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].CONTROL) {
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn;
                }
                // Check if intermediate node without child branch
                else if (currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].INTERMEDIATE && this.version.getNodeNumberOfChild(currentNode.id) < 2) {
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn;
                }
                // Simon Wolkiewiez
                // if Type of node j = ST
                else if ((currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP || currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP) &&
                    this.version.getNodeNumberOfChild(currentNode.id) < 2) {
                    currentNode.flowOut = this.getOutModuleFlow(currentNode.pressure, currentNode.flowIn, branch.tubeDiameter); // q(j) = (a * P(j)² + b * P(j) - tetaPjt(j)) * Tc/T
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn - currentNode.flowOut; // Q(NX(j)) = Q(j) - q(j)
                    calculatedFlowRate += currentNode.flowOut; // Qc = Qc + q(j)
                }
                // else if Type of node j = SB
                else if (currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].INTERMEDIATE &&
                    this.version.getNodeNumberOfChild(currentNode.id) == 2) {
                    var childBranch = this.version.getNodeChildBranch(currentNode.id);
                    childBranch.nodes[0].flowIn = this.branchFlowRate(childBranch, branch, currentNode); // Q(NBF(j)) = branchFlowRate(NBF(j))
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn - childBranch.nodes[0].flowIn; // Q(NX(j)) = Q(j) - Q(NBF(j))
                    calculatedFlowRate += childBranch.nodes[0].flowIn; // Qc = Qc + Q(NBF(j))
                }
                // else if Type of node j = SBT
                else if ((currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP || currentNode.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP) &&
                    this.version.getNodeNumberOfChild(currentNode.id) == 2) {
                    currentNode.flowOut = this.getOutModuleFlow(currentNode.pressure, currentNode.flowIn, branch.tubeDiameter); // q(j) = (a * P(j)² + b * P(j) - tetaPjt(j)) * Tc/T
                    var childBranch = this.version.getNodeChildBranch(currentNode.id);
                    childBranch.nodes[0].flowIn = this.branchFlowRate(childBranch, branch, currentNode); // Q(NBF(j)) = branchFlowRate(NBF(j))
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn - childBranch.nodes[0].flowIn - currentNode.flowOut; // Q(NX(j)) = Q(j) - Q(NBF(j)) - q(j)
                    calculatedFlowRate += childBranch.nodes[0].flowIn + currentNode.flowOut; // Qc = Qc + Q(NBF(j)) + q(j)
                }
                if (currentNode.pressure <= 0) {
                    // Update the cumulative flow of the branch
                    if (previousNode)
                        calculatedFlowRate = previousNode.flowCumulated;
                    else if (parentNode)
                        calculatedFlowRate = parentNode.flowCumulated;
                }
            }
            // if |Qc - Qg| > eq
            if (Math.abs(calculatedFlowRate - guessedFlowRate) > 1 / 1000)
                guessedFlowRate = (calculatedFlowRate + guessedFlowRate) / 2; // Qg = (Qc + Qg) / 2
            else
                break;
            loop++;
        }
        return calculatedFlowRate;
    };
    Calculations.prototype.electricCalculations = function (additionalDistanceSheath) {
        var _this = this;
        if (additionalDistanceSheath === void 0) { additionalDistanceSheath = 0.5; }
        this.cableLengthAdd = additionalDistanceSheath;
        // For each belt
        this.version.belts.forEach(function (belt) {
            if (belt.electricalOutlets.length > 0) {
                // Belt informations
                belt.electricalOutlets.forEach(function (electricalOutlet) {
                    // Electrical outlet informations
                    _this.currentElectricalOutlet = electricalOutlet;
                    electricalOutlet.transformers.forEach(function (transformer) {
                        if (transformer.electricalBranches.length > 0) {
                            // Transformer informations
                            _this.currentTransformer = transformer;
                            _this.initElectricalBranches(_this.version);
                            _this.getCableVoltageCalculation(0, 0, _this.version);
                            // Voltages calculation
                            var average = _this.getAverageDifferenceU(_this.version), p = 0;
                            while ((Math.abs(average) > 0.0001) && (p < 100)) {
                                _this.updateU2(_this.version);
                                _this.getCableVoltageCalculation(0, 0, _this.version);
                                transformer.electricalBranches.forEach(function (electricalBranch, branchIndex) {
                                    electricalBranch.electricalNodes.forEach(function (electricalNode, nodeIndex) {
                                        // Get node
                                        var node = _this.version.getNode(electricalNode.nodeId);
                                        // Check node position
                                        if (branchIndex == 0 && nodeIndex == 0) {
                                            // First node
                                            node.U2 = _this.voltageBlock - 2 * node.R * node.I;
                                        }
                                        else if (branchIndex > 0 && nodeIndex == 0) {
                                            // First node of a new branch
                                            var parentNode = _this.version.getNode(electricalBranch.parentElectricalNode);
                                            node.U2 = parentNode.U - 2 * node.R * node.I;
                                        }
                                        else {
                                            // Others nodes
                                            var previousNode = _this.version.getNode(electricalBranch.electricalNodes[nodeIndex - 1].nodeId);
                                            node.U2 = previousNode.U - 2 * node.R * node.I;
                                        }
                                        // Update intensity in this fan
                                        node.i = _this.getIntensity(node.U2);
                                    });
                                });
                                average = _this.getAverageDifferenceU(_this.version);
                                p++;
                            }
                        }
                        // Save Data
                        transformer.powerConsumed = 0;
                        transformer.electricalBranches.forEach(function (electricalBranch) {
                            electricalBranch.electricalNodes.forEach(function (electricalNode) {
                                // Get node & loss
                                var node = _this.version.getNode(electricalNode.nodeId);
                                // Update data
                                node.powerLoss = 1 - Math.pow(node.i * node.U2 / 3.36, 1 / 3);
                                node.voltage = node.U2;
                                transformer.powerConsumed += node.i * node.voltage;
                            });
                        });
                    });
                });
            }
        });
    };
    // Electric Methods
    Calculations.prototype.getResistance = function (distance) {
        if (distance == null)
            return 0;
        else
            return this.pcu * distance / (this.cableSection * Math.pow(10, -6));
    };
    Calculations.prototype.getIntensity = function (voltage) {
        if (voltage == null)
            return 0;
        else
            return 0.028 * voltage - 0.056;
    };
    Calculations.prototype.getAverageDifferenceU = function (version) {
        var difference = 0, nbFans = 0;
        for (var i = 0; i < this.currentTransformer.electricalBranches.length; i++) {
            for (var j = 0; j < this.currentTransformer.electricalBranches[i].electricalNodes.length; j++) {
                // Get node
                var node = version.getNode(this.currentTransformer.electricalBranches[i].electricalNodes[j].nodeId);
                // Check if trap
                if (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP || node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP) {
                    difference += Math.abs(node.U - node.U2);
                    nbFans++;
                }
            }
        }
        return difference / nbFans;
    };
    Calculations.prototype.getCableVoltageCalculation = function (branchIndex, nodeIndex, version) {
        // Get node
        var node = version.getNode(this.currentTransformer.electricalBranches[branchIndex].electricalNodes[nodeIndex].nodeId);
        // Fan intensity
        if (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP || node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP)
            node.I = this.getIntensity(node.U); // Type = trap (fan)
        else
            node.I = 0; // Type = control or intermediate node
        // Check if next node exists
        if (nodeIndex < this.currentTransformer.electricalBranches[branchIndex].electricalNodes.length - 1)
            node.I += this.getCableVoltageCalculation(branchIndex, nodeIndex + 1, version);
        // Check if child node exists
        for (var i = 0; i < this.currentTransformer.electricalBranches.length; i++)
            if (this.currentTransformer.electricalBranches[i].parentElectricalNode === node.id)
                node.I += this.getCableVoltageCalculation(i, 0, version);
        return node.I;
    };
    Calculations.prototype.initElectricalBranches = function (version) {
        for (var i = 0; i < this.currentTransformer.electricalBranches.length; i++) {
            for (var j = 0; j < this.currentTransformer.electricalBranches[i].electricalNodes.length; j++) {
                // Get node
                var node = version.getNode(this.currentTransformer.electricalBranches[i].electricalNodes[j].nodeId);
                // Check if first node of the branch
                if (i == 0 && j == 0) {
                    // First node
                    // Calcul distance beetween this node & the electrical output
                    node.prevDistance = this.version.getDistance({ lat: node.lat, lng: node.lng }, { lat: this.currentElectricalOutlet.lat, lng: this.currentElectricalOutlet.lng });
                }
                else if (i > 0 && j == 0) {
                    // Get parent node
                    var parentNode = version.getNode(this.currentTransformer.electricalBranches[i].parentElectricalNode);
                    node.prevDistance = this.version.getDistance({ lat: node.lat, lng: node.lng }, { lat: parentNode.lat, lng: parentNode.lng });
                }
                else {
                    // Get previous node
                    var previousNode = version.getNode(this.currentTransformer.electricalBranches[i].electricalNodes[j - 1].nodeId);
                    node.prevDistance = this.version.getDistance({ lat: node.lat, lng: node.lng }, { lat: previousNode.lat, lng: previousNode.lng });
                }
                node.prevDistance += this.cableLengthAdd;
                node.U = this.voltageBlock;
                node.U2 = 0;
                node.i = this.getIntensity(node.U);
                node.R = this.getResistance(node.prevDistance);
                node.I = 0;
            }
        }
    };
    Calculations.prototype.updateU2 = function (version) {
        var difference = 0, u = 0, u2 = 0;
        for (var i = 0; i < this.currentTransformer.electricalBranches.length; i++) {
            for (var j = 0; j < this.currentTransformer.electricalBranches[i].electricalNodes.length; j++) {
                // Get node
                var node = version.getNode(this.currentTransformer.electricalBranches[i].electricalNodes[j].nodeId);
                node.U = node.U2;
            }
        }
    };
    // Methods
    Calculations.prototype.getTubeSection = function (tubeDiameter) {
        return tubeDiameter * tubeDiameter * Math.PI / (4 * 1000000);
    };
    Calculations.prototype.getSpeed = function (flow, tubeDiameter) {
        return flow / (60 * 1000 * this.getTubeSection(tubeDiameter));
    };
    Calculations.prototype.getTrapsNumber = function (branch, index) {
        if (index === void 0) { index = -1; }
        var number = 0;
        // Count all traps of the branch
        if (index != -1)
            number += branch.nodes.filter(function (node, nodeIndex) { return nodeIndex > index && (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP || node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP); }).length;
        else
            number += branch.nodes.filter(function (node) { return node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].RECTANGULAR_TRAP || node.nodeType == _node__WEBPACK_IMPORTED_MODULE_1__["NodeType"].HEXAGONAL_TRAP; }).length;
        // Count all traps of child branches
        for (var i = 0; i < this.currentBelt.branches.length; i++)
            if (this.currentBelt.branches[i].parentBranch == branch.id)
                number += this.getTrapsNumber(this.currentBelt.branches[i]);
        return number;
    };
    Calculations.prototype.getNodesNumber = function (branch) {
        var number = 0;
        // Count all traps of the branch
        number += branch.nodes.length;
        // Count all traps of child branches
        for (var i = 0; i < this.currentBelt.branches.length; i++)
            if (this.currentBelt.branches[i].parentBranch == branch.id)
                number += this.getNodesNumber(this.currentBelt.branches[i]);
        return number;
    };
    Calculations.prototype.getOutModuleFlow = function (pressure, flow, tubeDiameter) {
        var a = 0.110728364691098, b = 0.25715450;
        return ((a * Math.pow((pressure - this.getJunctionLoss(this.getSpeed(flow, tubeDiameter), false)), 2) + b * (pressure - this.getJunctionLoss(this.getSpeed(flow, tubeDiameter), false))));
    };
    Calculations.prototype.getInitialFlow = function () {
        return this.currentBelt.trapsNumber * (this.gramTrapHour / (60 * 1.974)) * this.currentIntensity / 10;
    };
    Calculations.prototype.getReynoldsNumber = function (flow, tubeDiameter) {
        return this.co2MassVol * (tubeDiameter / 1000) * this.getSpeed(flow, tubeDiameter) / this.co2DynamicViscosity;
    };
    Calculations.prototype.getDeltaPlaminaire = function (flow, tubeLength, tubeDiameter) {
        var reynoldsNumber = this.getReynoldsNumber(flow, tubeDiameter), speed = this.getSpeed(flow, tubeDiameter);
        if (reynoldsNumber == 0)
            return 0;
        else if (reynoldsNumber < this.reynoldsThreshold)
            return ((this.reynoldsFactor / reynoldsNumber) * this.co2MassVol * speed * speed * (tubeLength + this.tubeLengthAdd) / (2 * (tubeDiameter / 1000)) / 100) / 1000;
        else
            return (this.blasusFormula * Math.pow(reynoldsNumber, -0.25) * this.co2MassVol * speed * speed * (tubeLength + this.tubeLengthAdd) / (2 * (tubeDiameter / 1000)) / 100) / 1000;
    };
    Calculations.prototype.getModulePressure = function (prevModulePressure, deltaPLaminaire, junctionLoss) {
        return prevModulePressure - deltaPLaminaire - junctionLoss;
    };
    Calculations.prototype.getJunctionLoss = function (speed, jn) {
        var k = (jn ? 0.5 : 1.3);
        return k * this.co2MassVol * speed * speed / 200000;
    };
    Calculations.prototype.getFlowPercent = function (flow) {
        return ((flow - this.literMinuteTrap) / this.literMinuteTrap * 100);
    };
    Calculations.ctorParameters = function () { return [
        { type: _version__WEBPACK_IMPORTED_MODULE_0__["Version"] }
    ]; };
    return Calculations;
}());



/***/ }),

/***/ "./src/app/model/project/electricalBranch.ts":
/*!***************************************************!*\
  !*** ./src/app/model/project/electricalBranch.ts ***!
  \***************************************************/
/*! exports provided: ElectricalBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalBranch", function() { return ElectricalBranch; });
/* harmony import */ var _electricalNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./electricalNode */ "./src/app/model/project/electricalNode.ts");

var ElectricalBranch = /** @class */ (function () {
    function ElectricalBranch() {
        this.id = '';
        this.electricalNodes = [];
    }
    ElectricalBranch.loadFromJSON = function (json) {
        var electricalBranch = Object.assign(new ElectricalBranch, json);
        if (json.electricalNodes) {
            electricalBranch.electricalNodes = [];
            json.electricalNodes.forEach(function (jsonElectricalNode) { electricalBranch.electricalNodes.push(_electricalNode__WEBPACK_IMPORTED_MODULE_0__["ElectricalNode"].loadFromJSON(jsonElectricalNode)); });
        }
        return electricalBranch;
    };
    return ElectricalBranch;
}());



/***/ }),

/***/ "./src/app/model/project/electricalNode.ts":
/*!*************************************************!*\
  !*** ./src/app/model/project/electricalNode.ts ***!
  \*************************************************/
/*! exports provided: ElectricalNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalNode", function() { return ElectricalNode; });
var ElectricalNode = /** @class */ (function () {
    function ElectricalNode() {
        this.id = '';
        this.nodeId = '';
    }
    ElectricalNode.loadFromJSON = function (json) {
        return Object.assign(new ElectricalNode, json);
    };
    return ElectricalNode;
}());



/***/ }),

/***/ "./src/app/model/project/electricalOutlet.ts":
/*!***************************************************!*\
  !*** ./src/app/model/project/electricalOutlet.ts ***!
  \***************************************************/
/*! exports provided: ElectricalOutlet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalOutlet", function() { return ElectricalOutlet; });
/* harmony import */ var _transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformer */ "./src/app/model/project/transformer.ts");

var ElectricalOutlet = /** @class */ (function () {
    function ElectricalOutlet(id, lat, lng) {
        if (id === void 0) { id = ''; }
        if (lat === void 0) { lat = 0; }
        if (lng === void 0) { lng = 0; }
        this.id = '';
        this.lat = 0;
        this.lng = 0;
        this.transformers = [];
        this.id = id;
        this.lat = lat;
        this.lng = lng;
    }
    ElectricalOutlet.loadFromJSON = function (json) {
        var electricalOutlet = Object.assign(new ElectricalOutlet, json);
        if (json.transformers) {
            electricalOutlet.transformers = [];
            json.transformers.forEach(function (jsonTransformer) { electricalOutlet.transformers.push(_transformer__WEBPACK_IMPORTED_MODULE_0__["Transformer"].loadFromJSON(jsonTransformer)); });
        }
        return electricalOutlet;
    };
    ElectricalOutlet.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: Number }
    ]; };
    return ElectricalOutlet;
}());



/***/ }),

/***/ "./src/app/model/project/node.ts":
/*!***************************************!*\
  !*** ./src/app/model/project/node.ts ***!
  \***************************************/
/*! exports provided: Node, NodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
var Node = /** @class */ (function () {
    function Node() {
        this.id = '';
        this.nodeType = NodeType.HEXAGONAL_TRAP;
        this.textAngle = 0;
        this.textDistance = 5;
        this.prevLinkBuried = false;
        this.prevDistance = 0;
        this.lat = 0;
        this.lng = 0;
        this.flowIn = 0;
        this.flowOut = 0;
        this.flowCumulated = 0;
        this.flowPercent = 0;
        this.pressure = 0;
        this.lossPressureCumulated = 0;
        this.voltage = 0;
        this.powerLoss = 0;
        // Calculations only
        this.speedInputModule = 0;
        this.reynoldsNumber = 0;
        this.deltaPLaminaire = 0;
        this.junctionLoss = 0;
        this.differenceFlowAverage = 0;
        this.flowTotalReference = 0;
        this.I = 0;
        this.i = 0;
        this.R = 0;
        this.U = 0;
        this.U2 = 0;
    }
    Node.loadFromJSON = function (json) {
        return Object.assign(new Node, json);
    };
    Node.prototype.resetCalculationValues = function () {
        this.flowIn = 0;
        this.flowOut = 0;
        this.flowCumulated = 0;
        this.flowPercent = 0;
        this.pressure = 0;
        this.lossPressureCumulated = 0;
        this.speedInputModule = 0;
        this.reynoldsNumber = 0;
        this.deltaPLaminaire = 0;
        this.junctionLoss = 0;
        this.differenceFlowAverage = 0;
        this.flowTotalReference = 0;
    };
    return Node;
}());

var NodeType;
(function (NodeType) {
    NodeType["CONTROL"] = "CONTROL";
    NodeType["RECTANGULAR_TRAP"] = "RECTANGULAR_TRAP";
    NodeType["HEXAGONAL_TRAP"] = "HEXAGONAL_TRAP";
    NodeType["INTERMEDIATE"] = "INTERMEDIATE";
})(NodeType || (NodeType = {}));


/***/ }),

/***/ "./src/app/model/project/project.ts":
/*!******************************************!*\
  !*** ./src/app/model/project/project.ts ***!
  \******************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.id = '';
        this.name = '';
        this.client = '';
        this.address = '';
        this.lat = 0;
        this.lng = 0;
        this.zoom = 0;
        this.hbmDistance = 0;
        this.additionalDistanceSheath = 0.5;
        this.customPicture = false;
        this.customPictureFilename = "";
        this.customPictureRatio = 0;
    }
    Project.loadFromJSON = function (json) {
        return Object.assign(new Project, json);
    };
    return Project;
}());



/***/ }),

/***/ "./src/app/model/project/protectedArea.ts":
/*!************************************************!*\
  !*** ./src/app/model/project/protectedArea.ts ***!
  \************************************************/
/*! exports provided: ProtectedArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedArea", function() { return ProtectedArea; });
var ProtectedArea = /** @class */ (function () {
    function ProtectedArea(id) {
        if (id === void 0) { id = ''; }
        this.id = '';
        this.width = 100;
        this.color = '#0A4A14';
        this.points = [];
        this.id = id;
    }
    ProtectedArea.loadFromJSON = function (json) {
        var protectedArea = Object.assign(new ProtectedArea, json);
        if (json.points)
            try {
                protectedArea.points = JSON.parse(json.points);
            }
            catch (_a) {
                protectedArea.points = json.points;
            }
        return protectedArea;
    };
    ProtectedArea.ctorParameters = function () { return [
        { type: String }
    ]; };
    return ProtectedArea;
}());



/***/ }),

/***/ "./src/app/model/project/transformer.ts":
/*!**********************************************!*\
  !*** ./src/app/model/project/transformer.ts ***!
  \**********************************************/
/*! exports provided: Transformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformer", function() { return Transformer; });
/* harmony import */ var _electricalBranch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./electricalBranch */ "./src/app/model/project/electricalBranch.ts");

var Transformer = /** @class */ (function () {
    function Transformer(id, angle, electricCase, powerConsumed) {
        if (id === void 0) { id = ''; }
        if (angle === void 0) { angle = 0; }
        if (electricCase === void 0) { electricCase = false; }
        if (powerConsumed === void 0) { powerConsumed = 0; }
        this.id = '';
        this.angle = 0;
        this.electricCase = false;
        this.powerConsumed = 0;
        this.electricalBranches = [];
        this.id = id;
        this.angle = angle;
        this.electricCase = electricCase;
        this.powerConsumed = powerConsumed;
    }
    Transformer.loadFromJSON = function (json) {
        var transformer = Object.assign(new Transformer, json);
        if (json.electricalBranches) {
            transformer.electricalBranches = [];
            json.electricalBranches.forEach(function (jsonElectricalBranch) { transformer.electricalBranches.push(_electricalBranch__WEBPACK_IMPORTED_MODULE_0__["ElectricalBranch"].loadFromJSON(jsonElectricalBranch)); });
        }
        return transformer;
    };
    Transformer.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: Boolean },
        { type: Number }
    ]; };
    return Transformer;
}());



/***/ }),

/***/ "./src/app/model/project/version.ts":
/*!******************************************!*\
  !*** ./src/app/model/project/version.ts ***!
  \******************************************/
/*! exports provided: Version, VersionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionType", function() { return VersionType; });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/upcv3/LocalDateTime */ "./src/app/model/upcv3/LocalDateTime.ts");
/* harmony import */ var _belt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./belt */ "./src/app/model/project/belt.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node */ "./src/app/model/project/node.ts");
/* harmony import */ var _electricalBranch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./electricalBranch */ "./src/app/model/project/electricalBranch.ts");
/* harmony import */ var _electricalNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./electricalNode */ "./src/app/model/project/electricalNode.ts");






var Version = /** @class */ (function () {
    function Version() {
        this.id = '';
        this.versionType = VersionType.PRE_ESTIMATE;
        this.numberOrder = 1;
        this.iconsSize = 15;
        this.rotation = 0;
        this.zoom = 1;
        this.pixelsScale = 5;
        this.mapType = 'satellite';
        this.mapOpacity = 50;
        this.materialPrice = 0;
        this.installationPrice = 0;
        this.maintenancePrice = 0;
        this.renewalPeriod = 30;
        this.januaryDiff = [0, 0, 0, 0, 5];
        this.februaryDiff = [0, 0, 0, 0, 5];
        this.marchDiff = [0, 0, 0, 0, 5];
        this.aprilDiff = [0, 0, 2, 2, 5];
        this.mayDiff = [4, 4, 4, 4, 5];
        this.juneDiff = [4, 6, 6, 6, 5];
        this.julyDiff = [10, 10, 10, 10, 5];
        this.augustDiff = [10, 10, 10, 10, 5];
        this.septemberDiff = [6, 6, 6, 4, 5];
        this.octoberDiff = [4, 4, 4, 4, 5];
        this.novemberDiff = [2, 2, 0, 0, 5];
        this.decemberDiff = [0, 0, 0, 0, 5];
        this.projectId = '';
        this.belts = [];
    }
    Object.defineProperty(Version.prototype, "versionTypeToString", {
        get: function () {
            switch (this.versionType) {
                case VersionType.PRE_ESTIMATE: return 'Pré-devis';
                case VersionType.ESTIMATE: return 'Devis';
                case VersionType.ACCEPTED_ESTIMATE: return 'Devis accepté';
                case VersionType.INSTALLATION: return 'Installation';
            }
        },
        enumerable: true,
        configurable: true
    });
    Version.loadFromJSON = function (json) {
        var version = Object.assign(new Version, json);
        if (json.januaryDiff)
            try {
                version.januaryDiff = JSON.parse(json.januaryDiff);
            }
            catch (_a) {
                version.januaryDiff = json.januaryDiff;
            }
        else
            version.januaryDiff = [0, 0, 0, 0, 5];
        if (json.februaryDiff)
            try {
                version.februaryDiff = JSON.parse(json.februaryDiff);
            }
            catch (_b) {
                version.februaryDiff = json.februaryDiff;
            }
        else
            version.februaryDiff = [0, 0, 0, 0, 5];
        if (json.marchDiff)
            try {
                version.marchDiff = JSON.parse(json.marchDiff);
            }
            catch (_c) {
                version.marchDiff = json.marchDiff;
            }
        else
            version.marchDiff = [0, 0, 0, 0, 5];
        if (json.aprilDiff)
            try {
                version.aprilDiff = JSON.parse(json.aprilDiff);
            }
            catch (_d) {
                version.aprilDiff = json.aprilDiff;
            }
        else
            version.aprilDiff = [0, 0, 2, 2, 5];
        if (json.mayDiff)
            try {
                version.mayDiff = JSON.parse(json.mayDiff);
            }
            catch (_e) {
                version.mayDiff = json.mayDiff;
            }
        else
            version.mayDiff = [4, 4, 4, 4, 5];
        if (json.juneDiff)
            try {
                version.juneDiff = JSON.parse(json.juneDiff);
            }
            catch (_f) {
                version.juneDiff = json.juneDiff;
            }
        else
            version.juneDiff = [4, 6, 6, 6, 5];
        if (json.julyDiff)
            try {
                version.julyDiff = JSON.parse(json.julyDiff);
            }
            catch (_g) {
                version.julyDiff = json.julyDiff;
            }
        else
            version.julyDiff = [10, 10, 10, 10, 5];
        if (json.augustDiff)
            try {
                version.augustDiff = JSON.parse(json.augustDiff);
            }
            catch (_h) {
                version.augustDiff = json.augustDiff;
            }
        else
            version.augustDiff = [10, 10, 10, 10, 5];
        if (json.septemberDiff)
            try {
                version.septemberDiff = JSON.parse(json.septemberDiff);
            }
            catch (_j) {
                version.septemberDiff = json.septemberDiff;
            }
        else
            version.septemberDiff = [6, 6, 6, 4, 5];
        if (json.octoberDiff)
            try {
                version.octoberDiff = JSON.parse(json.octoberDiff);
            }
            catch (_k) {
                version.octoberDiff = json.octoberDiff;
            }
        else
            version.octoberDiff = [4, 4, 4, 4, 5];
        if (json.novemberDiff)
            try {
                version.novemberDiff = JSON.parse(json.novemberDiff);
            }
            catch (_l) {
                version.novemberDiff = json.novemberDiff;
            }
        else
            version.novemberDiff = [2, 2, 0, 0, 5];
        if (json.decemberDiff)
            try {
                version.decemberDiff = JSON.parse(json.decemberDiff);
            }
            catch (_m) {
                version.decemberDiff = json.decemberDiff;
            }
        else
            version.decemberDiff = [0, 0, 0, 0, 5];
        if (json.creationDate)
            version.creationDate = _model_upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__["LocalDateTime"].loadFromJSON(json.creationDate);
        if (json.lastEditionDate)
            version.lastEditionDate = _model_upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__["LocalDateTime"].loadFromJSON(json.lastEditionDate);
        if (json.belts) {
            version.belts = [];
            json.belts.forEach(function (jsonBelt) { version.belts.push(_belt__WEBPACK_IMPORTED_MODULE_2__["Belt"].loadFromJSON(jsonBelt)); });
        }
        return version;
    };
    // Nodes
    Version.prototype.getNode = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                for (var k = 0; k < this.belts[i].branches[j].nodes.length; k++)
                    if (this.belts[i].branches[j].nodes[k].id === id)
                        return this.belts[i].branches[j].nodes[k];
        return null;
    };
    Version.prototype.getPreviousNode = function (id) {
        // Get branch, branchIndex & nodeIndex
        var branch = this.getBranchFromNode(id), branchIndex = this.getBranchIndex(branch.id), nodeIndex = this.getNodeIndex(id), previousNode = null;
        if (branchIndex > 0 && nodeIndex == 0)
            previousNode = this.getNode(branch.parentNode);
        else
            previousNode = branch.nodes[nodeIndex - 1];
        return previousNode;
    };
    Version.prototype.getNextNodes = function (id) {
        // Get branch, branchIndex & nodeIndex
        var branch = this.getBranchFromNode(id), nodeIndex = this.getNodeIndex(id), nextNodes = { nextNodeInBranch: null, nextNodeInChildBranch: null };
        // Get next node in the node's branch
        if (nodeIndex < branch.nodes.length - 1)
            nextNodes.nextNodeInBranch = branch.nodes[nodeIndex + 1];
        // Get next node from a child branch
        this.belts.forEach(function (belt) {
            belt.branches.forEach(function (branch) {
                if (branch.parentNode === id && branch.nodes.length > 0)
                    nextNodes.nextNodeInChildBranch = branch.nodes[0];
            });
        });
        return nextNodes;
    };
    Version.prototype.getNodeIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                for (var k = 0; k < this.belts[i].branches[j].nodes.length; k++)
                    if (this.belts[i].branches[j].nodes[k].id === id)
                        return k;
        return -1;
    };
    Version.prototype.getNodeNumberOfChild = function (id) {
        // Get branch & node
        var number = 0, branch = this.getBranchFromNode(id), node = this.getNode(id), nodeIndex = this.getNodeIndex(id);
        // Check error
        if (branch == undefined)
            return number;
        // Node not last of his branch
        if (nodeIndex < branch.nodes.length - 1)
            number++;
        // Branch has this node has parent
        if (this.getNodeChildBranch(id) != null)
            number++;
        // Check if control
        if (node.nodeType == _node__WEBPACK_IMPORTED_MODULE_3__["NodeType"].CONTROL)
            number++;
        return number;
    };
    Version.prototype.getSuppliedNodesNumberFromNode = function (id) {
        // Get Transformer, ElectricalBranch & nodeIndex
        var result = 0, transformer = this.getTransformerFromNode(id), electricalBranch = this.getElectricalBranchFromNode(id), nodeIndex = this.getElectricalNodeIndex(id);
        console.log(nodeIndex);
        // Check if node his the last of his branch
        if (nodeIndex < electricalBranch.electricalNodes.length - 1)
            result++;
        // Check if node is a parent node
        transformer.electricalBranches.forEach(function (electricalBranch) {
            if (electricalBranch.parentElectricalNode === id)
                result++;
        });
        return result;
    };
    // Branches
    Version.prototype.getBranch = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].id === id)
                    return this.belts[i].branches[j];
        return null;
    };
    Version.prototype.getBranchIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].id === id)
                    return j;
        return -1;
    };
    Version.prototype.getBranchFromNode = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                for (var k = 0; k < this.belts[i].branches[j].nodes.length; k++)
                    if (this.belts[i].branches[j].nodes[k].id === id)
                        return this.belts[i].branches[j];
        return null;
    };
    Version.prototype.getNodeChildBranch = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].parentNode === id)
                    return this.belts[i].branches[j];
        return null;
    };
    // Belts
    Version.prototype.getBelt = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            if (this.belts[i].id === id)
                return this.belts[i];
        return null;
    };
    Version.prototype.getBeltIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            if (this.belts[i].id === id)
                return i;
        return -1;
    };
    Version.prototype.getBeltFromBranch = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].id === id)
                    return this.belts[i];
        return null;
    };
    Version.prototype.getBeltFromElectricalOutlet = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                if (this.belts[i].electricalOutlets[j].id === id)
                    return this.belts[i];
            }
        }
        return null;
    };
    Version.prototype.getBeltFromProtectedArea = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].protectedAreas.length; j++)
                if (this.belts[i].protectedAreas[j].id === id)
                    return this.belts[i];
        return null;
    };
    Version.prototype.getMaxFlowPercentFromBelt = function (id) {
        var result = { nodeId: '', value: 0 }, belt = this.getBelt(id);
        belt.branches.forEach(function (branch) {
            branch.nodes.forEach(function (node) {
                if (node.flowPercent > result.value)
                    result = { nodeId: node.id, value: node.flowPercent };
            });
        });
        return result;
    };
    Version.prototype.getMinFlowPercentFromBelt = function (id) {
        var result = { nodeId: '', value: 10000 }, belt = this.getBelt(id);
        belt.branches.forEach(function (branch) {
            branch.nodes.forEach(function (node) {
                if (node.flowPercent < result.value)
                    result = { nodeId: node.id, value: node.flowPercent };
            });
        });
        return result.value == 10000 ? { nodeId: '', value: 0 } : result;
    };
    // Electric
    Version.prototype.getElectricalOutlet = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                if (this.belts[i].electricalOutlets[j].id === id)
                    return this.belts[i].electricalOutlets[j];
            }
        }
        return null;
    };
    Version.prototype.getElectricalOutletFromTransformer = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    if (this.belts[i].electricalOutlets[j].transformers[k].id === id)
                        return this.belts[i].electricalOutlets[j];
                }
            }
        }
        return null;
    };
    Version.prototype.getElectricalOutletIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                if (this.belts[i].electricalOutlets[j].id === id)
                    j;
            }
        }
        return -1;
    };
    Version.prototype.getTransformer = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    if (this.belts[i].electricalOutlets[j].transformers[k].id === id)
                        return this.belts[i].electricalOutlets[j].transformers[k];
                }
            }
        }
        return null;
    };
    Version.prototype.getTransformerFromNode = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        for (var m = 0; m < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes.length; m++) {
                            if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes[m].nodeId === id)
                                return this.belts[i].electricalOutlets[j].transformers[k];
                        }
                    }
                }
            }
        }
        return null;
    };
    Version.prototype.getTransformerFromElectricalBranch = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].id === id)
                            return this.belts[i].electricalOutlets[j].transformers[k];
                    }
                }
            }
        }
        return null;
    };
    Version.prototype.getTransformerIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    if (this.belts[i].electricalOutlets[j].transformers[k].id === id)
                        return k;
                }
            }
        }
        return -1;
    };
    Version.prototype.getElectricalBranch = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].id === id)
                            return this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l];
                    }
                }
            }
        }
        return null;
    };
    Version.prototype.getElectricalBranchFromNode = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        for (var m = 0; m < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes.length; m++) {
                            if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes[m].nodeId === id)
                                return this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l];
                        }
                    }
                }
            }
        }
        return null;
    };
    Version.prototype.getElectricalBranchIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].id === id)
                            return l;
                    }
                }
            }
        }
        return -1;
    };
    Version.prototype.getElectricalNodeIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        for (var m = 0; m < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes.length; m++) {
                            if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes[m].nodeId === id)
                                return m;
                        }
                    }
                }
            }
        }
        return -1;
    };
    // ProtectedAreas
    Version.prototype.getProtectedArea = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].protectedAreas.length; j++)
                if (this.belts[i].protectedAreas[j].id === id)
                    return this.belts[i].protectedAreas[j];
        return null;
    };
    Version.prototype.getProtectedAreaIndex = function (id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].protectedAreas.length; j++)
                if (this.belts[i].protectedAreas[j].id === id)
                    return j;
        return -1;
    };
    // Methods
    Version.prototype.setNodePosition = function (id, lat, lng) {
        // Get node, nodeIndex, branch
        var node = this.getNode(id), nodeIndex = this.getNodeIndex(id), branch = this.getBranchFromNode(id), childBranch = this.getNodeChildBranch(id);
        // Edit node
        node.lat = lat;
        node.lng = lng;
        // Update child node distance
        if (nodeIndex < branch.nodes.length - 1) {
            // Get child node
            var childNode = branch.nodes[nodeIndex + 1];
            // Calculate new distance
            childNode.prevDistance = this.getDistance({ lat: childNode.lat, lng: childNode.lng }, { lat: node.lat, lng: node.lng });
        }
        // Check if parent node of an other branch
        if (childBranch) {
            // Get child Node
            var childNode = childBranch.nodes[0];
            // Calculate new distance
            childNode.prevDistance = this.getDistance({ lat: childNode.lat, lng: childNode.lng }, { lat: node.lat, lng: node.lng });
        }
    };
    Version.prototype.setElectricalOutletPosition = function (id, lat, lng) {
        // Get electricalOutlet
        var electricalOutlet = this.getElectricalOutlet(id);
        // Edition
        electricalOutlet.lat = lat;
        electricalOutlet.lng = lng;
    };
    Version.prototype.delNode = function (id) {
        // Get branch, childBranch & nodeIndex
        var branch = this.getBranchFromNode(id), childBranch = this.getNodeChildBranch(id), nodeIndex = this.getNodeIndex(id);
        // Check child branch
        if (childBranch != null)
            this.delBranch(childBranch.id);
        // Delete electrical node reference
        this.delElectricalNode(id);
        // Delete
        branch.nodes.splice(nodeIndex, 1);
        // Check branch
        if (branch.nodes.length == 0)
            this.delBranch(branch.id);
    };
    Version.prototype.delNodeAndChildren = function (id) {
        var _this = this;
        // Get branch & nodeIndex
        var branch = this.getBranchFromNode(id), nodeIndex = this.getNodeIndex(id);
        // Del nodes
        var nodesIds = [];
        branch.nodes.forEach(function (node, index) {
            if (index >= nodeIndex)
                nodesIds.push(node.id);
        });
        nodesIds.forEach(function (nodeId) {
            _this.delNode(nodeId);
        });
    };
    Version.prototype.delBranch = function (id) {
        var _this = this;
        // Get belt, branch & branchIndex
        var belt = this.getBeltFromBranch(id), branch = this.getBranch(id), branchIndex = this.getBranchIndex(id);
        // Del all electrical nodes references
        branch.nodes.forEach(function (node) {
            _this.delElectricalNode(node.id);
        });
        // Find child branches
        belt.branches.filter(function (b) { return b.parentBranch === id; }).forEach(function (b) {
            _this.delBranch(b.id);
        });
        // Delete
        belt.branches.splice(branchIndex, 1);
    };
    Version.prototype.delBelt = function (id) {
        this.belts.splice(this.getBeltIndex(id), 1);
    };
    Version.prototype.addNode = function (node, branch, index) {
        // Add node
        branch.nodes.splice(index, 0, node);
        // Check electrical Part
        var previousNode = this.getPreviousNode(node.id), nextNodeInBranch = this.getNextNodes(node.id).nextNodeInBranch;
        if (previousNode != null && nextNodeInBranch != null) {
            var previousNodeElectricalBranch = this.getElectricalBranchFromNode(previousNode.id), nextNodeInBranchElectricalBranch = this.getElectricalBranchFromNode(nextNodeInBranch.id);
            // Check if same electricalBranch
            if (previousNodeElectricalBranch && nextNodeInBranchElectricalBranch && previousNodeElectricalBranch.id == nextNodeInBranchElectricalBranch.id) {
                var previousElectricalNodeIndex = this.getElectricalNodeIndex(previousNode.id);
                if (previousElectricalNodeIndex != -1) {
                    var electricalNode = new _electricalNode__WEBPACK_IMPORTED_MODULE_5__["ElectricalNode"]();
                    electricalNode.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID();
                    electricalNode.nodeId = node.id;
                    previousNodeElectricalBranch.electricalNodes.splice(previousElectricalNodeIndex + 1, 0, electricalNode);
                }
            }
        }
    };
    Version.prototype.delElectricalOutlet = function (id) {
        // Get belt & electricalOutletIndex
        var belt = this.getBeltFromElectricalOutlet(id), electricalOutletIndex = this.getElectricalOutletIndex(id);
        // Delete
        belt.electricalOutlets.splice(electricalOutletIndex, 1);
    };
    Version.prototype.delTransformer = function (id) {
        // Get electricalOutlet & transformerIndex
        var electricalOutlet = this.getElectricalOutletFromTransformer(id), transformerIndex = this.getTransformerIndex(id);
        // Delete
        electricalOutlet.transformers.splice(transformerIndex, 1);
    };
    Version.prototype.isNodeInElectricalBranch = function (id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    for (var l = 0; l < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches.length; l++) {
                        for (var m = 0; m < this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes.length; m++) {
                            if (this.belts[i].electricalOutlets[j].transformers[k].electricalBranches[l].electricalNodes[m].nodeId === id)
                                return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    Version.prototype.addElectricalBranch = function (transformerId) {
        // Get transformer & new id
        var transformer = this.getTransformer(transformerId), id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID();
        // Create
        var electricalBranch = new _electricalBranch__WEBPACK_IMPORTED_MODULE_4__["ElectricalBranch"]();
        electricalBranch.id = id;
        transformer.electricalBranches.push(electricalBranch);
        return id;
    };
    Version.prototype.editElectricalBranch = function (id, parentElectricalBranch, parentElectricalNode) {
        // Get electricalBranch
        var electricalBranch = this.getElectricalBranch(id);
        // Edit
        electricalBranch.parentElectricalBranch = parentElectricalBranch;
        electricalBranch.parentElectricalNode = parentElectricalNode;
    };
    Version.prototype.delElectricalBranch = function (id) {
        // Get transformer & electricalBranchIndex
        var transformer = this.getTransformerFromElectricalBranch(id), electricalBranchIndex = this.getElectricalBranchIndex(id);
        // Delete
        transformer.electricalBranches.splice(electricalBranchIndex, 1);
    };
    Version.prototype.addElectricalNode = function (electricalBranchId, nodeId) {
        // Get electricalBranch & new Id
        var electricalBranch = this.getElectricalBranch(electricalBranchId), id = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID();
        // Add
        var electricalNode = new _electricalNode__WEBPACK_IMPORTED_MODULE_5__["ElectricalNode"]();
        electricalNode.id = id;
        electricalNode.nodeId = nodeId;
        electricalBranch.electricalNodes.push(electricalNode);
        return id;
    };
    Version.prototype.addNodeToTransformer = function (nodeId, transformerId, startNodeId) {
        if (startNodeId === void 0) { startNodeId = null; }
        // Get node, nodeIndex & transformer
        var node = this.getNode(nodeId), nodeIndex = this.getNodeIndex(nodeId), transformer = this.getTransformer(transformerId);
        if (startNodeId == null)
            startNodeId = nodeId;
        // The transformer has no electrical branches
        if (transformer.electricalBranches.length == 0) {
            // Création de la branche principale
            var electricalBranchId = this.addElectricalBranch(transformerId);
            // Ajout du noeud selectionné à la branche
            this.addElectricalNode(electricalBranchId, nodeId);
            return true;
        }
        // The transformer has electrical branches
        else {
            /// Find the node supplied by the selected transformer
            // 1. Going up
            // Get the previous node
            var previousNode = this.getPreviousNode(nodeId);
            // The previous node exists
            if (previousNode != null && startNodeId != previousNode.id) {
                // The previous node is supplied
                var previousNodeTransformer = this.getTransformerFromNode(previousNode.id);
                if (previousNodeTransformer != null) {
                    // The previous node's transformer is the one selected
                    if (previousNodeTransformer.id === transformerId) {
                        // Get the previous node's electrical branch
                        var electricalBranch = this.getElectricalBranchFromNode(previousNode.id);
                        // Get the previous node's electrical nodes number
                        if (this.getSuppliedNodesNumberFromNode(previousNode.id) == 0) {
                            // Add the node to the previous node's electrical branch
                            this.addElectricalNode(electricalBranch.id, nodeId);
                            return true;
                        }
                        else {
                            // Create a new electrical branch
                            var newElectricalBranchId = this.addElectricalBranch(previousNodeTransformer.id);
                            this.editElectricalBranch(newElectricalBranchId, electricalBranch.id, previousNode.id);
                            // Add the node to the created electrical branch
                            this.addElectricalNode(newElectricalBranchId, nodeId);
                            return true;
                        }
                    }
                }
                // The previous node isn't supplied
                else {
                    // Continue the search on previous nodes
                    if (this.addNodeToTransformer(previousNode.id, transformerId, nodeId)) {
                        // Get the electrical branch
                        var electricalBranch = this.getElectricalBranchFromNode(previousNode.id);
                        // Add the node to this branch
                        this.addElectricalNode(electricalBranch.id, nodeId);
                        return true;
                    }
                }
            }
            // 1. Going down
            // Get the next node
            var nextNodes = this.getNextNodes(nodeId);
            // 1.1 First we look into the child branch
            if (nextNodes.nextNodeInChildBranch != null && startNodeId != nextNodes.nextNodeInChildBranch.id) {
                // The next node is supplied
                var nextNodeTransformer = this.getTransformerFromNode(nextNodes.nextNodeInChildBranch.id);
                if (nextNodeTransformer != null) {
                    // The next node's transformer is the one selected
                    if (nextNodeTransformer.id === transformerId) {
                        // Get the next node's electrical branch
                        var electricalBranch = this.getElectricalBranchFromNode(nextNodes.nextNodeInChildBranch.id);
                        // Get the next node's electrical nodes number
                        if (this.getSuppliedNodesNumberFromNode(nextNodes.nextNodeInChildBranch.id) == 0) {
                            // Add the node to the next node's electrical branch
                            this.addElectricalNode(electricalBranch.id, node.id);
                            return true;
                        }
                        else {
                            // Create a new electrical branch
                            var newElectricalBranchId = this.addElectricalBranch(nextNodeTransformer.id);
                            this.editElectricalBranch(newElectricalBranchId, electricalBranch.id, nextNodes.nextNodeInChildBranch.id);
                            // Add the node to the created electrical branch
                            this.addElectricalNode(newElectricalBranchId, nodeId);
                            return true;
                        }
                    }
                }
                // The previous node isn't supplied
                else {
                    // Continue the search on next nodes
                    if (this.addNodeToTransformer(nextNodes.nextNodeInChildBranch.id, transformerId, nodeId)) {
                        // Get the electrical branch
                        var electricalBranch = this.getElectricalBranchFromNode(nextNodes.nextNodeInChildBranch.id);
                        // Add the node to this branch
                        this.addElectricalNode(electricalBranch.id, nodeId);
                        return true;
                    }
                }
            }
            // 1.1 Then we look into the next node's branch
            if (nextNodes.nextNodeInBranch != null && startNodeId != nextNodes.nextNodeInBranch.id) {
                // The next node is supplied
                var nextNodeTransformer = this.getTransformerFromNode(nextNodes.nextNodeInBranch.id);
                if (nextNodeTransformer != null) {
                    // The next node's transformer is the one selected
                    if (nextNodeTransformer.id === transformerId) {
                        // Get the next node's electrical branch
                        var electricalBranch = this.getElectricalBranchFromNode(nextNodes.nextNodeInBranch.id);
                        // Get the next node's electrical nodes number
                        if (this.getSuppliedNodesNumberFromNode(nextNodes.nextNodeInBranch.id) == 0) {
                            // Ajout du noeud à la branche électrique
                            this.addElectricalNode(electricalBranch.id, nodeId);
                            return true;
                        }
                        else {
                            // Création d'une nouvelle branche électrique
                            var newElectricalBranchId = this.addElectricalBranch(nextNodeTransformer.id);
                            this.editElectricalBranch(newElectricalBranchId, electricalBranch.id, nextNodes.nextNodeInBranch.id);
                            // Ajout du noeud à la nouvelle branche électrique
                            this.addElectricalNode(newElectricalBranchId, nodeId);
                            return true;
                        }
                    }
                }
                // Le noeud suivant n'est pas alimenté
                else {
                    // On continue la recherche sur les noeud suivants
                    if (this.addNodeToTransformer(nextNodes.nextNodeInBranch.id, transformerId, nodeId)) {
                        // Récupération de la branche électrique
                        var electricalBranch = this.getElectricalBranchFromNode(nextNodes.nextNodeInBranch.id);
                        // Ajout du noeud à la branche électrique
                        this.addElectricalNode(electricalBranch.id, nodeId);
                        return true;
                    }
                }
            }
        }
        return false;
    };
    Version.prototype.delNodeFromElectricalBranch = function (id) {
        var _this = this;
        this.belts.forEach(function (belt) {
            belt.electricalOutlets.forEach(function (electricalOutlet) {
                electricalOutlet.transformers.forEach(function (transformer) {
                    transformer.electricalBranches.forEach(function (electricalBranch) {
                        electricalBranch.electricalNodes.forEach(function (electricalNode, nodeIndex) {
                            if (electricalNode.nodeId === id) {
                                // Only node of his branch
                                if (electricalBranch.electricalNodes.length == 1) {
                                    // Delete branch
                                    _this.delElectricalBranch(electricalBranch.id);
                                }
                                // Last node of his branch
                                else if (nodeIndex == electricalBranch.electricalNodes.length - 1) {
                                    _this.delElectricalNode(id);
                                }
                                else {
                                    // Delete all nodes of the branch
                                    electricalBranch.electricalNodes.forEach(function (electricalNode2, nodeIndex2) {
                                        if (nodeIndex2 > nodeIndex) {
                                            _this.delNodeFromElectricalBranch(electricalNode2.nodeId);
                                            _this.delElectricalNode(id);
                                        }
                                    });
                                }
                                // Delete child branches
                                transformer.electricalBranches.filter(function (eb) { return eb.parentElectricalNode == id; }).forEach(function (eb) {
                                    _this.delElectricalBranch(eb.id);
                                });
                            }
                        });
                    });
                });
            });
        });
    };
    Version.prototype.delElectricalNode = function (id) {
        // Get electricalBranch & nodeIndex
        var electricalBranch = this.getElectricalBranchFromNode(id), nodeIndex = this.getElectricalNodeIndex(id);
        // Check if node is supplied
        if (electricalBranch != null) {
            // Delete
            electricalBranch.electricalNodes.splice(nodeIndex, 1);
            // Check electricalBranch's node array size
            if (electricalBranch.electricalNodes.length == 0)
                this.delElectricalBranch(electricalBranch.id); // Remove electricalBranch
        }
    };
    Version.prototype.delProtectedArea = function (id) {
        // Get belt & protectedAreaIndex
        var belt = this.getBeltFromProtectedArea(id), protectedAreaIndex = this.getProtectedAreaIndex(id);
        if (belt != null && protectedAreaIndex != -1)
            belt.protectedAreas.splice(protectedAreaIndex, 1);
    };
    Version.prototype.getDistance = function (latLng1, latLng2) {
        function rad(x) {
            return x * Math.PI / 180;
        }
        var R = 6378137, // Earth’s mean radius in meter
        dLat = rad(latLng2.lat - latLng1.lat), dLong = rad(latLng2.lng - latLng1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(latLng1.lat)) * Math.cos(rad(latLng2.lat)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };
    Version.prototype.getMinMaxDailyConsumption = function (belt, max) {
        if (max === void 0) { max = true; }
        var kgConsumed = max ? 0 : 10000;
        if (belt.branches[0] && belt.branches[0].nodes[0]) {
            // January
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.januaryDiff[i] * (this.januaryDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // February
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.februaryDiff[i] * (this.februaryDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // March
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.marchDiff[i] * (this.marchDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // April
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.aprilDiff[i] * (this.aprilDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // May
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.mayDiff[i] * (this.mayDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // June
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.juneDiff[i] * (this.juneDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // July
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.julyDiff[i] * (this.julyDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // August
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.augustDiff[i] * (this.augustDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // September
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.septemberDiff[i] * (this.septemberDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // October
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.octoberDiff[i] * (this.octoberDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // November
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.novemberDiff[i] * (this.novemberDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
            // December
            for (var i = 0; i < 4; i++) {
                var consumption = 20 * belt.trapsNumber * this.decemberDiff[i] * (this.decemberDiff[4] / 10) / 1000;
                if (max && consumption > kgConsumed)
                    kgConsumed = consumption;
                else if (!max && consumption > 0 && consumption < kgConsumed)
                    kgConsumed = consumption;
            }
        }
        if (kgConsumed == 10000)
            return 0;
        else
            return kgConsumed;
    };
    Version.prototype.getMinMaxMonthlyConsumption = function (belt, max) {
        if (max === void 0) { max = true; }
        var kgConsumed = max ? 0 : 10000;
        if (belt.branches[0] && belt.branches[0].nodes[0]) {
            // January
            var januaryConsumption = 0;
            for (var i = 0; i < 4; i++)
                januaryConsumption += 20 * belt.trapsNumber * this.januaryDiff[i] * 7 * (this.januaryDiff[4] / 10) / 1000;
            if (max && januaryConsumption > kgConsumed)
                kgConsumed = januaryConsumption;
            else if (!max && januaryConsumption > 0 && januaryConsumption < kgConsumed)
                kgConsumed = januaryConsumption;
            // February
            var februaryConsumption = 0;
            for (var i = 0; i < 4; i++)
                februaryConsumption += 20 * belt.trapsNumber * this.februaryDiff[i] * 7 * (this.februaryDiff[4] / 10) / 1000;
            if (max && februaryConsumption > kgConsumed)
                kgConsumed = februaryConsumption;
            else if (!max && februaryConsumption > 0 && februaryConsumption < kgConsumed)
                kgConsumed = februaryConsumption;
            // March
            var marchConsumption = 0;
            for (var i = 0; i < 4; i++)
                marchConsumption += 20 * belt.trapsNumber * this.marchDiff[i] * 7 * (this.marchDiff[4] / 10) / 1000;
            if (max && marchConsumption > kgConsumed)
                kgConsumed = marchConsumption;
            else if (!max && marchConsumption > 0 && marchConsumption < kgConsumed)
                kgConsumed = marchConsumption;
            // April
            var aprilConsumption = 0;
            for (var i = 0; i < 4; i++)
                aprilConsumption += 20 * belt.trapsNumber * this.aprilDiff[i] * 7 * (this.aprilDiff[4] / 10) / 1000;
            if (max && aprilConsumption > kgConsumed)
                kgConsumed = aprilConsumption;
            else if (!max && aprilConsumption > 0 && aprilConsumption < kgConsumed)
                kgConsumed = aprilConsumption;
            // May
            var mayConsumption = 0;
            for (var i = 0; i < 4; i++)
                mayConsumption += 20 * belt.trapsNumber * this.mayDiff[i] * 7 * (this.mayDiff[4] / 10) / 1000;
            if (max && mayConsumption > kgConsumed)
                kgConsumed = mayConsumption;
            else if (!max && mayConsumption > 0 && mayConsumption < kgConsumed)
                kgConsumed = mayConsumption;
            // June
            var juneConsumption = 0;
            for (var i = 0; i < 4; i++)
                juneConsumption += 20 * belt.trapsNumber * this.juneDiff[i] * 7 * (this.juneDiff[4] / 10) / 1000;
            if (max && juneConsumption > kgConsumed)
                kgConsumed = juneConsumption;
            else if (!max && juneConsumption > 0 && juneConsumption < kgConsumed)
                kgConsumed = juneConsumption;
            // July
            var julyConsumption = 0;
            for (var i = 0; i < 4; i++)
                julyConsumption += 20 * belt.trapsNumber * this.julyDiff[i] * 7 * (this.julyDiff[4] / 10) / 1000;
            if (max && julyConsumption > kgConsumed)
                kgConsumed = julyConsumption;
            else if (!max && julyConsumption > 0 && julyConsumption < kgConsumed)
                kgConsumed = julyConsumption;
            // August
            var augustConsumption = 0;
            for (var i = 0; i < 4; i++)
                augustConsumption += 20 * belt.trapsNumber * this.augustDiff[i] * 7 * (this.augustDiff[4] / 10) / 1000;
            if (max && augustConsumption > kgConsumed)
                kgConsumed = augustConsumption;
            else if (!max && augustConsumption > 0 && augustConsumption < kgConsumed)
                kgConsumed = augustConsumption;
            // September
            var septemberConsumption = 0;
            for (var i = 0; i < 4; i++)
                septemberConsumption += 20 * belt.trapsNumber * this.septemberDiff[i] * 7 * (this.septemberDiff[4] / 10) / 1000;
            if (max && septemberConsumption > kgConsumed)
                kgConsumed = septemberConsumption;
            else if (!max && septemberConsumption > 0 && septemberConsumption < kgConsumed)
                kgConsumed = septemberConsumption;
            // October
            var octoberConsumption = 0;
            for (var i = 0; i < 4; i++)
                octoberConsumption += 20 * belt.trapsNumber * this.octoberDiff[i] * 7 * (this.octoberDiff[4] / 10) / 1000;
            if (max && octoberConsumption > kgConsumed)
                kgConsumed = octoberConsumption;
            else if (!max && octoberConsumption > 0 && octoberConsumption < kgConsumed)
                kgConsumed = octoberConsumption;
            // November
            var novemberConsumption = 0;
            for (var i = 0; i < 4; i++)
                novemberConsumption += 20 * belt.trapsNumber * this.novemberDiff[i] * 7 * (this.novemberDiff[4] / 10) / 1000;
            if (max && novemberConsumption > kgConsumed)
                kgConsumed = novemberConsumption;
            else if (!max && novemberConsumption > 0 && novemberConsumption < kgConsumed)
                kgConsumed = novemberConsumption;
            // December
            var decemberConsumption = 0;
            for (var i = 0; i < 4; i++)
                decemberConsumption += 20 * belt.trapsNumber * this.decemberDiff[i] * 7 * (this.decemberDiff[4] / 10) / 1000;
            if (max && decemberConsumption > kgConsumed)
                kgConsumed = decemberConsumption;
            else if (!max && decemberConsumption > 0 && decemberConsumption < kgConsumed)
                kgConsumed = decemberConsumption;
        }
        if (kgConsumed == 10000)
            return 0;
        else
            return kgConsumed;
    };
    Version.prototype.getSeasonalConsumption = function (belt) {
        var kgConsumed = 0;
        if (belt.branches[0] && belt.branches[0].nodes[0]) {
            var beltRefConsumption = belt.branches[0].nodes[0].flowIn;
            // January
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.januaryDiff[i] * 7 * (this.januaryDiff[4] / 10) / 1000;
            // February
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.februaryDiff[i] * 7 * (this.februaryDiff[4] / 10) / 1000;
            // March
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.marchDiff[i] * 7 * (this.marchDiff[4] / 10) / 1000;
            // April
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.aprilDiff[i] * 7 * (this.aprilDiff[4] / 10) / 1000;
            // May
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.mayDiff[i] * 7 * (this.mayDiff[4] / 10) / 1000;
            // June
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.juneDiff[i] * 7 * (this.juneDiff[4] / 10) / 1000;
            // July
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.julyDiff[i] * 7 * (this.julyDiff[4] / 10) / 1000;
            // August
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.augustDiff[i] * 7 * (this.augustDiff[4] / 10) / 1000;
            // September
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.septemberDiff[i] * 7 * (this.septemberDiff[4] / 10) / 1000;
            // October
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.octoberDiff[i] * 7 * (this.octoberDiff[4] / 10) / 1000;
            // November
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.novemberDiff[i] * 7 * (this.novemberDiff[4] / 10) / 1000;
            // December
            for (var i = 0; i < 4; i++)
                kgConsumed += 20 * belt.trapsNumber * this.decemberDiff[i] * 7 * (this.decemberDiff[4] / 10) / 1000;
        }
        return kgConsumed;
    };
    return Version;
}());

var VersionType;
(function (VersionType) {
    VersionType["PRE_ESTIMATE"] = "PRE_ESTIMATE";
    VersionType["ESTIMATE"] = "ESTIMATE";
    VersionType["ACCEPTED_ESTIMATE"] = "ACCEPTED_ESTIMATE";
    VersionType["INSTALLATION"] = "INSTALLATION";
})(VersionType || (VersionType = {}));


/***/ })

}]);
//# sourceMappingURL=default~canvas-canvas-module~instalpieges-instalpieges-module-es5.js.map