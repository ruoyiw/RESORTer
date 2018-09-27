import React, { Component } from "react";
import SmallEllipseBtn from "../../components/template/SmallEllipseBtn";
import GroupMemberInfoCard from "../../components/GroupMemberPage/GroupMemberInfoCard";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

class AddTripMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupMember: null
    };
  }

  //Http Request Acquires GroupMembers
  componentDidMount() {
    //if the user is not a guest User
    if (!sessionStorage.getItem("GuestUser")) {
      //Acquire the groupMember information when loading
      axios
        .get(
          "http://127.0.0.1:3333/api/acquireSelfInfoAndFamilyInfo/" +
            JSON.parse(sessionStorage.getItem("userToken")).token
        )
        .then(response => {
          //Update number and detail of groupMember
          this.setState({
            //  numberOfGroupMember: response.data.length,
            //  lastNumberOfGroupMember: response.data.length,
            groupMember: response.data
          });
        });
    }
  }
  render() {
    console.log(this.state.groupMember)
    
    let user = null;
    let groupMember = null;
    if(this.state.groupMember != null){
      user = this.state.groupMember.user
      groupMember = this.state.groupMember.familyMember
    }
    return (
      <React.Fragment>
        {/* Add member */}
        <div
          className="row"
          style={{ color: "#4682B4", fontSize: "26px", fontWeight: "bold" }}
        >
          <div className="col-1" />
          <div className="col-4">Trip Members:</div>
          <div className="col-7" />
        </div>
        <br />
        {/* add member btn */}
        <div className="row">
          <div className="col-lg-1" />

          <div
            className="col-12 col-lg-3"
            style={{ marginBottom: "10px", textAlign: "center" }}
          >
            <SmallEllipseBtn
              text="+ Add Me"
              btnColor="rgba(255, 97, 97, 1)"
              paddingLeft="11ex"
              paddingRight="11ex"
            />
          </div>
          <div
            className="col-12 col-lg-3"
            style={{ marginBottom: "10px", textAlign: "center" }}
          >
            <SmallEllipseBtn
              text="+ Add Saved group Member"
              btnColor="rgba(255, 97, 97, 1)"
              paddingLeft="3ex"
              paddingRight="3ex"
            />
          </div>
          <div
            className="col-12 col-lg-3"
            style={{ marginBottom: "10px", textAlign: "center" }}
          >
            <SmallEllipseBtn
              text="+ Add new Group Member"
              btnColor="rgba(255, 97, 97, 1)"
              paddingLeft="3.9ex"
              paddingRight="3.9ex"
            />
          </div>
          <div className="col-lg-2" />
        </div>
        <br />
        {/* already added group member */}
        <div className="row">
          <div className="col-sm">
          {this.state.groupMember === null ? null :
          <GroupMemberInfoCard
              id={user.id}
              name={user.Lastname + " " + user.Firstname}
              dob={user.DOB}
              skierLevel={user.SkiAbility}
              snowBikerLevel={user.SnowbikeAbility}
              snowBorderLevel={user.SnowboardAbility}
              snowMobilerLevel={user.SnowmobileAbility}
              snowShoerLevel={user.SnowshoeAbility}
              teleMarkerLevel={user.TelemarkAbility}
            />
            }
          </div>
          {groupMember === null ? null :
            groupMember.map(info => {
              return (
                  <div className="col-sm">
                      <GroupMemberInfoCard
                          id={info.id}
                          name={info.LastName + " " + info.FirstName}
                          dob={info.DOB}
                          skierLevel={info.SkiAbility}
                          snowBikerLevel={info.SnowbikeAbility}
                          snowBorderLevel={info.SnowboardAbility}
                          snowMobilerLevel={info.SnowmobileAbility}
                          snowShoerLevel={info.SnowshoeAbility}
                          teleMarkerLevel={info.TelemarkAbility}
                      />
                  </div>
              );
            })
          }
          </div>
          {/* <div className="col-1" /> */}
        <br />
        {/* continue btn */}
        <div className="row">
          <div className="col-8" />
          <div className="col-4">
            {/*<a href={}>*/}
            <Link
              to={{
                pathname: `/booking/${this.props.place}/sleep`
                // state: {masterID: masterID, resortID: resortID, tripID: tripID},
              }}
            >
              <SmallEllipseBtn
                text="Save and Continue"
                btnColor="rgba(255, 97, 97, 1)"
              />
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTripMember;
