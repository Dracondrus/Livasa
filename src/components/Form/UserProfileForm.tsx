"use client"

export default function UserProfileForm() {


    return (
        <>
            <form>
                <div className="tp-dashboard-profile-information pb-50">
                    <h5 className="tp-dashboard-new-title">Information</h5>
                    <div className="tp-dashboard-profile-info">
                        <div className="row">
                              <div className="col-lg-3">
                                <div className="tp-dashboard-new-input">
                                    <label>First name: </label>
                                    <input type="text" placeholder="Enter your first name" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tp-dashboard-new-input">
                                    <label>Second name: </label>
                                    <input type="text" placeholder="Enter your second name" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tp-dashboard-new-input">
                                    <label>Number</label>
                                    <input type="text" placeholder="Enter Your Number" />
                                </div>
                            </div>
                               <div className="col-lg-7 ">
                                <div className="tp-dashboard-new-input">
                                    <label>About you</label>
                                    <input type="text" placeholder="Enter about you" />
                                </div>
                            </div>
                      
                        </div>
                    </div>
                </div>

                 <div className="tp-dashboard-profile-info-btn">
                            <div className="tp-dashboard-new-btn">
                                <button>Save</button>
                            </div>
                        </div>
            </form>
        </>
    )
}