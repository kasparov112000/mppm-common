//const { ISnapshot } = require("../models/isnapshot");
const CoverageCalculation =require("./coverageCalculation");
//const { ObjectId } =  "mongodb";

//#region gfsdata
const gfsdata = [
    {
        _id: "644fdff6113ee30e94638310",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "70035415001",
        projectName: "My+ Learning/Astro (IT Cost)",
        clientName: "PWC Internal US",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 200
    },
    {
        _id: "6453c0bb2f72b000cd249c37",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "80002460001",
        projectName: "Bus Svc G&A",
        clientName: "First Internal US",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 54
    },
    {
        _id: "646cdc1d8922117874851c31",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "40035415001",
        projectName: "My Learning/Astro (IT Cost)",
        clientName: "US- PWC Internal",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 200
    },
    {
        _id: "646cdddf8922117874851c39",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "40035412001",
        projectName: "First project-test-1",
        clientName: "Second-US-PWC-Internal",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 216
    },
    {
        _id: "646cde488922117874851c3a",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "80002460003",
        projectName: "Third-project-test-3",
        clientName: "Third-Internal-US-4",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 381
    },
    {
        _id: "646cdf998922117874851c3b",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "30002460003",
        projectName: "Ninth-project-test-9",
        clientName: "Ninth-PwC-IFS-P&T",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 100
    },
    {
        _id: "646d34cb8922117874851c3c",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "20002460003",
        projectName: "Sixth-project-test-3",
        clientName: "Sixth-Internal-US-4",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 381
    },
    {
        _id: "646d34ef8922117874851c3d",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "10002460003",
        projectName: "Seventh-project-test-7",
        clientName: "Seventh-Project-AC",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 90
    },
    {
        _id: "646d442c8922117874851c3f",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "10002460003",
        projectName: "Tenth-Partners-10",
        clientName: "Tenth-Project",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 200
    },
    {
        _id: "646d448f8922117874851c40",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "80035415002",
        projectName: "Astro Project",
        clientName: "Digital Hub",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 60
    },
    {
        _id: "646d44e78922117874851c41",
        partyId: "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        wbsCode: "20022430001",
        projectName: "Tech & Products",
        clientName: "Chatruese-Project",
        clientPartyId: "c1c22ff6-6a0e-433c-92d1-be398208077d",
        totalHours: 29
    }
]
//#endregion

