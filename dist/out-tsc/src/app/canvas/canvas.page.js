import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { NodeType } from '../model/project/node';
import { TrapsColor } from '../model/project/belt';
import { CAD, Tool, Mode } from '../model/project/cad';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { GlobalService } from '../api/global.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
let CADCanvasComponent = class CADCanvasComponent {
    constructor(upcv3service, global, storage, platform) {
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
    ngAfterViewInit() {
        this.canvasElt = this.backgroundImageCanvas.nativeElement;
        this.canvasElt.width = this.platform.width();
        this.canvasElt.height = this.platform.height() / 2;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Init canvas
            yield this.storage.get('token').then((val) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.token = val;
                yield this.upcv3service.getProject(this.token).subscribe(res => {
                    res.result.forEach(item => {
                        if (item.client === this.global.upc3.upcNameId) {
                            this.project = item;
                        }
                    });
                });
                yield setTimeout(() => {
                    this.upcv3service.getVersion(this.project.id, this.token).subscribe(res => {
                        this.version = res.result;
                        alert(JSON.stringify(res.result));
                        this.cad = new CAD(this.project, this.version);
                    });
                }, 500);
            }));
            yield setTimeout(() => {
                this.onDraw();
            }, 5000);
        });
    }
    startDrawing(ev) {
        this.drawing = true;
        var canvasPosition = this.canvasElt.getBoundingClientRect();
        this.saveX = ev.pageX - canvasPosition.x;
        this.saveY = ev.pageY - canvasPosition.y;
    }
    endDrawing() {
        this.drawing = false;
    }
    selectColor(color) {
        this.selectedColor = color;
    }
    onDraw() {
        var width = 700, height = 700;
        // General
        this.cad.translatePosition.x = width / 2;
        this.cad.translatePosition.y = height / 2;
        // Background Image
        this.backgroundImageCanvas.nativeElement.width = width;
        this.backgroundImageCanvas.nativeElement.height = height;
        this.backgroundImage = new Image();
        this.backgroundImage.crossOrigin = "anonymous";
        this.backgroundImage.src = `https://maps.googleapis.com/maps/api/staticmap?center=${this.cad.project.lat},${this.cad.project.lng}&zoom=${this.cad.project.zoom}&size=${this.cad.googleMapsParams.width}x${this.cad.googleMapsParams.height}&scale=${this.cad.googleMapsParams.scale}&maptype=${this.cad.version.mapType}&style=feature:all|element:labels|visibility:off&key=AIzaSyDNhsUG6VjyDQ_R_gZ2cT2ktTBbsy6M_uQ`;
        this.backgroundImage.onload = function () { this.drawBackgroundImage(); }.bind(this);
        // Custom Image
        if (this.cad.project.customPicture) {
            // Download
            this.upcv3service.downloadCustomPicture(this.cad.project.id, this.token).subscribe(res => {
                this.customImage = new Image();
                this.customImage.crossOrigin = "anonymous";
                this.customImage.src = URL.createObjectURL(new Blob([res]));
                this.customImage.onload = function () { this.drawBackgroundImage(); }.bind(this);
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
    }
    clear() {
        this.drawBackgroundImage();
    }
    // Resize Event
    onResize(e) {
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
    }
    moved(ev) {
        if (!this.drawing)
            return;
        var canvasPosition = this.canvasElt.getBoundingClientRect();
        let ctx = this.canvasElt.getContext('2d');
        let currentX = ev.touches[0].pageX - canvasPosition.x;
        let currentY = ev.touches[0].pageY - canvasPosition.y;
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
    }
    // Mouse events */
    onMouseDown(e) {
        // When selecting pixels ratio
        if (this.cad.tool == Tool.SELECT_PIXELS_RATIO) {
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
        if (this.cad.tool == Tool.SELECT_PARENT_NODE) {
            // Get node
            var selectedNode, clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            // Find & select the nearest
            this.cad.version.belts.forEach(belt => {
                belt.branches.forEach(branch => {
                    branch.nodes.forEach(node => {
                        // Get actual position
                        var nodePosition = this.cad.getPosition(node.lat, node.lng), nodePos = this.cad.rotate(0, 0, nodePosition.x, nodePosition.y, -this.cad.version.rotation), distance = this.cad.distance(x, y, nodePos.x, nodePos.y);
                        if (minDistance == null || minDistance > distance) {
                            minDistance = distance;
                            if (minDistance <= this.cad.version.iconsSize / 2)
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
        if (this.cad.tool == Tool.DRAW) {
            // 1. Check if point under pointer
            this.selectedDrawingPointIndex = null;
            var clickPos = this.getClickPosition(e), x = clickPos.x, y = clickPos.y, minDistance = null;
            this.cad.drawPolyPath.forEach((path, index) => {
                var pathPos = this.cad.rotate(0, 0, path.x, path.y, -this.cad.version.rotation), distance = this.cad.distance(x, y, pathPos.x, pathPos.y);
                if (minDistance == null || minDistance > distance) {
                    minDistance = distance;
                    if (minDistance <= this.cad.version.iconsSize / 2)
                        this.selectedDrawingPointIndex = index;
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
            this.cad.selectedProtectedArea.points.forEach((point, index) => {
                var pointPosition = this.cad.getPosition(point[0], point[1]), pointPos = this.cad.rotate(0, 0, pointPosition.x, pointPosition.y, -this.cad.version.rotation), distance = this.cad.distance(x, y, pointPos.x, pointPos.y);
                if (minDistance == null || minDistance > distance) {
                    minDistance = distance;
                    if (minDistance <= this.cad.version.iconsSize / 2)
                        this.cad.selectedProtectedAreaPointIndex = index;
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
            this.cad.version.belts.forEach(belt => {
                // CO2
                belt.branches.forEach(branch => {
                    branch.nodes.forEach(node => {
                        // Get actual position
                        var nodePosition = this.cad.getPosition(node.lat, node.lng), nodePos = this.cad.rotate(0, 0, nodePosition.x, nodePosition.y, -this.cad.version.rotation), distance = this.cad.distance(x, y, nodePos.x, nodePos.y);
                        if (minDistance == null || minDistance > distance) {
                            minDistance = distance;
                            if (minDistance <= this.cad.version.iconsSize / 2)
                                selectedNode = node.id;
                        }
                    });
                });
                // ELECTRIC
                minDistance = null;
                belt.electricalOutlets.forEach(electricalOutlet => {
                    // Get actual position
                    var electricalOutletPosition = this.cad.getPosition(electricalOutlet.lat, electricalOutlet.lng), electricalOutletPositionPos = this.cad.rotate(0, 0, electricalOutletPosition.x, electricalOutletPosition.y, -this.cad.version.rotation), distance = this.cad.distance(x, y, electricalOutletPositionPos.x, electricalOutletPositionPos.y);
                    if (minDistance == null || minDistance > distance) {
                        minDistance = distance;
                        if (minDistance <= this.cad.version.iconsSize / 2)
                            selectedElectricalOutlet = electricalOutlet.id;
                    }
                    if (this.cad.mode == Mode.ELECTRIC) {
                        electricalOutlet.transformers.forEach(transformer => {
                            var transformerPosition = {
                                x: electricalOutletPosition.x + (this.cad.version.iconsSize * 2 / 2) * Math.cos((transformer.angle) * Math.PI / 180),
                                y: electricalOutletPosition.y + (this.cad.version.iconsSize * 2 / 2) * Math.sin((transformer.angle) * Math.PI / 180)
                            }, transformerPos = this.cad.rotate(0, 0, transformerPosition.x, transformerPosition.y, -this.cad.version.rotation);
                            distance = this.cad.distance(x, y, transformerPos.x, transformerPos.y);
                            if (minDistance == null || minDistance > distance) {
                                minDistance = distance;
                                if (minDistance <= this.cad.version.iconsSize / 2)
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
    }
    onMouseMove(e) {
        var clickPos = this.getClickPosition(e), correctedPos = this.cad.rotate(0, 0, clickPos.x, clickPos.y, this.cad.version.rotation);
        // When selecting pixels ratio
        if (this.cad.tool == Tool.SELECT_PIXELS_RATIO)
            return;
        // When selecting parent node
        if (this.cad.tool == Tool.SELECT_PARENT_NODE)
            return;
        // When drawing
        if (this.cad.tool == Tool.DRAW) {
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
                            var parentBranch = this.cad.selectedBelt.branches.find(b => b.id == this.cad.selectedBranch.parentBranch), parentNode = parentBranch.nodes.find(n => n.id == this.cad.selectedBranch.parentNode);
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
    }
    onContextMenu(e) {
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
    }
    /* Events */
    mapTypeChanged() {
        this.backgroundImage.src = `https://maps.googleapis.com/maps/api/staticmap?center=${this.cad.project.lat},${this.cad.project.lng}&zoom=${this.cad.project.zoom}&size=${this.cad.googleMapsParams.width}x${this.cad.googleMapsParams.height}&scale=${this.cad.googleMapsParams.scale}&maptype=${this.cad.version.mapType}&style=feature:all|element:labels|visibility:off&key=AIzaSyDNhsUG6VjyDQ_R_gZ2cT2ktTBbsy6M_uQ`;
        this.drawBackgroundImage();
    }
    selectionChanged() {
        this.drawBelts();
        this.drawProtectedAreas();
        this.drawElectric();
    }
    rotationZoomChanged() {
        this.drawBackgroundImage();
        this.drawBelts();
        this.drawProtectedAreas();
        this.drawElectric();
    }
    iconsSizeChanged() {
        // Edit markers
        this.controlImage.width = this.controlImage.height =
            this.controlImageSheltered.width = this.controlImageSheltered.height =
                this.hexagonalTrap1Image.width = this.hexagonalTrap1Image.height =
                    this.hexagonalTrap2Image.width = this.hexagonalTrap2Image.height =
                        this.hexagonalTrap3Image.width = this.hexagonalTrap3Image.height =
                            this.rectangularTrap1Image.width = this.rectangularTrap1Image.height = this.cad.version.iconsSize;
        this.drawBelts();
    }
    opacityChanged() {
        this.drawBackgroundImage();
    }
    beltChanged() {
        this.drawBelts();
        this.drawElectric();
    }
    protectedAreaChanged() {
        this.drawProtectedAreas();
    }
    drawChanged() {
        this.drawDrawing();
    }
    /* Draw */
    drawBackgroundImage() {
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
            context.fillStyle = `rgba(200, 200, 200, ${this.cad.version.mapOpacity / 100})`;
            context.fill();
            context.restore();
        }
    }
    drawBelts() {
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
        this.cad.version.belts.forEach(belt => {
            belt.branches.filter(b => b.nodes.length > 0).forEach(branch => {
                // Color
                var color = branch.color;
                if (this.cad.mode == Mode.ELECTRIC)
                    color = '#303030';
                // Draw inter-branch lines
                if (branch.parentBranch != null && branch.parentNode != null) {
                    // Get branch and node
                    var parentNode = this.cad.version.getNode(branch.parentNode), parentNodePosition = parentNode != null ? this.cad.getPosition(parentNode.lat, parentNode.lng) : null;
                    // Get first node of currentBranch
                    var firstNode = branch.nodes[0];
                    var firstNodePosition = this.cad.getPosition(firstNode.lat, firstNode.lng);
                    // Check
                    if (parentNode != null && firstNode != null) {
                        if (firstNode.prevLinkBuried) {
                            this.drawDotLine(firstNodePosition.x, firstNodePosition.y, parentNodePosition.x, parentNodePosition.y, color, branch.width);
                        }
                        else {
                            this.drawLine(firstNodePosition.x, firstNodePosition.y, parentNodePosition.x, parentNodePosition.y, color, branch.width);
                        }
                    }
                }
                branch.nodes.forEach((node, index) => {
                    if (index > 0) {
                        // Nodes position
                        var previousNodePosition = this.cad.getPosition(branch.nodes[index - 1].lat, branch.nodes[index - 1].lng);
                        var nodePosition = this.cad.getPosition(node.lat, node.lng);
                        // Draw line
                        if (node.prevLinkBuried) {
                            this.drawDotLine(nodePosition.x, nodePosition.y, previousNodePosition.x, previousNodePosition.y, color, branch.width);
                        }
                        else {
                            this.drawLine(nodePosition.x, nodePosition.y, previousNodePosition.x, previousNodePosition.y, color, branch.width);
                        }
                    }
                });
            });
        });
        // Then draw markers & number
        this.cad.version.belts.forEach((belt, index) => {
            var suffixIndex = [{ suffix: '', index: 1 }];
            belt.branches.forEach(branch => {
                // Color
                var color = branch.numbersColor;
                if (this.cad.mode == Mode.ELECTRIC)
                    color = '#303030';
                if (suffixIndex.findIndex(s => s.suffix === branch.suffix) == -1)
                    suffixIndex.push({ suffix: branch.suffix, index: 1 });
                branch.nodes.forEach(node => {
                    // Get position From LatLng
                    var nodePosition = this.cad.getPosition(node.lat, node.lng);
                    // Icon & Number
                    switch (node.nodeType) {
                        case NodeType.CONTROL:
                            // Draw icon
                            var filter = 'none';
                            // Find in selected nodes list
                            if (this.cad.selectedNodes.find(n => n.id === node.id) != null) {
                                filter = 'drop-shadow(0 0 8px yellow)';
                            }
                            if (belt.controlSheltered) {
                                if (this.controlImageSheltered.complete)
                                    this.drawMarker(this.controlImageSheltered, nodePosition.x, nodePosition.y, -this.cad.version.rotation, filter);
                            }
                            else {
                                if (this.controlImage.complete)
                                    this.drawMarker(this.controlImage, nodePosition.x, nodePosition.y, -this.cad.version.rotation, filter);
                            }
                            break;
                        case NodeType.HEXAGONAL_TRAP:
                        case NodeType.RECTANGULAR_TRAP:
                            // Draw number if current belt
                            if (this.cad.selectedBelt == null || this.cad.selectedBelt.id == belt.id) {
                                var number = '';
                                if (this.cad.version.belts.length > 1 && this.cad.selectedBelt == null) {
                                    number = `${index + 1}-${suffixIndex.find(s => s.suffix === branch.suffix).index + branch.suffix}`;
                                }
                                else {
                                    number = suffixIndex.find(s => s.suffix === branch.suffix).index + branch.suffix;
                                }
                                var distanceFromOrigin = this.cad.distance(0, 0, nodePosition.x, nodePosition.y) / 100;
                                this.drawNodeNumber(number, color, nodePosition.x + distanceFromOrigin * Math.cos(-this.cad.version.rotation * Math.PI / 180), nodePosition.y + distanceFromOrigin * Math.sin(-this.cad.version.rotation * Math.PI / 180), node.textDistance, node.textAngle);
                            }
                            suffixIndex.find(s => s.suffix === branch.suffix).index++;
                            // Draw icon
                            var filter = 'none';
                            if (this.cad.selectedNodes.find(n => n.id === node.id) != null) {
                                filter = 'drop-shadow(0 0 8px yellow)';
                            }
                            if (node.nodeType == NodeType.HEXAGONAL_TRAP) {
                                switch (belt.trapsColor) {
                                    case TrapsColor.WOOD:
                                        // Wood
                                        if (this.hexagonalTrap1Image.complete)
                                            this.drawMarker(this.hexagonalTrap1Image, nodePosition.x, nodePosition.y, -this.cad.version.rotation, filter);
                                        break;
                                    case TrapsColor.BROWN:
                                        // Black Brown
                                        if (this.hexagonalTrap2Image.complete)
                                            this.drawMarker(this.hexagonalTrap2Image, nodePosition.x, nodePosition.y, -this.cad.version.rotation, filter);
                                        break;
                                    case TrapsColor.GREEN:
                                        // English Green
                                        if (this.hexagonalTrap3Image.complete)
                                            this.drawMarker(this.hexagonalTrap3Image, nodePosition.x, nodePosition.y, -this.cad.version.rotation, filter);
                                        break;
                                }
                            }
                            else {
                                // All rectangular traps are in natural color
                                if (this.rectangularTrap1Image.complete)
                                    this.drawMarker(this.rectangularTrap1Image, nodePosition.x, nodePosition.y, -this.cad.version.rotation, filter);
                            }
                            break;
                        case NodeType.INTERMEDIATE:
                            // Draw point
                            var lineColor = color;
                            if (this.cad.selectedNodes.find(n => n.id === node.id) != null) {
                                lineColor = 'yellow';
                            }
                            this.drawCircle(context, nodePosition.x, nodePosition.y, branch.width / 2 - 1, color, lineColor);
                            break;
                    }
                });
            });
        });
        context.restore();
    }
    drawLine(x1, y1, x2, y2, lineColor, lineWidth) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.stroke();
        context.restore();
    }
    drawDotLine(x1, y1, x2, y2, lineColor, lineWidth) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        // Split line
        var points = this.cad.splitLine({ x: x1, y: y1 }, { x: x2, y: y2 }, this.cad.distance(x1, y1, x2, y2) / 10);
        points.forEach(point => {
            context.beginPath();
            context.arc(point.x, point.y, lineWidth / 2, 0, 2 * Math.PI, false);
            context.fillStyle = lineColor;
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = lineColor;
            context.stroke();
        });
        context.restore();
    }
    drawMarker(image, x, y, angle, filter) {
        var context = this.beltsCanvas.nativeElement.getContext('2d');
        context.save();
        context.translate(x, y);
        context.rotate(angle * Math.PI / 180);
        context.filter = filter;
        context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
        context.restore();
    }
    drawCircle(context, x, y, radius, fillColor, borderColor) {
        context.save();
        context.beginPath();
        context.arc(x, y, Math.abs(radius), 0, 2 * Math.PI, false);
        context.fillStyle = fillColor;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = borderColor;
        context.stroke();
        context.restore();
    }
    drawNodeNumber(number, backgroundColor, x, y, textDistance, textAngle) {
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
    }
    drawDrawing() {
        var context = this.drawingCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.drawingCanvas.nativeElement.width, this.drawingCanvas.nativeElement.height);
        context.save();
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        context.strokeStyle = 'rgba(255, 0, 0, 1)';
        // Select pixels ratio
        if (this.cad.tool == Tool.SELECT_PIXELS_RATIO) {
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
            this.cad.drawPolyPath.forEach((path, index) => {
                if (index == 0 && this.cad.selectedNodes.length == 1) {
                    var parentNodePosition = this.cad.getPosition(this.cad.selectedNodes[0].lat, this.cad.selectedNodes[0].lng);
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
            this.cad.drawPolyPath.forEach(path => {
                this.drawCircle(context, path.x, path.y, 3, 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)');
            });
        }
        context.restore();
    }
    drawProtectedAreas() {
        var context = this.protectedAreasCanvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.protectedAreasCanvas.nativeElement.width, this.protectedAreasCanvas.nativeElement.height);
        context.save();
        context.translate(this.cad.translatePosition.x, this.cad.translatePosition.y);
        context.rotate(this.cad.version.rotation * Math.PI / 180);
        context.scale(this.cad.version.zoom, this.cad.version.zoom);
        if (this.cad.render)
            context.scale(this.cad.renderFactor, this.cad.renderFactor);
        // Draw protected area
        this.cad.version.belts.forEach(belt => {
            belt.protectedAreas.forEach(protectedArea => {
                context.save();
                context.beginPath();
                // Add points
                protectedArea.points.forEach((point, index) => {
                    var pointPosition = this.cad.getPosition(point[0], point[1]);
                    if (index == 0)
                        context.moveTo(pointPosition.x, pointPosition.y);
                    else
                        context.lineTo(pointPosition.x, pointPosition.y);
                });
                context.closePath();
                if (this.cad.selectedProtectedArea != null && this.cad.selectedProtectedArea.id === protectedArea.id)
                    context.strokeStyle = 'yellow';
                context.fillStyle = context.createPattern(this.getPattern(protectedArea.width, protectedArea.color), 'repeat');
                if (this.cad.selectedProtectedArea != null && this.cad.selectedProtectedArea.id === protectedArea.id)
                    context.stroke();
                context.rotate(-this.cad.version.rotation / 57.25);
                context.fill();
                context.restore();
                // If selected add points
                if (this.cad.selectedProtectedArea && this.cad.selectedProtectedArea.id === protectedArea.id) {
                    protectedArea.points.forEach(point => {
                        var pointPosition = this.cad.getPosition(point[0], point[1]);
                        this.drawCircle(context, pointPosition.x, pointPosition.y, 3, 'yellow', 'yellow');
                    });
                }
            });
        });
        context.restore();
    }
    getPattern(width, color) {
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
    }
    drawElectric() {
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
        this.cad.version.belts.forEach(belt => {
            belt.electricalOutlets.forEach((electricalOutlet, electricalOutletIndex) => {
                // Get position From LatLng
                var electricalOutletPosition = this.cad.getPosition(electricalOutlet.lat, electricalOutlet.lng);
                electricalOutlet.transformers.forEach((transformer, transformerIndex) => {
                    // Draw branches
                    if (this.cad.mode == Mode.ELECTRIC) {
                        transformer.electricalBranches.forEach((electricalBranch, electricalBranchIndex) => {
                            electricalBranch.electricalNodes.forEach((electricalNode, nodeIndex) => {
                                // Get node & position
                                var node = this.cad.version.getNode(electricalNode.nodeId), nodePosition = node != null ? this.cad.getPosition(node.lat, node.lng) : null;
                                if (electricalBranchIndex == 0 && nodeIndex == 0) {
                                    // Draw line between transformer and first node
                                    var correctedElectricalOutletPosition = {
                                        x: electricalOutletPosition.x + (this.cad.version.iconsSize * 2 / 2) * Math.cos((transformer.angle) * Math.PI / 180),
                                        y: electricalOutletPosition.y + (this.cad.version.iconsSize * 2 / 2) * Math.sin((transformer.angle) * Math.PI / 180)
                                    };
                                    if (nodePosition != null)
                                        this.drawElectricalLine(correctedElectricalOutletPosition.x, correctedElectricalOutletPosition.y, nodePosition.x, nodePosition.y, '#F00', 1, []);
                                }
                                else {
                                    // Get previous node
                                    var previousNode;
                                    if (electricalBranchIndex > 0 && nodeIndex == 0)
                                        previousNode = this.cad.version.getNode(electricalBranch.parentElectricalNode);
                                    else
                                        previousNode = this.cad.version.getNode(electricalBranch.electricalNodes[nodeIndex - 1].nodeId);
                                    // Draw line between node and previous node
                                    var previousNodePosition = previousNode != null ? this.cad.getPosition(previousNode.lat, previousNode.lng) : null;
                                    if (previousNodePosition != null)
                                        this.drawElectricalLine(previousNodePosition.x, previousNodePosition.y, nodePosition.x, nodePosition.y, '#F00', 1, []);
                                }
                            });
                        });
                    }
                    // Draw transformer
                    if (this.cad.mode == Mode.ELECTRIC)
                        this.drawTransformer(transformerIndex + 1, electricalOutletPosition.x, electricalOutletPosition.y, transformer.angle, this.cad.selectedTransformer != null && this.cad.selectedTransformer.id == transformer.id);
                });
                // Draw electrical outlet
                if (this.cad.selectedElectricalOutlet != null && this.cad.selectedTransformer == null && this.cad.selectedElectricalOutlet.id === electricalOutlet.id) {
                    this.drawElectricOutlet(electricalOutletIndex + 1, electricalOutletPosition.x, electricalOutletPosition.y, '#F00', 'yellow');
                }
                else {
                    this.drawElectricOutlet(electricalOutletIndex + 1, electricalOutletPosition.x, electricalOutletPosition.y, '#F00', '#F00');
                }
            });
        });
        context.restore();
    }
    drawElectricOutlet(number, x, y, fillColor, borderColor) {
        var context = this.electricCanvas.nativeElement.getContext('2d');
        context.save();
        context.translate(x, y);
        context.rotate(-this.cad.version.rotation * Math.PI / 180);
        var height = this.cad.version.iconsSize / 2, text = number, width = 0;
        context.font = `${height * 1.25}px Arial`;
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
    }
    drawTransformer(number, x, y, angle, selected) {
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
    }
    drawElectricalLine(x1, y1, x2, y2, lineColor, lineWidth, lineDash) {
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
    }
    /* Other functions */
    getClickPosition(e) {
        var rect = this.backgroundImageCanvas.nativeElement.getBoundingClientRect();
        return {
            x: ((e.clientX - rect.left) - this.cad.translatePosition.x) / this.cad.version.zoom,
            y: ((e.clientY - rect.top) - this.cad.translatePosition.y) / this.cad.version.zoom
        };
    }
};
tslib_1.__decorate([
    Input('cad'),
    tslib_1.__metadata("design:type", CAD)
], CADCanvasComponent.prototype, "cad", void 0);
tslib_1.__decorate([
    ViewChild('backgroundImageCanvas', { static: false }),
    tslib_1.__metadata("design:type", Object)
], CADCanvasComponent.prototype, "backgroundImageCanvas", void 0);
tslib_1.__decorate([
    ViewChild('beltsCanvas', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], CADCanvasComponent.prototype, "beltsCanvas", void 0);
tslib_1.__decorate([
    ViewChild('electricCanvas', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], CADCanvasComponent.prototype, "electricCanvas", void 0);
tslib_1.__decorate([
    ViewChild('drawingCanvas', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], CADCanvasComponent.prototype, "drawingCanvas", void 0);
tslib_1.__decorate([
    ViewChild('protectedAreasCanvas', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], CADCanvasComponent.prototype, "protectedAreasCanvas", void 0);
tslib_1.__decorate([
    HostListener('window:resize', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "onResize", null);
tslib_1.__decorate([
    HostListener('document:CADMapTypeChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "mapTypeChanged", null);
tslib_1.__decorate([
    HostListener('document:CADSelectionChanged'),
    HostListener('document:CADModeChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "selectionChanged", null);
tslib_1.__decorate([
    HostListener('document:CADRotationChanged'),
    HostListener('document:CADZoomChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "rotationZoomChanged", null);
tslib_1.__decorate([
    HostListener('document:CADIconsSizeChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "iconsSizeChanged", null);
tslib_1.__decorate([
    HostListener('document:CADOpacityChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "opacityChanged", null);
tslib_1.__decorate([
    HostListener('document:CADBeltChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "beltChanged", null);
tslib_1.__decorate([
    HostListener('document:CADProtectedAreaChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "protectedAreaChanged", null);
tslib_1.__decorate([
    HostListener('document:CADDrawChanged'),
    HostListener('document:CADToolChanged'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CADCanvasComponent.prototype, "drawChanged", null);
CADCanvasComponent = tslib_1.__decorate([
    Component({
        selector: 'cad-canvas',
        styleUrls: ['./canvas.page.scss'],
        templateUrl: './canvas.page.html'
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService,
        GlobalService,
        Storage,
        Platform])
], CADCanvasComponent);
export { CADCanvasComponent };
//# sourceMappingURL=canvas.page.js.map