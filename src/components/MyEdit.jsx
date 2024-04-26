import logo from '../assets/logo.png'

const MyEdit = () => (
  <div className="container">
    <header>
      <a class="logo" href="index.html">
        <img src={logo} width="100" height="55" alt="Netflix logo" loading="lazy" />
      </a>
    </header>
    <div className="container edit-profile stretch text-white pt-4">
      <h3>Edit Profile</h3>
      <hr />
      <div className="account-info">
        <div className="account-avatar position-relative">
          <span id="badge" className="badge position-absolute z-2 rounded-circle bg-black">
            <i className="bi bi-pencil"></i>
          </span>
          <img
            src="https://bookface-images.s3.amazonaws.com/small_logos/28b22a54c96662989843912cfceff789a6bae093.png"
            alt=""
          />
        </div>
        <div className="account-Choices">
          <h4 className="user-name">Strive Student</h4>
          <label for="language">
            <h5>Language:</h5>
          </label>

          <select id="language">
            <option value="English">Italian</option>
            <option value="German">Spanish</option>
            <option value="Spanish">French</option>
            <option value="Italian">Russian</option>
            <option value="Italian">Chinese</option>
          </select>
          <hr />
          <h5>Maturity Settings:</h5>
          <h5 className="btn btn-secondary pt-2 fw-bold">ALL MATURY RATINGS</h5>
          <p>Show titles of all maturity ratings for this profile.</p>
          <button type="button" className="btn btn-outline-secondary rounded-0">
            Edit
          </button>
          <hr />
          <h5>Autoplay controls</h5>
          <label className="checkboxBox">
            <input type="checkbox" className="btn" checked="checked" />
            Autoplay next episode in a series on all devices.
          </label>
          <label className="checkboxBox">
            <input type="checkbox" checked="checked" />
            Autoplay previews while browsing on all devices.
          </label>
        </div>
      </div>
      <hr />
      <div className="buttons">
        <button type="submit">Save</button>
        <a href="./index.html" className="btn">
          Cancel
        </a>
        <a href="./account.html" className="btn">
          Delete profile
        </a>
      </div>
    </div>
  </div>
)

export default MyEdit