//#region snapdata
const snapdata = [
    JSON.parse(`{
        "_id": "645547d6e3d62fc408d1a337",
        "name": "testing impersonated partyid",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "017ffcd1-b1a3-4c08-9145-ae5f44293531",
        "description": "wrer",
        "projectCodes": [
            "test-project-code-1",
            "test-project-code-2"
        ],
        "projectHours": [
            123,
            456
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-05T18:15:50.607Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-05T18:15:50.607Z",
        "lastUpdatedDate": "2023-05-05T18:15:50.607Z",
        "__v": 0,
        "daysOutstanding": 14,
        "totalHours": 579,
        "employeeName": "Dominique Balzora-Rivert",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.3029827315541601,
        "createdBy": "",
        "lastUpdatedBy": "",
        "version": 1
    }`),
    JSON.parse(`{
        "_id": "645d290a52422a57233b6e12",
        "name": "MPPM Test snapshot 418",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-11T17:42:34.618Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-11T17:42:34.618Z",
        "lastUpdatedDate": "2023-05-11T17:42:34.618Z",
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`),
    JSON.parse(`{
        "_id": "64639eb852422a57233b73fb",
        "name": "Test Snapshot My Plus 410",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "0d0bf239-d76c-4baa-995d-63f7d821bc81",
        "description": "desc of the job ",
        "projectCodes": [
            "40035415001"
        ],
        "projectHours": [
            10
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-16T15:18:16.463Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-16T15:18:16.463Z",
        "lastUpdatedDate": "2023-05-16T15:18:16.463Z",
        "__v": 0,
        "daysOutstanding": 7,
        "totalHours": 10,
        "employeeName": "Andrew Horrocks",
        "employeeLevel": "Specialist",
        "hoursCoveredPct": 0.0052328623757195184
    }`),
    JSON.parse(`{
        "_id": "64639ed052422a57233b73ff",
        "name": "snapshot my plus draft 412",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "0d0bf239-d76c-4baa-995d-63f7d821bc81",
        "description": "",
        "projectCodes": [
            "40035415001"
        ],
        "projectHours": [
            10
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-16T15:18:40.708Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-16T15:18:40.708Z",
        "lastUpdatedDate": "2023-05-16T15:18:40.708Z",
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 10,
        "employeeName": "Andrew Horrocks",
        "employeeLevel": "Specialist",
        "hoursCoveredPct": 0.0052328623757195184
    }`),
    JSON.parse(`{
        "_id": "646d395f504f0819b6885b2d",
        "name": "test snapshot my+ 600",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "8352468b-4d28-4b04-b08f-c73b52ae179e",
        "description": "nmvmvxmnvc hghfhd",
        "projectCodes": [
            "40035415001",
            "70035415001"
        ],
        "projectHours": [
            20,
            5
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-23T22:08:31.023Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-23T22:08:31.023Z",
        "lastUpdatedDate": "2023-05-23T22:08:31.023Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 25,
        "employeeName": "Arindam Chaki",
        "employeeLevel": "Senior Manager",
        "hoursCoveredPct": 0.013082155939298797
    }`),
    JSON.parse(`{
        "_id": "646d3a06504f0819b6885b34",
        "name": "test123",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "d89a10b7-59f5-4aa9-93a4-3fdfc2f747c9",
        "description": "testDescription",
        "projectCodes": [
            "80002460001"
        ],
        "projectHours": [
            10
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-23T22:11:17.998Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-23T22:11:17.998Z",
        "lastUpdatedDate": "2023-05-23T22:11:17.998Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 10,
        "employeeName": "Tessa Castillo",
        "employeeLevel": "Administrative",
        "hoursCoveredPct": 0.0052328623757195184
    }`),
    JSON.parse(`{
        "_id": "646d3b05504f0819b6885b3c",
        "name": "Test My+ Snapshot 601",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "29eb0c61-a914-4ed6-8a7e-c840e391347f",
        "description": "description for the test snapshot",
        "projectCodes": [
            "80002460001",
            "40035412001",
            "40035415001"
        ],
        "projectHours": [
            20,
            50,
            5
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-23T22:15:33.304Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-23T22:15:33.304Z",
        "lastUpdatedDate": "2023-05-23T22:15:33.304Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 75,
        "employeeName": "Ashley West",
        "employeeLevel": "Manager",
        "hoursCoveredPct": 0.03924646781789639
    }`),
    JSON.parse(`{
        "_id": "646d3bf4504f0819b6885b45",
        "name": "testsdsk",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "d89a10b7-59f5-4aa9-93a4-3fdfc2f747c9",
        "description": "testdsjfh",
        "projectCodes": [
            "80002460001",
            "40035412001"
        ],
        "projectHours": [
            10,
            10
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-23T22:19:32.128Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-23T22:19:32.128Z",
        "lastUpdatedDate": "2023-05-23T22:19:32.128Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 20,
        "employeeName": "Tessa Castillo",
        "employeeLevel": "Administrative",
        "hoursCoveredPct": 0.010465724751439037
    }`),
    JSON.parse(`{
        "_id": "646e3dca504f0819b6885d31",
        "name": "Test Snapshot MPPM-601",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "d31de057-3c6e-4568-8afa-ce058cb722ad",
        "description": "test desc 601",
        "projectCodes": [
            "80035415002",
            "70035415001",
            "20002460003"
        ],
        "projectHours": [
            10,
            20,
            15
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-24T16:39:38.373Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-24T16:39:38.373Z",
        "lastUpdatedDate": "2023-05-24T16:39:38.373Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 45,
        "employeeName": "Erika Egbert",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.023547880690737835
    }`),
    JSON.parse(`{
        "_id": "646e5e8d504f0819b6885e75",
        "name": "test snapshot123",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "07a1441a-3081-4530-b1b4-e8ef58ac366b",
        "description": "test",
        "projectCodes": [
            "80035415002",
            "80002460001"
        ],
        "projectHours": [
            5,
            5
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-24T18:59:25.651Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-24T18:59:25.651Z",
        "lastUpdatedDate": "2023-05-24T18:59:25.651Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 10,
        "employeeName": "Dominique Collier",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.0052328623757195184
    }`),
    JSON.parse(`{
        "_id": "646e6841504f0819b6885eae",
        "name": "testSnapshot123456",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "99dbb36f-61bd-4067-a235-ad33fc401a77",
        "description": "test",
        "projectCodes": [
            "80035415002",
            "80002460001"
        ],
        "projectHours": [
            1,
            2
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-24T19:40:49.911Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-24T19:40:49.911Z",
        "lastUpdatedDate": "2023-05-24T19:40:49.911Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 3,
        "employeeName": "Steven Wright",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.0015698587127158557
    }`),
    JSON.parse(`{
        "_id": "646e76e9504f0819b6885f17",
        "name": "dc-test-1-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "7cd4f2bf-963c-47e9-b06f-af307d3ecdb8",
        "description": "area-1area-2area-3test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test-test",
        "projectCodes": [
            "80035415002",
            "30002460003",
            "20002460003"
        ],
        "projectHours": [
            4,
            5,
            1
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-24T20:43:21.696Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-24T20:43:21.696Z",
        "lastUpdatedDate": "2023-05-24T20:43:21.696Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 1,
        "totalHours": 10,
        "employeeName": "Timothy Buske",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.0052328623757195184
    }`),
    JSON.parse(`{
        "_id": "646e87e4504f0819b6886026",
        "name": "cxfvsdfsdf",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "dsfsf",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-24T21:55:48.023Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-24T21:55:48.023Z",
        "lastUpdatedDate": "2023-05-24T21:55:48.023Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`),
    JSON.parse(`{
        "_id": "646ed1db504f0819b688635e",
        "name": "test",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-25T03:11:23.620Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T03:11:23.620Z",
        "lastUpdatedDate": "2023-05-25T03:11:23.620Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`),
    JSON.parse(`{
        "_id": "646ed1ef504f0819b6886364",
        "name": "sadsa",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-25T03:11:43.481Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T03:11:43.481Z",
        "lastUpdatedDate": "2023-05-25T03:11:43.481Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`),
    JSON.parse(`{
        "_id": "646f78bcdc8b6a41c634612d",
        "name": "test snapshot123456433",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "16be5fd2-e0c7-4a26-9779-ed582fc9e6f4",
        "description": "test desc",
        "projectCodes": [
            "80035415002",
            "80002460001",
            "40035412001"
        ],
        "projectHours": [
            10,
            2,
            1
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-25T15:03:24.265Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T15:03:24.265Z",
        "lastUpdatedDate": "2023-05-25T15:03:24.265Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 13,
        "employeeName": "Stephanie Davidson",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.006802721088435374
    }`),
    JSON.parse(`{
        "_id": "646f78e5dc8b6a41c6346135",
        "name": "sfdsf234",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "fb53640f-5639-4158-899f-f25aa0118410",
        "description": "sdfsdf",
        "projectCodes": [
            "80035415002"
        ],
        "projectHours": [
            3
        ],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "initiated",
        "performanceYear": 2023,
        "statusDates": {
            "initiated": "2023-05-25T15:04:05.142Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T15:04:05.142Z",
        "lastUpdatedDate": "2023-05-25T15:04:05.142Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 3,
        "employeeName": "Ashley Stewart",
        "employeeLevel": "Senior Associate",
        "hoursCoveredPct": 0.0015698587127158557
    }`),
    JSON.parse(`{
        "_id": "646f79efdc8b6a41c6346147",
        "name": "test123 draft123",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-25T15:08:31.655Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T15:08:31.655Z",
        "lastUpdatedDate": "2023-05-25T15:08:31.655Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`),
    JSON.parse(`{
        "_id": "646f79fbdc8b6a41c634614d",
        "name": "draft 123sdfsfsdf",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-25T15:08:43.623Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T15:08:43.623Z",
        "lastUpdatedDate": "2023-05-25T15:08:43.623Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`),
    JSON.parse(`{
        "_id": "646faeeddc8b6a41c6346290",
        "name": "Draft-test-snapshot-Mppm 651",
        "revieweePartyID": "7cd2f0ad-23ab-46b4-bb08-fb69a91e80fe",
        "reviewerPartyID": "",
        "description": "",
        "projectCodes": [],
        "projectHours": [],
        "revieweeQuestionIDs": [],
        "revieweeQuestionAnswers": [],
        "status": "draft",
        "performanceYear": 2023,
        "statusDates": {
            "draft": "2023-05-25T18:54:37.664Z"
        },
        "snapshotType": "snapshot",
        "createdDate": "2023-05-25T18:54:37.664Z",
        "lastUpdatedDate": "2023-05-25T18:54:37.664Z",
        "version": 1,
        "__v": 0,
        "daysOutstanding": 0,
        "totalHours": 0,
        "employeeName": "",
        "employeeLevel": "",
        "hoursCoveredPct": 0
    }`)
]
//#endregion

exports.default = CoverageCalculation.default.getInitiateSnapshotsBreakdown(snapdata, gfsdata, 0);