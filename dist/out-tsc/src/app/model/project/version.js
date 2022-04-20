import { UUID } from 'angular2-uuid';
import { LocalDateTime } from "../../model/upcv3/LocalDateTime";
import { Belt } from "./belt";
import { NodeType } from "./node";
import { ElectricalBranch } from "./electricalBranch";
import { ElectricalNode } from "./electricalNode";
export class Version {
    constructor() {
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
    get versionTypeToString() {
        switch (this.versionType) {
            case VersionType.PRE_ESTIMATE: return 'Pré-devis';
            case VersionType.ESTIMATE: return 'Devis';
            case VersionType.ACCEPTED_ESTIMATE: return 'Devis accepté';
            case VersionType.INSTALLATION: return 'Installation';
        }
    }
    static loadFromJSON(json) {
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
            version.creationDate = LocalDateTime.loadFromJSON(json.creationDate);
        if (json.lastEditionDate)
            version.lastEditionDate = LocalDateTime.loadFromJSON(json.lastEditionDate);
        if (json.belts) {
            version.belts = [];
            json.belts.forEach(jsonBelt => { version.belts.push(Belt.loadFromJSON(jsonBelt)); });
        }
        return version;
    }
    // Nodes
    getNode(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                for (var k = 0; k < this.belts[i].branches[j].nodes.length; k++)
                    if (this.belts[i].branches[j].nodes[k].id === id)
                        return this.belts[i].branches[j].nodes[k];
        return null;
    }
    getPreviousNode(id) {
        // Get branch, branchIndex & nodeIndex
        var branch = this.getBranchFromNode(id), branchIndex = this.getBranchIndex(branch.id), nodeIndex = this.getNodeIndex(id), previousNode = null;
        if (branchIndex > 0 && nodeIndex == 0)
            previousNode = this.getNode(branch.parentNode);
        else
            previousNode = branch.nodes[nodeIndex - 1];
        return previousNode;
    }
    getNextNodes(id) {
        // Get branch, branchIndex & nodeIndex
        var branch = this.getBranchFromNode(id), nodeIndex = this.getNodeIndex(id), nextNodes = { nextNodeInBranch: null, nextNodeInChildBranch: null };
        // Get next node in the node's branch
        if (nodeIndex < branch.nodes.length - 1)
            nextNodes.nextNodeInBranch = branch.nodes[nodeIndex + 1];
        // Get next node from a child branch
        this.belts.forEach(belt => {
            belt.branches.forEach(branch => {
                if (branch.parentNode === id && branch.nodes.length > 0)
                    nextNodes.nextNodeInChildBranch = branch.nodes[0];
            });
        });
        return nextNodes;
    }
    getNodeIndex(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                for (var k = 0; k < this.belts[i].branches[j].nodes.length; k++)
                    if (this.belts[i].branches[j].nodes[k].id === id)
                        return k;
        return -1;
    }
    getNodeNumberOfChild(id) {
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
        if (node.nodeType == NodeType.CONTROL)
            number++;
        return number;
    }
    getSuppliedNodesNumberFromNode(id) {
        // Get Transformer, ElectricalBranch & nodeIndex
        var result = 0, transformer = this.getTransformerFromNode(id), electricalBranch = this.getElectricalBranchFromNode(id), nodeIndex = this.getElectricalNodeIndex(id);
        console.log(nodeIndex);
        // Check if node his the last of his branch
        if (nodeIndex < electricalBranch.electricalNodes.length - 1)
            result++;
        // Check if node is a parent node
        transformer.electricalBranches.forEach(electricalBranch => {
            if (electricalBranch.parentElectricalNode === id)
                result++;
        });
        return result;
    }
    // Branches
    getBranch(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].id === id)
                    return this.belts[i].branches[j];
        return null;
    }
    getBranchIndex(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].id === id)
                    return j;
        return -1;
    }
    getBranchFromNode(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                for (var k = 0; k < this.belts[i].branches[j].nodes.length; k++)
                    if (this.belts[i].branches[j].nodes[k].id === id)
                        return this.belts[i].branches[j];
        return null;
    }
    getNodeChildBranch(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].parentNode === id)
                    return this.belts[i].branches[j];
        return null;
    }
    // Belts
    getBelt(id) {
        for (var i = 0; i < this.belts.length; i++)
            if (this.belts[i].id === id)
                return this.belts[i];
        return null;
    }
    getBeltIndex(id) {
        for (var i = 0; i < this.belts.length; i++)
            if (this.belts[i].id === id)
                return i;
        return -1;
    }
    getBeltFromBranch(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].branches.length; j++)
                if (this.belts[i].branches[j].id === id)
                    return this.belts[i];
        return null;
    }
    getBeltFromElectricalOutlet(id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                if (this.belts[i].electricalOutlets[j].id === id)
                    return this.belts[i];
            }
        }
        return null;
    }
    getBeltFromProtectedArea(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].protectedAreas.length; j++)
                if (this.belts[i].protectedAreas[j].id === id)
                    return this.belts[i];
        return null;
    }
    getMaxFlowPercentFromBelt(id) {
        var result = { nodeId: '', value: 0 }, belt = this.getBelt(id);
        belt.branches.forEach(branch => {
            branch.nodes.forEach(node => {
                if (node.flowPercent > result.value)
                    result = { nodeId: node.id, value: node.flowPercent };
            });
        });
        return result;
    }
    getMinFlowPercentFromBelt(id) {
        var result = { nodeId: '', value: 10000 }, belt = this.getBelt(id);
        belt.branches.forEach(branch => {
            branch.nodes.forEach(node => {
                if (node.flowPercent < result.value)
                    result = { nodeId: node.id, value: node.flowPercent };
            });
        });
        return result.value == 10000 ? { nodeId: '', value: 0 } : result;
    }
    // Electric
    getElectricalOutlet(id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                if (this.belts[i].electricalOutlets[j].id === id)
                    return this.belts[i].electricalOutlets[j];
            }
        }
        return null;
    }
    getElectricalOutletFromTransformer(id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    if (this.belts[i].electricalOutlets[j].transformers[k].id === id)
                        return this.belts[i].electricalOutlets[j];
                }
            }
        }
        return null;
    }
    getElectricalOutletIndex(id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                if (this.belts[i].electricalOutlets[j].id === id)
                    j;
            }
        }
        return -1;
    }
    getTransformer(id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    if (this.belts[i].electricalOutlets[j].transformers[k].id === id)
                        return this.belts[i].electricalOutlets[j].transformers[k];
                }
            }
        }
        return null;
    }
    getTransformerFromNode(id) {
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
    }
    getTransformerFromElectricalBranch(id) {
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
    }
    getTransformerIndex(id) {
        for (var i = 0; i < this.belts.length; i++) {
            for (var j = 0; j < this.belts[i].electricalOutlets.length; j++) {
                for (var k = 0; k < this.belts[i].electricalOutlets[j].transformers.length; k++) {
                    if (this.belts[i].electricalOutlets[j].transformers[k].id === id)
                        return k;
                }
            }
        }
        return -1;
    }
    getElectricalBranch(id) {
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
    }
    getElectricalBranchFromNode(id) {
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
    }
    getElectricalBranchIndex(id) {
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
    }
    getElectricalNodeIndex(id) {
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
    }
    // ProtectedAreas
    getProtectedArea(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].protectedAreas.length; j++)
                if (this.belts[i].protectedAreas[j].id === id)
                    return this.belts[i].protectedAreas[j];
        return null;
    }
    getProtectedAreaIndex(id) {
        for (var i = 0; i < this.belts.length; i++)
            for (var j = 0; j < this.belts[i].protectedAreas.length; j++)
                if (this.belts[i].protectedAreas[j].id === id)
                    return j;
        return -1;
    }
    // Methods
    setNodePosition(id, lat, lng) {
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
    }
    setElectricalOutletPosition(id, lat, lng) {
        // Get electricalOutlet
        var electricalOutlet = this.getElectricalOutlet(id);
        // Edition
        electricalOutlet.lat = lat;
        electricalOutlet.lng = lng;
    }
    delNode(id) {
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
    }
    delNodeAndChildren(id) {
        // Get branch & nodeIndex
        var branch = this.getBranchFromNode(id), nodeIndex = this.getNodeIndex(id);
        // Del nodes
        var nodesIds = [];
        branch.nodes.forEach((node, index) => {
            if (index >= nodeIndex)
                nodesIds.push(node.id);
        });
        nodesIds.forEach(nodeId => {
            this.delNode(nodeId);
        });
    }
    delBranch(id) {
        // Get belt, branch & branchIndex
        var belt = this.getBeltFromBranch(id), branch = this.getBranch(id), branchIndex = this.getBranchIndex(id);
        // Del all electrical nodes references
        branch.nodes.forEach(node => {
            this.delElectricalNode(node.id);
        });
        // Find child branches
        belt.branches.filter(b => b.parentBranch === id).forEach(b => {
            this.delBranch(b.id);
        });
        // Delete
        belt.branches.splice(branchIndex, 1);
    }
    delBelt(id) {
        this.belts.splice(this.getBeltIndex(id), 1);
    }
    addNode(node, branch, index) {
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
                    var electricalNode = new ElectricalNode();
                    electricalNode.id = UUID.UUID();
                    electricalNode.nodeId = node.id;
                    previousNodeElectricalBranch.electricalNodes.splice(previousElectricalNodeIndex + 1, 0, electricalNode);
                }
            }
        }
    }
    delElectricalOutlet(id) {
        // Get belt & electricalOutletIndex
        var belt = this.getBeltFromElectricalOutlet(id), electricalOutletIndex = this.getElectricalOutletIndex(id);
        // Delete
        belt.electricalOutlets.splice(electricalOutletIndex, 1);
    }
    delTransformer(id) {
        // Get electricalOutlet & transformerIndex
        var electricalOutlet = this.getElectricalOutletFromTransformer(id), transformerIndex = this.getTransformerIndex(id);
        // Delete
        electricalOutlet.transformers.splice(transformerIndex, 1);
    }
    isNodeInElectricalBranch(id) {
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
    }
    addElectricalBranch(transformerId) {
        // Get transformer & new id
        var transformer = this.getTransformer(transformerId), id = UUID.UUID();
        // Create
        var electricalBranch = new ElectricalBranch();
        electricalBranch.id = id;
        transformer.electricalBranches.push(electricalBranch);
        return id;
    }
    editElectricalBranch(id, parentElectricalBranch, parentElectricalNode) {
        // Get electricalBranch
        var electricalBranch = this.getElectricalBranch(id);
        // Edit
        electricalBranch.parentElectricalBranch = parentElectricalBranch;
        electricalBranch.parentElectricalNode = parentElectricalNode;
    }
    delElectricalBranch(id) {
        // Get transformer & electricalBranchIndex
        var transformer = this.getTransformerFromElectricalBranch(id), electricalBranchIndex = this.getElectricalBranchIndex(id);
        // Delete
        transformer.electricalBranches.splice(electricalBranchIndex, 1);
    }
    addElectricalNode(electricalBranchId, nodeId) {
        // Get electricalBranch & new Id
        var electricalBranch = this.getElectricalBranch(electricalBranchId), id = UUID.UUID();
        // Add
        var electricalNode = new ElectricalNode();
        electricalNode.id = id;
        electricalNode.nodeId = nodeId;
        electricalBranch.electricalNodes.push(electricalNode);
        return id;
    }
    addNodeToTransformer(nodeId, transformerId, startNodeId = null) {
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
    }
    delNodeFromElectricalBranch(id) {
        this.belts.forEach(belt => {
            belt.electricalOutlets.forEach(electricalOutlet => {
                electricalOutlet.transformers.forEach(transformer => {
                    transformer.electricalBranches.forEach(electricalBranch => {
                        electricalBranch.electricalNodes.forEach((electricalNode, nodeIndex) => {
                            if (electricalNode.nodeId === id) {
                                // Only node of his branch
                                if (electricalBranch.electricalNodes.length == 1) {
                                    // Delete branch
                                    this.delElectricalBranch(electricalBranch.id);
                                }
                                // Last node of his branch
                                else if (nodeIndex == electricalBranch.electricalNodes.length - 1) {
                                    this.delElectricalNode(id);
                                }
                                else {
                                    // Delete all nodes of the branch
                                    electricalBranch.electricalNodes.forEach((electricalNode2, nodeIndex2) => {
                                        if (nodeIndex2 > nodeIndex) {
                                            this.delNodeFromElectricalBranch(electricalNode2.nodeId);
                                            this.delElectricalNode(id);
                                        }
                                    });
                                }
                                // Delete child branches
                                transformer.electricalBranches.filter(eb => eb.parentElectricalNode == id).forEach(eb => {
                                    this.delElectricalBranch(eb.id);
                                });
                            }
                        });
                    });
                });
            });
        });
    }
    delElectricalNode(id) {
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
    }
    delProtectedArea(id) {
        // Get belt & protectedAreaIndex
        var belt = this.getBeltFromProtectedArea(id), protectedAreaIndex = this.getProtectedAreaIndex(id);
        if (belt != null && protectedAreaIndex != -1)
            belt.protectedAreas.splice(protectedAreaIndex, 1);
    }
    getDistance(latLng1, latLng2) {
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
    }
    getMinMaxDailyConsumption(belt, max = true) {
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
    }
    getMinMaxMonthlyConsumption(belt, max = true) {
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
    }
    getSeasonalConsumption(belt) {
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
    }
}
export var VersionType;
(function (VersionType) {
    VersionType["PRE_ESTIMATE"] = "PRE_ESTIMATE";
    VersionType["ESTIMATE"] = "ESTIMATE";
    VersionType["ACCEPTED_ESTIMATE"] = "ACCEPTED_ESTIMATE";
    VersionType["INSTALLATION"] = "INSTALLATION";
})(VersionType || (VersionType = {}));
//# sourceMappingURL=version.js.map