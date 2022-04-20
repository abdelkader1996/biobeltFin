import { NodeType } from "./node";
export class Calculations {
    constructor(version) {
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
    flowCalculations(additionalDistanceSheath = 0.5) {
        this.tubeLengthAdd = additionalDistanceSheath;
        // For each belt
        this.version.belts.forEach(belt => {
            if (belt.branches.length > 0 && belt.branches[0].nodes.length > 1) {
                /// Belt informations
                this.currentBelt = belt;
                belt.resetCalculationValues();
                /// Main branch informations
                this.mainBranch = belt.branches[0];
                this.mainBranch.trapsNumber = 0;
                this.mainBranch.flowCumulated = 0;
                // Reset nodes data
                for (var nodeIndex = 0; nodeIndex < this.mainBranch.nodes.length; nodeIndex++)
                    this.mainBranch.nodes[nodeIndex].resetCalculationValues();
                /// Secondary branches informations
                this.secondaryBranches = [];
                for (var branchIndex = 0; branchIndex < belt.branches.length; branchIndex++) {
                    if (branchIndex > 0) {
                        // Add the secondary branch
                        belt.branches[branchIndex].flowCumulated = 0;
                        this.secondaryBranches.push(belt.branches[branchIndex]);
                    }
                }
                // Update belt & mainBranch informations
                belt.trapsNumber = this.getTrapsNumber(this.mainBranch);
                this.mainBranch.trapsNumber = belt.trapsNumber;
                this.mainBranch.nodesNumber = this.getNodesNumber(this.mainBranch);
                // Update secondary branches informations
                for (var branchIndex = 0; branchIndex < this.secondaryBranches.length; branchIndex++) {
                    this.secondaryBranches[branchIndex].trapsNumber = this.getTrapsNumber(this.secondaryBranches[branchIndex]);
                    this.secondaryBranches[branchIndex].nodesNumber = this.getNodesNumber(this.secondaryBranches[branchIndex]);
                    this.secondaryBranches[branchIndex].flowCumulated = 0;
                    // Reset nodes data
                    for (var nodeIndex = 0; nodeIndex < this.secondaryBranches[branchIndex].nodes.length; nodeIndex++)
                        this.secondaryBranches[branchIndex].nodes[nodeIndex].resetCalculationValues();
                }
                // Loop on 10 intensity values (1 - 10)
                for (var i = 1; i < 11; i++) {
                    // Initialization
                    this.currentIntensity = i;
                    this.mainBranch.nodes[0].flowIn = this.getInitialFlow();
                    this.mainBranch.nodes[0].pressure = this.initialPressure * i / 10;
                    var loop = 0;
                    while (loop < this.maxLoop) {
                        var flowCalculated = this.branchFlowRate(this.mainBranch), // Q
                        flowReference = this.getInitialFlow(); // Qref
                        // if ||Qref - Q|| < eq
                        if (Math.abs(flowReference - flowCalculated) < 1 / 1000)
                            break;
                        else
                            this.mainBranch.nodes[0].pressure += (flowReference - flowCalculated) * (2 / this.mainBranch.trapsNumber); // P(0) = P(0) + (Qref - Q * ep)
                        loop++;
                    }
                    // Save flow
                    switch (i) {
                        case 1:
                            belt.pressureInt1 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 2:
                            belt.pressureInt2 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 3:
                            belt.pressureInt3 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 4:
                            belt.pressureInt4 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 5:
                            belt.pressureInt5 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 6:
                            belt.pressureInt6 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 7:
                            belt.pressureInt7 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 8:
                            belt.pressureInt8 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 9:
                            belt.pressureInt9 = this.mainBranch.nodes[0].pressure;
                            break;
                        case 10:
                            belt.flowCumulated = this.mainBranch.nodes[0].flowIn;
                            belt.flowTheoretical = this.getInitialFlow();
                            belt.pressureCalculated = this.mainBranch.nodes[0].pressure;
                            break;
                    }
                }
                // Simon Wolkiewiez: flowPercent, lossPressureCumulated & flowCumulated
                belt.branches.forEach(branch => {
                    branch.nodes.forEach((node, nodeIndex) => {
                        if (node.nodeType == NodeType.HEXAGONAL_TRAP || node.nodeType == NodeType.RECTANGULAR_TRAP)
                            node.flowPercent = this.getFlowPercent(node.flowOut);
                        if (branch.nodes[nodeIndex - 1]) {
                            node.lossPressureCumulated = branch.nodes[nodeIndex - 1].lossPressureCumulated + (branch.nodes[nodeIndex - 1].pressure - node.pressure);
                            node.flowCumulated = branch.nodes[nodeIndex - 1].flowCumulated + node.flowOut;
                        }
                    });
                });
                // Simon Wolkiewiez
            }
        });
    }
    branchFlowRate(branch, parentBranch = null, parentNode = null) {
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
                if (currentNode.nodeType == NodeType.CONTROL) {
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn;
                }
                // Check if intermediate node without child branch
                else if (currentNode.nodeType == NodeType.INTERMEDIATE && this.version.getNodeNumberOfChild(currentNode.id) < 2) {
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn;
                }
                // Simon Wolkiewiez
                // if Type of node j = ST
                else if ((currentNode.nodeType == NodeType.HEXAGONAL_TRAP || currentNode.nodeType == NodeType.RECTANGULAR_TRAP) &&
                    this.version.getNodeNumberOfChild(currentNode.id) < 2) {
                    currentNode.flowOut = this.getOutModuleFlow(currentNode.pressure, currentNode.flowIn, branch.tubeDiameter); // q(j) = (a * P(j)² + b * P(j) - tetaPjt(j)) * Tc/T
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn - currentNode.flowOut; // Q(NX(j)) = Q(j) - q(j)
                    calculatedFlowRate += currentNode.flowOut; // Qc = Qc + q(j)
                }
                // else if Type of node j = SB
                else if (currentNode.nodeType == NodeType.INTERMEDIATE &&
                    this.version.getNodeNumberOfChild(currentNode.id) == 2) {
                    var childBranch = this.version.getNodeChildBranch(currentNode.id);
                    childBranch.nodes[0].flowIn = this.branchFlowRate(childBranch, branch, currentNode); // Q(NBF(j)) = branchFlowRate(NBF(j))
                    if (nextNode)
                        nextNode.flowIn = currentNode.flowIn - childBranch.nodes[0].flowIn; // Q(NX(j)) = Q(j) - Q(NBF(j))
                    calculatedFlowRate += childBranch.nodes[0].flowIn; // Qc = Qc + Q(NBF(j))
                }
                // else if Type of node j = SBT
                else if ((currentNode.nodeType == NodeType.HEXAGONAL_TRAP || currentNode.nodeType == NodeType.RECTANGULAR_TRAP) &&
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
    }
    electricCalculations(additionalDistanceSheath = 0.5) {
        this.cableLengthAdd = additionalDistanceSheath;
        // For each belt
        this.version.belts.forEach(belt => {
            if (belt.electricalOutlets.length > 0) {
                // Belt informations
                belt.electricalOutlets.forEach(electricalOutlet => {
                    // Electrical outlet informations
                    this.currentElectricalOutlet = electricalOutlet;
                    electricalOutlet.transformers.forEach(transformer => {
                        if (transformer.electricalBranches.length > 0) {
                            // Transformer informations
                            this.currentTransformer = transformer;
                            this.initElectricalBranches(this.version);
                            this.getCableVoltageCalculation(0, 0, this.version);
                            // Voltages calculation
                            var average = this.getAverageDifferenceU(this.version), p = 0;
                            while ((Math.abs(average) > 0.0001) && (p < 100)) {
                                this.updateU2(this.version);
                                this.getCableVoltageCalculation(0, 0, this.version);
                                transformer.electricalBranches.forEach((electricalBranch, branchIndex) => {
                                    electricalBranch.electricalNodes.forEach((electricalNode, nodeIndex) => {
                                        // Get node
                                        var node = this.version.getNode(electricalNode.nodeId);
                                        // Check node position
                                        if (branchIndex == 0 && nodeIndex == 0) {
                                            // First node
                                            node.U2 = this.voltageBlock - 2 * node.R * node.I;
                                        }
                                        else if (branchIndex > 0 && nodeIndex == 0) {
                                            // First node of a new branch
                                            var parentNode = this.version.getNode(electricalBranch.parentElectricalNode);
                                            node.U2 = parentNode.U - 2 * node.R * node.I;
                                        }
                                        else {
                                            // Others nodes
                                            var previousNode = this.version.getNode(electricalBranch.electricalNodes[nodeIndex - 1].nodeId);
                                            node.U2 = previousNode.U - 2 * node.R * node.I;
                                        }
                                        // Update intensity in this fan
                                        node.i = this.getIntensity(node.U2);
                                    });
                                });
                                average = this.getAverageDifferenceU(this.version);
                                p++;
                            }
                        }
                        // Save Data
                        transformer.powerConsumed = 0;
                        transformer.electricalBranches.forEach(electricalBranch => {
                            electricalBranch.electricalNodes.forEach(electricalNode => {
                                // Get node & loss
                                var node = this.version.getNode(electricalNode.nodeId);
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
    }
    // Electric Methods
    getResistance(distance) {
        if (distance == null)
            return 0;
        else
            return this.pcu * distance / (this.cableSection * Math.pow(10, -6));
    }
    getIntensity(voltage) {
        if (voltage == null)
            return 0;
        else
            return 0.028 * voltage - 0.056;
    }
    getAverageDifferenceU(version) {
        var difference = 0, nbFans = 0;
        for (var i = 0; i < this.currentTransformer.electricalBranches.length; i++) {
            for (var j = 0; j < this.currentTransformer.electricalBranches[i].electricalNodes.length; j++) {
                // Get node
                var node = version.getNode(this.currentTransformer.electricalBranches[i].electricalNodes[j].nodeId);
                // Check if trap
                if (node.nodeType == NodeType.RECTANGULAR_TRAP || node.nodeType == NodeType.HEXAGONAL_TRAP) {
                    difference += Math.abs(node.U - node.U2);
                    nbFans++;
                }
            }
        }
        return difference / nbFans;
    }
    getCableVoltageCalculation(branchIndex, nodeIndex, version) {
        // Get node
        var node = version.getNode(this.currentTransformer.electricalBranches[branchIndex].electricalNodes[nodeIndex].nodeId);
        // Fan intensity
        if (node.nodeType == NodeType.RECTANGULAR_TRAP || node.nodeType == NodeType.HEXAGONAL_TRAP)
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
    }
    initElectricalBranches(version) {
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
    }
    updateU2(version) {
        var difference = 0, u = 0, u2 = 0;
        for (var i = 0; i < this.currentTransformer.electricalBranches.length; i++) {
            for (var j = 0; j < this.currentTransformer.electricalBranches[i].electricalNodes.length; j++) {
                // Get node
                var node = version.getNode(this.currentTransformer.electricalBranches[i].electricalNodes[j].nodeId);
                node.U = node.U2;
            }
        }
    }
    // Methods
    getTubeSection(tubeDiameter) {
        return tubeDiameter * tubeDiameter * Math.PI / (4 * 1000000);
    }
    getSpeed(flow, tubeDiameter) {
        return flow / (60 * 1000 * this.getTubeSection(tubeDiameter));
    }
    getTrapsNumber(branch, index = -1) {
        var number = 0;
        // Count all traps of the branch
        if (index != -1)
            number += branch.nodes.filter((node, nodeIndex) => nodeIndex > index && (node.nodeType == NodeType.RECTANGULAR_TRAP || node.nodeType == NodeType.HEXAGONAL_TRAP)).length;
        else
            number += branch.nodes.filter(node => node.nodeType == NodeType.RECTANGULAR_TRAP || node.nodeType == NodeType.HEXAGONAL_TRAP).length;
        // Count all traps of child branches
        for (var i = 0; i < this.currentBelt.branches.length; i++)
            if (this.currentBelt.branches[i].parentBranch == branch.id)
                number += this.getTrapsNumber(this.currentBelt.branches[i]);
        return number;
    }
    getNodesNumber(branch) {
        var number = 0;
        // Count all traps of the branch
        number += branch.nodes.length;
        // Count all traps of child branches
        for (var i = 0; i < this.currentBelt.branches.length; i++)
            if (this.currentBelt.branches[i].parentBranch == branch.id)
                number += this.getNodesNumber(this.currentBelt.branches[i]);
        return number;
    }
    getOutModuleFlow(pressure, flow, tubeDiameter) {
        var a = 0.110728364691098, b = 0.25715450;
        return ((a * Math.pow((pressure - this.getJunctionLoss(this.getSpeed(flow, tubeDiameter), false)), 2) + b * (pressure - this.getJunctionLoss(this.getSpeed(flow, tubeDiameter), false))));
    }
    getInitialFlow() {
        return this.currentBelt.trapsNumber * (this.gramTrapHour / (60 * 1.974)) * this.currentIntensity / 10;
    }
    getReynoldsNumber(flow, tubeDiameter) {
        return this.co2MassVol * (tubeDiameter / 1000) * this.getSpeed(flow, tubeDiameter) / this.co2DynamicViscosity;
    }
    getDeltaPlaminaire(flow, tubeLength, tubeDiameter) {
        var reynoldsNumber = this.getReynoldsNumber(flow, tubeDiameter), speed = this.getSpeed(flow, tubeDiameter);
        if (reynoldsNumber == 0)
            return 0;
        else if (reynoldsNumber < this.reynoldsThreshold)
            return ((this.reynoldsFactor / reynoldsNumber) * this.co2MassVol * speed * speed * (tubeLength + this.tubeLengthAdd) / (2 * (tubeDiameter / 1000)) / 100) / 1000;
        else
            return (this.blasusFormula * Math.pow(reynoldsNumber, -0.25) * this.co2MassVol * speed * speed * (tubeLength + this.tubeLengthAdd) / (2 * (tubeDiameter / 1000)) / 100) / 1000;
    }
    getModulePressure(prevModulePressure, deltaPLaminaire, junctionLoss) {
        return prevModulePressure - deltaPLaminaire - junctionLoss;
    }
    getJunctionLoss(speed, jn) {
        var k = (jn ? 0.5 : 1.3);
        return k * this.co2MassVol * speed * speed / 200000;
    }
    getFlowPercent(flow) {
        return ((flow - this.literMinuteTrap) / this.literMinuteTrap * 100);
    }
}
//# sourceMappingURL=calculations.js.map