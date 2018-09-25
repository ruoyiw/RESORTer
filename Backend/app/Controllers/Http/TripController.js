'use strict';
const Database = use('Database');
const Trip = use('App/Models/Trip');
const ResortInfo = use('App/Models/ResortInfo');
const ValidationToken = use("App/Models/ValidationToken");
const moment = use('moment');
const topSix = 6;

/**

 */

class TripController {

  async addFakeTripData() {

    //in Australia
    const mtBullerNum = 1;
    const ThredboNum = 2;
    const PerisherNum = 3;
    const MountHothamNum = 4;
    const FallsCreekNum = 5;
    //in New Zealand
    const CoronetPeakNum = 6;
    const CardronaNum = 7;
    //in USA
    const AspenSnowmassNum = 8;
    const TellurideNum = 9;
    //in Japan
    const NisekoNum = 10;

    console.log("Start adding fake trip data.");
    //fake data for resort Mt.Buller
    for (let i = 0; i < mtBullerNum; i++) {
      const trip = new Trip();
      trip.ResortID = 1;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Thredbo
    for (let i = 0; i < ThredboNum; i++) {
      const trip = new Trip();
      trip.ResortID = 429;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Perisher
    for (let i = 0; i < PerisherNum; i++) {
      const trip = new Trip();
      trip.ResortID = 1204;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Mount Hotham
    for (let i = 0; i < MountHothamNum; i++) {
      const trip = new Trip();
      trip.ResortID = 1516;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Falls Creek
    for (let i = 0; i < FallsCreekNum; i++) {
      const trip = new Trip();
      trip.ResortID = 2670;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Coronet Peak
    for (let i = 0; i < CoronetPeakNum; i++) {
      const trip = new Trip();
      trip.ResortID = 2886;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Cardrona
    for (let i = 0; i < CardronaNum; i++) {
      const trip = new Trip();
      trip.ResortID = 2893;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Aspen Snowmass
    for (let i = 0; i < AspenSnowmassNum; i++) {
      const trip = new Trip();
      trip.ResortID = 2;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Telluride
    for (let i = 0; i < TellurideNum; i++) {
      const trip = new Trip();
      trip.ResortID = 402;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    //fake data for resort Niseko
    for (let i = 0; i < NisekoNum; i++) {
      const trip = new Trip();
      trip.ResortID = 3;
      trip.MasterMemberID = 2;
      trip.IsTripDone = true;

      await trip.save();
    }
    console.log("Finish adding fake trip data.");
  }

  /*
  REQUEST: {"resortName":"","token":""}
  */
  async enrollNewTrip({request, response}) {

    try {
      console.log(request.all());
      const validationToken = await ValidationToken.findBy('Token', request.input('token'));
      const resortInfo = await ResortInfo.findBy('Name', request.input('resortName'));

      const newTrip = new Trip();
      newTrip.ResortID = resortInfo.id;
      newTrip.MasterMemberID = validationToken.MemberID;
      newTrip.IsTripDone = 0;
      await newTrip.save();

      let responseData = new Object();
      responseData.status = 'success';
      responseData.masterID = validationToken.MemberID;
      responseData.tripID = newTrip.id;
      responseData.resortID = resortInfo.id;

      return response.send(JSON.stringify(responseData))

    } catch (err) {

      response.send(JSON.stringify({status: 'fail'}));
      console.log(err)

    }
  }

  async tripMemberAges({response, params}) {

    //TODO: modify here when database is ready
    // const tripID = params.tripID;
    // const masterID = params.masterID;
    const tripID = 1;
    const masterID = 1;

    const result = await  Database.select('IsMasterMemberGoing', 'GroupMemberIDs').from('trip_whodates').where({TripID: tripID});

    //todo: GroupMemberIDs here is a Json array {key_name:[1,2,3]}, parsed into JSON later
    const {IsMasterMemberGoing, GroupMemberIDs} = result[0];


    const GroupMembers = [1, 2, 3];

    let ageInfo = {
      adults: 0,
      toddlers: 0,
      children: 0
    };

    async function getMasterMemberAge(id) {
      const dob = await Database.select('DOB').from('members').where({id: id});
      return moment().diff(moment(dob[0]['DOB']), "years");
    }

    async function getGroupMemberAge(id) {
      const dob = await Database.select('DOB').from('family_members').where({id: id});
      return moment().diff(moment(dob[0]['DOB']), "years");
    }


    async function updateAgeInfo(list, ageInfo) {
      for (let i = 0; i < list.length; i++) {
        let age = await
          getGroupMemberAge(list[i]);
        if (age >= 18) {
          ageInfo["adults"] = ageInfo['adults'] + 1;
        } else if (age <= 2) {
          ageInfo["toddlers"] = ageInfo["toddlers"] + 1;
        } else {
          ageInfo["children"] = ageInfo["children"] + 1;
        }
      }
      return ageInfo;
    }

    ageInfo = await updateAgeInfo(GroupMembers, ageInfo);

    if (IsMasterMemberGoing) {
      const master_age = await getMasterMemberAge(masterID);
      if (master_age >= 18) {
        ageInfo["adults"] = ageInfo['adults'] + 1;
      } else if (master_age <= 2) {
        ageInfo["toddlers"] = ageInfo["toddlers"] + 1;
      } else {
        ageInfo["children"] = ageInfo["children"] + 1;
      }
    }

    response.send(JSON.stringify(ageInfo));
  }

  async getPopularResorts() {

    //first, get most popular resorts ID from trip table
    //only return the resort ID whose trip is "done"
    const resortIDs = await Database.table('trips')
      .where({'IsTripDone': 1}).column('ResortID');
    //console.log(resortIDs);

    //array contains all the resorts ID
    let resortArray = [];
    for (let i = 0; i < resortIDs.length; i++) {
      resortArray[i] = resortIDs[i].ResortID;
    }
    //console.log(resortArray);

    //object that each resort ID with its occurrence time
    let counts = {};
    for (let i = 0; i < resortArray.length; i++) {
      let num = resortArray[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts);

    //array that sorts the resort by its occurring time
    let popularResortArray = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a]
    });
    //console.log(popularResortArray);

    let minNum = Math.min(topSix, popularResortArray.length);
    //then, based on the resorts ID, return corresponding resorts information
    let resortInfoArray = [];
    for (let i = 0; i < minNum; i++) {
      let resortID = popularResortArray[i];

      let resortInfo = {};
      const resort = await ResortInfo.findBy('id', resortID);
      resortInfo.id = resort.id;
      resortInfo.image = resort.Image;
      resortInfo.name = resort.Name;
      resortInfo.country = resort.Country;
      resortInfo.description = resort.Description;
      //console.log(resortInfo);

      resortInfoArray.push(resortInfo);
    }

    //console.log(resortInfoArray);

    return JSON.stringify({
      popularResorts: resortInfoArray
    })
  }

}

module.exports = TripController;
