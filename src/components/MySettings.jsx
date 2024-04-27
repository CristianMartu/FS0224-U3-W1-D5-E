import avatar from '../assets/avatar.png'

const MySettings = () => (
  <div className="container-settings px-3 mt-4" id="account">
    <h1>Account</h1>
    <hr />
    <div className="d-sm-flex gap-3">
      <div className="w-25">
        <h3>MEMBERSHIP & BILLING</h3>
        <button className="btn btn-secondary">Cancel Membership</button>
      </div>
      <div className="w-75">
        <div className="d-sm-flex justify-content-between">
          <p className="fw-bold">student@strive.school</p>
          <span href="#">Change account email</span>
        </div>
        <div className="d-flex justify-content-between">
          <p className="opacity-50">Password: ********</p>
          <span href="#">Change password</span>
        </div>
        <div className="d-flex justify-content-between">
          <p className="opacity-50">Phone: 321 044 1279</p>
          <span href="#">Change phone number</span>
        </div>
        <hr />
        <div className="d-sm-flex justify-content-between">
          <div>
            <img
              src="https://www.avvisopubblico.it/home/wp-content/uploads/2022/06/paypal_puls.png"
              alt="paypal"
              className="size"
            />
            <p className="d-sm-inline fw-bold">admin@strive.school</p>
          </div>
          <span href="#">Update payment info</span>
        </div>
        <div className="d-flex justify-content-end">
          <span href="#">Billing details</span>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <span href="#">Redeem gift card or promo code</span>
        </div>
        <div className="d-flex justify-content-end">
          <span href="#">Where to buy gift cards</span>
        </div>
      </div>
    </div>
    <hr />
    <div className="d-sm-flex gap-3">
      <h3 className="w-25">PLAN DETAILS</h3>
      <div className="d-flex justify-content-between w-75">
        <div>
          <p className="d-sm-inline fw-bold">Premium</p>
          <img
            src="https://vath.co/wp-content/uploads/2019/03/Ultra_HD_Sticker_10_x_40mm_WEB.jpg"
            alt="ultra-hd"
            className="size"
          />
        </div>
        <span href="#">Change plan</span>
      </div>
    </div>
    <hr />
    <div className="row settings flex-column flex-md-row">
      <div className="col-3">
        <h3>Settings</h3>
      </div>
      <div className="col-9">
        <span href="#">Parental controls</span>
        <br />
        <span href="#">Test participation</span>
        <br />
        <span href="#">Manage download devices</span>
        <br />
        <span href="#">Activate a device</span>
        <br />
        <span href="#">Recent device streaming activity</span>
        <br />
        <span href="#">Sign out of all devices</span>
        <br />
      </div>
    </div>
    <hr />

    <div className="d-flex flex-column flex-md-row">
      <div className="w-25">
        <h3>My profile</h3>
      </div>
      <div className="w-75 d-sm-flex justify-content-between">
        <div className="col col-12 d-flex flex-column col-sm-3">
          <div className="flex-column flex-sm-row mb-3">
            <img src={avatar} width="36" height="36" alt="avatar" className="rounded" />
            <span>Strive Student</span>
          </div>
          <span href="#">Language</span>
          <span href="#">Payback settings</span>
          <span href="#">Subtitle appearance</span>
        </div>
        <div className="col col-12 d-flex flex-column col-sm-2">
          <span href="#">Viewing activity</span>
          <span href="#">Ratings</span>
        </div>
        <div className="col col-12 col-sm-3 text-sm-end">
          <span href="#">Manage profiles</span>
          <br />
          <span href="#">Add profile email</span>
        </div>
      </div>
    </div>
  </div>
)

export default MySettings
