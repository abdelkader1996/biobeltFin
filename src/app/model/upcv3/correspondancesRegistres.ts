export class CorrespondancesRegistres {
    /* adr : adresse du registre | dim : dimension du registre */
    
    //General Parameters

    upcMcuUid = {adr : 40441, dim: 8, type: "int"}
    upcFwVer = {adr : 40168, dim:1, type: "int"}
    upcNameId = {adr : 40001, dim: 10, type: "string"}
    upcNameIdW = {adr : 40580, dim: 20, type: "string"}
    upcEventNum	= {adr : 40044, dim: 1, type: "int"}
    upcMode	= {adr : 40011, dim: 1, type: "int"}
    upcInitRestore = {adr : 40067, dim:	1, type: "int"}
    upcStatus = {adr : 40376, dim: 1, type: "int"}
    upcClock = {adr : 40012, dim: 2, type: "int"}
    upcTimeZone	= {adr : 40401, dim: 2, type: "int"}
    upcLanguage	= {adr : 40014, dim: 1, type: "int"}
    //upcEventLog	= {adr : 40403, dim: 11, type: }
    upcTrapNum = {adr : 40015, dim: 1, type: "int"}
    co2FlowRefTrap = {adr : 40016, dim: 2, type: "float"}
    co2FlowRefNom = {adr : 40020, dim: 2, type: "float"}
    co2FlowRefAdj = {adr : 40018, dim: 2, type: "float"}
    co2PressOutRef = {adr : 40271, dim: 20, type: "float"}
    co2PressOutTemp	= {adr : 40461, dim: 2, type: "float"}


    //communication		

    comMdmName = {adr : 40024, dim: 10, type: "string"}
    comMdmNameW = {adr : 40700, dim: 20, type: "string"}
    comMdmPass = {adr : 40034, dim: 10, type: "string"}
    comMdmPassW	= {adr : 40820, dim: 20, type: "string"}
    comMdmIpAdr	= {adr : 40022, dim: 2, type: "int"}
    comMdmMode = {adr : 40414, dim: 1, type: "int"}
    comMdmLevel	= {adr : 40415, dim: 1, type: "int"}
    comWifiSsid = {adr : 40045, dim: 10, type: "string"}
    comWifiSsidW = {adr : 40720, dim: 20, type: "string"}
    comWifiPass = {adr : 40055, dim: 10, type: "string"}
    comWifiPassW = {adr : 40740, dim: 20, type: "string"}
    comWifiApCh	= {adr : 40340, dim: 1, type: "int"}

    //CO2 diffusion
                
    diffHourSunRise	= {adr : 40068, dim: 2, type: "int"}
    diffHourSunSet = {adr : 40070, dim: 2, type: "int"}
    diffCo2Program1Start = {adr : 40072, dim: 2, type: "int"}
    diffCo2Program1End = {adr : 40074, dim: 2, type: "int"}
    diffCo2Program1Frequency = {adr : 40076, dim: 1, type: "int"}
    diffCo2Program1Intensity = {adr : 40077, dim: 1, type: "int"}
    diffCo2Program2Start = {adr : 40078, dim: 2, type: "int"}
    diffCo2Program2End = {adr : 40080, dim: 2, type: "int"}
    diffCo2Program2Frequency = {adr : 40082, dim: 1, type: "int"}
    diffCo2Program2Intensity = {adr : 40083, dim: 1, type: "int"}
    diffCo2Program3Start = {adr : 40084, dim: 2, type: "int"}
    diffCo2Program3End = {adr : 40086, dim: 2, type: "int"}
    diffCo2Program3Frequency = {adr : 40088, dim: 1, type: "int"}
    diffCo2Program3Intensity = {adr : 40089, dim: 1, type: "int"}
    diffCo2Program4Start = {adr : 40090, dim: 2, type: "int"}
    diffCo2Program4End = {adr : 40092, dim: 2, type: "int"}
    diffCo2Program4Frequency = {adr : 40094, dim: 1, type: "int"}
    diffCo2Program4Intensity = {adr : 40095, dim: 1, type: "int"}
    diffCo2Program5Start = {adr : 40096, dim: 2, type: "int"}
    diffCo2Program5End = {adr : 40098, dim: 2, type: "int"}
    diffCo2Program5Frequency = {adr : 40100, dim: 1, type: "int"}
    diffCo2Program5Intensity = {adr : 40101, dim: 1, type: "int"}
    diffCo2Program6Start = {adr : 40102, dim: 2, type: "int"}
    diffCo2Program6End = {adr : 40104, dim: 2, type: "int"}
    diffCo2Program6Frequency = {adr : 40106, dim: 1, type: "int"}
    diffCo2Program6Intensity = {adr : 40107, dim: 1, type: "int"}
    diffCo2Program7Start = {adr : 40108, dim: 2, type: "int"}
    diffCo2Program7End = {adr : 40110, dim: 2, type: "int"}
    diffCo2Program7Frequency = {adr : 40112, dim: 1, type: "int"}
    diffCo2Program7Intensity = {adr : 40113, dim: 1, type: "int"}
    diffCo2Program8Start = {adr : 40114, dim: 2, type: "int"}
    diffCo2Program8End = {adr : 40116, dim: 2, type: "int"}
    diffCo2Program8Frequency = {adr : 40118, dim: 1, type: "int"}
    diffCo2Program8Intensity = {adr : 40119, dim: 1, type: "int"}
    diffCo2Program9Start = {adr : 40120, dim: 2, type: "int"}
    diffCo2Program9End = {adr : 40122, dim: 2, type: "int"}
    diffCo2Program9Frequency = {adr : 40124, dim: 1, type: "int"}
    diffCo2Program9Intensity = {adr : 40125, dim: 1, type: "int"}
    diffCo2Program10Start = {adr : 40126, dim: 2, type: "int"}
    diffCo2Program10End = {adr : 40128, dim: 2, type: "int"}
    diffCo2Program10Frequency = {adr : 40130, dim: 1, type: "int"}
    diffCo2Program10Intensity = {adr : 40131, dim: 1, type: "int"}
    diffCo2SunriseDelay = {adr : 40132, dim: 2, type: "int"}
    diffCo2SunriseDuration = {adr : 40134, dim: 2, type: "int"}
    diffCo2SunriseDaycode = {adr : 40136, dim: 2, type: "int"}
    diffCo2SunriseIntensity = {adr : 40137, dim: 2, type: "int"}
    diffCo2SunsetDelay = {adr : 40138, dim: 2, type: "int"}
    diffCo2SunsetDuration = {adr : 40140, dim: 2, type: "int"}
    diffCo2SunsetDaycode = {adr : 40142, dim: 2, type: "int"}
    diffCo2SunsetIntensity = {adr : 40143, dim: 2, type: "int"}
    //diffCo2Instant = {adr : 40144, dim: 6, type: }
    co2PressInpMeas1 = {adr : 40427, dim: 2, type: "float"}
    co2PressInpMeas2 = {adr : 40429, dim: 2, type: "float"}
    co2PressOutMeas	= {adr : 40431, dim: 2, type: "float"}
    co2FlowMeas	= {adr : 40433, dim: 2, type: "float"}
    co2PressInpAvg = {adr : 40435, dim: 2, type: "float"}
    co2PressInpOffs	= {adr : 40455, dim: 2, type: "float"}
    co2PressOutAvg = {adr : 40437, dim: 2, type: "float"}
    co2PressoutOffs	= {adr : 40457, dim: 2, type: "float"}
    co2PressOutComp	= {adr : 40463, dim: 2, type: "float"}
    co2FlowAvg = {adr : 40439, dim: 2, type: "float"}
    co2FlowGain	= {adr : 40390, dim: 2, type: "float"}
    co2FlowOffs	= {adr : 40459, dim: 2, type: "float"}
    upcCo2DiffLvl = {adr : 40416, dim: 1, type: "int"}
    upcDiffLvlAdj = {adr : 40065, dim: 1, type: "int"}
    co2TempAvg = {adr : 40451, dim:	2, type: "float"}


    //C02 reserves
			
    co2ResActive = {adr : 40151, dim: 1, type: "int"}
    co2ResActAdj = {adr : 40150, dim: 1, type: "int"}
    co2ResActPrev = {adr : 40417, dim: 2, type: "int"}
    co2ResInactPrev	= {adr : 40419, dim: 2, type: "int"}
    co2Res = {adr : 40382, dim:	1, type: "int"}
    co2Res1Status = {adr : 40381, dim: 1, type: "int"}
    co2Res1FillNew = {adr : 40384, dim: 2, type: "float"}
    co2Res1FillVol = {adr : 40153, dim: 2, type: "float"}
    co2Res1FillTime = {adr : 40155, dim: 2, type: "int"}
    co2Res1ActVol = {adr : 40157, dim: 2, type: "float"}
    co2Res1ActDur = {adr : 40159, dim: 1, type: "int"}
    co2Res1StartVol	= {adr : 40421, dim: 2, type: "float"}
    co2Res1Bottle = {adr : 40342, dim: 5, type: "int"}
    co2Res1AuxVol = {adr : 40347, dim: 2, type: "float"}
    co2Res2Status = {adr : 40383, dim: 1, type: "int"}
    co2Res2FillNew = {adr : 40386, dim: 2, type: "float"}
    co2Res2FillVol = {adr : 40161, dim: 2, type: "float"}
    co2Res2FillTime	= {adr : 40163, dim: 2, type: "int"}
    co2Res2ActVol = {adr : 40165, dim: 2, type: "float"}
    co2Res2ActDur = {adr : 40167, dim: 1, type: "int"}
    co2Res2StartVol	= {adr : 40449, dim: 2, type: "float"}
    co2Res2Bottle = {adr : 40349, dim: 5, type: "int"}
    co2Res2AuxVol = {adr : 40354, dim: 2, type: "float"}
     
    
    //Alarms setup

    alrResEmptyTest	= {adr : 40388, dim: 2, type: "int"}
    alrResLowEn	= {adr : 40066, dim: 1, type: "int"}
    alrResEmptyEn = {adr : 40169, dim: 1, type: "int"}
    alrPressInpEn = {adr : 40170, dim: 1, type: "int"}
    alrPressOutEn = {adr : 40171, dim: 1, type: "int"}
    alrFlowAvgEn = {adr : 40172, dim: 1, type: "int"}
    alrPowDownEn = {adr : 40173, dim: 1, type: "int"}
    alrPowBackEn = {adr : 40174, dim: 1, type: "int"}
    alrSmsNum = {adr : 40175, dim: 50, type: "string"}
    alrSmsNumW = {adr : 40600, dim:	100, type: "string"}
    alrResLowLevel = {adr : 40227, dim:	2, type: "float"}
    alrResEmptyFlow	= {adr : 40225, dim: 2, type: "float"}
    alrPressInpTol = {adr : 40269, dim:	2, type: "float"}
    alrPressOutTol = {adr : 40291, dim:	2, type: "float"}
    alrFlowSetTol = {adr : 40293, dim: 2, type: "float"}
    alrPressInpSet1 = {adr : 40229, dim: 20, type: "float"}
    alrPressInpSet2 = {adr : 40249, dim: 20, type: "float"}
    alrPressOutSet 	= {adr : 40356, dim: 20, type: "float"}
    alrPressSetTemp	= {adr : 40465, dim: 2, type: "float"}


    //Auxiliary parameters
                
    comWebSrvUrl = {adr : 40295, dim: 15, type: "string"}
    comWebSrvUrlW = {adr : 40840, dim: 30, type: "string"}
    comMdmApnId1 = {adr : 40310, dim: 10, type: "string"}
    comMdmApnId2 = {adr : 40467, dim: 50, type: "string"}
    comMdmApnId1W = {adr : 40760, dim: 20, type: "string"}
    comMdmApnId2W = {adr : 40870, dim: 100, type: "string"}
    comMdmApnUser = {adr : 40320, dim: 10, type: "string"}
    comMdmApnUserW = {adr : 40780, dim:	20, type: "string"}
    comMdmApnPass = {adr : 40330, dim: 10, type: "string"}
    comMdmApnPassW = {adr : 40800, dim:	20, type: "string"}
    upcCo2PidProp = {adr : 40453, dim: 2, type: "float"}
    upcCo2PidInteg = {adr : 40377, dim:	2, type: "float"}
    upcCo2PidDiff = {adr : 40379, dim: 2, type: "float"}
    upcBattChrg	= {adr : 40423, dim: 2, type: "float"}
    upcBattTemp	= {adr : 40425, dim: 2, type: "float"}
    comMdmSrec = {adr : 41000, dim:	120, type: "string"}
    xCo2Res1CodesBarres	= {adr : 41124, dim: 45, type: "string"}
    xCo2Res2CodesBarres	= {adr : 41169, dim: 45, type: "string"}
    xComMdmRssiMoyen2G = {adr : 41219, dim:	2, type: "float"}
    xComMdmRssiMoyen3G = {adr : 41221, dim:	2, type: "float"}
    xComMdmRssiMoyen4G = {adr : 41223, dim:	2, type: "float"}
    xComMdmQualMoyen2GGPRS = {adr : 41225, dim: 2, type: "float"}
    xComMdmQualMoyen2GEDGE = {adr : 41227, dim:	2, type: "float"}
    xComMdmQualMoyen3G = {adr : 41229, dim:	2, type: "float"}
    xComMdmQualMoyen4G = {adr : 41231, dim:	2, type: "float"}
    xComMdmRatioTimeIn2G = {adr : 41233, dim: 2, type: "float"}
    xComMdmRatioTimeIn3G = {adr : 41235, dim: 2, type: "float"}
    xComMdmRatioTimeIn4G = {adr : 41237, dim: 2, type: "float"}
    xComMdmRatioTimeOffline	= {adr : 41239, dim: 2, type: "float"}
    
}